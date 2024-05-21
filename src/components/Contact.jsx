import React,{useState} from 'react'
import "./Contact.css"
import { AiOutlineHolder } from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TfiWorld } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSlideshare } from "react-icons/fa";
const Contact = () => {
  const [value, setValue] = useState(
    {
      name:"",
     email:"",
      number:"",
      subject:"",
      message:""
    });

    const handleChange=(e)=>{
      setValue({...value, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e)=>{
      e.preventDefault();
       await fetch("http://localhost:8000/api/contact",
      {
       method:"POST",
       headers:{
           "content-type":"Application/json",
       },
       body: JSON.stringify(value)
      }
   )
   setValue({});
    }
  return (
    <div>
     <div className='container-fluid box'>Contact-Us<hr/></div>
     <div className='mainbox container'>
        <div className='childbox'>
            <h6>TELENOC (HELCON IT) RIYADH</h6>
            <p><AiOutlineHolder />  Olaya View Tower (العليا ڤيو), Opposite to Kingdom Tower, 2nd Floor, Office No. 4027, King Fahad Road, Riyadh, Kingdom of Saudi Arabia </p>
           <p><MdLocalPhone />  +966 1146 66664 Ext. 101/102/999</p>
           <p><TfiHeadphoneAlt />  support@telenoc.org</p>
           <p><TfiWorld />  www.telenoc.org</p>
       </div>
        
        <div className='childbox'>
        <h6>TELENOC (HELCON IT) HQ</h6>
        <p><AiOutlineHolder />  7063 Salalah, Al Uraija Al Gharbiyah, Riyadh 14921, Kingdom of Saudi Arabia </p>
        <p><MdLocalPhone />  +966 1146 66664</p>
        <p><TfiHeadphoneAlt />  contact@telenocgroup.com</p>
        <p><TfiWorld />  telenocgroup.com</p>
        </div>
       
        <div className='childbox'>
        <h6>TELENOC (HELCON IT) JEDDAH</h6>
        <p><AiOutlineHolder />  Office # 01, Ground Floor, Abbad Bin Beshr St., Front of Tazaj Resturant, Al Sharafeyyah Dist., Jeddah, Saudi Arabia </p>
        <p><MdLocalPhone />  +966 1267 52990</p>
       
        
        </div>
       
        <div className='childbox'>
        <h6>TELENOC (HELCON IT) UK</h6>
        <p><AiOutlineHolder />  Citygate House, 246-250 Romford Road, London, E7 9HZ </p>
        <p><MdLocalPhone />  +44 7983 130733</p>
        <p><TfiHeadphoneAlt />  support@telenoc.org</p>
        <p><TfiWorld />  www.telenoc.org</p>
        </div>
        
     </div>
     <div className='container icons bg-light'>
     <h4><FaFacebook /></h4>
     <h4><FaTwitter /></h4>
     <h4><FaYoutube /></h4>
     <h4><FaLinkedin /></h4>
     <h4><FaPinterest /></h4>
     <h4><FaSlideshare /></h4>

     </div>

     <div className="form container"  >
      <div className='container formItems'>
        <h1>SEND US A MESSAGE</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Your Name</label>
    <input type="text" value={value.name} onChange={handleChange} name="name"  className="form-control" id="name" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Your Email</label>
    <input type="email" value={value.email} onChange={handleChange} name="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputNumber" className="form-label">Your Number</label>
    <input type="text" value={value.number} onChange={handleChange} name="number"  className="form-control" id="exampleInputNumber" required/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputSubject" className="form-label">Subject</label>
    <input type="text" value={value.subject} onChange={handleChange} name="subject"  className="form-control" id="exampleInputSubject" required/>
  </div>

  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
  <textarea class="form-control" name="message" value={value.message} onChange={handleChange} id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
 
  <button type="submit" className="btn btn-light text-dark">Submit</button>
  
</form>
</div>
    </div>
    </div>
  )
}

export default Contact
