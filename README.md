# Reusable Wireframe Components

## Concept

Create wire frames in record time with reusable components library


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
       <WireNavBar dark>
          <WireNavbarLogo />  
          <NavItemsContainer>
            <WireNavbarLink linkTag="About"/>
            <WireNavbarLink linkTag="Services" />
            <WireNavbarLink linkTag="Contact" />
            <WireNavbarLink linkTag="Extra" />
            <Button btnName="Contact"/>
          </NavItemsContainer>
       </WireNavBar>

       <WireNavBar >
       <WireNavbarLogo companyName="Logo Name"/>  
          <NavItemsContainer right >
            <WireNavbarLink linkTag="About"/>
            <WireNavbarLink linkTag="Services" />
            <WireNavbarLink linkTag="Contact" />
            <WireNavbarLink linkTag="Extra" />
            <Button btnName="Contact"/>
          </NavItemsContainer>
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
