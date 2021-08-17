import React from 'react'

class Create extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="card w-100">
                        <div className="card-header bg-white pt-4 border-0">Criar Tarefa</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" name="title" className="form-control" placeholder="Responsável" />
                                </div>
                                <div className="form-group pt-3">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Nova Tarefa"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-end py-3">
                                    <button type="submit" className="btn btn-primary">
                                        Criar Tarefa
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create