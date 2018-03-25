import {Injectable} from '@angular/core';
import {Product} from "./product";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/observable/of";

@Injectable()
export class ProductService {

  private productListener: Observable<Product>;

  private listProduct: Product[] = [
    new Product('Shining Cells', '즉각적인 미백효과 + 자외선 차단효과를 가지는 바디로션 자연스러운 톤업 & 물광 피부 피부 깊숙이 생기 있고 화사한 피부톤을 부여하는크림 ' , '/assets/products/shiningcells.png', ['/assets/products/shiningcells1.png','/assets/products/shiningcells2.png','/assets/products/shiningcells3.png'], '<h1 class="text-center svn">\n' +
      '      Shining Cells\n' +
      '    </h1>\n' +
      '    <h3 class="text-center">즉각적인 미백효과 + 자외선 차단효과를 가지는 바디로션</h3>\n' +
      '\n' +
      '    <p class="p-heading mt-5">제품 특징</p>\n' +
      '    <ul class="p-body">\n' +
      '      <li>바르는 즉시 피부를 하얗게 가꾸어주는 즉각적인 화이트닝 효과 뿐만 아니라 SPF32, PA++ 자외선 차단기능을 가지는 바디로션!</li>\n' +
      '      <li>끈적임 없는 파우더리한 사용감으로 전신에 바르는 화이트닝 썬 바디로션.</li>\n' +
      '      <li>나이아신아마이드와 아데노신을 함유하고 있는 미백/주름 기능성 화장품.</li>\n' +
      '    </ul>\n' +
      '\n' +
      '    <div class="p-heading mt-5 mb-3">주요 컨셉 성분</div>\n' +
      '\n' +
      '    <div class="p-heading">쌀겨추출물</div>\n' +
      '    <p class="p-body">쌀의 부산물인 쌀겨는 비타민B1, B2, E, 미네랄,\n' +
      '      섬유질이 풍부하고 식물성 지방산이 함유되어\n' +
      '      피부에 유용하게 작용하여 윤기가 나고 매끄러운 피부로 가꾸어 준다.\n' +
      '      피부 속 수분이 외부로 증발하는 것을 막고\n' +
      '      외부의 유해물질 침투로부터 피부를 보호하여\n' +
      '      건강하고 생기 있는 피부결로 가꾸어 준다.</p>\n' +
      '\n' +
      '    <div class="p-heading mt-5">복숭아추출물</div>\n' +
      '    <p class="p-body">복숭아의 풍부한 유기산과 필수 아미노산,\n' +
      '      비타민 성분은 피부에 윤기를 주고 안색을 좋게 가꾸어준다.\n' +
      '      멜라닌 생성을 촉진하는 ‘티로시나아제’를 억제해 주는 효능이 있어 미백효과에 도움을 준다.</p>\n' +
      '\n' +
      '    <div class="p-heading mt-5">상백피추출물</div>\n' +
      '    <p class="p-body">멜라닌 생성에 중요한 역할을 하는 티로시나아제를 억제하여 피부 색소침착을\n' +
      '      개선하고 방지하는데 탁월하기 때문에 화이트닝 화장품 성분으로 널리 이용될 만큼 미백기능이 뛰어나며, 미백효과와 함께 보습효과까지 우수하여 피부의 산화작용을 막아주고 예민한 피부를 진정시켜주는 작용도 한다.</p>\n' +
      '\n' +
      '    <div class="p-heading mt-5">산자나무열매추출물</div>\n' +
      '    <p class="p-body">2500년 전 부터 내려온 티벳의 이야기에서도 언급되어 있는 성분으로, 고대 그리스 원정대가 “성스러운 과일”이라 여기며 섭취했을 만큼 각종 비타민과 아미노산을 많이 함유하고 있어 피부에 영양을 공급하고 탄력을 부여해 건강한 피부로 가꾸는데 도움을 준다\n' +
      '    </p>\n' +
      '\n' +
      '    <div class="p-heading mt-5">BSASM</div>\n' +
      '    <p class="p-body">피부 진정효과에 특화된  7가지 식물성 성분들 항산화, 항염, 항자극 등의 효과로 자극 받은 피부를 빠르게 진정시켜 주는데 도움을 준다.</p>', true),
    new Product('White In', '촉촉 수분가득 눈연꽃추출물 베이스 얼굴 따로, 몸 따로 얼룩덜룩 피부는 그만! 한번에 제대로 효과 만점!!! White-In Face & Body Whitening Cream 로 한번에 피부톤을 보정해 주어 환하고 맑은 피부로 가꾸어 줍니다.', '/assets/products/whitein.png', ['/assets/products/whitein1.png'], '<h1 class="text-center svn">\n' +
      '      White-In\n' +
      '    </h1>\n' +
      '    <h3 class="text-center">반짝반짝 하얀 우윳빛 피부! 촉촉한 화이트닝 크림!!\n' +
      '촉촉 수분가득 눈연꽃추출물 베이스 </h3>\n' +
      '\n' +
      '    <p class="p-body mt-5 ml-5">얼굴 따로, 몸 따로 얼룩덜룩 피부는 그만!\n' +
      '한번에 제대로 효과 만점!!!\n' +
      'White-In Face & Body Whitening Cream 로\n' +
      '한번에 피부톤을 보정해 주어 환하고 맑은 피부로 가꾸어 줍니다.\n</p>\n' +
      '    <p class="p-body mt-5 ml-5">[ 사계절 우윳빛 미백 레시피 ]  ★ 팔백화\n' +
      ' 사계절 내내 맑은 피부를 원하는 소비자를 위해 엄선한 자연이 만든 8가지 흰 꽃으로 피부에 \n' +
      ' 도달하는 빛을 산란시켜 피부를 하얗고 빛나게 가꾸어준다. \n' +
      ' 종류 : 히아신스전초추출물, 말리화꽃추출물, 국화꽃추출물, 연꽃추출물,  \n' +
      ' 엘더꽃추출물, 매화추출물, 아까시나무꽃추출물, 매도우스위트꽃추출물 \n' +
      '</p>\n' +
      '\n' +
      '    <div class="p-heading">눈연꽃 추출물</div>\n' +
      '    <p class="p-body">강력한 항산화 및 노화방지에 효과가 우수한 성분.\n' +
      '항염효과로 피부를 깨끗하게 유지하는데 도움을 주는 성분\n' +
      '설연화(雪蓮花) 라고도 불리며 높은 보습효과가 있으며, \n' +
      '활성산소를 제거하는 항산화 효과가 뛰어나며 \n' +
      '항알러지/면역강화에 좋은 성분.</p>\n' +
      '\n' +
      '    <div class="p-heading mt-5">닥나무 추출물</div>\n' +
      '    <p class="p-body">한지를 만드는 사람들의 소이 다른 사람에 비해 유난히 하얗것과 일반 종이를 만들 때와 다르게 \n' +
      '변색방지제를 넣지 않아도 변색이 거의 없다는 것에서 착안되어 미백원료 많이 사용되는 원료\n' +
      '일반적으로 피부가 자외선 같은 외부환경에 노출되면 멜라닌이 생성 \n' +
      '피부 표면에 넓게 분포할 경우 검어 보이고 부분적으로 칙칙해 보이게 된다. \n' +
      '닥나무 추출물 01%를 함유한 제품을 사용시 피부 조직에 나타나는 멜라닌의 양이 감소되는 것을 알 수 있으며 피부에서 자극이나 독성유발의 우려가 없는 순수 식물 성분으로 맑은 피부 연출이 가능</p>\n' +
      '\n' +
      '    <div class="p-heading mt-5">PENTAVITIN-R</div>\n' +
      '<div class="p-body">밀에서 유래한 천연보습성분으로 장시간 보습은 물론, 낮은 습도에서도 보습력을 발휘하며 ‘물 잡아주는 자석’이라는 별칭이 있다.</div> \n' +
      '    <ul class="p-body">' +
      '     <li>각질층의 케라틴에 강하게  결합되어 피부 보습 효능을 </li>' +
      '     <li>발휘함으로써 건조함을 예방하여 가려움을 완화하고</li>' +
      '     <li>촉촉한 피부로 유지하는데 도움을 준다.\n</li>' +
      '</ul>\n' +
      '\n' +
      '    <div class="p-heading mt-5">진주추출물</div>\n' +
      '    <ul class="p-body">' +
      '     <li>전통적으로 중국에서는 진주가루로 피부를 윤택하고 부드러우며 젊게 가꾸는데 사용해왔다. 3,000년 이상의 역사 속에 클레오파트라, 양귀비 등 여러 귀부인들의 고급화장재료 및 약재로 귀하게 여겨져 왔다.</li>' +
      '     <li>진주에는 8가지 필수 아미노산을 비롯한 14~18종의 아미노산이 함유되어 있으며 20여종의 미네랄 성분 및 각종 생리활성성분이 존재한다.</li>' +
      '     <li>동의보감에는 “진주가루를 유즙에 섞어 바르면 검은 반점을 제거하고 얼굴을 윤기나게 하여 안색을 좋게 한다”라고 쓰여있다.\n</li>' +
      '</ul>\n'  +
      '    <div class="p-heading mt-5">마치현추출물</div>\n' +
      '    <p class="p-body">상처의 건조 예방과 우수한 항염 작용, 피부 자극과 알러지 반응을 진정시켜 주는 효과가 있으며, 항균 작용과 뛰어난 피부 보습력을 가지고 있다.\n' +
      '자극된 피부에 진정효과를 주며\n' +
      '피부의 수분과 영양을 공급하여 거칠고 건조함을 방지해\n' +
      '촉촉한 피부로 가꾸는데 도움을 준다.\n' +
      '또한 피부 홍조 개선에 효과적이며\n' +
      '전통적으로 피부 연고의 원료로도 사용되어 왔다.</p>\n' +
      '\n',false)
  ];

  constructor() {
  }

  getProducts(): Observable<Product> {
    return Observable.from(this.listProduct);
  }

  getProductByName(normalizedName: string): Observable<Product> {
    let theProduct: Product = this.listProduct.find( (p: Product) => p.name.toLowerCase().replace(' ', '') === normalizedName);
    return Observable.of(theProduct);
  }

}
