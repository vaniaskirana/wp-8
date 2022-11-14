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

