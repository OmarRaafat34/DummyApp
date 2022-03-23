import Product from "../model/product";

const PRODUCTS = [
    new Product(
        '1',
        'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3PHhv?ver=390c&q=90&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=674&y=189&s=1446&d=813&aim=true',
        'Laptop',
        500,
        'Lenovo Laptop 8GB RAM with Hard Drive 1TB'
    ),
    new Product(
        '2',
        'https://www.android.com/static/2016/img/one/carousel/nokia-9_1x.png',
        'Mobile Phone',
        300,
        'Hwauei Mobile Phone 6GB RAM'
    ),
    new Product(
        '3',
        'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-t10.jpg',
        'Huawei Tablet',
        800,
        'Hwauei Tablet 16GB RAM'
    )
]
export default PRODUCTS