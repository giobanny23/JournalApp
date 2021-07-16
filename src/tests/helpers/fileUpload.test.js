import { fileUpload } from '../../helpers/fileUpload';



describe('Pruebas en fileUpload',() => {

    test('debe cargar un archivo y retornar el URL', async() => {

        const resp = await fetch('https://previews.123rf.com/images/bondvit/bondvit1703/bondvit170300637/73903351-paisaje-hermoso-del-verano-con-el-r%C3%ADo-bug-del-sur-y-cielo-azul-en-vinnitsa-ucrania-d%C3%ADa-de-verano-tranqui.jpg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg' );
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');
    })
    
    
})
