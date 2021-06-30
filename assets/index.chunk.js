(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        217: function (e, a, t) {
            "use strict";
            var n = t(211),
                l = t.n(n),
                s = t(205),
                c = t.n(s),
                r = t(206),
                i = t.n(r),
                m = t(207),
                o = t.n(m),
                u = t(208),
                p = t.n(u),
                d = t(209),
                E = t.n(d),
                h = t(6),
                N = t.n(h),
                g = t(100),
                f = t.n(g),
                v = function (e) {
                    function a(e) {
                        return c()(this, a), o()(this, p()(a).call(this, e))
                    }
                    return E()(a, e), i()(a, [{
                        key: "render",
                        value: function () {
                            var e = this.props,
                                a = e.basics,
                                t = e.languages;
                            return N.a.createElement("section", {
                                className: "col-md-3 card-wrapper profile-card-wrapper affix"
                            }, N.a.createElement("div", {
                                className: "card profile-card"
                            }, N.a.createElement("span", {
                                className: "profile-pic-container"
                            }, N.a.createElement("div", {
                                className: "profile-pic"
                            }, N.a.createElement("img", {
                                className: "media-object img-circle center-block",
                                src: a.picture || "https://s.gravatar.com/avatar/9acdb04e603c1cac2b893190f6dd5911?s=100&amp;r=pg&amp;d=mm"
                            })), N.a.createElement("div", {
                                className: "name-and-profession text-center"
                            }, N.a.createElement("h3", null, N.a.createElement("b", null, a.name)), N.a.createElement("h4", null, N.a.createElement("b", null, a.position)), N.a.createElement("h5", {
                                className: "text-muted"
                            }, a.label))), N.a.createElement("hr", null), N.a.createElement("div", {
                                className: "contact-details clearfix"
                            }, N.a.createElement("div", {
                                className: "detail"
                            }, N.a.createElement("span", {
                                className: "icon"
                            }, N.a.createElement("i", {
                                className: "icon fs-lg icon-profile"
                            })), N.a.createElement("span", {
                                className: "info"
                            }, a.gender, " ", a.age, "岁 ", a.worklife, "年工作经验")), N.a.createElement("div", {
                                className: "detail"
                            }, N.a.createElement("span", {
                                className: "icon"
                            }, N.a.createElement("i", {
                                className: "icon fs-lg icon-location"
                            })), N.a.createElement("span", {
                                className: "info"
                            }, a.location)), N.a.createElement("div", {
                                className: "detail"
                            }, N.a.createElement("span", {
                                className: "icon"
                            }, N.a.createElement("i", {
                                className: "icon fs-lg icon-phone"
                            })), N.a.createElement("span", {
                                className: "info"
                            }, a.phone)), N.a.createElement("div", {
                                className: "detail"
                            }, N.a.createElement("span", {
                                className: "icon"
                            }, N.a.createElement("i", {
                                className: "icon fs-lg icon-mail"
                            })), N.a.createElement("span", {
                                className: "info"
                            }, N.a.createElement("a", {
                                className: "link-disguise",
                                href: "mailto:".concat(a.email)
                            }, a.email))), N.a.createElement("div", {
                                className: "detail"
                            }, N.a.createElement("span", {
                                className: "icon"
                            }, N.a.createElement("i", {
                                className: "icon fs-lg icon-link"
                            })), N.a.createElement("span", {
                                className: "info"
                            }, N.a.createElement("a", {
                                href: a.website,
                                target: "_blank"
                            }, a.website))), N.a.createElement("div", {
                                className: "detail"
                            }, N.a.createElement("span", {
                                className: "icon",
                                title: "Languages I speak"
                            }, N.a.createElement("i", {
                                className: "icon fs-lg icon-language"
                            })), t.map(function (e, a) {
                                return N.a.createElement("span", {
                                    key: a,
                                    className: "info"
                                }, e.language)
                            }))), N.a.createElement("hr", null), N.a.createElement("div", {
                                className: "social-links text-center"
                            }, N.a.createElement("div", null, a.profiles.map(function (e, a) {
                                var t = f()(l()({
                                    iconfont: !0,
                                    "social-link": !0
                                }, "iconfont-".concat(e.network), e.network));
                                return N.a.createElement("a", {
                                    key: a,
                                    className: t,
                                    href: e.url,
                                    target: "_blank"
                                })
                            })))))
                        }
                    }]), a
                }(N.a.Component);
            a.a = v
        },
        218: function (e, a, t) {
            "use strict";
            var n = t(205),
                l = t.n(n),
                s = t(206),
                c = t.n(s),
                r = t(207),
                i = t.n(r),
                m = t(208),
                o = t.n(m),
                u = t(209),
                p = t.n(u),
                d = t(6),
                E = t.n(d),
                h = function (e) {
                    function a(e) {
                        return l()(this, a), i()(this, o()(a).call(this, e))
                    }
                    return p()(a, e), c()(a, [{
                        key: "render",
                        value: function () {
                            return E.a.createElement("section", {
                                className: "col-md-12 card-wrapper"
                            }, E.a.createElement("div", {
                                className: "footer"
                            }, "个人主页  ", E.a.createElement("span", {
                                className: "date"
                            }, "2021-06-30")))
                        }
                    }]), a
                }(E.a.Component);
            a.a = h
        },
        219: function (e, a, t) {
            "use strict";
            var n = t(205),
                l = t.n(n),
                s = t(206),
                c = t.n(s),
                r = t(207),
                i = t.n(r),
                m = t(208),
                o = t.n(m),
                u = t(209),
                p = t.n(u),
                d = t(6),
                E = t.n(d),
                h = t(102),
                N = t.n(h),
                g = function (e) {
                    function t(e) {
                        var a;
                        return l()(this, t), (a = i()(this, o()(t).call(this, e))).state = {
                            publications: []
                        }, a
                    }
                    return p()(t, e), c()(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.getPublications()
                        }
                    }, {
                        key: "getPublications",
                        value: function () {
                            var a = this;
                            N()("https://api.github.com/users/skyvow/repos").then(function (e) {
                                return e.json()
                            }).then(function (e) {
                                e.message || a.setState({
                                    publications: e.filter(function (e) {
                                        return !e.fork
                                    }).sort(function (e, a) {
                                        return e.stargazers_count < a.stargazers_count
                                    }).slice(0, 6)
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.props,
                                a = e.basics,
                                t = e.work,
                                n = e.project,
                                l = e.education,
                                s = e.awards,
                                c = e.skills,
                                r = e.interests,
                                i = e.references,
                                m = this.state.publications;
                            return E.a.createElement("section", {
                                className: "col-md-9 card-wrapper pull-right"
                            }, E.a.createElement("div", {
                                className: "card background-card"
                            }, E.a.createElement("h4", {
                                className: "text-uppercase"
                            }, "背景资料"), E.a.createElement("hr", null), E.a.createElement("div", {
                                className: "background-details"
                            }, E.a.createElement("div", {
                                className: "detail",
                                id: "about"
                            }, E.a.createElement("div", {
                                className: "icon"
                            }, E.a.createElement("i", {
                                className: "fs-lg icon-board"
                            }), E.a.createElement("span", {
                                className: "mobile-title"
                            }, "自我描述")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "自我描述"), E.a.createElement("ul", {
                                className: "list-unstyled clear-margin"
                            }, E.a.createElement("li", {
                                className: "card card-nested clearfix"
                            }, E.a.createElement("div", {
                                className: "content mop-wrapper"
                            }, E.a.createElement("ul", null, a.summary.map(function (e, a) {
                                return E.a.createElement("li", {
                                    key: a,
                                    className: "mop-wrapper"
                                }, E.a.createElement("p", null, e))
                            }))))))), E.a.createElement("div", {
                                className: "detail",
                                id: "work-experience"
                            }, E.a.createElement("div", {
                                className: "icon"
                            }, E.a.createElement("i", {
                                className: "fs-lg icon-office"
                            }), E.a.createElement("span", {
                                className: "mobile-title"
                            }, "工作经历")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "工作经历"), E.a.createElement("ul", {
                                className: "list-unstyled clear-margin"
                            }, t.map(function (e, a) {
                                return E.a.createElement("li", {
                                    key: a,
                                    className: "card card-nested clearfix"
                                }, E.a.createElement("div", {
                                    className: "content"
                                }, E.a.createElement("div", {
                                    className: "header"
                                }, E.a.createElement("h4", {
                                    className: "header-title"
                                }, E.a.createElement("a", {
                                    href: e.website,
                                    target: "_blank"
                                }, e.company)), E.a.createElement("p", {
                                    className: "header-text"
                                }, e.position)), E.a.createElement("p", {
                                    className: "text-muted"
                                }, E.a.createElement("small", null, E.a.createElement("span", {
                                    className: "space-right"
                                }, e.startDate, "", e.endDate))), E.a.createElement("div", {
                                    className: "mop-wrapper space-bottom"
                                }, E.a.createElement("p", null, e.summary)), E.a.createElement("ul", null, e.highlights.map(function (e, a) {
                                    return E.a.createElement("li", {
                                        key: a,
                                        className: "mop-wrapper"
                                    }, E.a.createElement("p", null, e))
                                }))))
                            })))), E.a.createElement("div", {
                                className: "detail",
                                id: "education"
                            }, E.a.createElement("div", {
                                className: "icon"
                            }, E.a.createElement("i", {
                                className: "fs-lg icon-graduation-cap"
                            }), E.a.createElement("span", {
                                className: "mobile-title"
                            }, "教育经历")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "教育经历"), E.a.createElement("div", {
                                className: "content"
                            }, E.a.createElement("ul", {
                                className: "list-unstyled clear-margin"
                            }, l.map(function (e, a) {
                                return E.a.createElement("li", {
                                    key: a,
                                    className: "card card-nested"
                                }, E.a.createElement("div", {
                                    className: "content"
                                }, E.a.createElement("p", {
                                    className: "clear-margin relative"
                                }, E.a.createElement("strong", null, e.institution, "，", e.studyType, "， "), e.area), E.a.createElement("p", {
                                    className: "text-muted"
                                }, E.a.createElement("small", null, e.startDate, " - ", e.endDate)), E.a.createElement("i", null, e.gpa), E.a.createElement("div", {
                                    className: "space-top labels"
                                }, e.courses.map(function (e, a) {
                                    return E.a.createElement("span", {
                                        key: a,
                                        className: "label label-info"
                                    }, e)
                                }))))
                            }))))), E.a.createElement("div", {
                                className: "detail",
                                id: "project-experience"
                            }, E.a.createElement("div", {
                                className: "icon"
                            }, E.a.createElement("i", {
                                className: "fs-lg icon-child"
                            }), E.a.createElement("span", {
                                className: "mobile-title"
                            }, "项目经验")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "项目经验"), E.a.createElement("div", {
                                className: "content"
                            }, E.a.createElement("ul", {
                                className: "list-unstyled clear-margin"
                            }, n.map(function (e, a) {
                                return E.a.createElement("li", {
                                    key: a,
                                    className: "card card-nested"
                                }, E.a.createElement("div", {
                                    className: "content"
                                }, E.a.createElement("div", {
                                    className: "header"
                                }, E.a.createElement("h4", {
                                    className: "header-title"
                                }, E.a.createElement("a", {
                                    href: e.website,
                                    target: "_blank"
                                }, e.organization)), E.a.createElement("p", {
                                    className: "header-text"
                                }, e.position)), E.a.createElement("p", {
                                    className: "text-muted"
                                }, E.a.createElement("small", null, e.startDate, " - ", e.endDate)), E.a.createElement("div", {
                                    className: "mop-wrapper space-bottom"
                                }, E.a.createElement("p", null, "技术栈：", e.summary)), E.a.createElement("ul", null, e.highlights.map(function (e, a) {
                                    return E.a.createElement("li", {
                                        key: a,
                                        className: "mop-wrapper"
                                    }, E.a.createElement("p", null, e))
                                }))))
                            }))))), E.a.createElement("div", {
                                className: "detail",
                                id: "publications"
                            }, E.a.createElement("div", {
                                className: "icon"
                            }, E.a.createElement("i", {
                                className: "fs-lg icon-newspaper"
                            }), E.a.createElement("span", {
                                className: "mobile-title"
                            }, "技能评价")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "技能评价"), E.a.createElement("div", {
                                className: "content"
                            }, E.a.createElement("ul", {
                                className: "list-unstyled clear-margin"
                            }, c.map(function (e, a) {
                                return E.a.createElement("li", {
                                    key: a,
                                    className: "card card-nested card-skills"
                                }, E.a.createElement("div", {
                                    className: "skill-info"
                                }, E.a.createElement("strong", null, e.name), E.a.createElement("div", {
                                    className: "space-top labels"
                                }, e.keywords.map(function (e, a) {
                                    return E.a.createElement("span", {
                                        key: a,
                                        className: "label label-info"
                                    }, e)
                                }))))
                            }))))), E.a.createElement("div", {
                                className: "detail",
                                id: "awards"
                            }, E.a.createElement("div", {
                                className: "icon"
                            }, E.a.createElement("i", {
                                className: "fs-lg icon-trophy"
                            }), E.a.createElement("span", {
                                className: "mobile-title"
                            }, "荣誉证书")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "荣誉证书"), E.a.createElement("div", {
                                className: "content"
                            }, E.a.createElement("ul", {
                                className: "list-unstyled clear-margin"
                            }, s.map(function (e, a) {
                                return E.a.createElement("li", {
                                    key: a,
                                    className: "card card-nested"
                                }, E.a.createElement("div", {
                                    className: "content"
                                }, E.a.createElement("p", {
                                    className: "clear-margin"
                                }, E.a.createElement("strong", null, e.title, " "), e.awarder), E.a.createElement("p", {
                                    className: "text-muted"
                                }, E.a.createElement("small", null, e.date)), E.a.createElement("div", {
                                    className: "mop-wrapper"
                                }, E.a.createElement("p", null, e.summary))))
                            }))))), E.a.createElement("div", {
                                className: "detail",
                                id: "interests"
                            }, E.a.createElement("div", {
                                className: "icon"
                            }, E.a.createElement("i", {
                                className: "fs-lg icon-heart"
                            }), E.a.createElement("span", {
                                className: "mobile-title"
                            }, "兴趣爱好")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "兴趣爱好"), E.a.createElement("div", {
                                className: "content"
                            }, E.a.createElement("ul", {
                                className: "list-unstyled clear-margin"
                            }, r.map(function (e, a) {
                                return E.a.createElement("li", {
                                    key: a,
                                    className: "card card-nested"
                                }, E.a.createElement("p", null, E.a.createElement("strong", null, e.name)), E.a.createElement("div", {
                                    className: "space-top labels"
                                }, e.keywords.map(function (e, a) {
                                    return E.a.createElement("span", {
                                        key: a,
                                        className: "label label-info"
                                    }, e)
                                })))
                            }))))), E.a.createElement("div", {
                                className: "detail",
                                id: "references"
                            }, E.a.createElement("div", {
                                className: "icon"
                            }, E.a.createElement("i", {
                                className: "fs-lg icon-thumbs-up"
                            }), E.a.createElement("span", {
                                className: "mobile-title"
                            }, "座右铭")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "座右铭"), E.a.createElement("div", {
                                className: "content"
                            }, E.a.createElement("ul", {
                                className: "list-unstyled clear-margin"
                            }, i.map(function (e, a) {
                                return E.a.createElement("li", {
                                    key: a,
                                    className: "card card-nested"
                                }, E.a.createElement("blockquote", {
                                    className: "quote"
                                }, E.a.createElement("p", null, e.reference), E.a.createElement("small", null, e.name)))
                            }))))))))
                        }
                    }]), t
                }(E.a.Component);
            a.a = g
        },
        220: function (e, a, t) {
            "use strict";
            var n = t(205),
                l = t.n(n),
                s = t(206),
                c = t.n(s),
                r = t(207),
                i = t.n(r),
                m = t(208),
                o = t.n(m),
                u = t(209),
                p = t.n(u),
                d = t(210),
                E = t.n(d),
                h = t(211),
                N = t.n(h),
                g = t(6),
                f = t.n(g),
                v = t(100),
                b = t.n(v),
                k = function (e) {
                    function a(e) {
                        var t;
                        return l()(this, a), t = i()(this, o()(a).call(this, e)), N()(E()(E()(t)), "handlerClick", function (e) {
                            var a = t.state.isOpen;
                            t.setState({
                                isOpen: !a
                            })
                        }), N()(E()(E()(t)), "scrollToAnchor", function (e) {
                            if (e) {
                                var a = document.getElementById(e);
                                a && (a.scrollIntoView(), t.setState({
                                    isOpen: !1
                                }))
                            }
                        }), t.state = {
                            isOpen: !1
                        }, t
                    }
                    return p()(a, e), c()(a, [{
                        key: "render",
                        value: function () {
                            var e = this,
                                a = this.state.isOpen,
                                t = b()({
                                    "js-floating-nav-trigger": !0,
                                    "floating-nav-trigger": !0,
                                    "is-open": a
                                }),
                                n = b()({
                                    "floating-nav": !0,
                                    "js-floating-nav": !0,
                                    "is-visible": a
                                });
                            return f.a.createElement("section", {
                                className: "col-md-12 nav-card-wrapper"
                            }, f.a.createElement("a", {
                                className: t,
                                href: "javascript:;",
                                onClick: this.handlerClick
                            }, f.a.createElement("i", {
                                className: "icon-bars"
                            }), f.a.createElement("span", {
                                className: "close-icon"
                            }, "×")), f.a.createElement("a", {
                                className: t,
                                href: "javascript:;",
                                onClick: this.props.renderHTMLtoPDF,
                                style: {
                                    bottom: "80px"
                                }
                            }, f.a.createElement("i", {
                                className: "glyphicon glyphicon-download-alt",
                                style: {
                                    lineHeight: "50px"
                                }
                            })), f.a.createElement("nav", {
                                className: n
                            }, f.a.createElement("ul", {
                                className: "list-unstyled"
                            }, f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("about")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-board"
                            }), "自我描述")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("work-experience")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-office"
                            }), "工作经历")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("education")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-graduation-cap"
                            }), "教育经历")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("project-experience")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-child"
                            }), "项目经验")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("publications")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-newspaper"
                            }), "作品展示")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("skills")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-tools"
                            }), "技能评价")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("awards")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-trophy"
                            }), "荣誉证书")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("interests")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-heart"
                            }), "兴趣爱好")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("references")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-thumbs-up"
                            }), "座右铭")))))
                        }
                    }]), a
                }(f.a.Component);
            a.a = k
        },
        221: function (e, a, t) {
            "use strict";
            a.a = {
                basics: {
                    position: "Web开发",
                    name: "李帅",
                    gender: "男",
                    age: "22",
                    worklife: "0",
                    label: "自先沉稳，而后爱人",
                    picture: "https://pic4.zhimg.com/v2-e740fec3f38acf7cab0f6977cd16e3a8_is.jpg",
                    email: "lishuai_chn@163.com",
                    phone: "18532124800",
                    website: "https://www.cnblogs.com/022414ls/",
                    summary: ["主要是 Web 后端开发",
					"遇到问题喜欢记录在博客，把解决方法分享出来，对于新技术有很强的学习兴趣",
					"喜欢折腾造轮子，有一些简单的开源项目，不定时会更新 Github（https://github.com/lishuai2414）", 
					"热爱生活，热爱美食，热爱摄影，热爱这世间的一切美好事物"
					],
                    location: "石家庄市长安区",
                    profiles: [{
                        network: "github",
                        username: "lishuai2414",
                        url: "https://github.com/lishuai2414"
                    }]
                },
                work: [{
                    summary: "暂无",
                    highlights: []
                }],
                project: [{
                    organization: "个人博客",
                    position: "Springboot",
                    website: "https://github.com/lishuai2414/sprintbootBlog",
                    startDate: "2019.10",
                    endDate: "2020.01",
                    summary: "H5 开发",
                    highlights: ["个人博客；", "实现博客的管理；", "实现标签的管理，分类的管理以及时间轴展示等功能。"]
                }, {
                    organization: "新闻管理",
                    position: "SSM",
                    website: "https://github.com/lishuai2414/NewsManage",
                    startDate: "2020.05",
                    endDate: "2020.09",
                    summary: "IDEA开发",
                    highlights: ["新闻博客管理系统；", "包括前端浏览新闻及评论功能；", "实现了对新闻的管理，对评论的管理；", "实现了对新闻分类的管理，后台菜单的管理；"]
                }, {
                    organization: "图书商城",
                    position: "Web",
                    website: "",
                    startDate: "2019.06",
                    endDate: "2019.10",
                    summary: "JSP + Servlet + MySQL + Tomcat",
                    highlights: ["图书商城", "实现了前端对于图书的浏览，以及加入购物车购买", "实现了后台对于图书的管理", "实现了对于图书分类的管理"]
                }, {
                    organization: "跑腿软件",
                    position: "APP",
                    website: "",
                    startDate: "2020.12",
                    endDate: "2021.02",
                    summary: "手机端APP",
                    highlights: ["包含了订单的发布，查看订单，接受订单以及取消订单等功能。"]
                }, {
                    organization: "河北省重大技术需求系统",
                    position: "Web",
                    website: "",
                    startDate: "2019.09",
                    endDate: "2019.12",
                    summary: "JSP + Servlet",
                    highlights: ["问卷的填报，过程的审核；", "不同角色的权限不同", "实现了树形菜单展示以及三级联动功能；"]
                }],
                education: [{
                    institution: "石家庄铁道大学",
                    area: "软件工程",
                    studyType: "本科",
                    startDate: "2018-09",
                    endDate: "2022-06",
                    gpa: "3.0",
                    courses: ["数据结构", "统一建模语言", "软件工程", "数据库原理", "计算机网络"]
                }],
                awards: [{
                    title: "四级证书",
                    date: "2020-12",
                    awarder: "教育部考试中心",
                    summary: ""
                }],
                publications: [{
                    name: "angular-weui",
                    publisher: "skyvow",
                    releaseDate: "2016-10",
                    website: "https://github.com/skyvow/angular-weui",
                    summary: "Angular WeUI - 基于WeUI封装一些常用指令及服务"
                }, {
                    name: "wux",
                    publisher: "skyvow",
                    releaseDate: "2016-10",
                    website: "https://github.com/skyvow/wux",
                    summary: "wux - 微信小程序自定义组件（对话框、指示器、五星评分...）"
                }, {
                    name: "m-mall",
                    publisher: "skyvow",
                    releaseDate: "2016-12",
                    website: "https://github.com/skyvow/m-mall",
                    summary: "微信小程序-小商城前台（简单的商城 DEMO，支付未完善）"
                }, {
                    name: "m-mall-admin",
                    publisher: "skyvow",
                    releaseDate: "2016-12",
                    website: "https://github.com/skyvow/m-mall-admin",
                    summary: "微信小程序-小商城后台（基于 NodeJS 实现 restful API）"
                }, {
                    name: "skyvow.github.io",
                    publisher: "skyvow",
                    releaseDate: "2017-4",
                    website: "https://github.com/skyvow/skyvow.github.io",
                    summary: "My resume - 基于 React + React-router + ES6 前端项目"
                }],
                skills: [{
                    name: "前端",
                    level: "master",
                    keywords: ["HTML", "CSS", "Javascript", "jQuery", "JSP", "echarts"]
                }, {
                    name: "后端",
                    level: "master",
                    keywords: ["Java", "Python"]
                }],
                languages: [{
                    language: "中文",
                    fluency: "母语"
                },{
                    lanaguage:"English",
					fluency: "第二门语言"
                }],
                interests: [{
                    name: "体育",
                    keywords: ["乒乓球", "羽毛球"]
                },{
                    name: "阅读",
                    keywords: ["阅读"]
                }],
                references: [{
                    name: "奥勃鲁切夫",
                    reference: "人能为自己心爱的工作贡献出全部力量、全部精力、全部知识，那么这项工作将完成得出色，收效也更大。"
                }]
            }
        },
        222: function (e, C, A) {
            "use strict";
            A.r(C),
            function (e) {
                var a = A(205),
                    c = A.n(a),
                    t = A(206),
                    n = A.n(t),
                    l = A(207),
                    r = A.n(l),
                    s = A(208),
                    i = A.n(s),
                    m = A(209),
                    o = A.n(m),
                    u = A(210),
                    p = A.n(u),
                    d = A(211),
                    E = A.n(d),
                    h = A(6),
                    N = A.n(h),
                    g = A(101),
                    f = A.n(g),
                    v = A(104),
                    b = A.n(v),
                    k = A(215),
                    y = A(217),
                    w = A(218),
                    S = A(219),
                    D = A(220),
                    W = A(221),
                    x = function (e) {
                        function s() {
                            var e, a;
                            c()(this, s);
                            for (var t = arguments.length, n = new Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return a = r()(this, (e = i()(s)).call.apply(e, [this].concat(n))), E()(p()(p()(a)), "renderHTMLtoPDF", function () {
                                f()(document.body, {
                                    onrendered: function (e) {
                                        var a = e.width,
                                            t = e.height,
                                            n = a / 592.28 * 841.89,
                                            l = t,
                                            s = 0,
                                            c = 592.28 / a * t,
                                            r = e.toDataURL("image/jpeg", 1),
                                            i = new b.a("", "pt", "a4");
                                        if (l < n) i.addImage(r, "JPEG", 0, 0, 595.28, c);
                                        else for (; 0 < l;) i.addImage(r, "JPEG", 0, s, 595.28, c), s -= 841.89, 0 < (l -= n) && i.addPage();
                                        i.save("郭海龙-web前端.pdf")
                                    }
                                })
                            }), a
                        }
                        return o()(s, e), n()(s, [{
                            key: "componentDidMount",
                            value: function () {
                                document.getElementById("loading").style.display = "none"
                            }
                        }, {
                            key: "render",
                            value: function () {
                                return N.a.createElement("div", {
                                    className: "container-fluid"
                                }, N.a.createElement("div", {
                                    className: "row main clearfix"
                                }, N.a.createElement(D.a, {
                                    renderHTMLtoPDF: this.renderHTMLtoPDF
                                }), N.a.createElement(y.a, W.a), N.a.createElement(S.a, W.a), N.a.createElement(w.a, null)))
                            }
                        }]), s
                    }(N.a.Component);
                C.
                default = Object(k.hot)(e)(x)
            }.call(this, A(214)(e))
        }
    }]);