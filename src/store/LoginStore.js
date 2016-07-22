import { observable, action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class LoginStore {


  @action login(user, password) {
    console.log('LOGIN');
    // this.isLoading = true;

    FirebaseAPI.login(user, password)
    .then(() => {
      console.log('LOGIN FUNZA');
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });


  }


}

export default new LoginStore();