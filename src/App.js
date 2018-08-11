import React, { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Links />
        <Mains />
        <Gambars />
        <Mains />
        <ListUl />
        <ListOl />
        <Footer />
        <Button>Ini Button</Button>
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Halo Dunia</h1>
        <h2>Sub Judul</h2>
      </div>
    );
  }
}

class Links extends Component {
  render() {
    return (
      <div>
        <a href="http://google.com">Link Satu</a>
        <a href="http://fb.com">Link Dua</a>
      </div>
    );
  }
}

class Mains extends Component {
  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          deleniti nam fugit laudantium voluptate deserunt impedit natus, vitae
          doloremque quaerat, assumenda illum mollitia facilis. Distinctio culpa
          tempore eos! Perferendis, dolorem?
        </p>
      </div>
    );
  }
}

class Gambars extends Component {
  render() {
    return (
      <div>
        <img src="img/logoreact.png" />
      </div>
    );
  }
}

class ListUl extends Component {
  render() {
    return (
      <div>
        <b>Selai selai yang enak</b>
        <ul>
          <li>Kacang</li>
          <li>Coklta</li>
          <li>Pisang</li>
          <li>Jambu</li>
          <li>Nanas</li>
        </ul>
      </div>
    );
  }
}

class ListOl extends Component {
  render() {
    return (
      <div>
        <b>Urutan angka arab</b>
        <ol>
          <li>Satu</li>
          <li>Dua</li>
          <li>Tiga</li>
          <li>Empat</li>
          <li>Lima</li>
          <li>Enam</li>
        </ol>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <p>Footer Ini</p>
      </div>
    );
  }
}
