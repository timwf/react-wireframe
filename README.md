# Reusable Wireframe Components

## Concept

Create wire frames in record time with reusable components libary


### Button

![Image of button](https://github.com/timwf/react-wireframe/blob/master/src/demo-images/button.png)

Code -

       <Button primary btnName="Contact"/>
       <Button btnName="About"/>
       
       
Default Props -

        Button.defaultProps = {
            btnName: "Button",
            primary: false  
        }


## Nav Bar
![Image of nav](https://github.com/timwf/react-wireframe/blob/master/src/demo-images/navbar.png)

       <WireNavBar dark>
          <WireNavbarLogo />  
          <WireNavbarLink linkTag="About"/>
          <WireNavbarLink linkTag="Services" />
          <WireNavbarLink linkTag="Contact" />
          <WireNavbarLink linkTag="Extra" />
          <Button btnName="Contact"/>
       </WireNavBar>

       <WireNavBar >
          <WireNavbarLogo companyName="Logo Name"/>  
          <WireNavbarLink linkTag="About"/>
          <WireNavbarLink linkTag="Services" />
          <WireNavbarLink linkTag="Contact" />
          <WireNavbarLink linkTag="Extra" />
          <Button btnName="Contact"/>
       </WireNavBar>
       


#### Nav Bar Logo

    WireNavbarLogo.defaultProps = {
        companyName: "WireFrame",
        dark: false  
    }

#### Nav Bar Links

    WireNavbarLink.defaultProps = {
        linkTag: "Item",
        dark: false  
    }
