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
                            }, a.gender, " ", a.age, "??? ", a.worklife, "???????????????")), N.a.createElement("div", {
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
                            }, "????????????  ", E.a.createElement("span", {
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
                            }, "????????????"), E.a.createElement("hr", null), E.a.createElement("div", {
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
                            }, "????????????")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "????????????"), E.a.createElement("ul", {
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
                            }, "????????????")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "????????????"), E.a.createElement("ul", {
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
                            }, "????????????")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "????????????"), E.a.createElement("div", {
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
                                }, E.a.createElement("strong", null, e.institution, "???", e.studyType, "?????"), e.area), E.a.createElement("p", {
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
                            }, "????????????")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "????????????"), E.a.createElement("div", {
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
                                }, E.a.createElement("p", null, "????????????", e.summary)), E.a.createElement("ul", null, e.highlights.map(function (e, a) {
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
                            }, "????????????")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "????????????"), E.a.createElement("div", {
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
                            }, "????????????")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "????????????"), E.a.createElement("div", {
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
                            }, "????????????")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "????????????"), E.a.createElement("div", {
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
                            }, "?????????")), E.a.createElement("div", {
                                className: "info"
                            }, E.a.createElement("h4", {
                                className: "title text-uppercase"
                            }, "?????????"), E.a.createElement("div", {
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
                            }, "??")), f.a.createElement("a", {
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
                            }), "????????????")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("work-experience")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-office"
                            }), "????????????")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("education")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-graduation-cap"
                            }), "????????????")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("project-experience")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-child"
                            }), "????????????")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("publications")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-newspaper"
                            }), "????????????")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("skills")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-tools"
                            }), "????????????")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("awards")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-trophy"
                            }), "????????????")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("interests")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-heart"
                            }), "????????????")), f.a.createElement("li", null, f.a.createElement("a", {
                                href: "javascript:;",
                                onClick: function () {
                                    return e.scrollToAnchor("references")
                                }
                            }, f.a.createElement("i", {
                                className: "mr-10 icon-thumbs-up"
                            }), "?????????")))))
                        }
                    }]), a
                }(f.a.Component);
            a.a = k
        },
        221: function (e, a, t) {
            "use strict";
            a.a = {
                basics: {
                    position: "Web??????",
                    name: "??????",
                    gender: "???",
                    age: "22",
                    worklife: "0",
                    label: "???????????????????????????",
                    picture: "https://pic4.zhimg.com/v2-e740fec3f38acf7cab0f6977cd16e3a8_is.jpg",
                    email: "lishuai_chn@163.com",
                    phone: "18532124800",
                    website: "https://www.cnblogs.com/022414ls/",
                    summary: ["????????? Web ????????????",
					"?????????????????????????????????????????????????????????????????????????????????????????????????????????",
					"??????????????????????????????????????????????????????????????????????????? Github???https://github.com/lishuai2414???", 
					"?????????????????????????????????????????????????????????????????????????????????"
					],
                    location: "?????????????????????",
                    profiles: [{
                        network: "github",
                        username: "lishuai2414",
                        url: "https://github.com/lishuai2414"
                    }]
                },
                work: [{
                    summary: "??????",
                    highlights: []
                }],
                project: [{
                    organization: "????????????",
                    position: "Springboot",
                    website: "https://github.com/lishuai2414/sprintbootBlog",
                    startDate: "2019.10",
                    endDate: "2020.01",
                    summary: "H5 ??????",
                    highlights: ["???????????????", "????????????????????????", "????????????????????????????????????????????????????????????????????????"]
                }, {
                    organization: "????????????",
                    position: "SSM",
                    website: "https://github.com/lishuai2414/NewsManage",
                    startDate: "2020.05",
                    endDate: "2020.09",
                    summary: "IDEA??????",
                    highlights: ["???????????????????????????", "??????????????????????????????????????????", "???????????????????????????????????????????????????", "????????????????????????????????????????????????????????????"]
                }, {
                    organization: "????????????",
                    position: "Web",
                    website: "",
                    startDate: "2019.06",
                    endDate: "2019.10",
                    summary: "JSP + Servlet + MySQL + Tomcat",
                    highlights: ["????????????", "??????????????????????????????????????????????????????????????????", "????????????????????????????????????", "????????????????????????????????????"]
                }, {
                    organization: "????????????",
                    position: "APP",
                    website: "",
                    startDate: "2020.12",
                    endDate: "2021.02",
                    summary: "?????????APP",
                    highlights: ["????????????????????????????????????????????????????????????????????????????????????"]
                }, {
                    organization: "?????????????????????????????????",
                    position: "Web",
                    website: "",
                    startDate: "2019.09",
                    endDate: "2019.12",
                    summary: "JSP + Servlet",
                    highlights: ["????????????????????????????????????", "???????????????????????????", "??????????????????????????????????????????????????????"]
                }],
                education: [{
                    institution: "?????????????????????",
                    area: "????????????",
                    studyType: "??????",
                    startDate: "2018-09",
                    endDate: "2022-06",
                    gpa: "3.0",
                    courses: ["????????????", "??????????????????", "????????????", "???????????????", "???????????????"]
                }],
                awards: [{
                    title: "????????????",
                    date: "2020-12",
                    awarder: "?????????????????????",
                    summary: ""
                }],
                publications: [{
                    name: "angular-weui",
                    publisher: "skyvow",
                    releaseDate: "2016-10",
                    website: "https://github.com/skyvow/angular-weui",
                    summary: "Angular WeUI - ??????WeUI?????????????????????????????????"
                }, {
                    name: "wux",
                    publisher: "skyvow",
                    releaseDate: "2016-10",
                    website: "https://github.com/skyvow/wux",
                    summary: "wux - ?????????????????????????????????????????????????????????????????????...???"
                }, {
                    name: "m-mall",
                    publisher: "skyvow",
                    releaseDate: "2016-12",
                    website: "https://github.com/skyvow/m-mall",
                    summary: "???????????????-????????????????????????????????? DEMO?????????????????????"
                }, {
                    name: "m-mall-admin",
                    publisher: "skyvow",
                    releaseDate: "2016-12",
                    website: "https://github.com/skyvow/m-mall-admin",
                    summary: "???????????????-???????????????????????? NodeJS ?????? restful API???"
                }, {
                    name: "skyvow.github.io",
                    publisher: "skyvow",
                    releaseDate: "2017-4",
                    website: "https://github.com/skyvow/skyvow.github.io",
                    summary: "My resume - ?????? React + React-router + ES6 ????????????"
                }],
                skills: [{
                    name: "??????",
                    level: "master",
                    keywords: ["HTML", "CSS", "Javascript", "jQuery", "JSP", "echarts"]
                }, {
                    name: "??????",
                    level: "master",
                    keywords: ["Java", "Python"]
                }],
                languages: [{
                    language: "??????",
                    fluency: "??????"
                },{
                    lanaguage:"English",
					fluency: "???????????????"
                }],
                interests: [{
                    name: "??????",
                    keywords: ["?????????", "?????????"]
                },{
                    name: "??????",
                    keywords: ["??????"]
                }],
                references: [{
                    name: "???????????????",
                    reference: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
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
                                        i.save("?????????-web??????.pdf")
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
