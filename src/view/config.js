export default {

  // 正常模式的tab title配置
  tabTitles: [
    {
      title: '微信',
      icon: '../src/img/1.png',
      activeIcon: '../src/img/1-active.png'
    },
    {
      title: '通讯录',
     icon: '../src/img/2.png',
      activeIcon: '../src/img/2-active.png'
    },
    {
      title: '发现',
      icon: '../src/img/3.png',
      activeIcon: '../src/img/3-active.png',
      badge: 5
    },
    {
      title: '我',
      icon: '../src/img/4.png',
      activeIcon: '../src/img/4-active.png',
      dot: true
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 70,
    iconHeight: 70,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
  },

  // 使用 iconFont 模式的tab title配置
  tabIconFontTitles: [
    {
      title: '首页',
      codePoint: '\ue623'
    },
    {
      title: '特别推荐',
      codePoint: '\ue608'
    },
    {
      title: '消息中心',
      codePoint: '\ue752',
      badge: 5
    },
    {
      title: '我的主页',
      codePoint: '\ue601',
      dot: true
    }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontMarginBottom: 8,
    iconFontColor: '#333333',
    activeIconFontColor: 'red',
    iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
  },
  myImg: {
    headphoto: '../src/img/my-headphoto.png',
    wallet: '../src/img/my-wallet.png',
    collect: '../src/img/my-collect.png',
    photos: '../src/img/my-photos.png',
    cardpackage: '../src/img/my-cardpackage.png',
    face: '../src/img/my-face.png',
    set: '../src/img/my-set.png',
  },
  otherImg: {
      friendCircle: '../src/img/friend-circle.png',
      scan: '../src/img/scan.png',
      shark: '../src/img/shark.png',
      search: '../src/img/search.png',
      see: '../src/img/see.png',
      shop: '../src/img/shop.png',
      nearbyPeople: '../src/img/nearby-people.png',
      game: '../src/img/game.png',
      driftBottle: '../src/img/drift-bottle.png',
      minProgram: '../src/img/min-program.png'
  },
  addressImg: {
      addUser: '../src/img/add-user.png',
      charts: '../src/img/charts.png',
      vipcn: '../src/img/vipcn.png',
      mark: '../src/img/mark.png'
  }
}