import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';



describe('Prubas en el authReducer', () => {

    test('debe realizar el login', () => {
        
        const initState = {};

        const action = {
            type:types.login,
            payload:{
                uid:'abc',
                displayName: 'Giobanny'
            }
        }

        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 'abc',
            name:'Giobanny'
        }) 
  
    })


    test('no debe de hacer cambios en el state', () => {
        
        const initState = {
            uid:'sdkjfsdkjdfskjbfgkjbsfdkjbf',
            name:'Fernando'

        };

        const action = {
            type: 'aasdadadsdffd',
           
        }

        const state = authReducer(initState, action);

        expect(state).toEqual(initState); 
  
    })
    
    
})
