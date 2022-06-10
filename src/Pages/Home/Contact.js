import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_1l8g6sv','template_polj6j5',e.target,'HdQ3So0LGdS6kwZYj').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })


    }
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold text-blue-500">Contact Me</h1>
                    <p class="py-6 text-2xl">I'm always create new project With new Technogies.If you have any request or question please Contact me and Send Email me</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
            
                    
  <form onSubmit={sendEmail}>
    <div class="form-group mb-6">
      <label for="name" class="form-label inline-block mb-2 text-gray-700">Name</label>
      <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
         placeholder="Name"/>
     
    </div>
    <div class="form-group mb-6">
      <label for="email" class="form-label inline-block mb-2 text-gray-700">Email </label>
      <input type="email" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
         name='email' placeholder="Enter email" required/>
     
    </div>
    <div class="form-group mb-6">
      <label for="message" class="form-label inline-block mb-2 text-gray-700">Message</label>
      <textarea type="text" rows='4' class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="message" name='message'
         placeholder="Message"/>
      
    </div>
    
    
    <button type="submit" class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" >Send</button>
  </form>
</div>
        
        
                    
                </div>
            </div>
            </div>
            
    
    );
};

export default Contact;