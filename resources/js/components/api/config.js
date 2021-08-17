import conect from './conect';
import queryString from 'query-string'
import history from './history'

const get = (method, singular, dispatch) => {
    console.log(method)
    conect.get(method)
    .then(response => {
		dispatch({
			type: singular,
			payload: response.data
		})
    })
    .catch(error => {
      console.log(error)
        // alert(error)
    })
}


const list = (method, plural, dispatch) => {
    conect.get(method)
    .then(response => {
        dispatch({
            type: plural,
            payload: response.data
        });
    })
    .catch(error => {
        alert(error);
    });
};

const add = (
  method,
  company,
  variables, 
  dispatch, 
  singular
) => {
  conect
    .post(method+"/"+company, variables, 
      {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      }
    )
    .then(response => {

      if(response.data.error){
        fireError('Por favor,  verifique o preenchimento dos campos.')
        dispatch({
            type: `SET_ERROR_${singular}`,
            payload: response.data.error
        })
      } else{
        
        dispatch({
            type: `SET_SUCCESS_${singular}`,
            payload: response.data
        })
        fireSuccess('Registro inserido com sucesso.')
      }
    })
    .catch(error => {
      console.log(error)
      // console.log('simplecrud add error', error)
      fireError('Ocorreu um erro ao processar sua solicitação.')
    })
}

export default {
  get,
  list,
  add
}
