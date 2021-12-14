# Backend for Verkkokauppa_react

This is the backend of verkkokauppa_react running @ https://verkkokauppa-bgf-front.herokuapp.com/

## Endpoints

### Products
$ GET api/products  
- returns all products in the database  
$ GET api/products/:id  
- returns a single product matching the id  
$ POST api/products  
- saves a new product into the database  

### Categories
$ GET api/categories  
- return all categories in the database  
$ GET api/categories/:id  
- returns a single category matching the id  
$ POST api/categories  
- saves a new category into the database  

### Images
$ POST api/images  
- saves a single image object into the database  
