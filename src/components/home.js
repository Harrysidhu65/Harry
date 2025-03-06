import { useState } from "react";
import banner from "../assets/business-management.jpg";
const Home=()=>{
    const ServiceCard=({title,description})=>{
        return (<>
          <h1 className="font-bold">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </>)
    }

   
    const [inputs, setInputs] = useState({});
    const HandleIn=(e)=>{
       
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values, [name]: value}));
    }
    const handleSub=(e)=>{
        e.preventDefault();
        alert(`Enter name:${inputs.username} <br/>Enter email:${inputs.email}`);
      }
 return(<>
    <div className="banner">
        <img src={banner} alt="banner" className="w-full"/>
    </div>

<div className="container mx-auto">
    <div className="main-box flex ">
        <div className="first w-1/3">
             <ServiceCard title="web designer" description="Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design (UI design); authoring, including standardised code and proprietary software; user experience design (UX design); and search engine optimization. Often many individuals will work in teams covering different a..."/>
        </div>
        <div className="first w-1/3">
             <ServiceCard title="web development" description="Web development involves coding and building the functionality of a website, including front-end and back-end development."/>
           
        </div>
        <div className="first w-1/3">
             <ServiceCard title="Seo" description="Search Engine Optimization (SEO) helps websites rank higher on search engines, increasing visibility and traffic through organic means."/>
        </div>
    </div>
    </div>

    <div className='container mx-auto'>
      <div className='form-bg mt-5 mx-auto'>
      <form onSubmit={handleSub}>
      <label>Name</label><br/>
      <input type='text' name="username" className='w-full' value={inputs.username || ""} onChange={HandleIn} placeholder='Name'/><br/><br/>
      <label>Email</label>
      <input type='text' name='email' className='w-full' value={inputs.email || ""} onChange={HandleIn} placeholder='Email'/><br/><br/>
      <input type='submit' className='w-full' value="Submit"/>
    </form>
    </div>
    </div>
 </>

 )
}
export default Home;