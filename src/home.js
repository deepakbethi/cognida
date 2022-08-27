import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './navbar';
import Drop from './body';
import Fire from './fire';

function Home() {
  return (
    <div  >
      <Nav/>
      <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:"180px"
}}>
  <div>
  <Drop/>
  
  </div>
  
  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>


  
</div>
</div>
   
  );
}

export default Home;
