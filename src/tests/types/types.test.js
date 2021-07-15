import { types } from '../../types/types';

describe('Pruebas con nuestros tipos', () => {


    test('Debe de tener estos tipos', () => { 

        expect(types).toEqual({

        login: '[Auth] Login',
        logout:'[Auth] Logout',
    
        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',
    
        uiStartLoading : '[UI] Start loading',
        uiFinishLoading: '[UI] Fisnish loading',
    
        notesAddNew :'[Notes] New note',
        notesActive: '[Notes] Set active note',
        notesLoad: '[Notes] Load notes',
        notesUpdate: '[Notes] Update note ',
        notesFileUrl: '[Notes] Update image url',
        notesDelete:    '[Notes] Delete note',
        notesLogoutCleaning: '[Notes] Logaout Cleaning',


       })
    })


})