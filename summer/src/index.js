import './index.less' // css 改为 less
import test from './test';
import './index2.less' 
import './index3.less'
import './index4.less'
import './index5.less'
import './search.less'

function ajax(type,data,url,fnSucc,fnFaild)
{
    const upperCaseType=type.toUpperCase(); 
    const formatData = (data) => `?${Object.keys(data).reduce((acc, cur) => `${acc}&${cur}=${data[cur]}`, '').slice(1)}`
    const params = formatData(data);
    if(window.XMLHttpRequest)
    {
        var xhr=new XMLHttpRequest();
    }else{
       var xhr=new ActiveXObject("Microsoft.XMLHttp");
    }
    // xhr.open('GET',url,true);
    // xhr.send();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4)
        {
            if(xhr.status==200){//读取成功  http请求状态
                fnSucc(xhr.responseText);//响应数据类型
            }
            else         //失败
            {
                if(fnFaild){//判断是否传入函数
                    fnFaild(xhr.status);//调用
                }
                
            }

        }
    }
    if(upperCaseType==='GET'){
        xhr.open('GET',url,true);
        xhr.send();
    }else
    {
        xhr.open('POST',url,true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(params);
    }
}

function bgi (Wea, Air, City, Tem, Win, Winspeed) {
    const photo = document.querySelector('.photo');
    const condition1 = document.querySelector('.condition1');
    const condition2 = document.querySelector('.condition2');
    const air = document.getElementById('til');
    const grade = document.getElementById('grade');
    const city = document.getElementById('Txt-location');
    const win = document.getElementById('win');
    const point = document.querySelector('.head-h');

    condition1.innerHTML = Tem + '°';
    condition2.innerHTML = Wea;
    air.innerHTML = Air;
    city.innerHTML = City;
    win.innerHTML = Win + Winspeed;
    if (Wea === '晴') {
        photo.id = 'photo1';
        point.innerHTML = '现在的温度比较舒适';
    } else if (Wea === '阴') {
        photo.id = 'photo2';
        point.innerHTML = '阴天就听一下 阴天快乐~';
    } else if (Wea === '雷') {
        photo.id = 'photo-lei';
        point.innerHTML = '打雷太恐怖了，不要被吓到的哟~';
    } else if (Wea === '沙尘') {
        photo.id = 'photo-shachen';
        point.innerHTML = '沙尘暴警告，记得带口罩！';
    } else if (Wea === '雾') {
        photo.id = 'photo-wu';
        point.innerHTML = '雾蒙蒙的像及了我没戴眼镜的样子';
    } else if (Wea === '雪') {
        photo.id = 'photo-xue';
        point.innerHTML = '有雪哦~';
    } else if (Wea === '雨') {
        photo.id = 'photo-yu';
        point.innerHTML = '听一听周杰伦的雨下一整晚~';
    } else if (Wea === '云') {
        photo.id = 'photo-yun'
        point.innerHTML = '听一听林俊杰的飞云之下~';
    }

    if (Air <= 50) {
        grade.innerHTML = '优';
    } else if (Air > 50 && Air <= 100) {
        grade.innerHTML = '良';
    } else {
        grade.innerHTML = '差';
    }
}

function windows (item) {
    const title3 = document.querySelector('.title3');
    const text = document.querySelector('.txt-info');
    const ikwon = document.querySelector('.btn-close');

        if (item.innerHTML === "尾号限行") {
            title3.id = 'xian';
            title3.innerHTML = '尾号限行';
            text.innerHTML = '今日限行尾号为不限行，临时号牌按号牌尾号数字限行，机动车车牌尾号为英文字母的按0号管理。';
            ikwon.id = 'k-xian';
        } else if (item.innerHTML === '穿衣') {
            title3.id = 'yi';
            title3.innerHTML = '穿衣指数';
            text.innerHTML = '天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。';
            ikwon.id = 'k-yi';
        } else if (item.innerHTML === '雨伞') {
            title3.id = 'san';
            title3.innerHTML = '雨伞指数';
            text.innerHTML = '天气较好，您在出门的时候无须带雨伞。';
            ikwon.id = 'k-san';
        } else if (item.innerHTML === '感冒') {
            title3.id = 'gan';
            title3.innerHTML = '感冒指数';
            text.innerHTML = '各项气象条件适宜，发生感冒机率较低。但请避免长期处于空调房间中，以防感冒。';
            ikwon.id = 'k-gan';
        } else if (item.innerHTML === '洗车') {
            title3.id = 'xi';
            title3.innerHTML = '洗车指数';
            text.innerHTML = '较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。';
            ikwon.id = 'k-xi';
        } else if (item.innerHTML === '运动') {
            title3.id = 'dong';
            title3.innerHTML = '运动指数';
            text.innerHTML = '天气较好，较适宜进行各种运动，但因天气热，请适当减少运动时间，降低运动强度。';
            ikwon.id = 'k-dong';
        } else if (item.innerHTML === '防晒') {
            title3.id = 'sai';
            title3.innerHTML = '防晒指数';
            text.innerHTML = '属强紫外辐射天气，应加强防护，建议涂擦SPF在15-20之间，PA++的防晒护肤品。';
            ikwon.id = 'k-sai';
        } else if (item.innerHTML === '钓鱼') {
            title3.id = 'diao';
            title3.innerHTML = '钓鱼指数';
            text.innerHTML = '较适合垂钓，但风力稍大，会对垂钓产生一定的影响。';
            ikwon.id = 'k-diao';
        } else if (item.innerHTML === '旅游') {
            title3.id = 'lv';
            title3.innerHTML = '旅游指数';
            text.innerHTML = '天气较好，但稍感觉有些热，不过还是个好天气哦。适宜旅游，可不要错过机会呦！';
            ikwon.id = 'k-lv';
        } else if (item.innerHTML === '交通') {
            title3.id = 'tong';
            title3.innerHTML = '交通指数';
            text.innerHTML = '今日限行尾号为天气较好，路面干燥，交通气象条件良好，车辆可以正常行驶。不限行，临时号牌按号牌尾号数字限行，机动车车牌尾号为英文字母的按0号管理。';
            ikwon.id = 'k-tong';
        } else if (item.innerHTML === '空气污染扩散条件') {
            title3.id = 'wu';
            title3.innerHTML = '空气污染扩散条件指数';
            text.innerHTML = '气象条件对空气污染物稀释、扩散和清除无明显影响。';
            ikwon.id = 'k-wu';
        } else if (item.innerHTML === '舒适度') {
            title3.id = 'shu';
            title3.innerHTML = '舒适度指数';
            text.innerHTML = '白天天气晴好，明媚的阳光在给您带来好心情的同时，也会使您感到有些热，不很舒适。';
            ikwon.id = 'k-shu';
        } else if (item.innerHTML === '晾晒') {
            title3.id = 'liang';
            title3.innerHTML = '晾晒指数';
            text.innerHTML = '天气不错，极适宜晾晒。';
            ikwon.id = 'k-liang';
        } else if (item.innerHTML === '化妆') {
            title3.id = 'hua';
            title3.innerHTML = '化妆指数';
            text.innerHTML = '建议用蜜质SPF15以上面霜打底，水质无油粉底霜。';
            ikwon.id = 'k-hua';
        } else if (item.innerHTML === '晨练') {
            title3.id = 'lian';
            title3.innerHTML = '晨练指数';
            text.innerHTML = '早晨气象条件较适宜晨练，但风力稍大，晨练时请注意选择避风的地点，避免迎风锻炼。';
            ikwon.id = 'k-lian';
        } else if (item.innerHTML === '过敏') {
            title3.id = 'min';
            title3.innerHTML = '过敏指数';
            text.innerHTML = '天气条件较易诱发过敏，宜穿长衣长裤，远离过敏源，适当佩戴眼镜和口罩。';
            ikwon.id = 'k-min';
        }
}

