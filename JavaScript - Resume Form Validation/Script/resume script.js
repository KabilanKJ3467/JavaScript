// Function to Validate the values of textbox when submit button is clicked.
function SubmitClickFunction()
{
    // Name Text Box
    var name = document.getElementById("name");
    var regexname=/^[A-Z]?([a-z]+)\s?([a-z]+)?$/;
    if(name.value.trim()== "")
    {
       
        document.getElementById("name").style.border="solid 2px red";
        document.getElementById("name1").style.visibility="visible";

    }
    else if( regexname.test(name.value))
    {

        document.getElementById("name").style.border="solid 1px black";
        document.getElementById("name1").style.visibility="hidden";


        document.getElementById("name").style.border="solid 1px black";
       document.getElementById("name2").style.visibility="hidden";
       
       
    }
    else
    {
        document.getElementById("name").style.border="solid 1px black";
        document.getElementById("name1").style.visibility="hidden";

       document.getElementById("name").style.border="solid 2px blue";
       document.getElementById("name2").style.visibility="visible";
    }




    // Father Name Text Box
    var fathername = document.getElementById("fathername");
    var regexfathername=/^[A-Z]?([a-z]+)\s?([a-z]+)?$/;
    if(fathername.value.trim()== "")
    {
       
        document.getElementById("fathername").style.border="solid 2px red";
        document.getElementById("fathername1").style.visibility="visible";

    }
    else if( regexfathername.test(fathername.value))
    {

        document.getElementById("fathername").style.border="solid 1px black";
        document.getElementById("fathername1").style.visibility="hidden";


        document.getElementById("fathername").style.border="solid 1px black";
       document.getElementById("fathername2").style.visibility="hidden";
       
       
    }
    else
    {
        document.getElementById("fathername").style.border="solid 1px black";
        document.getElementById("fathername1").style.visibility="hidden";

       document.getElementById("fathername").style.border="solid 2px blue";
       document.getElementById("fathername2").style.visibility="visible";
    }



    // Email Id Text Box
    var emailid = document.getElementById("emailid");
    var regexemailid=/^([a-zA-Z0-9-\.]+)[@]([a-zA-z0-9]+)[\.]([a-z]{2,10})[\.]?([a-z]{2,5})?$/;
    if(emailid.value.trim()== "")
    {
       
        document.getElementById("emailid").style.border="solid 2px red";
        document.getElementById("emailid1").style.visibility="visible";

    }
    else if( regexemailid.test(emailid.value))
    {

        document.getElementById("emailid").style.border="solid 1px black";
        document.getElementById("emailid1").style.visibility="hidden";


        document.getElementById("emailid").style.border="solid 1px black";
       document.getElementById("emailid2").style.visibility="hidden";
       
       
    }
    else
    {
        document.getElementById("emailid").style.border="solid 1px black";
        document.getElementById("emailid1").style.visibility="hidden";

       document.getElementById("emailid").style.border="solid 2px blue";
       document.getElementById("emailid2").style.visibility="visible";
       
    }



    // Date of Birth Text Box
    var dateofbirth = document.getElementById("dateofbirth");
    var regexdateofbirth=/^[0-3][0-9]-[0-1][0-9]-[0-9]{4}$/;
    if(dateofbirth.value.trim()== "")
    {
       
        document.getElementById("dateofbirth").style.border="solid 2px red";
        document.getElementById("dateofbirth1").style.visibility="visible";

    }
    else if( regexdateofbirth.test(dateofbirth.value))
    {

        document.getElementById("dateofbirth").style.border="solid 1px black";
        document.getElementById("dateofbirth1").style.visibility="hidden";


        document.getElementById("dateofbirth").style.border="solid 1px black";
       document.getElementById("dateofbirth2").style.visibility="hidden";
       
       
    }
    else
    {
        document.getElementById("dateofbirth").style.border="solid 1px black";
        document.getElementById("dateofbirth1").style.visibility="hidden";

       document.getElementById("dateofbirth").style.border="solid 2px blue";
       document.getElementById("dateofbirth2").style.visibility="visible";


    }


    // Mobile Number Text Box
    var mobilenumber = document.getElementById("mobilenumber");
    var regexmobilenumber=/^[6-9]([0-9]{9})$/;
    if(mobilenumber.value.trim()== "")
    {
       
        document.getElementById("mobilenumber").style.border="solid 2px red";
        document.getElementById("mobilenumber1").style.visibility="visible";

    }
    else if( regexmobilenumber.test(mobilenumber.value))
    {

        document.getElementById("mobilenumber").style.border="solid 1px black";
        document.getElementById("mobilenumber1").style.visibility="hidden";


        document.getElementById("mobilenumber").style.border="solid 1px black";
       document.getElementById("mobilenumber2").style.visibility="hidden";
       
       
    }
    else
    {
        document.getElementById("mobilenumber").style.border="solid 1px black";
        document.getElementById("mobilenumber1").style.visibility="hidden";

       document.getElementById("mobilenumber").style.border="solid 2px blue";
       document.getElementById("mobilenumber2").style.visibility="visible";
    }

    
    //Current Address
   // Address Lane 1
    var currentaddresslane1 = document.getElementById("currentaddresslane1");
    var regexcurrentaddresslane1=/^(([\w]+)([\s]+)?)+$/;
    if(currentaddresslane1.value.trim()== "")
    {
       
        document.getElementById("currentaddresslane1").style.border="solid 2px red";
        document.getElementById("currentaddresslane1-1").style.visibility="visible";

    }
    else if( regexcurrentaddresslane1.test(currentaddresslane1.value))
    {

        document.getElementById("currentaddresslane1").style.border="solid 1px black";
        document.getElementById("currentaddresslane1-1").style.visibility="hidden";


        document.getElementById("currentaddresslane1").style.border="solid 1px black";
       document.getElementById("currentaddresslane1-2").style.visibility="hidden";
       
       
    }
    else
    {
        document.getElementById("currentaddresslane1").style.border="solid 1px black";
        document.getElementById("currentaddresslane1-1").style.visibility="hidden";

       document.getElementById("currentaddresslane1").style.border="solid 2px blue";
       document.getElementById("currentaddresslane1-2").style.visibility="visible";
    }

    // Current Address Lane 2
    var currentaddresslane2 = document.getElementById("currentaddresslane2");
    var regexcurrentaddresslane2=/^(([\w]+)([\s]+)?)+$/;
    if(currentaddresslane2.value.trim()== "")
    {
       
        document.getElementById("currentaddresslane2").style.border="solid 2px red";
        document.getElementById("currentaddresslane2-1").style.visibility="visible";

    }
    else if( regexcurrentaddresslane2.test(currentaddresslane2.value))
    {

        document.getElementById("currentaddresslane2").style.border="solid 1px black";
        document.getElementById("currentaddresslane2-1").style.visibility="hidden";


        document.getElementById("currentaddresslane2").style.border="solid 1px black";
       document.getElementById("currentaddresslane2-2").style.visibility="hidden";
       
       
    }
    else
    {
        document.getElementById("currentaddresslane2").style.border="solid 1px black";
        document.getElementById("currentaddresslane2-1").style.visibility="hidden";

       document.getElementById("currentaddresslane2").style.border="solid 2px blue";
       document.getElementById("currentaddresslane2-2").style.visibility="visible";
    }




     //City Text Box - Current Address
     var city = document.getElementById("currentcity");
     var regexcurrentcity=/^[a-zA-Z]{2,20}$/;
     if(currentcity.value.trim()== "")
     {
        
         document.getElementById("currentcity").style.border="solid 2px red";
         document.getElementById("currentcity1").style.visibility="visible";
 
     }
     else if( regexcurrentcity.test(currentcity.value))
     {
 
         document.getElementById("currentcity").style.border="solid 1px black";
         document.getElementById("currentcity1").style.visibility="hidden";
 
 
         document.getElementById("currentcity").style.border="solid 1px black";
        document.getElementById("currentcity2").style.visibility="hidden";
        
        
     }
     else
     {
         document.getElementById("currentcity").style.border="solid 1px black";
         document.getElementById("currentcity1").style.visibility="hidden";
 
        document.getElementById("currentcity").style.border="solid 2px blue";
        document.getElementById("currentcity2").style.visibility="visible";
     }

       // Pincode Text Box - Current Address
       var currentpincode = document.getElementById("currentpincode");
       var regexcurrentpincode=/^[6][0-9]{5}$/;
      if(currentpincode.value.trim()== "")
     {
      
       document.getElementById("currentpincode").style.border="solid 2px red";
       document.getElementById("currentpincode1").style.visibility="visible";

     }
     else if( regexcurrentpincode.test(currentpincode.value))
     {

       document.getElementById("currentpincode").style.border="solid 1px black";
       document.getElementById("currentpincode1").style.visibility="hidden";

       document.getElementById("currentpincode").style.border="solid 1px black";
      document.getElementById("currentpincode2").style.visibility="hidden";
            
     }
     else
     {
       document.getElementById("currentpincode").style.border="solid 1px black";
       document.getElementById("currentpincode1").style.visibility="hidden";

      document.getElementById("currentpincode").style.border="solid 2px blue";
      document.getElementById("currentpincode2").style.visibility="visible";
     }

 
    
     
     // Permanent Address
     // Address Lane 1
       var permanentaddresslane1 = document.getElementById("permanentaddresslane1");
      var regexpermanentaddresslane1=/^(([\w]+)([\s]+)?)+$/;
     if(permanentaddresslane1.value.trim()== "")
     {
       
        document.getElementById("permanentaddresslane1").style.border="solid 2px red";
        document.getElementById("permanentaddresslane1-1").style.visibility="visible";

      }
     else if( regexpermanentaddresslane1.test(permanentaddresslane1.value))
     {

        document.getElementById("permanentaddresslane1").style.border="solid 1px black";
        document.getElementById("permanentaddresslane1-1").style.visibility="hidden";


        document.getElementById("permanentaddresslane1").style.border="solid 1px black";
       document.getElementById("permanentaddresslane1-2").style.visibility="hidden";
       
       
     }
     else
     {
        document.getElementById("permanentaddresslane1").style.border="solid 1px black";
        document.getElementById("permanentaddresslane1-1").style.visibility="hidden";

       document.getElementById("permanentaddresslane1").style.border="solid 2px blue";
       document.getElementById("permanentaddresslane1-2").style.visibility="visible";
     }



// Permanent Address Lane 2
     var permanentaddresslane2 = document.getElementById("permanentaddresslane2");
     var regexpermanentaddresslane2=/^(([\w]+)([\s]+)?)+$/;
     if(permanentaddresslane2.value.trim()== "")
     {
       
        document.getElementById("permanentaddresslane2").style.border="solid 2px red";
        document.getElementById("permanentaddresslane2-1").style.visibility="visible";

     }
     else if( regexpermanentaddresslane2.test(permanentaddresslane2.value))
     {

        document.getElementById("permanentaddresslane2").style.border="solid 1px black";
        document.getElementById("permanentaddresslane2-1").style.visibility="hidden";


        document.getElementById("permanentaddresslane2").style.border="solid 1px black";
       document.getElementById("permanentaddresslane2-2").style.visibility="hidden";
       
       
    }
     else
     {
        document.getElementById("permanentaddresslane2").style.border="solid 1px black";
        document.getElementById("permanentaddresslane2-1").style.visibility="hidden";

       document.getElementById("permanentaddresslane2").style.border="solid 2px blue";
       document.getElementById("permanentaddresslane2-2").style.visibility="visible";
     }



   

   
      //City Text Box - Permanent Address
      var permanentcity = document.getElementById("permanentcity");
      var regexpermanentcity=/^[a-zA-Z]{2,20}$/;
      if(permanentcity.value.trim()== "")
      {
         
          document.getElementById("permanentcity").style.border="solid 2px red";
          document.getElementById("permanentcity1").style.visibility="visible";
  
      }
      else if( regexpermanentcity.test(permanentcity.value))
      {
  
          document.getElementById("permanentcity").style.border="solid 1px black";
          document.getElementById("permanentcity1").style.visibility="hidden";
  
  
          document.getElementById("permanentcity").style.border="solid 1px black";
         document.getElementById("permanentcity2").style.visibility="hidden";
         
         
      }
      else
      {
          document.getElementById("permanentcity").style.border="solid 1px black";
          document.getElementById("permanentcity1").style.visibility="hidden";
  
         document.getElementById("permanentcity").style.border="solid 2px blue";
         document.getElementById("permanentcity2").style.visibility="visible";
      }

        // Pincode Text Box - permanent address
     var permanentpincode = document.getElementById("permanentpincode");
     var regexpermanentpincode=/^[6][0-9]{5}$/;
     if(permanentpincode.value.trim()== "")
     {
       
        document.getElementById("permanentpincode").style.border="solid 2px red";
        document.getElementById("permanentpincode1").style.visibility="visible";

     }
     else if( regexcity.test(permanentpincode.value))
     {

        document.getElementById("permanentpincode").style.border="solid 1px black";
        document.getElementById("permanentpincode1").style.visibility="hidden";


        document.getElementById("permanentpincode").style.border="solid 1px black";
       document.getElementById("permanentpincode2").style.visibility="hidden";
       
       
     }
     else
     {
        document.getElementById("permanentpincode").style.border="solid 1px black";
        document.getElementById("permanentpincode1").style.visibility="hidden";

       document.getElementById("permanentpincode").style.border="solid 2px blue";
       document.getElementById("permanentpincode2").style.visibility="visible";
     }



    
}

// Function to Copy Current Address  to  Permanent Address
var count=0;
function addresscopy()
{
    count++;
    if(count%2==0)
    {
     document.getElementById("permanentaddresslane1").value = "";
     document.getElementById("permanentaddresslane2").value ="";
     document.getElementById("permanentpincode").value ="";
     document.getElementById("permanentcity").value ="";
   

    }
    else{
        document.getElementById("permanentaddresslane1").value =document.getElementById("currentaddresslane1").value;
        document.getElementById("permanentaddresslane2").value =document.getElementById("currentaddresslane2").value;
        document.getElementById("permanentcity").value =document.getElementById("currentcity").value;
        document.getElementById("permanentpincode").value =document.getElementById("currentpincode").value;
        document.getElementById("permanentcity").value =document.getElementById("currentcity").value;
       
    }
  
}