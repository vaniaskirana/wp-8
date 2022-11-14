# Writing and Presentation Test Week 8 [7 nov s/d 11 nov]
## <h4>Nama     : Vania Sasikirana</h4><h4></h4>Group FE 2 - Kelompok 11</h4> <h4>Mentor : Thoriq Nur Faizal</h4>

<br>
<br>


### **1. React Context**
<br><b>React Context</b><hr>
  
React context disini berfungsi jika kita hendak membuat sebuah komponen context, nah componen context ini akan memProvide ke seluruh component yang kita miliki. Sehingga saat komponennya membutuhkan state, kita tinggal mengambilnya dari component contextnya ( jadi kita gaperlu membuat store segala macem).<br><br>
<b>useContext Hook : </b><hr><br>
<br>

```
    import { useState, createContext, useContext} from "react"
    import ReactDOM from "react-dom/client"

    const UserContext = createContext();

    function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
        <h1>{`Welcomeback ${user}!`}</h1>
        <Component2 />
        </UserContext.Provider>
    );
    }
```


### **2. PropTypes**

<br><b>PropTypes</b><hr>
  
Merupakan sebuah library yang berfungsi untuk memvalidasi sebuah props, penggunaan PropTypes ini untuk menjaga props agar tidak error. Jika tipe data pada props tidak sesuai maka nanti akan muncul warning di console browser.<br><br>

<b>Contoh : </b><hr><br>
<br>
<img src="img/profil.jpg" width="400">


```
  new component : DokterInfo.jsx

        import PropTypes from "prop-types";
    const DokterInfo = ({nama, spesialis, rating}) => {
        return(
            <div className="profil">
                <img src={"https://d1k13df5m14swc.cloudfront.net/photos/Eun-Young-Lee-FNP-293710-circle_large__v2__.png"} width="150"/>  
                <div>
                    <h4>Nama Dokter : {nama}</h4>
                    <p>Spesialis Khusus : {spesialis}</p>
                    <p>Rate : {rating + 2}</p>
                </div>
            </div>
        )

    }
    DokterInfo.prototype = {
        nama: PropTypes.string,
        spesialis: PropTypes.string,
        rating: PropTypes.number,
    } 


    export default DokterInfo;
    
```

```
file App.jsx : 

import DokterInfo from './components/DokterInfo'

function App() {
  return (
    <>
      {/* <h1>Hellooo</h1> */}
      <DokterInfo nama={"Ratna Sari"} spesialis={"Gigi"} rating={22}/>
    </>
  );
}

export default App;

```

<br><br>


### **3. React Router**
<br><b>Router</b><hr>
  
Berfungsi untuk menghubungkan link/path halaman web, namun tidak merubah/refresh link webnya. <br><br>
<b>Contoh : </b><hr><br>
Pertama kita harus memasang library di file main.jsx dulu untuk membuat BrowserRouter.<br>
<img src="img/routes0.jpg"><br>
Kemudian kita buat lagi deh Routes nya di dalam App.jsx
<br>
<img src="img/routes.jpg" ><br>
Nah nanti hasilnya jika di klik akan mengarah ke halaman yang sudah di deklarasikan.<br>
<img src="img/routes2.jpg"><br><br>
Kita juga dapat membuat nested route agar penggunaan route menjadi lebih efisien lagi.<br>
<img src="img/routes3.jpg"><br><br>

### **4. Redux**
<br><b>Redux</b><hr>
  
Berfungsi untuk memperpendek jalur pemberian props ke komponen yang lainnya, jadi ga perlu oper-oper tiap komponen, melainkan kita bisa langsung oper ke komponen yang membutuhkan saja. <br><br>
<b>Contoh : </b><hr><br>
Pertama kita harus memasang library di file main.jsx dulu untuk membuat BrowserRouter.<br>
<img src="img/routes0.jpg"><br>
Kemudian kita buat lagi deh Routes nya di dalam App.jsx
<br>
<img src="img/routes.jpg" ><br>
Nah nanti hasilnya jika di klik akan mengarah ke halaman yang sudah di deklarasikan.<br><br>


### **4. Thunk**
<br><b>Thunk</b><hr>
  
Merupakan sebuah Middleware, gambarannya itu dispatch gamau ada si asynchronous karena dia kan ngaret ( ada waiting, dll ) jadi biar si dispatch mauuu maka kita minta tolong make tag Thunk.  Fungsi ini menerima metode pengiriman penyimpanan, yang kemudian akan digunakan untuk mengirim aksi sinkron di dalam isi fungsi setelah operasi asinkron selesai. <br><br>