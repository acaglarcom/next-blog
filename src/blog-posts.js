
export const getPosts = () => {
  return [
    {
      title: "Yeni Yazı!",
      slug: "yeni-yazi",
      details: require("./posts/yeni-yazi.md").default,
      date: "12 Aralık 2019",
      type: "post"
    },
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019",
      type: "post"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019",
      type: "post"
    },
    {
      title: "Merhaba dünya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "1 Aralık 2019",
      type: "post"
    },
    {
      title: "404",
      slug: "notFound",
      details: require("./posts/404.md").default,
      date: "1 Aralık 2019",
      type: "pageNotFound"
    },
    {
      title: "Hakkımda",
      slug: "hakkimda",
      details: require("./posts/hakkimda.md").default,
      date: "1 Aralık 2019",
      type: "page"
    }
  ];
};