function weatherP (item1, item2) {
    if (item1 === '晴') {
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/00.svg';
    } else if (item1 === '多云') {
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/01.svg';
    } else if (item1 === '小雨') {
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/07.svg';
    } else if (item1 === '雷阵雨') {
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/04.svg';
    } else if (item1 === '阴') {
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/02.svg';
    }
     else{
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/01.svg';
    } 
}

function weatherP2 (item1, item2) {
    if (item1 === '晴') {
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg';
    } else if (item1 === '多云' ) {
        item2.src = 'https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/01.svg';
    } else if (item1 === '小雨') {
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/07.svg';
    } else if (item1 === '雷阵雨') {
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/04.svg';
    } else if (item1 === '阴') {
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/02.svg';
    }
     else{
        item2.src = '//mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/01.svg';
    } 
}



window.onload=function(){
    var but = this.document.getElementById("link-back");
    const txtlocation = this.document.getElementById('txt-location'); 
    const secclass = this.document.querySelector("#sec-loaction");
    const body = this.document.querySelector('body');
    const btn = this.document.getElementById('btn-cancel');
    const Api = 'https://www.tianqiapi.com/free/day?appid=11271195&appsecret=puKtD3Q1&city=';
    const window = this.document.getElementById('window');
    const kwon = this.document.querySelector('.btn-close');
    const search = this.document.getElementById('sbtn');
    const item3 = this.document.getElementsByClassName('item3');
    const title1 = document.getElementsByClassName('title1');
    const Value = document.getElementById('i-location');
    const weather2 = this.document.getElementsByClassName('weather');
    const img = this.document.getElementsByClassName('icon');
    const daytime = this.document.getElementsByClassName('ct-daytime');
    const night = this.document.getElementsByClassName('ct-night');
    var api;

    api = Api + Value.value;
    ajax('get','', 'https://api.heweather.net/s6/weather/now?location=beijing', function (str) {
        var json = JSON.parse(str);
        console.log(json);
    },function (e){
        alert(e);
     } )
    
    ajax('get','',Api+'北京', function (str) {
        var json=JSON.parse(str);

        console.log(json);
        
        bgi(json.wea, json.air, json.city, json.tem, json.win, json.win_speed);
    },function (e){
        alert(e);
     })

    search.addEventListener('click', function () {
        const Value = document.getElementById('i-location');

        api = Api + Value.value;
        console.log(api);
        ajax('get','',api, function (str) {
            var json=JSON.parse(str);

            console.log(json);
            
            bgi(json.wea, json.air, json.city, json.tem, json.win, json.win_speed);
        },function (e){
            alert(e);
         })
        body.className = '';
        secclass.className = 'container close';
         console.log(1);
    })
    
    kwon.addEventListener('click', function () {
        window.className = 'ct-pop-window hide';
        body.className = '';
    })

    txtlocation.addEventListener('click', function () {
        body.className = 'modal-open';
        secclass.className = 'container show';
    })

    btn.addEventListener('click', function () {
        body.className = '';
        secclass.className = 'container close';
    })

    for (let i = 0;i < item3.length; i++) {
        item3[i].addEventListener('click', function () {
            window.className = 'ct-pop-window show2';
            body.className = 'modal-open';
            console.log(title1[i].innerHTML);
            windows(title1[i]);
        });
    }

    // for (let i = 0; i < weather2.length; i++) {
    //     weatherP(weather2[i], img[i])
    // }
}
