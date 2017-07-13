import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StarbucksForm from './StarbucksForm';
import * as starbucksAcions from '../../actions/starbucksAcions';
import toastr from 'toastr';

class ManageStarbucksPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state  = {
      menu: Object.assign({}, this.props.menu),
      errors: {},
      saving: false
    };
    this.updateMenuState = this.updateMenuState.bind(this);
    this.saveMenu = this.saveMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    debugger; //init store.state.menu != ownProps next
    if(this.props.menu.id != nextProps.menu._id) {
      this.setState({
        menu: Object.assign({}, nextProps.menu)
      });
    }
  }

  updateMenuState(event) {
    const field = event.target.name;
    let menu = this.state.menu;
    menu[field] = event.target.value;
    return this.setState({menu: menu});
   }

   MenuFormIsValid() {
     let formIsValid = true;
     let errors = {};

     if(!this.state.menu.productName) {
       errors.productName = "Can not be empty";
       formIsValid = false;
     }
     if(!this.state.menu.category) {
       errors.category = "Can not be empty";
     }
     this.setState({errors: errors});
     return formIsValid;
   }

   saveMenu(event) {
     event.preventDefault();
     if(!this.MenuFormIsValid()) {
       return;
     }
     this.setState({saving: true});
     this.props.actions.saveMenu(this.state.menu)
       .then(() => this.redirect())
       .catch(error => {
         toastr.error(error);
         this.setState({saving: false});
       });
   }

   redirect() {
     this.setState({saving: false});
     toastr.success('Menu saved');
     this.context.router.push('/starbucksMenus');
   }

   render() {
     return (
       <StarbucksForm
         onChange={this.updateMenuState}
         onSave={this.saveMenu}

         menu={this.state.menu}
         errors={this.state.errors}
         saving={this.state.saving}
        />
     );
   }
}

ManageStarbucksPage.propTypes = {
  menu: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageStarbucksPage.contextTypes = {
  router: PropTypes.object
};

function getMenuById(menus, id) {
  const menu = menus.filter(menu => menu._id == id);
  if(menu) return menu[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const menuId = ownProps.params.id;
  let menu = {
    id: '',
    productName: '',
    category: '',
    shortSizePrice: 0,
    tallSizePrice: 0,
    grandeSizePrice: 0,
    ventiSizePrice: 0
  };
  debugger;
  if (menuId && state.menus.length > 0) {
    menu = getMenuById(state.menus, menuId);
  }
  return {
    menu: menu
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      starbucksAcions,
      dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageStarbucksPage);
