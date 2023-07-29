import React, { useEffect, useState } from 'react'
import Logo from './../../images/Itsy_logo_w_text.png'
import logo from './../../images/Itsy_logo.png'
import InputText from '../../components/inputs/input'
import recipes from './sampleData'
import './smooth.css'
import RecipeScreen from '../recipe/recipeScreen'


import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Main = () => {
  // [1,2,3,3,2,2,3,2] put in the usestate
  // const [chats,setChats] = useState([{"name":"asds"}])

  const [data, setData] = useState({
    items: []
  });



  const [generate, setGenerate] = useState(false)
  const [showPref,setShowPref] = useState(false)

  

  const [click,setClick] =useState(false)

  const page1 = ()=>{
    const page1screen = document.querySelector("#page1")
    const page2screen = document.querySelector("#page2")
    page1screen.style.transform = "translateY(0%)";
    page2screen.style.transform = "translateY(101.5%)";
    page1screen.style.opacity = "100%";
    page2screen.style.opacity="0%"
  }

  const page2 = ()=>{

    const page1screen = document.querySelector("#page1")
    const page2screen = document.querySelector("#page2")
    page2screen.style.transform = "translateY(-101.5%)";
    page1screen.style.transform = "translateY(-101.5%)";
    page2screen.style.opacity = "100%";
    page1screen.style.opacity="0%"
    
   
  }

  const [selectedItems,setSelectedItems] = useState({
    name:"",ingredients:[""],steps:[""]
  })


  const [SelectedPref,setSelectedPref]= useState([])
  const handleCheck = (event, item) => {
    if (event.target.checked) {
      setSelectedPref([...SelectedPref, item]);
    } else {
      setSelectedPref(SelectedPref.filter((i) => i !== item));
    }
  };

  const uploadImage=(e)=> {
    setData({
      ...data,
      items: [...data.items, { from: "user",image:URL.createObjectURL(e.target.files[0])}],
    });
    console.log(data.items)
  }

  const addItems=(e)=> {
    setData({
      ...data,
      items: [...data.items, { from: "user",product:"banana"}],
    });
    console.log(data.items)
  }
 
 




  

  return (
    <div className='relative flex flex-col w-screen h-screen overflow-hidden bg-gray'>
        <div className='  flex relative items-center w-screen max-h-24 min-h-[10%] sm:h-[8%] bg-white border-[0px] box-border  border-black border-opacity-30 '>
            <img src={Logo } alt="Logo" className='animate__animated animate__fadeInLeft object-contain h-[60%] mx-10 ' onClick={()=>{
             setClick(!click);

             click ? page2() : page1();
            }} />

        </div>

        <div className='box-border relative flex items-center justify-center w-full h-full p-10 pt-0 bg-white'>

            <div className='relative flex items-center justify-center w-full h-full gap-5 p-10 mt-10 mb-10 rounded-md bg-gray'>




              <div className='flex flex-col  w-[90%] h-full gap-3 overflow-hidden   '>
                <div id='page1' className="relative flex flex-col justify-start w-full min-h-full p-5 translate-y-0 bg-white rounded-lg opacity-100 smooth" >
               
                  <div className=' absolute h-[82%] w-full '>
                  <label htmlFor="file-upload" className="animate__animated animate__fadeIn absolute bottom-0 z-10 flex items-center justify-center gap-2 cursor-pointer right-0 m-20  border-opacity-30 hover:bg-opacity-70 active:bg-gray  w-[120px] h-[40px] pr-2 rounded-lg text-white bg-green ">
                  <span class="material-symbols-outlined">
                    upload
                  </span> Upload
                </label>
                <input id="file-upload" type="file" className='hidden ' onChange={uploadImage} />
                

                  </div>
                  <div className=' relative h-[95%]  border-[1px] border-green rounded-md w-full overflow-y-scroll'>
                  
                 
                    <div className='absolute z-0 flex flex-col w-full min-h-full py-10 overflow-hidden '>

                   {

                    // if items is not empty it use the chat else default greetings
                    data.items != 0?
                    data.items.map((e,id)=>(

                      e.from == "user"?
                      <div className=' w-[100%] min-h-[150px]  bg-white flex items-center justify-end border-b-[1px] border-[#00000010]'>{id}
                      {
                        e.image? <img className='w-56 h-52' src={e.image}/>:""
                      }

                      {
                        e.product? <p>{e.product}</p>:""
                      }
                      </div>

                      : <div className=' w-[100%] min-h-[150px] border-b-green bg-white flex items-center justify-center'>{id}
                      {
                        e.image? <img className='w-56 h-52' src={e.image}/>:""
                      }
                      </div>
                    ))
                    
                    :  
                    <div className=' animate__animated animate__zoomIn flex  flex-col justify-center items-center w-full h-[550px] min-h-[500px] gap-4'>
                      <img src={logo} alt="logo" className=' h-[85px] w-[90px]' />
                      <h1 className='text-lg font-semibold text-grayText text-center w-[50%] '>Hey dear, I'm ITSY your culinary spider buddy! share your items, and I'll weave menus so snappy!</h1>
                    </div>
                   }

                    {/* chats */}
                      

                    </div>
                    
                    
                  </div>
                  <div className=' flex flex-col justify-evenly mt-2 relative h-[15%] bg-white'>
                    <div className='flex items-center justify-between gap-4 '>
                      <div className=' flex items-end gap-4 w-[60%] animate__animated animate__fadeIn '>
                      <InputText 
                        label="Name"
                      /> 
                      <InputText
                        label="Quantity/Weight"
                      />
                      <button onClick={addItems} className=' w-[300px] min-w-[80px] h-[40px] rounded-lg text-white bg-green'>Add item</button>

                      </div>






                  <div className={showPref ? ' fixed flex flex-col w-[300px] shadow-sm rounded-md border-[1px] border-black  border-opacity-30 z-50 mb-36 mr-10 right-0 bottom-0 bg-white min-h-0 p-3 ' : "hidden"}>

                    <div className="  flex-row w-[100%] flex justify-between ">
                      <p className=" w-[85%] text-sm font-semibold text-center">Select food preferences on Dish</p>

                      <span
                        onClick={() => {
                          setShowPref(false)
                        }}
                        className="text-black cursor-pointer material-symbols-outlined ">
                        cancel
                      </span>

                    </div>


                    {/* SelectedPref of user preferences */}

                    <div className="flex flex-col px-6 ">

                      {["Vegetarian", "Vegan", "Omnivorous", "Gluten-free", "Dairy-free", "Nut-free", "Low-carb", "Organic"].map(e => (


                          <FormControlLabel control={<Checkbox value={e} onChange={(event)=>{
                            handleCheck(event,e)
                            console.log(SelectedPref)
                          }}  />} label={e} />
                        // <div className='flex gap-3 text-black'>
                        //   <input type="checkbox" className=' text-[red] border-none bg-green pr-10  fill-white form-checkbox accent-[#1199f3]' value={e} id="" />
                        //   <p className=''>{e}</p>
                        // </div>
                      ))}


                    </div>


                    {/* Generate button based on food preference */}
                  </div>


                  <button className={showPref ? ' flex gap-4 items-center justify-center w-[150px] h-[40px] md:w-[40px] rounded-lg text-black border-[1px] border-green bg-white' : ' flex gap-4 items-center justify-center w-[150px] h-[40px] md:w-[40px] rounded-lg text-black border-[1px] border-black bg-white'}
                    onClick={() => {
                      setShowPref(true)
                    }}

                  ><span className='text-lg font-semibold '>+</span> <p className=' md:hidden'>Preferences</p> </button>

                </div>

              </div>




              <button
                onClick={() => {
                  setGenerate(true)
                }}
                className='animate__animated animate__backInUp  relative w-full h-[50px] mt-1 rounded-lg self-end bottom-0 text-white font-semibold text-lg hover:bg-opacity-70 active:bg-gray bg-green' >Generate recipe</button>

            </div>

                 

              


                <div

                id='page2'
                className="relative flex flex-col justify-start w-full min-h-full p-5 translate-y-0 bg-white rounded-lg opacity-0 smooth animate__animated animate__fadeIn"
                
                >
                  <RecipeScreen
                  selectedMenu={selectedItems}
                  back={()=>{
                    page1()
                  }}
                  />

                </div>

                </div>


                <div className='  w-[30%] h-full reative flex items-center flex-col  bg-white rounded-lg animate__animated animate__fadeInDown   '>

             

                  <div className=" flex flex-col w-[100%] h-[10%] justify-center items-center mt-3  mb-2 ">
                    <p className="text-lg font-medium text-black ">Food You Can Cook</p>
                    <p className=" text-grayText  text-[14px] mx-3 ">Click "view" to view recipe and cooking steps </p>
                  </div>  


              {/* Generating recipes when generate recipe button is clicked */}
              {generate ? (
                  <div className="flex flex-col items-center rounded-lg border-[1px] border-[#1EDF38] w-[88%] h-[100%] p-5 pl-10 mb-5 gap-7 ">
                  {recipes.map((item, index) => ( 
                    <div className=" flex flex-row w-[100%] justify-between items-center hover:cursor-pointer animate__animated animate__fadeIn">
                      <p className=" text-[#666C67] font-bold text-xl text-left"> {index + 1}.   {item.name}</p>
                      <button className=" h-[30px] w-[60px] text-sm text-white rounded-lg bg-[#D9D9D9] hover:bg-green active:bg-opacity-50 "   
                      onClick={()=>{
                      
                        setSelectedItems(item)
                        page2()
                      }}
                      >View</button>
                    </div>))}
                </div>

              ) : (
                <div className="flex flex-col items-center rounded-lg border-[1px] border-[#1EDF38] w-[88%] h-full p-5 mb-5">
                  <p className=" text-[#C7C7C7] text-[35px] font-semibold ">No Results Yet</p>
                </div>)}


                {/* Reset Suggestion button */}
                {/* <div className=" flex flex-row justify-end items-center w-[88%]">
                  <button className=" h-[45px] w-[150px] text-[20px] bg-[#a71d1d] " label="Reset"  />
                </div> */}

              </div>`


                </div>

        

        </div>
    </div>
  )
}

export default Main