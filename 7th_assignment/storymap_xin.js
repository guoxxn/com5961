// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1921-2017",
      text: {
        headline: "Xiamen University",
        text: "<p>Xiamen University (XMU) is a national key university directly under the Ministry of Education of the People's Republic of China. It is founded by famous patriotic overseas Chinese leader Mr.Chen Jiageng and known as the South Strong and one of the most beautiful universities in China.</p>"
      },
      media: {
        url: "http://img.mp.itc.cn/upload/20170623/e09f8dbd837a4e979d6d727e7415b85c_th.jpg",
        credit: "XMU",
        caption: "About XMU"
      }
    }, {
      date: "1921",
      text: {
        headline: "QUN XIAN BUILDING",
        text: "<p>Qun Xian building is the earliest and most ancient building in Xiamen University, it is also the beginning of the first group of buildings in the university.</p> "
      },
      location: {
        name: "Qun Xian Building, XMU",
        lat: 24.4397362700,
        lon: 118.0906033516,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509028425226&di=d577d282457284d1d7f3af5bb5d00418&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df7d8bb20a6af2eddc0fc41aae5796b9c%2Fa2cc7cd98d1001e9b8d0d129b20e7bec54e7972c.jpg",
        credit: "XMU",
        caption: "XMU Qun Xian Building."
      }
    }, {
      date: "2001",
      text: {
        headline: "SONG EN BUILDING",
        text: "<p>Song En Building is the main building of Jiageng buildings. It is donated by famous alumni Ding Zhengzeng, Cai Yue Shi and his wife. They named the building to celebrate the cultivation of their alma mater. This building is an important place for administrative services, teaching and research.</p> "
      },
      location: {
        name: "Song En Building, XMU",
        lat: 24.4398632501,
        lon: 118.0921053886,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509027823870&di=3edc2b101d23fede57cade2942c0d5b5&imgtype=0&src=http%3A%2F%2Fimglf2.ph.126.net%2F-QWYtgSgWa96VHMzKZpV2g%3D%3D%2F6598191268516655972.jpg",
        credit: "XMU",
        caption: "XMU Song En Building."
      }
    }, {
      date: "2007",
      text: {
        headline: "CENTER FOR SCIENCE AND ART",
        text: "<p>En Ming Building is the center for science and art in Xiamen University. It was built in 2007, donated by famous almuni Xiao En Ming. This building provides a platform for students in XMU to show their result of science research and art.</p> "
      },
      location: {
        name: "En Ming Building, XMU",
        lat: 24.4383394806,
        lon: 118.0931246281,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://youimg1.c-ctrip.com/target/tg/375/135/326/205f38e5020c4a9a9cc5e666d4227994.jpg",
        credit: "XMU",
        caption: "XMU En Ming Building."
      }
    }, {
      date: "1951",
      text: {
        headline: "JIANNAN TOWN HALL",
        text: "<p> Jiannan Building is composed of five buildings of Chengyi Building, Nan'an Building, Jiannan Town Hall, NanGangLou and Chengzhi Building. Jiannan Town Hall is a landmark building built in the university. It is a place to hold various large-scale seminars, conferences and graduation ceremonys.</p>"
      },
      location: {
        name: "Jiannan Town Hall",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 24.4370259119,
        lon: 118.0929529667,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509619601&di=15305ad38c37f7aec255744f941ed573&imgtype=jpg&er=1&src=http%3A%2F%2Fzchqc.xmu.edu.cn%2F_upload%2Farticle%2Fimages%2F33%2F16%2F90d5e8f3474e94bfd0a3351e65fd%2Fd6f8df5d-bf36-4917-b4c3-93fe7d3708ec.jpg",
        type: 		"image",
        credit: "XMU",
        caption: "Jiannan Town Hall."
      }
    }, {
      date: "2007",
      text: {
        headline: "SCHOOL OF JOURNALISM AND COMMUNICATION",
        text: "<p>In 2007, Xiamen University set up the school of journalism and communication, marking Xiamen University news communication education has entered a new period of rapid development. It has the Department of Journalism, the Department of Advertising, and the Department of Communication. College school locates near the sea, the environment is beautiful and quiet.</p> "
      },
      location: {
        name: "School of Journalism and Communication, XMU",
        lat: 24.4367035704,
        lon: 118.0961394310,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://comm.xmu.edu.cn/_upload/article/images/c7/ee/169a83fa420c8cf0943f8311da9c/78e8cb33-cf9b-4cc1-af8b-188ff17d3b5f.jpg",
        credit: "XMU",
        caption: "XMU School of Journalism and Communication."
      }

    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}