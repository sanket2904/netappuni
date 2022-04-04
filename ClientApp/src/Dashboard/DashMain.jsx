import React, { useState,useEffect } from 'react'; 
import style from "../Styles/dashmain.module.css"
import axios from "axios" 
import TailSpin from "react-loader-spinner"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function DashMain() {
    const [section,setSection] = useState({
        home:true,
        Inventory:false,
        AddStock:false,
        order:false
    })
    useEffect(() => {
        axios.get("https://localhost:7291/api/bundle").then(res => setBundles(res.data) )
        axios.get("https://localhost:7291/api/product").then(res => setProduct(res.data))
        // axios.post("https://localhost:7291/api/product").then(res => console.log(res))
    },[])

    function runAgain() {
        axios.get("https://localhost:7223/api/bundle").then(res => setBundles(res.data))
        axios.get("https://localhost:7223/api/product").then(res => setProduct(res.data))
    }
    const [bundles,setBundles] = useState([]);
    const [product, setProduct] = useState([]);
    const [prodData,setProd] = useState([{}]);
    const [options, setOptions] = useState(false)
    return(
       <div className={style.main}>
           <div className={style.leftSection}>
                <div className={style.nav}>
                    <p onClick={(e) => {
                        setSection({
                            home: true,
                            Inventory: false,
                            AddStock: false,
                            order: false
                        })
                    }} style={{ backgroundColor:"#F7D3C9",color:"Black"}}>Home</p>
                    <p onClick={(e) => {
                        setSection({
                            home: false,
                            Inventory: true,
                            AddStock: false,
                            order: false
                        })
                    } }>Inventory</p>
                    <p onClick={(e) => {
                        setSection({
                            home: false,
                            Inventory: false,
                            AddStock: true,
                            order: false
                        })
                    }}>Add Stock</p>
                    <p onClick={(e) => {
                        setSection({
                            home: false,
                            Inventory: false,
                            AddStock: false,
                            order: true
                        })
                    }}>Order Status</p>
                </div>
           </div>
           
            <ManageState section={section} runAgain={runAgain} style={style} options={options} setOptions={setOptions} bundles={bundles} product={product} prodData={prodData} setProd={setProd} /> 
           
       </div>
    )
}
function ManageState({section,style,options,setOptions,bundles,product,prodData,setProd,runAgain}) {

    if(section.home ) {
        return(
            <div className="home">
                
            </div>
        )
    }
    else if(section.Inventory) {
        
        return (
            <div className={style.Inv}   >
                <div className={style.cardHolder}>
                    {
                        bundles.map(Element => {
                            return <Card key={Element.id} id={Element.id} runAgain={runAgain} type="bundle" />
                        })
                    }

                    {
                        product.map(Element => {
                            return <Card key={Element.id} id={Element.id} runAgain={runAgain} type="product" />
                        })
                    }

                </div>
                
            </div>
            

        )
    }
    else if(section.AddStock) {
        let data = []
        product.forEach(element => {
            data.push({label:element.name})
        })
        return(
            <div className={style.AddStock} >
                <AddingForm name={"bundle"} id="bundles" setProd={setProd}>
                    <div className={style.formSec} style={{ gridColumn: "2/3", gridRow: "1/-1", display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", gap: "15px" }} >
                        <TextField style={{ maxWidth: "250px", alignSelf: "center" }} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField style={{ maxWidth: "250px", alignSelf: "center" }} id="outlined-basic" label="Description" variant="outlined" />
                        <TextField style={{ maxWidth: "250px", alignSelf: "center" }} id="outlined-basic" label="Price" variant="outlined" />
                        <TextField style={{ maxWidth: "250px", alignSelf: "center" }} id="outlined-basic" label="PriceLink" variant="outlined" />
                        
                        {
                            prodData.map(element => 
                                <div className="sec" id='adder' style={{ display: "grid", flexBasis: "max-content", gridTemplateColumns: "5fr 1fr", gridTemplateRows: "1fr" }}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={data}
                                        sx={{ width: 228 }}
                                        style={{ maxWidth: "250px", margin: "0 0 0 110px" }}
                                        renderInput={(params) => <TextField {...params} label="Products" />}
                                    />
                                    <h1 onClick={() => {
                                        document.querySelector("#bundles").style.height = `${document.querySelector("#root > div > div.dashmain_AddStock__2MiVZ > div.dashmain_AddingForm__8g3xf.dashmain_cardLarge__22mMY").offsetHeight+80}px`
                                        setProd([...prodData,{}])
                                    }} className={style.plus} style={{ display: "inline", alignSelf: "right", justifySelf: "center", cursor: "pointer" }} >+</h1>
                                </div>

                            )
                        }
                        <button style={{ background: "#FF7847", maxWidth: "250px", alignSelf: "center", color: "white", border: "none", padding: "10px", margin: "10px", borderRadius: "10px" }} >Add Product</button> 
                        <div className={style.loadingBar}>
                            <div className={style.loaderinner} id='loader'>

                            </div>
                        </div>
                    </div>
                    
                    
                </AddingForm>
                <AddingForm name={"product"}>
                    <div className={style.formSec} style={{ gridColumn: "2/3",gridRow:"1/-1",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",gap:"15px"}} >
                        <TextField  style={{ maxWidth: "250px", alignSelf: "center" }} id="outlined-basic name" label="Name" variant="outlined" />
                        <TextField style={{ maxWidth: "250px", alignSelf: "center" }} id="outlined-basic description" label="Description" variant="outlined" />
                        <TextField style={{ maxWidth: "250px", alignSelf: "center" }} id="outlined-basic price" label="Price" variant="outlined" />
                        <TextField style={{ maxWidth: "250px", alignSelf: "center" }} id="outlined-basic link" label="ImageLink" variant="outlined" />
                        
                         
                        
                        <button onClick={() => {
                            document.querySelector("#loader").animate([{width:"0"},{width:"100%"}],{duration:500})
                            axios.post("https://localhost:7223/api/product", { Name: document.querySelector("#outlined-basic\\ name").value, Description: document.querySelector("#outlined-basic\\ description").value, Price:  parseInt(document.querySelector("#outlined-basic\\ price").value), imageLink: document.querySelector("#outlined-basic\\ link")
.value},{
    headers:{
        "content-type":"application/json",
        "Access-Control-Allow-Origin":"*"
    }
}).then(res => {
    if(res.status === 200) {
        document.querySelector("#outlined-basic\\ name").value = null;
        document.querySelector("#outlined-basic\\ description").value = null;
        document.querySelector("#outlined-basic\\ price").value = null;
        document.querySelector("#outlined-basic\\ link").value = null;
    }
    else if(res.status > 400) {
        alert("Something went wrong")
    }
})
                        
                        }} style={{ background: "#FF7847", maxWidth: "250px", alignSelf: "center", color: "white", border: "none", padding: "10px", margin: "10px", borderRadius: "10px" }} >Add Product</button>
                        <div className={style.loadingBar}>
                            <div className={style.loaderinner} id='loader'>

                            </div>
                        </div>
                    </div>
                    
                </AddingForm>
                
            </div>
        )


    }
    else if(section.order) {
        return(
            <div className="order">

            </div>
        )
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {options:false,update:false}
        
    }
    setOptions(data) {
        this.setState({options:data})
    }
    render() {
        if(this.state.options) {
            return <div className={style.cardLarge}>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => this.setOptions(false)}  style={{gridColumn:"8",maxHeight:"30px",minHeight:"30px", justifySelf:"center",alignSelf:"center"}} class="ionicon" viewBox="0 0 512 512"><title>Close Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg>
                <div className={style.innerOptions}>
                    <button  style={{ background: "#FF7847", color: "white", border: "none", padding: "10px" ,borderRadius:"10px"}}  >Update Package</button>
                    <button style={{ background: "#FF7847", color: "white", border: "none", padding: "10px", margin: "10px", borderRadius: "10px" }} onClick={() => {
                        axios.delete(`http://localhost:5291/api/${this.props.type}/${this.props.id}`, {
                            headers: {
                                "content-type": "application/json",
                                "Access-Control-Allow-Origin": "*"
                            }
}).then(res => console.log(res)).then(res => {
    if(res.status < 200 && res.status > 210) {
        this.props.runAgain();
    } 
}).catch(err => alert(err))
                    }} >Delete Package</button>
                </div>
            </div>

        }
        
        else {
            return <div className={style.card} onClick={() => this.setOptions("spinner")} >
                <div className={style.image}>

                </div>
                
                <div className={style.title}>

                </div>
            </div>
        }
    }
}
class AddingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {show:false}
    }
    
    render() {
        if(this.state.show && !this.state.wait ) {
            return (
                <div className={`${style.AddingForm} ${style.cardLarge}`} id={this.props.id} >
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                        
                        this.setState({show:false})
                        if(this.props.id ==="bundles") {
                            this.props.setProd([{}])
                        }
                        }} style={{ gridColumn: "3", maxHeight: "30px", minHeight: "30px", justifySelf: "center", alignSelf: "center" }} class="ionicon" viewBox="0 0 512 512"><title>Close Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128" /></svg>
                    {this.props.children}
                </div>
            )
        }
        
        else {
            return <div className={style.card} style={{height:"400px"}} onClick={() => this.setState({show:true})}>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Add Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160M336 256H176" /></svg>
                <h3>Add a {this.props.name}</h3>
            </div>
            
        }
        
    }
}