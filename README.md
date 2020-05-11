# Reusable Wireframe Components

## Concept

Create wire frames in record time with reusable components library


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

## Media Placeholders

![Image of media placeholder](https://github.com/timwf/react-wireframe/blob/master/src/demo-images/media-placeholder.png)

    <Container>
      <WireRow>
        <WireCol>
          <MediaPlaceholder image caption="I am a caption" />
        </WireCol>
        <WireCol>
          <MediaPlaceholder avitar round/>
        </WireCol>
        <WireCol className="margin-auto"> 
          <MediaPlaceholder  video height="100px" caption="Another Caption" />
        </WireCol>
        <WireCol>
          <MediaPlaceholder round />
        </WireCol>      
      </WireRow>
    </Container>

Props Name | Type | Default Value | Description
--- | --- | --- | ---
video | boolean | false | Sets placeholder background image to video icon
avitar | boolean | false | Sets placeholder background image to avitar icon
image | boolean | false | Sets placeholder background image to Image icon
round | boolean | false | Sets border radius to 100%
height | string | false | Sets heigth of images * eg "height="100px" *

## Text Placeholder

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


## Layout

![Image of layout](https://github.com/timwf/react-wireframe/blob/master/src/demo-images/layout-1.png)

    <Container>
      <WireRow>
      <WireCol mobileWidth="100%">
          <MediaPlaceholder avitar  round />
        </WireCol>   
        <WireCol className="margin-auto" width="70%">
            <TextPlaceholder headerLines={2} paraLines={3}/>
        </WireCol>   
      </WireRow>
    </Container>

Your layout can be mobile responsive by adding prop 'mobileWidth="- your percentage -%"', this will override any widths set bellow 
768px screen width (see example above)

Props should be passed into <WireCol> and include the following -

Props Name | Type | Default Value | Description
--- | --- | --- | ---
width | string | n/a | Sets <WireCol> width to % set (remaining <WireCols> in <WireRow> will spread evenly) example: <WireCol width="60%">.
mobileWidth | string | n/a | Will set width of <WireCol> to % on screens narrower than 768px. If width prop already set prop 'mobileWidth' will override at 768px


## Text Placeholder



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



