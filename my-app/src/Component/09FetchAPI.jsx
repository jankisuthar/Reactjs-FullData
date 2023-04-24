import React, { Component,Suspense,lazy } from 'react';


const Home = lazy(()=>import('./Home'))
class FetchAPI extends Component {
    // constructor(){
    //     super();
    //     this.state=({
    //         fetchdata:'',
    //         status:"Pending..."
    //     });
    //     console.log("Constructor called");
    // }
//     componentDidMount(){
//         console.log("componentDidMount");
//   setTimeout(() => {
//     fetch('https://jsonplaceholder.typicode.com/comments').then(res=>res.json())
//     .then((Res)=>{
//      console.log(Res);
//      this.setState({fetchdata:Res})
//      this.setState({status:'Completed'})
//     }).catch((Error)=>{
//      console.log(Error);
//     })
//   }, 2000);
//     }
    render() {
    //   console.log("Render called");
        return (
         <>
          <Suspense fallback={<div>please wait..</div>}>
           <h1>lazy loading</h1>
           </Suspense>
         <Suspense fallback={<div>loading..</div>}>
            <Home/>
         {/* <div className="container">
            <div className="row">
                <div className="col"> */}
              
                    {/* {this.state.status} */}
                    {/* {this.state.status=="Completed"?<div>DAta Found : {JSON.stringify(this.state.fetchdata[0])}</div>:"No data found"} */}
                    {/* {this.state.status=="Completed"? */}
                    {/* <table border={1} className="table table-bordered"> */}
                                {/* <th>Id</th>
                                <th>name</th>
                                <th>Email</th>
                                <th>Body</th> */}
                              
                     
                        {/* {this.state.fetchdata.map((res,i)=>{ */}
                       
                               {/* return <tbody> */}
                                {/* <tr key={i}>
                                    <td>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.body}</td>
                                </tr>
                               </tbody> */}
                            
                            
                            
                        
                        {/* })}
                       </table>:"No data found"}
                    
                    
                            
                </div>
            </div>
         </div> */}
         </Suspense>
         </>
        );
    }
}

export default FetchAPI;