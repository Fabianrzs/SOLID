import { Product } from "./Product";

export class ProductService{
    private ProductRepository: any

    constructor(ProductRepository: any) {
        this.ProductRepository = ProductRepository;
    }

    //database query methods

    public getProductById(id: string) {
        var product = this.ProductRepository.getUserByid(id); //find Product by id 
        return product
    }

    public GetAllProducts() {
        var products = this.ProductRepository.getAllProducts(); //get all products
        return products
    }

    //--------------------------------------------------------------------------------

    //se extiende el comportamiento - cumpliendo con unica resposabilidad 

    public AddProduct(product: Product) {
        var isSuccess = this.ProductRepository.AddProduct(product); //boolean value
        return isSuccess
    }

}