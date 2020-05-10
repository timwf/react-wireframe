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
       <Container>
          <WireNavbarLogo />         
            <NavItemsContainer>
              <WireNavbarLink linkTag="About"/>
              <WireNavbarLink linkTag="Services" />
              <WireNavbarLink linkTag="Contact" />
              <WireNavbarLink linkTag="Extra" />
              <Button btnName="Contact"/>
            </NavItemsContainer>
          </Container>
       </WireNavBar>

       <WireNavBar >
         <Container>
          <WireNavbarLogo companyName="Logo Name"/>  
            <NavItemsContainer right >
              <WireNavbarLink linkTag="About"/>
              <WireNavbarLink linkTag="Services" />
              <WireNavbarLink linkTag="Contact" />
              <WireNavbarLink linkTag="Extra" />
              <Button primary btnName="Contact"/>
            </NavItemsContainer>
         </Container>
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


### Media Placeholders

![Image of media placeholder](https://github.com/timwf/react-wireframe/blob/master/src/demo-images/media-placeholder.png)

    <Container>
      <WireRow>
        <WireCol >
        <MediaPlaceholder />
        </WireCol>  
        <WireCol >
        <MediaPlaceholder video caption="A caption if you want"/>
        </WireCol>   
      </WireRow>
    </Container>


### Text Placeholder

![Image of media placeholder](https://github.com/timwf/react-wireframe/blob/master/src/demo-images/text-placeholder.png)

    <Container>
      <WireRow>
        <WireCol >
          <TextPlaceholder paraLines={10}/>
        </WireCol>  
        <WireCol >
         <TextPlaceholder headerLines={1} paraLines={7}/>
        </WireCol>  
        <WireCol >
          <TextPlaceholder headerLines={3} paraLines={4}/>
        </WireCol>  
      </WireRow>
    </Container>
