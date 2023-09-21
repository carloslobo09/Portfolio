
export const userReducer = (state,action) => {
    switch (action.type) {
        case 'login':
            return{
                status: true,
                text:'Exito',
            }
            break;
        case 'logout':
            return{
                status: false,
                text:'El usuario no esta logeado, carepinga',
            }
            break;
        case 'cagarse':
            return{
                status: false,
                text:'El usuario se cago encima DIUJ',
            }
            break;
        case 'mensaje_especifico':
            return{
                ...state,
                text:action.payload,
            }
            break;
        default:
            return state;
            break;
    }


}