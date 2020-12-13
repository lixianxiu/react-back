const menuList = [
  {
    title: "首页",
    key: "/home",
    icon: "home",
  },
  {
    title: "商品管理",
    key: "/product",
    icon: "home",
    children: [
      {
        title: "商品分类",
        key: "/category",
        icon: "home",
      },
    ],
  },
  {
    title: "角色管理",
    key: "/role",
    icon: "home",
  },
  {
    title: "用户管理",
    key: "/user",
    icon: "home",
    children: [
      {
        title: "用户信息",
        key: "/info",
        icon: "home",
      },
    ],
  },
];

export default menuList