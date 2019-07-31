import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pesan: 0
    };
    this.rubahPesan = this.rubahPesan.bind(this);
    this.pesanan = this.pesanan.bind(this);
  }

  rubahPesan(){
    this.setState((state, props) => {
      return {
        pesan: state.pesan
      }
    })
  }

  pesanan(e){
    console.log(e.target.value);
  }
  render(){
    return (
      <div>
        <h3>Daftar Makanan yang Kami Sediakan</h3>
        <td>
          <ListMakanan makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
          <button onClick={this.rubahPesan}>Pesan Sekarang</button>
        </td>
        <td>
          <ListMakanan makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
          <button onClick={this.rubahPesan}>Pesan Sekarang</button>
        </td>
        <td>
          <ListMakanan makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
          <button onClick={this.rubahPesan}>Pesan Sekarang</button>
        </td>
        <td>
          <ListMakanan makanan="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
          <button onClick={this.rubahPesan}>Pesan Sekarang</button>
        </td>
        <td>
          <ListMakanan makanan="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
        </td>
        <br />
        <input type="text" onChange={this.pesanan} />
        <h3>Pesanan Anda : {this.state.pesan}</h3>
      </div>
    );
  }
}

export default MenuMakanan;
