(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [734],
  {
    69403: function (e, n, t) {
      "use strict";
      var r, a, i, o, s, l, u, c, d;
      t.d(n, {
        Jq: function () {
          return s;
        },
        Os: function () {
          return i;
        },
        uU: function () {
          return o;
        },
      }),
        ((l = r || (r = {})).Default = "default"),
        (l.Dark = "dark"),
        ((a || (a = {})).Retrieval = "retrieval"),
        ((u = i || (i = {})).Next = "next"),
        (u.Variant = "variant"),
        (u.Continue = "continue"),
        ((c = o || (o = {})).Unknown = "unknown"),
        (c.User = "user"),
        (c.Assistant = "assistant"),
        (c.System = "system"),
        (c.Critic = "critic"),
        (c.Tool = "tool"),
        ((d = s || (s = {})).Root = "root"),
        (d.System = "system"),
        (d.Prompt = "prompt"),
        (d.Completion = "completion");
    },
    75515: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(35250),
        a = t(19841);
      function i(e) {
        var n = e.url,
          t = e.name,
          i = e.size,
          o = e.large,
          s = e.className;
        return (0, r.jsxs)("div", {
          className: (0, a.Z)("relative", s),
          style: { width: i, height: i },
          children: [
            (0, r.jsx)("img", {
              src: n,
              alt: "".concat(t, " logo"),
              className: (0, a.Z)(
                "h-full w-full bg-white",
                o ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
            (0, r.jsx)("div", {
              className: (0, a.Z)(
                "absolute inset-0 ring-1 ring-inset ring-black/10",
                o ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
          ],
        });
      }
    },
    46110: function (e, n, t) {
      "use strict";
      t.d(n, {
        Ph: function () {
          return w;
        },
        Yt: function () {
          return M;
        },
        k$: function () {
          return j;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(19841),
        o = t(54887),
        s = t.n(o),
        l = t(1454),
        u = t(13002),
        c = t(34303),
        d = t(64135),
        f = t(88038),
        h = t(75515),
        g = t(38317);
      function m() {
        var e = (0, r._)([
          "relative p-1 ",
          " text-white flex items-center justify-center",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, r._)([
          "\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (0, r._)([
          "bg-[#5436DA] text-white flex justify-center items-center relative tracking-widest",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = (0, r._)(["relative flex"]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      var b = c.Z.div(m(), function (e) {
          return e.$isMessageRedesign
            ? "rounded-full h-7 w-7"
            : "rounded-sm h-[30px] w-[30px]";
        }),
        y = c.Z.span(
          p(),
          function (e) {
            return "warning" === e.$type && "bg-orange-500 text-white";
          },
          function (e) {
            return "danger" === e.$type && "bg-red-500 text-white";
          }
        ),
        j = function (e) {
          var n = e.iconName,
            t = e.background,
            r = e.notice,
            i = (0, d.hz)().has(f.FZ),
            o = g.nI;
          switch (n) {
            case "globe":
              o = l.RsK;
              break;
            case "terminal":
              o = l.cDN;
              break;
            case "text":
              o = l.RUS;
              break;
            case "browsing":
              o = l.jRj;
              break;
            case "code":
              o = u.oT$;
              break;
            case "plugin":
              o = l.yG;
              break;
            case "user":
              o = l.fzv;
          }
          return (0, a.jsxs)(b, {
            $isMessageRedesign: i,
            style: { backgroundColor: t },
            children: [
              (0, a.jsx)(g.ZP, {
                icon: o,
                size: "medium",
                className: i ? "!h-5 !w-5" : "",
              }),
              r && (0, a.jsx)(y, { $type: r, children: "!" }),
            ],
          });
        },
        w = function (e) {
          var n = e.plugin,
            t = e.notice,
            r = (0, d.hz)().has(f.FZ);
          return (0, a.jsxs)(b, {
            $isMessageRedesign: r,
            className: "p-0",
            children: [
              (0, a.jsx)(h.Z, {
                url: n.manifest.logo_url,
                name: n.manifest.name_for_human,
                size: "100%",
              }),
              t && (0, a.jsx)(y, { $type: t, children: "!" }),
            ],
          });
        },
        k = c.Z.div(v()),
        C = c.Z.div(x()),
        _ = { small: 20, redesign: 28, medium: 38 },
        M = function (e) {
          var n,
            t = e.user,
            r = e.size,
            o = e.notice,
            u = o && (0, a.jsx)(y, { $type: o, children: "!" }),
            c = (0, d.hz)().has(f.FZ);
          if ((null == t ? void 0 : t.picture) != null)
            return (0, a.jsxs)(C, {
              children: [
                (0, a.jsx)(s(), {
                  src: t.picture,
                  alt: "User",
                  width: _[r],
                  height: _[r],
                  className: c ? "rounded-full" : "rounded-sm",
                }),
                u,
              ],
            });
          var h = (
            null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : ""
          )
            .split(" ")
            .map(function (e) {
              return e[0];
            })
            .join("")
            .toUpperCase();
          return (0, a.jsxs)(k, {
            className: (0, i.Z)(
              "redesign" === r
                ? "h-7 w-7 text-xs"
                : "small" === r
                ? "h-5 w-5 text-xs"
                : "h-[30px] w-[30px] text-xs",
              c ? "rounded-full" : "rounded-sm"
            ),
            children: [
              h ||
                (0, a.jsx)(g.ZP, {
                  icon: l.fzv,
                  size: "redesign" === r ? "small" : r,
                }),
              u,
            ],
          });
        };
    },
    77706: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return es;
        },
      });
      var r = t(22830),
        a = t(35250),
        i = t(61888),
        o = t(70079),
        s = t(39324),
        l = t(71209),
        u = t(3001),
        c = t(75908),
        d = t(35290),
        f = t(82841),
        h = t(36218),
        g = t(32787),
        m = t(85023),
        p = t(64135),
        v = t(88038),
        x = t(55041),
        b = (0, u.vU)({
          welcomeBack: {
            id: "existingUserAgeConfirmationModal.welcomeBack",
            defaultMessage: "Welcome back, Italy!",
            description:
              "Title for the age confirmation modal for Italian users",
          },
          ageRequirementsButton: {
            id: "existingUserAgeConfirmationModal.ageRequirementsButton",
            defaultMessage: "I meet OpenAI's age requirements",
            description:
              "Primary button to confirm the user meets the age requirements",
          },
          logoutButton: {
            id: "existingUserAgeConfirmationModal.logoutButton",
            defaultMessage: "Log out",
            description: "Secondary button to log out of the platform",
          },
          announcementParagraph1: {
            id: "existingUserAgeConfirmationModal.announcementParagraph1",
            defaultMessage:
              "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
            description:
              "First paragraph of the announcement, explaining the age requirements",
          },
          privacyPolicyLink: {
            id: "existingUserAgeConfirmationModal.privacyPolicyLink",
            defaultMessage: "Privacy policy",
            description: "Link to the privacy policy",
          },
          helpCenterArticleLink: {
            id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
            defaultMessage: "this help center article",
            description:
              "Link to the help center article about ChatGPT development",
          },
          announcementParagraph2: {
            id: "existingUserAgeConfirmationModal.announcementParagraph2",
            defaultMessage:
              "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
            description:
              "Second paragraph of the announcement, providing links to more information",
          },
        }),
        y = "2023-04-25",
        j = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(y);
      function w(e) {
        var n = e.onClose,
          t = (0, c.Z)(),
          r = (0, o.useCallback)(
            function () {
              m.m.setItem(j, !0), n();
            },
            [n]
          ),
          s = (0, f.WS)();
        return (
          (0, o.useEffect)(function () {
            s && s(h.s6.ageConfirmationModal, { content: y });
          }, []),
          (0, a.jsx)(x.ZP, {
            isOpen: !0,
            onModalClose: i.noop,
            type: "success",
            title: t.formatMessage(b.welcomeBack),
            primaryButton: (0, a.jsx)(x.mH, {
              title: t.formatMessage(b.ageRequirementsButton),
              color: "primary",
              onClick: r,
            }),
            secondaryButton: (0, a.jsx)(x.mH, {
              title: t.formatMessage(b.logoutButton),
              color: "light",
              onClick: function () {
                s(h.s6.clickLogOut, { eventSource: "mouse" }), (0, g.w7)();
              },
              className: "border-gray-800 hover:border-gray-700",
            }),
            children: (0, a.jsx)(k, {}),
          })
        );
      }
      var k = function () {
          var e = (0, c.Z)();
          return (0, a.jsx)("div", {
            className: "mb-6 mt-4 sm:mt-6",
            children: (0, a.jsxs)("div", {
              className: "prose prose-invert text-base text-gray-500",
              children: [
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    d.Z,
                    (0, s._)({}, b.announcementParagraph1)
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    d.Z,
                    (0, l._)((0, s._)({}, b.announcementParagraph2), {
                      values: {
                        privacyPolicyLink: (0, a.jsx)("a", {
                          href: "https://openai.com/policies/privacy-policy",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(b.privacyPolicyLink),
                        }),
                        helpCenterArticleLink: (0, a.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(b.helpCenterArticleLink),
                        }),
                      },
                    })
                  ),
                }),
              ],
            }),
          });
        },
        C = t(19208),
        _ = t.n(C),
        M = t(68555),
        T = t(4337),
        N = t(34303),
        I = t(5759),
        P = t(66958);
      function S() {
        var e = (0, T._)(["flex gap-4 mt-6"]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function Z(e) {
        var n = e.onBack,
          t = e.onNext,
          r = e.onSubmit;
        return (0, a.jsxs)(R, {
          children: [
            n &&
              (0, a.jsx)(P.z, {
                as: "button",
                color: "neutral",
                onClick: n,
                children: "Back",
              }),
            t &&
              (0, a.jsx)(P.z, {
                as: "button",
                onClick: t,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(P.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var R = N.Z.div(S());
      function A() {
        var e = (0, T._)(["prose dark:prose-invert"]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = (0, T._)(["mb-4"]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      var F = (0, u.vU)({
          keepInMind: {
            id: "onboarding.keepInMind",
            defaultMessage:
              "Here are a few things to keep in mind before we get started:",
            description: "Introduction text for the onboarding process",
          },
          page0Subtitle: {
            id: "onboarding.page0Subtitle",
            defaultMessage: "This is a free research preview.",
            description: "Subtitle for Page 0",
          },
          page0Disclaimer1: {
            id: "onboarding.page0Disclaimer1",
            defaultMessage:
              "Our goal is to get external feedback in order to improve our systems and make them safer.",
            description: "Disclaimer 1 for Page 0",
          },
          page0Disclaimer2: {
            id: "onboarding.page0Disclaimer2",
            defaultMessage:
              "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
            description: "Disclaimer 2 for Page 0",
          },
          page1Subtitle: {
            id: "onboarding.page1Subtitle",
            defaultMessage: "How we collect data",
            description: "Subtitle for Page 1",
          },
          page1Disclaimer1: {
            id: "onboarding.page1Disclaimer1",
            defaultMessage:
              "Conversations may be reviewed by our AI trainers to improve our systems.",
            description: "Disclaimer 1 for Page 1",
          },
          page1Disclaimer2: {
            id: "onboarding.page1Disclaimer2",
            defaultMessage:
              "Please don't share any sensitive information in your conversations.",
            description: "Disclaimer 2 for Page 1",
          },
          page2Subtitle: {
            id: "onboarding.page2Subtitle",
            defaultMessage: "We'd love your feedback!",
            description: "Subtitle for Page 2",
          },
          page2Disclaimer1: {
            id: "onboarding.page2Disclaimer1",
            defaultMessage:
              "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
            description: "Disclaimer 1 for Page 2",
          },
          page2Disclaimer2: {
            id: "onboarding.page2Disclaimer2",
            defaultMessage:
              "Share your feedback in our <link>Discord server</link>.",
            description: "Disclaimer 2 for Page 2, with link to Discord",
          },
        }),
        L = "oai/apps/hasSeenOnboarding",
        E = function () {
          var e = (0, o.useCallback)(function () {
              m.m.setItem(
                "".concat(L, "/chat"),
                new Date().toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            }, []),
            n = (0, r._)((0, o.useState)(null), 2),
            t = n[0],
            a = n[1];
          (0, o.useEffect)(
            function () {
              var e = m.m.getItem("".concat(L, "/chat"));
              a(!!e && e);
            },
            [a]
          );
          var i = (0, o.useCallback)(
            function () {
              return new Date();
            },
            [t]
          );
          return (0, o.useMemo)(
            function () {
              return { setHasSeenOnboarding: e, getHasSeenOnboardingDate: i };
            },
            [i, e]
          );
        };
      function B(e) {
        var n = e.onClose,
          t = E().setHasSeenOnboarding,
          i = (0, r._)((0, o.useState)(0), 2),
          s = i[0],
          l = i[1],
          u = (0, o.useCallback)(
            function () {
              n(!0), t();
            },
            [n, t]
          );
        return (0, a.jsxs)(z, {
          children: [
            0 === s && (0, a.jsx)(O, { onChangePage: l }),
            1 === s && (0, a.jsx)(q, { onChangePage: l }),
            2 === s && (0, a.jsx)(U, { onChangePage: l, onSubmit: u }),
          ],
        });
      }
      var O = function (e) {
          var n = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(H, {
                children: (0, a.jsx)(d.Z, (0, s._)({}, F.page0Subtitle)),
              }),
              (0, a.jsxs)(I.I, {
                children: [
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDD2C",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, F.page0Disclaimer1)),
                  }),
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, F.page0Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(Z, {
                onNext: function () {
                  return n(1);
                },
              }),
            ],
          });
        },
        q = function (e) {
          var n = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(H, {
                children: (0, a.jsx)(d.Z, (0, s._)({}, F.page1Subtitle)),
              }),
              (0, a.jsxs)(I.I, {
                children: [
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83E\uDDBE",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, F.page1Disclaimer1)),
                  }),
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDD10",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, F.page1Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(Z, {
                onBack: function () {
                  return n(0);
                },
                onNext: function () {
                  return n(2);
                },
              }),
            ],
          });
        },
        U = function (e) {
          var n = e.onChangePage,
            t = e.onSubmit,
            r = (0, o.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(H, {
                children: (0, a.jsx)(d.Z, (0, s._)({}, F.page2Subtitle)),
              }),
              (0, a.jsxs)(I.I, {
                children: [
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDC4D",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, F.page2Disclaimer1)),
                  }),
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDCAC",
                    children: (0, a.jsx)(
                      d.Z,
                      (0, l._)((0, s._)({}, F.page2Disclaimer2), {
                        values: {
                          link: function (e) {
                            return (0, a.jsx)("a", {
                              href: "https://discord.gg/openai",
                              target: "_blank",
                              rel: "noreferrer",
                              children: e,
                            });
                          },
                        },
                      })
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(Z, {
                onBack: function () {
                  return n(1);
                },
                onSubmit: function () {
                  return null == t ? void 0 : t(r);
                },
              }),
            ],
          });
        },
        z = N.Z.div(A()),
        H = N.Z.h4(D()),
        V = t(5046),
        W = (0, u.vU)({
          tryGPT4: {
            id: "releaseAnnouncement.tryGPT4",
            defaultMessage: "Try GPT-4",
            description: "Button text to try GPT-4",
          },
          maybeLater: {
            id: "releaseAnnouncement.maybeLater",
            defaultMessage: "Maybe later",
            description: "Button text to dismiss the release announcement",
          },
          introducingGPT4: {
            id: "releaseAnnouncement.introducingGPT4",
            defaultMessage: "Introducing GPT-4",
            description: "Heading for the GPT-4 release announcement",
          },
          ourLatestModel: {
            id: "releaseAnnouncement.ourLatestModel",
            defaultMessage:
              "Our latest model, <link>GPT-4</link>, is now available to Plus subscribers.",
            description:
              "Text to introduce GPT-4 and provide a link to its product page",
          },
          advancedReasoning: {
            id: "releaseAnnouncement.advancedReasoning",
            defaultMessage: "Advanced reasoning",
            description: "List item highlighting advanced reasoning in GPT-4",
          },
          complexInstructions: {
            id: "releaseAnnouncement.complexInstructions",
            defaultMessage: "Complex instructions",
            description: "List item highlighting complex instructions in GPT-4",
          },
          moreCreativity: {
            id: "releaseAnnouncement.moreCreativity",
            defaultMessage: "More creativity",
            description: "List item highlighting more creativity in GPT-4",
          },
          dynamicAdjustment: {
            id: "releaseAnnouncement.dynamicAdjustment",
            defaultMessage:
              "To give every Plus subscriber a chance to try the model, we'll dynamically adjust the cap for GPT-4 usage based on demand.",
            description:
              "Text explaining the dynamic adjustment of GPT-4 usage based on demand",
          },
          feb13Update: {
            id: "releaseAnnouncement.feb13Update",
            defaultMessage: "Feb 13 update",
            description: "Text for the February 13 update announcement",
          },
          turboToDefault: {
            id: "releaseAnnouncement.turboToDefault",
            defaultMessage: "Turbo",
            description: "Text for Turbo version in the announcement",
          },
          defaultVersion: {
            id: "releaseAnnouncement.defaultVersion",
            defaultMessage: "Default",
            description: "Text for the Default version in the announcement",
          },
          turboDefaultSwitch: {
            id: "releaseAnnouncement.turboDefaultSwitch",
            defaultMessage:
              "Based on user feedback, we're defaulting you to a faster version of ChatGPT, previously known as Turbo. We'll keep the previous version around for a while.",
            description:
              "Text explaining the switch from Turbo to the Default version based on user feedback",
          },
          gpt4HasEnhancedCapabilities: {
            id: "releaseAnnouncement.gpt4HasEnhancedCapabilities",
            defaultMessage: "GPT-4 has enhanced capabilities in:",
            description: "Text to introduce GPT-4's enhanced capabilities",
          },
        }),
        G = "2023-03-12",
        Q = "".concat("oai/apps/hasSeenReleaseAnnouncement", "/").concat(G);
      function $(e) {
        var n = e.onClose,
          t = (0, M.useRouter)(),
          r = (0, o.useCallback)(
            function () {
              m.m.setItem(Q, !0), n();
            },
            [n]
          ),
          i = (0, o.useCallback)(
            function () {
              r(), t.replace("/?model=".concat(V.R9));
            },
            [r, t]
          ),
          s = (0, f.WS)();
        return (
          (0, o.useEffect)(function () {
            s && s(h.s6.announcementViewed, { content: G });
          }, []),
          (0, a.jsx)(x.ZP, {
            isOpen: !0,
            onModalClose: r,
            type: "success",
            title: "",
            theme: "dark",
            fullBleed: !0,
            primaryButton: (0, a.jsx)(x.mH, {
              title: "Try GPT-4",
              color: "light",
              onClick: i,
            }),
            secondaryButton: (0, a.jsx)(x.mH, {
              title: "Maybe later",
              color: "dark",
              onClick: r,
              className: "border-gray-800 hover:border-gray-700",
            }),
            children: (0, a.jsx)(J, {}),
          })
        );
      }
      var J = function () {
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(_(), {
                src: "/images/gpt-4-motif.svg",
                alt: "Gpt-4 announcement banner",
                width: "480",
                height: "160",
                className: "mt-3.5 w-full",
              }),
              (0, a.jsx)("div", {
                className: "m-4 mb-6 flex flex-col gap-6 sm:m-6",
                children: (0, a.jsxs)("div", {
                  className: "prose prose-invert text-base",
                  children: [
                    (0, a.jsx)("h2", {
                      children: (0, a.jsx)(
                        d.Z,
                        (0, s._)({}, W.introducingGPT4)
                      ),
                    }),
                    (0, a.jsx)("p", {
                      children: (0, a.jsx)(
                        d.Z,
                        (0, l._)((0, s._)({}, W.ourLatestModel), {
                          tagName: "span",
                          values: {
                            link: function (e) {
                              return (0, a.jsx)("a", {
                                href: "https://openai.com/product/gpt-4",
                                target: "_blank",
                                rel: "noreferrer",
                                children: e,
                              });
                            },
                          },
                        })
                      ),
                    }),
                    (0, a.jsx)("p", {
                      children: (0, a.jsx)(
                        d.Z,
                        (0, s._)({}, W.gpt4HasEnhancedCapabilities)
                      ),
                    }),
                    (0, a.jsxs)("ul", {
                      children: [
                        (0, a.jsxs)("li", {
                          children: [
                            (0, a.jsx)(d.Z, (0, s._)({}, W.advancedReasoning)),
                            " ",
                          ],
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsx)(
                            d.Z,
                            (0, s._)({}, W.complexInstructions)
                          ),
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsx)(
                            d.Z,
                            (0, s._)({}, W.moreCreativity)
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      children: (0, a.jsx)(
                        d.Z,
                        (0, s._)({}, W.dynamicAdjustment)
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Y = t(81292),
        X = t(47130),
        K = (0, u.vU)({
          okay: {
            id: "modal.okayButton",
            defaultMessage: "Okay",
            description: "Confirmation button label in modal",
          },
        }),
        ee = (0, u.vU)({
          sharedConversation: {
            id: "sharedConversationAnnouncement.shareConversation",
            defaultMessage: "Share conversations",
            description: "Title for modal announcing shared conversations",
          },
          body: {
            id: "sharedConversationAnnouncement.shareConversation",
            defaultMessage:
              "You can now share your ChatGPT conversations! Click the share icon in the sidebar to create a link. <link>Learn more</link>.",
            description: "Body for modal announcing shared conversations",
          },
          sidebarImageAlt: {
            id: "sharedConversationAnnouncement.sidebarImageAlt",
            defaultMessage: "Screenshot of sidebar with share icon highlighted",
            description: "Alt image text",
          },
        }),
        en = "oai/apps/announcement/sharedConversations",
        et = (0, Y.ZP)(function () {
          var e = m.m.getItem(en);
          e = 1;
          return { seenDate: "number" == typeof e && e };
        });
      function er() {
        var e = Date.now();
        m.m.setItem(en, e), et.setState({ seenDate: e });
      }
      function ea() {
        var e = (0, c.Z)();
        return (0, a.jsxs)(x.ZP, {
          isOpen: !0,
          onModalClose: er,
          type: "success",
          title: e.formatMessage(ee.sharedConversation),
          primaryButton: (0, a.jsx)(x.mH, {
            onClick: er,
            children: (0, a.jsx)(d.Z, (0, s._)({}, K.okay)),
          }),
          children: [
            (0, a.jsx)("div", {
              className: "prose text-base text-gray-600 dark:text-gray-400",
              children: (0, a.jsx)("p", {
                children: (0, a.jsx)(
                  d.Z,
                  (0, l._)((0, s._)({}, ee.body), {
                    values: {
                      link: function (e) {
                        return (0, a.jsx)("a", {
                          href: X.j,
                          className: "font-normal",
                          target: "_blank",
                          rel: "noreferrer",
                          children: e,
                        });
                      },
                    },
                  })
                ),
              }),
            }),
            (0, a.jsx)("div", {
              className: "mt-6 flex justify-center",
              children: (0, a.jsx)("img", {
                src: "/images/share-sidebar-link.png",
                alt: e.formatMessage(ee.sidebarImageAlt),
                className: "max-w-[14rem] rounded overflow-hidden",
              }),
            }),
          ],
        });
      }
      var ei = function (e) {
          var n = e.onClose;
          return (0, a.jsx)(x.ZP, {
            isOpen: !0,
            onModalClose: i.noop,
            type: "success",
            primaryButton: void 0,
            title: "ChatGPT",
            children: (0, a.jsx)(B, { onClose: n }),
          });
        },
        eo = function (e) {
          var n = e.onClose;
          return (0, a.jsx)($, { onClose: n });
        };
      function es(e) {
        var n,
          t,
          i,
          s = e.userCountry,
          l = (0, r._)((0, o.useState)(0), 2),
          u = l[0],
          c = l[1],
          d = E().getHasSeenOnboardingDate,
          f =
            ((t = (n = (0, p.hz)()).has(v.Vn)),
            (i = !!m.m.getItem(j)),
            0 === n.size
              ? "loading"
              : "IT" !== s || i
              ? "hide"
              : t
              ? "show"
              : "hide"),
          h = (function () {
            var e = E().getHasSeenOnboardingDate,
              n = (0, p.Xj)().isLoading,
              t = (0, p.hz)();
            if (n) return "loading";
            var r = e();
            return m.m.getItem(Q) || !r
              ? "hide"
              : t.has("model_preview") && r < new Date(G)
              ? "show"
              : "hide";
          })(),
          g = (function () {
            var e = (0, p.hz)(),
              n = et(function (e) {
                return e.seenDate;
              });
            if (!e.has(v.RJ) || "number" == typeof n) return "hide";
            if (!1 === n) return "show";
            if ("loading" === n) return "loading";
            throw Error("unexpected seenDate ".concat(n));
          })(),
          x = (0, o.useMemo)(
            function () {
              return [
                {
                  Modal: w,
                  getModalState: function () {
                    return f;
                  },
                },
                {
                  Modal: ei,
                  getModalState: function () {
                    var e = d();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
                {
                  Modal: eo,
                  getModalState: function () {
                    return h;
                  },
                },
                {
                  Modal: ea,
                  getModalState: function () {
                    return g;
                  },
                },
              ];
            },
            [d, f, h, g]
          );
        (0, o.useEffect)(
          function () {
            x[u] &&
              "hide" === x[u].getModalState() &&
              c(
                x.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [u, x]
        );
        var b = x[u];
        if (!b) return null;
        var y = b.getModalState();
        if ("loading" === y) return null;
        "hide" === y &&
          c(function (e) {
            return e + 1;
          });
        var k = x[u].Modal;
        return (0, a.jsx)(k, {
          onClose: function () {
            c(function (e) {
              return e + 1;
            });
          },
        });
      }
    },
    21172: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return g;
          },
        });
      var r = t(22830),
        a = t(35250),
        i = t(70079),
        o = t(5914),
        s = t(97688),
        l = t(87316),
        u = t(32983),
        c = t(64135),
        d = t(75527),
        f = t(77706),
        h = t(44825);
      function g(e) {
        var n = e.urlThreadId,
          t = e.clientThreadId,
          g = e.isUserInCanPayGroup,
          m = e.serviceStatus,
          p = e.serviceAnnouncement,
          v = e.userCountry,
          x = (0, r._)(
            (0, i.useState)(function () {
              return void 0 !== n ? n : void 0 !== t ? t : (0, d.OX)();
            }),
            2
          ),
          b = x[0],
          y = x[1];
        void 0 !== n && b !== n && y(n),
          void 0 !== n || (0, d.Zz)(b) || y((0, d.OX)());
        var j = (0, c.Xj)().data,
          w = null == j ? void 0 : j.accountPlan.hasPaidSubscription,
          k = (0, l.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, i.useEffect)(
          function () {
            void 0 !== g && k("isUserInCanPayGroup", g);
          },
          [k, g]
        ),
          (0, i.useEffect)(
            function () {
              (null == m ? void 0 : m.type) &&
                !1 === w &&
                s.m.warning(m.message, { hasCloseButton: !0, duration: 5 });
            },
            [w, null == m ? void 0 : m.message, null == m ? void 0 : m.type]
          );
        var C = (0, d.GR)(b),
          _ = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(
            function () {
              if (null != j) {
                var e = j.accountPlan.hasPaidSubscription ? p.paid : p.public;
                if (
                  (null == e ? void 0 : e.type) &&
                  (null == e ? void 0 : e.message) &&
                  !_.current
                ) {
                  _.current = !0;
                  var n = e.message,
                    t = { hasCloseButton: !0, duration: 15 };
                  switch (e.type) {
                    case "danger":
                      s.m.danger(n, t);
                      break;
                    case "info":
                      s.m.info(n, t);
                      break;
                    case "warning":
                      s.m.warning(n, t);
                  }
                }
              }
            },
            [p, j]
          ),
          (0, a.jsxs)(u.AX.Provider, {
            value: C,
            children: [
              (0, a.jsx)(f.Z, { userCountry: v }),
              (0, a.jsx)(o.j, {}),
              (0, a.jsx)(h.Z, {
                clientThreadId: b,
                setClientThreadId: y,
                isStaticSharedThread: !1,
              }),
            ],
          })
        );
      }
    },
    22208: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          SANDBOX_LINK_PREFIX: function () {
            return y;
          },
          default: function () {
            return w;
          },
          handleSandboxLinkClick: function () {
            return j;
          },
        });
      var r = t(21722),
        a = t(22830),
        i = t(39889),
        o = t(35250),
        s = t(70079),
        l = t(24274),
        u = t(75527),
        c = t(4337),
        d = t(1454),
        f = t(34303),
        h = t(66958),
        g = t(38317),
        m = t(19265);
      function p() {
        var e = (0, c._)(["absolute -left-1 top-1 md:left-0 md:top-2"]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v(e) {
        var n = e.accept,
          t = e.onFilePicked,
          r = e.loading,
          a = e.disabled,
          i = (0, s.useRef)(null),
          l = (0, s.useCallback)(function () {
            var e;
            null === (e = i.current) || void 0 === e || e.click();
          }, []),
          u = (0, s.useCallback)(
            function (e) {
              var n,
                r =
                  null === (n = e.target.files) || void 0 === n ? void 0 : n[0];
              r && (t(r), (e.target.value = ""));
            },
            [t]
          );
        return (0, o.jsxs)(x, {
          children: [
            (0, o.jsx)(h.z, {
              onClick: l,
              disabled: a || r,
              color: "none",
              children: r
                ? (0, o.jsx)(m.Z, {})
                : (0, o.jsx)(g.ZP, { icon: d.Cje, size: "small" }),
            }),
            (0, o.jsx)("input", {
              type: "file",
              accept: n,
              ref: i,
              className: "hidden",
              onChange: u,
            }),
          ],
        });
      }
      var x = f.Z.div(p()),
        b = t(97688),
        y = "sandbox:";
      function j(e, n) {
        var t;
        return (
          (t = (0, r._)(function (e, t) {
            var a, o, s, u, c;
            return (0, i.Jh)(this, function (d) {
              switch (d.label) {
                case 0:
                  var f;
                  (a = t.substring(8)),
                    (o = null),
                    (f = 100),
                    (s = (0, r._)(function () {
                      return (0, i.Jh)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            var n;
                            return (
                              f < 1e3 && (f += 100),
                              [
                                4,
                                ((n = f),
                                new Promise(function (e) {
                                  return setTimeout(e, n);
                                })),
                              ]
                            );
                          case 1:
                            return e.sent(), [2];
                        }
                      });
                    })),
                    (d.label = 1);
                case 1:
                  return [4, l.ZP.downloadFromSandbox(e, n, a)];
                case 2:
                  if (null == (u = d.sent()) ? void 0 : u.download_url)
                    return (o = u.download_url), [3, 6];
                  if ((null == u ? void 0 : u.state) !== "not_ready")
                    return [3, 4];
                  return [4, s()];
                case 3:
                  return d.sent(), [3, 5];
                case 4:
                  return b.m.warning("Download failed: ".concat(a)), [2];
                case 5:
                  return [3, 1];
                case 6:
                  return (
                    ((c = document.createElement("a")).href = o), c.click(), [2]
                  );
              }
            });
          })),
          function (e, n) {
            return t.apply(this, arguments);
          }
        );
      }
      function w(e) {
        var n,
          t = e.onFileUpload,
          c = e.clientThreadId,
          d = e.currentLeafId,
          f = e.modelBackend,
          h = e.disabled,
          g = (0, a._)((0, s.useState)(!1), 2),
          m = g[0],
          p = g[1],
          x = (0, s.useCallback)(
            ((n = (0, r._)(function (e) {
              var n, r, a, o;
              return (0, i.Jh)(this, function (i) {
                switch (i.label) {
                  case 0:
                    p(!0), (i.label = 1);
                  case 1:
                    if ((i.trys.push([1, , 3, 4]), e.size > 104857600))
                      return (
                        (r = (e.size / 1024 / 1024).toFixed(0)),
                        b.m.warning(
                          "File is larger than upload limit: "
                            .concat(r, " MB vs ")
                            .concat("100", " MB"),
                          { hasCloseButton: !0, duration: 15 }
                        ),
                        [2]
                      );
                    return (
                      (o =
                        (null ===
                          (n = (a = u.tQ.getTree(c).getNode(d)).message) ||
                        void 0 === n
                          ? void 0
                          : n.id) || a.id),
                      [
                        4,
                        l.ZP.uploadUsingFileService(
                          o,
                          u.tQ.getServerThreadId(c),
                          f,
                          e
                        ),
                      ]
                    );
                  case 2:
                    return t(i.sent()), [3, 4];
                  case 3:
                    return p(!1), [7];
                  case 4:
                    return [2];
                }
              });
            })),
            function (e) {
              return n.apply(this, arguments);
            }),
            [t, c, d, f]
          );
        return (0, o.jsx)(v, { disabled: m || h, onFilePicked: x });
      }
    },
    2368: function (e, n, t) {
      "use strict";
      t.d(n, {
        $: function () {
          return b;
        },
        Z: function () {
          return x;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(70079),
        o = t(34303),
        s = t(64135),
        l = t(88038),
        u = t(13282);
      function c() {
        var e = (0, r._)(["bg-black rounded-md"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = (0, r._)([
          "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ",
          "",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r._)(["p-4 overflow-y-auto"]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, r._)(["", ""]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      var g = o.Z.div(c()),
        m = o.Z.div(d(), function (e) {
          return e.$isMessageRedesign && "dark:bg-gray-900";
        }),
        p = o.Z.div(f()),
        v = o.Z.code(h(), function (e) {
          return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre";
        });
      function x(e) {
        var n = e.children,
          t = e.className,
          r = e.language,
          o = e.content,
          s = (0, i.useCallback)(
            function () {
              navigator.clipboard.writeText(o);
            },
            [o]
          );
        return (0, a.jsx)(b, {
          title: r,
          headerDecoration: (0, a.jsx)(u.Z, {
            buttonText: "Copy code",
            onCopy: s,
          }),
          className: "mb-4",
          codeClassName: t,
          children: n,
        });
      }
      function b(e) {
        var n = e.children,
          t = e.title,
          r = e.headerDecoration,
          i = e.shouldWrapCode,
          o = e.className,
          u = e.codeClassName,
          c = (0, s.hz)().has(l.FZ);
        return (0, a.jsxs)(g, {
          className: o,
          children: [
            (0, a.jsxs)(m, {
              $isMessageRedesign: c,
              children: [t && (0, a.jsx)("span", { children: t }), r],
            }),
            (0, a.jsx)(p, {
              children: (0, a.jsx)(v, {
                $shouldWrap: void 0 !== i && i,
                className: u,
                children: n,
              }),
            }),
          ],
        });
      }
    },
    88888: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return e7;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        u = t(21722),
        c = t(39324),
        d = t(71209),
        f = t(22830),
        h = t(4337),
        g = t(39889),
        m = t(35250),
        p = t(19841),
        v = t(70079),
        x = t(1454),
        b = t(54655),
        y = t(34303),
        j = t(82841),
        w = t(36218),
        k = t(32787),
        C = t(64664),
        _ = t(69403),
        M = t(64135),
        T = t(88038),
        N = t(75527),
        I = t(21437),
        P = t(32983),
        S = t(77442);
      function Z(e) {
        var n, t;
        if (e.author.role === _.uU.Assistant) {
          if ("browser" === e.recipient) return o.Browsing;
          if (
            "code" === e.content.content_type ||
            ("python" === e.recipient && "text" === e.content.content_type)
          )
            return o.Code;
          if (
            null === (n = e.recipient) || void 0 === n
              ? void 0
              : n.includes(".")
          )
            return o.Plugin;
        } else if (e.author.role === _.uU.Tool) {
          if ("browser" === e.author.name) return o.BrowseTool;
          if ("execution_output" === e.content.content_type)
            return o.CodeExecutionOutput;
          if (
            (null === (t = e.author.name) || void 0 === t
              ? void 0
              : t.includes(".")) ||
            "plugin_service" === e.author.name
          )
            return o.PluginTool;
        }
        return "text" === e.content.content_type ? o.Text : o.Unknown;
      }
      ((r = o || (o = {}))[(r.Text = 0)] = "Text"),
        (r[(r.Browsing = 1)] = "Browsing"),
        (r[(r.BrowseTool = 2)] = "BrowseTool"),
        (r[(r.Code = 3)] = "Code"),
        (r[(r.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (r[(r.Plugin = 5)] = "Plugin"),
        (r[(r.PluginTool = 6)] = "PluginTool"),
        (r[(r.Unknown = 7)] = "Unknown");
      var R = t(57311),
        A = t(46110),
        D = t(13282),
        F = t(38317),
        L = t(3001),
        E = t(35290),
        B = t(36716),
        O = t(19265);
      function q() {
        var e = (0, h._)(["flex flex-col items-start"]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = (0, h._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = (0, h._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      var H = v.memo(function (e) {
          var n = e.children,
            t = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            o = e.results,
            s = e.initialExpanded,
            l = e.onExpand,
            u = (0, f._)((0, v.useState)(void 0 !== s && s), 2),
            c = u[0],
            d = u[1],
            h = (0, v.useCallback)(
              function () {
                d(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l]
            );
          return (0,
          m.jsxs)(V, { children: [(0, m.jsxs)(W, { $complete: t, children: [(0, m.jsx)("div", { children: n }), !t && (0, m.jsx)(O.Z, { className: o ? "ml-1" : "ml-12" }), o && (0, m.jsxs)("div", { className: "ml-12 flex items-center gap-2", role: "button", onClick: h, children: [a && r && (0, m.jsx)("div", { className: "text-xs text-gray-600", children: c ? a : r }), !c && i, (0, m.jsx)(F.ZP, { icon: c ? x.rH8 : x.bTu })] })] }), c && o] });
        }),
        V = y.Z.div(q()),
        W = y.Z.div(U(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        G = y.Z.div(z()),
        Q = (0, L.vU)({
          startingBrowsing: {
            id: "browsingMessage.startingBrowsing",
            defaultMessage: "Browsing the web...",
            description: "Status message when browsing is starting",
          },
          finishedBrowsing: {
            id: "browsingMessage.finishedBrowsing",
            defaultMessage: "Finished browsing",
            description: "Status message when browsing is finished",
          },
          thinking: {
            id: "browsingMessage.thinking",
            defaultMessage: "Thinking...",
            description:
              "Status message when the next browsing command is being generated",
          },
          searchInProgress: {
            id: "browsingMessage.command.search.inProgress",
            defaultMessage: "Searching: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search the web is in progress",
          },
          searchInProgressBing: {
            id: "browsingMessage.command.search.inProgress.bing",
            defaultMessage:
              "Searching Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing is in progress",
          },
          searchFinished: {
            id: "browsingMessage.command.search.finished",
            defaultMessage: "Searched: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search the web finished",
          },
          searchFinishedBing: {
            id: "browsingMessage.command.search.finished.bing",
            defaultMessage:
              "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing finished",
          },
          searchError: {
            id: "browsingMessage.command.search.error",
            defaultMessage: "Search failed",
            description: "Browsing command to search the web failed",
          },
          clickInProgress: {
            id: "browsingMessage.command.click.inProgress",
            defaultMessage: "Clicking on a link...",
            description: "Browsing command to click on a link is in progress",
          },
          clickFinished: {
            id: "browsingMessage.command.click.finished",
            defaultMessage: "Clicked on a link",
            description: "Browsing command to click on a link finished",
          },
          clickFinishedWithLink: {
            id: "browsingMessage.command.click.finishedWithLink",
            defaultMessage: "Clicked on:",
            description:
              "Browsing command to click on a link finished. The link that was clicked will be displayed after the :",
          },
          clickError: {
            id: "browsingMessage.command.click.error",
            defaultMessage: "Click failed",
            description: "Browsing command to click on a link failed",
          },
          quote: {
            id: "browsingMessage.command.quote",
            defaultMessage: "Reading content",
            description:
              "Browsing command to read a specific quote from a page",
          },
          quoteError: {
            id: "browsingMessage.command.quote.error",
            defaultMessage: "Reading content failed",
            description:
              "Browsing command to read a specific quote from a page failed",
          },
          back: {
            id: "browsingMessage.command.back",
            defaultMessage: "Going back to last page",
            description: "Browsing command to go back to the last page",
          },
          backError: {
            id: "browsingMessage.command.back.error",
            defaultMessage: "Going back failed",
            description: "Browsing command to go back to the last page failed",
          },
          scroll: {
            id: "browsingMessage.command.scroll",
            defaultMessage: "Scrolling down",
            description: "Browsing command to scroll down on a page",
          },
          scrollError: {
            id: "browsingMessage.command.scroll.error",
            defaultMessage: "Scroll failed",
            description: "Browsing command to scroll down on a page failed",
          },
        }),
        $ = v.memo(function (e) {
          var n,
            t = e.messages,
            r = e.isComplete,
            a = (0, M.hz)(),
            i = t.map(function (e) {
              return e.message;
            }),
            o = i
              .map(function (e, n) {
                if (
                  e.author.role !== _.uU.Tool ||
                  (n > 0 && eo(e) && eo(i[n - 1]))
                )
                  return null;
                var t = e.metadata;
                if (!t) return null;
                var r = t.command,
                  a = t.status;
                return r
                  ? {
                      type: r,
                      status: a,
                      didError: "system_error" === e.content.content_type,
                      message: e,
                    }
                  : null;
              })
              .filter(Boolean),
            s = o.map(function (e, n) {
              return (0, m.jsx)(J, { command: e }, n);
            });
          r
            ? (s.push((0, m.jsx)(ea, {}, "finished")),
              (n = (0, m.jsx)(ea, { compact: !0 })))
            : 0 === s.length
            ? (s.push((0, m.jsx)(er, {}, "waiting")),
              (n = (0, m.jsx)(er, { compact: !0 })))
            : "finished" === o[o.length - 1].status &&
              s.push(
                (0, m.jsx)(
                  ei,
                  {
                    icon: x.Wqx,
                    children: (0, m.jsx)(E.Z, (0, c._)({}, Q.thinking)),
                  },
                  "thinking"
                )
              ),
            n || (n = (0, m.jsx)(J, { command: o[o.length - 1], compact: !0 }));
          var l =
            a.has(T.UG) && !r
              ? (function (e) {
                  var n,
                    t = e.reverse().find(function (e) {
                      return e.author.role === _.uU.Assistant;
                    });
                  if (!t) return null;
                  for (
                    var r = R.Cv.getTextFromMessage(t),
                      a = /^#\s*(.*)/gm,
                      i = [];
                    null !== (n = a.exec(r));

                  )
                    i.push(n[1]);
                  return i.length > 0 ? i.join("\n") : null;
                })(i)
              : null;
          return (0,
          m.jsxs)(H, { isComplete: r, results: (0, m.jsx)(G, { className: "text-xs", children: s }), children: [null != l && (0, m.jsx)("div", { className: "mb-2 whitespace-pre-wrap font-medium", children: l }), n] });
        });
      function J(e) {
        var n = e.command,
          t = e.compact;
        if (n.didError) return (0, m.jsx)(et, { commandType: n.type });
        switch (n.type) {
          case "search":
            var r,
              a,
              i =
                null === (r = n.message.metadata) || void 0 === r
                  ? void 0
                  : null === (a = r.args) || void 0 === a
                  ? void 0
                  : a[0];
            if (!i) return null;
            return (0, m.jsx)(Y, {
              searchQuery: i,
              isComplete: "finished" === n.status,
              compact: t,
            });
          case "click":
          case "open_url":
            var o,
              s,
              l =
                null === (o = n.message.metadata) || void 0 === o
                  ? void 0
                  : null === (s = o._cite_metadata) || void 0 === s
                  ? void 0
                  : s.metadata_list[0];
            return (0, m.jsx)(X, { pageInfo: l, compact: t });
          case "quote":
          case "quote_full":
            return (0, m.jsx)(K, { compact: t });
          case "back":
            return (0, m.jsx)(ee, { compact: t });
          case "scroll":
            return (0, m.jsx)(en, { compact: t });
          default:
            return null;
        }
      }
      function Y(e) {
        var n = e.searchQuery,
          t = e.isComplete,
          r = e.compact,
          a = (0, M.hz)().has(T.oQ),
          i = a ? Q.searchInProgressBing : Q.searchInProgress,
          o = a ? Q.searchFinishedBing : Q.searchFinished,
          s = function (e) {
            var t = "https://www.bing.com/search?q=".concat(
              encodeURIComponent(n)
            );
            return (0, m.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noreferrer",
              className: "text-green-600",
              children: e,
            });
          };
        return (0, m.jsx)(ei, {
          icon: x.jRj,
          compact: r,
          children: t
            ? (0, m.jsx)(
                E.Z,
                (0, d._)((0, c._)({}, o), {
                  values: {
                    bold: function (e) {
                      return (0, m.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: a ? s : void 0,
                    searchQuery: n,
                  },
                })
              )
            : (0, m.jsx)(
                E.Z,
                (0, d._)((0, c._)({}, i), {
                  values: {
                    bold: function (e) {
                      return (0, m.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: a ? s : void 0,
                    searchQuery: n,
                  },
                })
              ),
        });
      }
      function X(e) {
        var n = e.pageInfo,
          t = e.compact;
        return (0, m.jsx)(ei, {
          icon: x.PS6,
          compact: t,
          children: n
            ? !0 === t
              ? (0, m.jsx)(E.Z, (0, c._)({}, Q.clickFinished))
              : (0, m.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, m.jsx)(E.Z, (0, c._)({}, Q.clickFinishedWithLink)),
                    (0, m.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, m.jsx)(B.Op, { pageInfo: n }),
                    }),
                  ],
                })
            : (0, m.jsx)(E.Z, (0, c._)({}, Q.clickInProgress)),
        });
      }
      function K(e) {
        var n = e.compact;
        return (0, m.jsx)(ei, {
          icon: x.SnF,
          compact: n,
          children: (0, m.jsx)(E.Z, (0, c._)({}, Q.quote)),
        });
      }
      function ee(e) {
        var n = e.compact;
        return (0, m.jsx)(ei, {
          icon: x.cww,
          compact: n,
          children: (0, m.jsx)(E.Z, (0, c._)({}, Q.back)),
        });
      }
      function en(e) {
        var n = e.compact;
        return (0, m.jsx)(ei, {
          icon: x.nlg,
          compact: n,
          children: (0, m.jsx)(E.Z, (0, c._)({}, Q.scroll)),
        });
      }
      function et(e) {
        var n,
          t = e.commandType,
          r = e.compact;
        switch (t) {
          case "search":
            n = Q.searchError;
            break;
          case "click":
          case "open_url":
            n = Q.clickError;
            break;
          case "quote":
          case "quote_full":
            n = Q.quoteError;
            break;
          case "back":
            n = Q.backError;
            break;
          case "scroll":
            n = Q.scrollError;
            break;
          default:
            return null;
        }
        return (0, m.jsx)(ei, {
          icon: x.bcx,
          compact: r,
          children: (0, m.jsx)(E.Z, (0, c._)({}, n)),
        });
      }
      function er(e) {
        var n = e.compact;
        return (0, m.jsx)(ei, {
          icon: x.jRj,
          compact: n,
          children: (0, m.jsx)(E.Z, (0, c._)({}, Q.startingBrowsing)),
        });
      }
      function ea(e) {
        var n = e.compact;
        return (0, m.jsx)(ei, {
          icon: x._rq,
          compact: n,
          children: (0, m.jsx)(E.Z, (0, c._)({}, Q.finishedBrowsing)),
        });
      }
      function ei(e) {
        var n = e.children,
          t = e.icon,
          r = e.compact;
        return (0, m.jsxs)("div", {
          className: (0, p.Z)(
            "flex items-center gap-2",
            !0 !== r && "min-h-[24px]"
          ),
          children: [
            (0, m.jsx)(F.ZP, { icon: t, className: "shrink-0" }),
            (0, m.jsx)("div", { children: n }),
          ],
        });
      }
      function eo(e) {
        var n, t;
        return (
          (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) ===
            "quote" ||
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) ===
            "quote_full"
        );
      }
      var es = t(24396),
        el = t(24274),
        eu = v.memo(function (e) {
          var n,
            t = e.message,
            r = e.isCollapsed,
            a =
              null === (n = t.message.metadata) || void 0 === n
                ? void 0
                : n.aggregate_result;
          if (!a)
            return console.error("Corrupt code execution result message"), null;
          var i = a.messages.filter(eh),
            o = r && i.length > 0,
            s = r && null != a.final_expression_output,
            l = r && null != a.in_kernel_exception,
            u = !r && a.messages.filter(ef).length > 0;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              o &&
                (0, m.jsx)(ec, {
                  label: "STDOUT/STDERR",
                  output: i.map(function (e, n) {
                    return (0,
                    m.jsx)("span", { className: "stderr" === e.stream_name ? "text-red-500" : "", children: e.text }, "".concat(n));
                  }),
                }),
              s &&
                (0, m.jsx)(ec, {
                  label: "RESULT",
                  output: a.final_expression_output,
                }),
              l &&
                (0, m.jsx)("div", {
                  className:
                    "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                  children: (0, m.jsx)("div", {
                    className: "border-l-4 border-red-500 p-2 text-xs",
                    children: (0, m.jsx)("div", {
                      className:
                        "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                      children: (0, m.jsx)("pre", {
                        className: "shrink-0",
                        children: a.in_kernel_exception.traceback.join(""),
                      }),
                    }),
                  }),
                }),
              u &&
                a.messages.filter(ef).map(function (e, n) {
                  var t =
                    null != e.image_payload
                      ? (0, m.jsx)("img", {
                          src: "data:image/png;base64,".concat(e.image_payload),
                        })
                      : null != e.image_url
                      ? (0, m.jsx)(ed, { downloadUrl: e.image_url })
                      : null;
                  return t ? (0, m.jsx)("div", { children: t }, n) : null;
                }),
            ],
          });
        });
      function ec(e) {
        var n = e.label,
          t = e.output;
        return (0, m.jsxs)("div", {
          className: "rounded-md bg-black p-4 text-xs",
          children: [
            (0, m.jsx)("div", { className: "mb-1 text-gray-400", children: n }),
            (0, m.jsx)("div", {
              className:
                "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
              children: (0, m.jsx)("pre", {
                className: "shrink-0",
                children: t,
              }),
            }),
          ],
        });
      }
      function ed(e) {
        var n = e.downloadUrl,
          t = (0, f._)((0, v.useState)(""), 2),
          r = t[0],
          a = t[1];
        return (
          (0, es.a)(
            ["fsDownloadUrl", n],
            (0, u._)(function () {
              return (0, g.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, el.ZP.downloadFileService(n)];
                  case 1:
                    return [2, e.sent()];
                }
              });
            }),
            {
              onSuccess: function (e) {
                e.url && a(e.url);
              },
            }
          ),
          (0, m.jsxs)(m.Fragment, {
            children: [" ", r && (0, m.jsx)("img", { src: r }), " "],
          })
        );
      }
      function ef(e) {
        return "image" === e.message_type;
      }
      function eh(e) {
        return "stream" === e.message_type;
      }
      var eg = t(86546),
        em = t(28869);
      function ep(e) {
        return (
          R.Cv.getIsMessageFinished(e.message) &&
          !R.Cv.getIsStopFromMessage(e.message)
        );
      }
      var ev = {},
        ex = {};
      function eb(e) {
        var n,
          t = e.message,
          r = e.outputMessage,
          a = (0, eg.F)().theme,
          i = (0, j.WS)(),
          o =
            null === (n = null == r ? void 0 : r.message.metadata) ||
            void 0 === n
              ? void 0
              : n.aggregate_result,
          s =
            ((null == o ? void 0 : o.status) !== void 0 &&
              (null == o ? void 0 : o.status) !== "running") ||
            ep(t);
        (0, v.useEffect)(
          function () {
            ev[t.message.id] ||
              (i(w.s6.renderTool2Message, {
                id: t.message.id,
                finishedExecuting: s,
              }),
              (ev[t.message.id] = !0));
          },
          [i, t, s]
        );
        var l = (0, v.useCallback)(
            function () {
              ex[t.message.id] ||
                (i(w.s6.expandTool2Message, {
                  id: t.message.id,
                  finishedExecuting: s,
                }),
                (ex[t.message.id] = !0));
            },
            [i, t, s]
          ),
          u = (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, m.jsx)(em.Z, {
                  className: (0, p.Z)(
                    "markdown prose w-full break-words dark:prose-invert",
                    "dark" === a ? "dark" : "light"
                  ),
                  children: (function (e) {
                    var n = function (e, n) {
                      return "```".concat(n, "\n").concat(e, "\n```");
                    };
                    if ("code" === e.message.content.content_type)
                      return n(e.message.content.text, "python");
                    if ("python" === e.message.recipient) {
                      if ("text" !== e.message.content.content_type)
                        throw Error("Unexpected content type for code message");
                      var t = e.message.content.parts;
                      if (1 !== t.length || "string" != typeof t[0])
                        throw Error("Unexpected parts for code message");
                      return n(t[0], "python");
                    }
                    throw Error("Unexpected code message format");
                  })(t),
                }),
              }),
              r &&
                (0, m.jsx)("div", {
                  className: "self-stretch",
                  children: (0, m.jsx)(eu, { message: r, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, m.jsx)(H, {
          expanderClosedLabel: "Show work",
          expanderOpenLabel: "Hide work",
          isComplete: s,
          results: u,
          onExpand: l,
          children: s ? "Finished working" : "Working...",
        });
      }
      var ey = t(99585);
      function ej(e) {
        var n = e.messages,
          t = e.isCompletionInProgress,
          r = e.isCompletion,
          a = e.onRequestMoreCompletions,
          i = n.reduce(function (e, n) {
            return n.err ? e : e + R.Cv.getTextFromMessage(n.message);
          }, "");
        return (0, m.jsx)(ey.Cf, {
          text: i,
          format: !0,
          isCompletion: r,
          isCompletionInProgress: t,
          id: "",
          onRequestMoreCompletions: a,
        });
      }
      var ew = t(2368),
        ek = t(86573),
        eC = t(75908),
        e_ = (0, L.vU)({
          generatedImage: {
            id: "pluginDisplayParams.generatedImage",
            defaultMessage: "Generated by plugin",
            description:
              "Description text for an image that was generated by a plugin",
          },
        });
      function eM(e) {
        var n,
          t,
          r = e.plugin,
          a = e.pluginMessage,
          i = e.toolMessage,
          o = [];
        if ("text" === a.content.content_type) {
          try {
            n = (function (e) {
              var n = !0,
                t = !1,
                r = void 0;
              try {
                for (
                  var a, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator]();
                  !(n = (a = i.next()).done);
                  n = !0
                ) {
                  var o = a.value,
                    s = e.trimEnd().endsWith(",")
                      ? e.trimEnd().slice(0, -1)
                      : e;
                  try {
                    return JSON.parse(s + o);
                  } catch (e) {}
                }
              } catch (e) {
                (t = !0), (r = e);
              } finally {
                try {
                  n || null == i.return || i.return();
                } finally {
                  if (t) throw r;
                }
              }
              return JSON.parse(e);
            })(a.content.parts[0]);
          } catch (e) {}
          if (null != n)
            for (var s in n)
              null != eP[r.id] &&
                s in eP[r.id] &&
                o.push((0, m.jsx)(eT, { type: eP[r.id][s], value: n[s] }, s));
        }
        var l = [];
        if ((null == i ? void 0 : i.content.content_type) === "text") {
          try {
            t = JSON.parse(i.content.parts[0]);
          } catch (e) {}
          if (null != t)
            for (var u in t)
              null != eS[r.id] &&
                u in eS[r.id] &&
                l.push((0, m.jsx)(eT, { type: eS[r.id][u], value: t[u] }, u));
        }
        return (0, m.jsxs)(m.Fragment, { children: [o, l] });
      }
      function eT(e) {
        var n = e.type,
          t = e.value;
        switch (n) {
          case s.MultiText:
            return (0, m.jsx)(eN, { value: t });
          case s.MultiImage:
            return (0, m.jsx)(eI, { value: t });
          default:
            return null;
        }
      }
      function eN(e) {
        var n = e.value.map(function (e, n) {
          return (0, m.jsx)("div", { children: e }, n);
        });
        return (0, m.jsx)("div", {
          className: "text-gray-600 flex flex-col gap-1",
          children: n,
        });
      }
      function eI(e) {
        var n = e.value,
          t = (0, eC.Z)(),
          r = n.map(function (e, n) {
            return (0,
            m.jsx)("a", { href: e, target: "_blank", rel: "noreferrer", children: (0, m.jsx)("img", { src: e, alt: t.formatMessage(e_.generatedImage), className: "h-32 rounded" }) }, n);
          });
        return (0, m.jsx)("div", {
          className: "flex gap-4 flex-wrap",
          children: r,
        });
      }
      ((a = s || (s = {})).MultiText = "multiText"),
        (a.MultiImage = "multiImage");
      var eP = {
          "plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b": {
            prompts: s.MultiText,
          },
        },
        eS = {
          "plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b": {
            images: s.MultiImage,
          },
        },
        eZ = t(14158),
        eR = t(44878),
        eA = t(57924),
        eD = v.memo(function (e) {
          var n,
            t,
            r = e.messages,
            a = (0, M.hz)(),
            i = (0, f._)(r, 2),
            o = i[0],
            s = i[1],
            l = (0, eR.Z)(),
            u =
              null === (n = o.message.recipient) || void 0 === n
                ? void 0
                : n.split(".")[0],
            c = l.find(function (e) {
              return e.namespace === u;
            }),
            d = null == c ? void 0 : c.manifest.name_for_human,
            h = ep(o),
            g = null != d ? (0, m.jsx)("b", { children: d }) : "unknown plugin",
            p =
              null != s
                ? (0, m.jsxs)("div", { children: ["Used ", g] })
                : h
                ? (0, m.jsxs)("div", { children: ["Tried to use ", g] })
                : (0, m.jsxs)("div", { children: ["Using ", g, "..."] });
          return (
            c &&
              ((0, ek.cf)(c)
                ? (t = (0, m.jsx)(eZ.nA, {}))
                : "approved" !== c.status && (t = (0, m.jsx)(eZ.uM, {}))),
            (0, m.jsxs)(m.Fragment, {
              children: [
                (0, m.jsx)(H, {
                  isComplete: null != s || h,
                  results: (0, m.jsx)(eF, {
                    pluginName: null != d ? d : "unknown plugin",
                    pluginMessage: o,
                    toolMessage: s,
                  }),
                  children: (0, m.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [p, t],
                  }),
                }),
                a.has(T.rL) &&
                  null != c &&
                  (0, m.jsx)(eM, {
                    plugin: c,
                    pluginMessage: o.message,
                    toolMessage: null == s ? void 0 : s.message,
                  }),
              ],
            })
          );
        });
      function eF(e) {
        var n = e.pluginName,
          t = e.pluginMessage,
          r = e.toolMessage,
          a = R.Cv.getTextFromMessage(t.message),
          i = r ? R.Cv.getTextFromMessage(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            null != i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (e) {}
        var o =
          (null == r ? void 0 : r.message.author.name) === "plugin_service";
        return (0, m.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, m.jsx)(eL, {
              title: "Request to ".concat(n),
              infoTooltip: t.message.recipient,
              children: a,
            }),
            null != i &&
              (0, m.jsx)(eL, {
                title: o ? "Error" : "Response from ".concat(n),
                infoTooltip: t.message.recipient,
                children: (0, m.jsx)("span", {
                  className: (0, p.Z)(o && "text-red-500"),
                  children: i,
                }),
              }),
          ],
        });
      }
      function eL(e) {
        var n = e.title,
          t = e.infoTooltip,
          r = e.children;
        return (0, m.jsx)(ew.$, {
          title: (0, m.jsx)("span", { className: "uppercase", children: n }),
          headerDecoration:
            void 0 !== t
              ? (0, m.jsx)(eA.u, {
                  label: t,
                  children: (0, m.jsx)(F.ZP, {
                    icon: x.H33,
                    className: "text-white/50",
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: "w-full text-xs text-white/80",
          children: r,
        });
      }
      var eE = t(95182),
        eB = t.n(eE);
      function eO() {
        var e = (0, h._)(["text-xs flex items-center justify-center gap-1"]);
        return (
          (eO = function () {
            return e;
          }),
          e
        );
      }
      function eq() {
        var e = (0, h._)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ]);
        return (
          (eq = function () {
            return e;
          }),
          e
        );
      }
      function eU() {
        var e = (0, h._)(["flex-grow flex-shrink-0"]);
        return (
          (eU = function () {
            return e;
          }),
          e
        );
      }
      function ez(e) {
        var n = e.currentPage,
          t = e.onChangeIndex,
          r = e.length,
          a = e.className,
          i = function (e) {
            t(eB()(n + e, 0, r - 1));
          };
        return (0, m.jsxs)(eH, {
          className: a,
          children: [
            (0, m.jsx)(eV, {
              onClick: function () {
                return i(-1);
              },
              disabled: 0 === n,
              children: (0, m.jsx)(F.ZP, { size: "xsmall", icon: x.YFh }),
            }),
            (0, m.jsx)(eW, { children: "".concat(n + 1, " / ").concat(r) }),
            (0, m.jsx)(eV, {
              onClick: function () {
                return i(1);
              },
              disabled: n === r - 1,
              children: (0, m.jsx)(F.ZP, { size: "xsmall", icon: x.Tfp }),
            }),
          ],
        });
      }
      var eH = y.Z.div(eO()),
        eV = y.Z.button(eq()),
        eW = y.Z.span(eU()),
        eG = t(90076);
      function eQ() {
        var e = (0, h._)([""]);
        return (
          (eQ = function () {
            return e;
          }),
          e
        );
      }
      function e$() {
        var e = (0, h._)(["flex flex-grow flex-col gap-3"]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      function eJ() {
        var e = (0, h._)(["flex p-4 gap-4 ", ""]);
        return (
          (eJ = function () {
            return e;
          }),
          e
        );
      }
      function eY() {
        var e = (0, h._)(["flex-shrink-0 flex flex-col relative items-end"]);
        return (
          (eY = function () {
            return e;
          }),
          e
        );
      }
      function eX() {
        var e = (0, h._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (eX = function () {
            return e;
          }),
          e
        );
      }
      function eK() {
        var e = (0, h._)(["p-1 ", ""]);
        return (
          (eK = function () {
            return e;
          }),
          e
        );
      }
      function e0() {
        var e = (0, h._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (e0 = function () {
            return e;
          }),
          e
        );
      }
      function e1() {
        var e = (0, h._)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (e1 = function () {
            return e;
          }),
          e
        );
      }
      function e2() {
        var e = (0, h._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (e2 = function () {
            return e;
          }),
          e
        );
      }
      var e3 = ["#ab68ff"];
      ((i = l || (l = {}))[(i.Text = 0)] = "Text"),
        (i[(i.MultiText = 1)] = "MultiText"),
        (i[(i.Browsing = 2)] = "Browsing"),
        (i[(i.Code = 3)] = "Code"),
        (i[(i.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (i[(i.Plugin = 5)] = "Plugin");
      var e4 = "#19c37d",
        e5 = "openai",
        e8 = "#1a7f64",
        e7 = v.memo(function (e) {
          var n,
            t,
            r,
            a = e.turnIndex,
            i = e.conversationLeafId,
            s = e.isFinalTurn,
            h = e.clientThreadId,
            y = e.onChangeItemInView,
            L = e.onChangeRating,
            E = e.onRequestMoreCompletions,
            B = e.onDeleteNode,
            O = e.onRequestCompletion,
            q = e.onUpdateNode,
            U = e.onSandboxLinkClick,
            z = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            H = e.activeRequests,
            V = e.showInlineEmbeddedDisplay,
            W = void 0 !== V && V,
            G = e.currentModelId,
            Q = e.isStaticSharedThread,
            J = void 0 !== Q && Q,
            Y = e.initiallyHighlightedMessageId,
            X = e.avatarColor,
            K = (0, N.GD)(h, a, i),
            ee = K.role,
            en = K.messages,
            et = K.variantIds,
            er = (0, k.kP)().session,
            ea = (0, S.x_)(),
            ei = (0, j.WS)(),
            eo = (0, f._)((0, v.useState)(!1), 2),
            es = eo[0],
            el = eo[1],
            ec = (0, v.useMemo)(
              function () {
                return et.findIndex(function (e) {
                  return e === en[0].nodeId;
                });
              },
              [et, en]
            ),
            ed = ee !== _.uU.User,
            ef = (0, v.useContext)(P.QL).historyDisabled,
            eh = (0, M.hz)().has(T.FZ),
            eg = (0, I.Fl)(),
            em = eg.isBrowsingAvailable,
            ev = eg.isPluginsAvailable,
            ex = eg.isCodeInterpreterAvailable,
            ew = em || ev || ex,
            ek = (0, v.useRef)(null);
          (0, v.useEffect)(
            function () {
              var e;
              null != Y &&
                K.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(Y) &&
                (null === (e = ek.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }));
            },
            [Y]
          );
          var eC = en[en.length - 1],
            e_ = (0, f._)((0, v.useState)(eC.rating), 2),
            eM = e_[0],
            eT = e_[1],
            eN = (0, M.hz)(),
            eI = (0, eR.Z)(),
            eP = (0, v.useMemo)(
              function () {
                return (
                  (ed &&
                    (null == en ? void 0 : en[0]) &&
                    R.Cv.getModelFromMessage(
                      null == en ? void 0 : en[0].message
                    )) ||
                  G
                );
              },
              [ed, en, G]
            ),
            eS = (0, v.useCallback)(
              function () {
                1 === en.length &&
                  (ei(
                    ee === _.uU.User ? w.s6.editPrompt : w.s6.editCompletion,
                    {
                      id: en[0].message.id,
                      threadId: N.tQ.getServerThreadId(h),
                    }
                  ),
                  el(!0));
              },
              [en, ei, ee, h]
            ),
            eZ = (0, v.useCallback)(function () {
              el(!1);
            }, []),
            eA = (0, v.useCallback)(
              function () {
                var e = en.reduce(function (e, n) {
                  return n.err ||
                    n.message.author.role !== _.uU.Assistant ||
                    "all" !== n.message.recipient
                    ? e
                    : e +
                        (e ? "\n\n" : "") +
                        R.Cv.getTextFromMessage(n.message);
                }, "");
                navigator.clipboard.writeText(e),
                  ei(w.s6.copyToClipboard, {
                    threadId: N.tQ.getServerThreadId(h),
                    id: en[0].message.id,
                    eventSource: "mouse",
                    model: eP,
                  }),
                  C.m.logEvent("chatgpt_copy_to_clipboard");
              },
              [eP, ei, en, h]
            ),
            eF = (0, v.useCallback)(
              function (e) {
                L(eC.nodeId, eC.message.id, e), eT(e);
              },
              [eC, L]
            ),
            eL = (0, f._)((0, v.useState)(eC.inlineComparisonRating), 2),
            eE = eL[0],
            eB = eL[1];
          (0, v.useEffect)(
            function () {
              eT(function (e) {
                return null != e ? e : eC.rating;
              }),
                eB(function (e) {
                  return null != e ? e : eC.inlineComparisonRating;
                });
            },
            [eC]
          );
          var eO = (0, v.useMemo)(
              function () {
                return R.Cv.getRequestIdFromConversationTurn(K);
              },
              [K]
            ),
            eq = (0, v.useMemo)(
              function () {
                return H.has(eO);
              },
              [H, eO]
            ),
            eU = (0, v.useMemo)(
              function () {
                var e = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (
                    var r, a = en[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    if (i.errType) return i.errType;
                  }
                } catch (e) {
                  (n = !0), (t = e);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw t;
                  }
                }
                return !1;
              },
              [en]
            ),
            eH = (0, v.useMemo)(
              function () {
                if (ed) {
                  var e,
                    n,
                    t = N.tQ.getTree(h),
                    r =
                      null === (e = t.getParentPromptNode(en[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    a =
                      r &&
                      (null === (n = t.getNode(r).message.metadata) ||
                      void 0 === n
                        ? void 0
                        : n.model_slug);
                  if (eP && a && eP !== a)
                    return eG.n2.has(a)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [eP, ed, en, h]
            ),
            eV = (0, v.useMemo)(
              function () {
                if (!ew) return { avatarIcon: e5, avatarColor: e4 };
                if (eq && en.length > 0) {
                  var e = en[en.length - 1],
                    n = Z(e.message);
                  switch (n) {
                    case o.Text:
                      if (
                        R.Cv.getTextFromMessage(e.message).length > 0 ||
                        en.length > 1
                      )
                        return { avatarIcon: "text", avatarColor: e8 };
                      break;
                    case o.Browsing:
                    case o.BrowseTool:
                      return { avatarIcon: "browsing", avatarColor: e8 };
                    case o.Code:
                    case o.CodeExecutionOutput:
                      return { avatarIcon: "code", avatarColor: e8 };
                    case o.Plugin:
                    case o.PluginTool:
                      var t =
                          n === o.Plugin
                            ? e.message.recipient
                            : e.message.author.name,
                        r = null == t ? void 0 : t.split(".")[0],
                        a = eI.find(function (e) {
                          return e.namespace === r;
                        });
                      if (a) return { avatarPlugin: a };
                      return { avatarIcon: "plugin", avatarColor: e8 };
                  }
                }
                return { avatarIcon: e5, avatarColor: e4 };
              },
              [ew, eq, en, eI]
            ),
            eW = eV.avatarIcon,
            eQ = eV.avatarColor,
            e$ = eV.avatarPlugin,
            eJ = (0, v.useCallback)(
              function (e, n) {
                N.tQ.updateTree(h, function (t) {
                  var r = t.getParentId(e);
                  t.addNode(n, "", r, _.Jq.Prompt);
                });
              },
              [h]
            ),
            eY = (0, v.useMemo)(
              function () {
                var e = [];
                return (
                  en.forEach(function (n, t) {
                    var r = Z(n.message),
                      a = null == en ? void 0 : en[t - 1],
                      i =
                        a &&
                        (R.Cv.getIsIncompleteFromMessage(a.message) ||
                          R.Cv.getIsContinuedFromMessage(a.message)),
                      s = r === o.Text && R.Cv.getTextFromMessage(n.message);
                    if (i && null != s) {
                      var u = e.pop();
                      (null == u ? void 0 : u.type) === l.MultiText
                        ? (u.messages.push(n), e.push(u))
                        : (null == u ? void 0 : u.type) === l.Text &&
                          e.push({
                            type: l.MultiText,
                            messages: [u.message, n],
                          });
                    } else if (r === o.Browsing || r === o.BrowseTool) {
                      var c = e[e.length - 1];
                      (null == c ? void 0 : c.type) === l.Browsing
                        ? c.messages.push(n)
                        : e.push({ type: l.Browsing, messages: [n] });
                    } else if (r === o.Plugin || r === o.PluginTool) {
                      var d = e[e.length - 1];
                      r === o.PluginTool &&
                      (null == d ? void 0 : d.type) === l.Plugin
                        ? d.messages.push(n)
                        : e.push({ type: l.Plugin, messages: [n] });
                    } else {
                      var f = l.Text;
                      r === o.Code
                        ? (f = l.Code)
                        : r === o.CodeExecutionOutput &&
                          (f = l.CodeExecutionOutput),
                        e.push({ type: f, message: n });
                    }
                  }),
                  e.map(function (n, t) {
                    var r,
                      a,
                      i = t === e.length - 1;
                    switch (n.type) {
                      case l.Text:
                        return (0, m.jsx)(
                          ey.ZP,
                          {
                            className: "min-h-[20px]",
                            message: n.message,
                            isEditing: es,
                            format: ed,
                            isCompletionInProgress: i && eq,
                            onCreateEditNode: eJ,
                            clientThreadId: h,
                            onUpdateNode: q,
                            onDeleteNode: B,
                            onChangeItemInView: y,
                            onRequestCompletion: O,
                            onExitEdit: eZ,
                            disabled: 0 !== H.size,
                            onSandboxLinkClick:
                              ((r = (0, u._)(function (e) {
                                return (0, g.Jh)(this, function (t) {
                                  return [2, U(n.message.nodeId, e)];
                                });
                              })),
                              function (e) {
                                return r.apply(this, arguments);
                              }),
                            isCompletion: ed,
                            onRequestMoreCompletions: E,
                            isResponseToPluginMessage:
                              (null === (a = e[t - 1]) || void 0 === a
                                ? void 0
                                : a.type) === l.Plugin,
                          },
                          n.message.nodeId
                        );
                      case l.MultiText:
                        return (0,
                        m.jsx)(ej, { messages: n.messages, isCompletionInProgress: i && eq, isCompletion: ed, onRequestMoreCompletions: E }, t);
                      case l.Browsing:
                        var o = n.messages[n.messages.length - 1];
                        return (0,
                        m.jsx)($, { messages: n.messages, isComplete: !i || ep(o) }, n.messages[0].nodeId);
                      case l.Code:
                        var s = e[t + 1],
                          c =
                            s && s.type === l.CodeExecutionOutput
                              ? s.message
                              : void 0;
                        return (0,
                        m.jsx)(eb, { message: n.message, outputMessage: c }, n.message.nodeId);
                      case l.CodeExecutionOutput:
                        return (0,
                        m.jsx)(eu, { message: n.message, isCollapsed: !1 }, n.message.nodeId);
                      case l.Plugin:
                        return (0,
                        m.jsx)(eD, { messages: n.messages }, n.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [en, es, ed, eq, eJ, h, q, B, y, O, eZ, H.size, U, E]
            ),
            eX = (0, N.r7)(h),
            eK =
              !J &&
              !eX &&
              ea &&
              ed &&
              !W &&
              !es &&
              1 === ec &&
              s &&
              !eE &&
              !eM &&
              2 === et.length &&
              Date.now() -
                (null !== (t = eC.message.create_time) && void 0 !== t
                  ? t
                  : 0) *
                  1e3 <
                6e5 &&
              !eq &&
              eN.has(T.st),
            e0 = (0, v.useRef)(Date.now()),
            e1 = (0, v.useRef)(
              (null !== (r = eC.message.create_time) && void 0 !== r
                ? r
                : Date.now()) * 1e3
            ),
            e2 = (0, v.useRef)(Date.now());
          (0, v.useEffect)(
            function () {
              eq || (e2.current = Date.now());
            },
            [eq]
          );
          var e7 = (0, v.useCallback)(
              function (e) {
                if (eK) {
                  var n,
                    t,
                    r = N.tQ.getTree(h),
                    a = et[0] || "",
                    i = (null == r ? void 0 : r.getConversationTurns(a)) || [],
                    o = i[i.length - 1],
                    s = (null == o ? void 0 : o.messages) || [],
                    l = s[s.length - 1],
                    u =
                      (null == l
                        ? void 0
                        : null === (n = l.message) || void 0 === n
                        ? void 0
                        : n.id) || "",
                    f = et[1] || "",
                    g = (null == r ? void 0 : r.getConversationTurns(f)) || [],
                    m = g[g.length - 1],
                    p = (null == m ? void 0 : m.messages) || [],
                    v = p[p.length - 1];
                  z(
                    u,
                    (null == v
                      ? void 0
                      : null === (t = v.message) || void 0 === t
                      ? void 0
                      : t.id) || "",
                    e,
                    e0.current,
                    e0.current,
                    e1.current,
                    e2.current
                  ),
                    N.tQ.updateTree(h, function (n) {
                      n.updateNode(eC.nodeId, {
                        metadata: {
                          $set: (0, d._)(
                            (0, c._)({}, n.getMetadata(eC.nodeId)),
                            { inlineComparisonRating: e }
                          ),
                        },
                      });
                    }),
                    eB(e),
                    N.tQ.updateTree(h, function (e) {
                      e.updateNode(l.nodeId, {
                        metadata: {
                          $set: (0, d._)(
                            (0, c._)({}, e.getMetadata(l.nodeId)),
                            { inlineComparisonRating: "baseline" }
                          ),
                        },
                      });
                    });
                }
              },
              [eK, eC.nodeId, z, h, et]
            ),
            ns = (0, v.useCallback)(
              function () {
                N.tQ.updateTree(h, function (e) {
                  e.updateNode(eC.nodeId, {
                    metadata: {
                      $set: (0, d._)((0, c._)({}, e.getMetadata(eC.nodeId)), {
                        inlineComparisonRating: "skip",
                      }),
                    },
                  });
                }),
                  eB("skip");
              },
              [eC.nodeId, h]
            ),
            nl = ed && !W && !J && !eX,
            nu = !J && !W && !es,
            nc = !ed && !W && !J && 1 === en.length && !es;
          if (K.role === _.uU.Unknown || K.role === _.uU.System) return null;
          var nd = nc
              ? (0, m.jsx)(nr, {
                  $isMessageRedesign: eh,
                  onClick: eS,
                  className: (0, p.Z)(
                    !eh && ea && "md:invisible md:group-hover:visible"
                  ),
                  children: (0, m.jsx)(F.ZP, { icon: x.vPQ }),
                })
              : null,
            nf =
              ed && !W
                ? (0, m.jsx)(D.Z, {
                    onCopy: eA,
                    className: (0, p.Z)(
                      "rounded-md p-1",
                      eh
                        ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
                        : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
                    ),
                  })
                : null,
            nh =
              nl & !1
                ? (0, m.jsxs)("div", {
                    className: "flex gap-1",
                    children: [
                      "thumbsDown" !== eM &&
                        !ef &&
                        (0, m.jsx)(
                          nr,
                          {
                            $isMessageRedesign: eh,
                            onClick: function () {
                              return eF("thumbsUp");
                            },
                            disabled: "thumbsUp" === eM,
                            className: (0, p.Z)(
                              "thumbsUp" === eM &&
                                (eh
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, m.jsx)(F.ZP, { icon: x.fmn }),
                          },
                          "thumbsUp:".concat(eC.nodeId)
                        ),
                      "thumbsUp" !== eM &&
                        !ef &&
                        (0, m.jsx)(
                          nr,
                          {
                            $isMessageRedesign: eh,
                            onClick: function () {
                              return eF("thumbsDown");
                            },
                            disabled: "thumbsDown" === eM,
                            className: (0, p.Z)(
                              "thumbsDown" === eM &&
                                (eh
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, m.jsx)(F.ZP, { icon: x.oLd }),
                          },
                          "thumbsDown:".concat(eC.nodeId)
                        ),
                    ],
                  })
                : null,
            ng =
              eK && !ef
                ? (0, m.jsxs)(no, {
                    children: [
                      (0, m.jsx)("div", {
                        className: (0, p.Z)("mr-4"),
                        children: "Was this response better or worse?",
                      }),
                      (0, m.jsxs)(nt, {
                        onClick: function () {
                          return e7("new");
                        },
                        title:
                          "This response was better than the previous response",
                        children: [
                          (0, m.jsx)(F.ZP, {
                            icon: x.fmn,
                            className: (0, p.Z)("mr-1"),
                          }),
                          "Better",
                        ],
                      }),
                      (0, m.jsxs)(nt, {
                        onClick: function () {
                          return e7("original");
                        },
                        title:
                          "This response was worse than the previous response",
                        children: [
                          (0, m.jsx)(F.ZP, {
                            icon: x.oLd,
                            className: (0, p.Z)("mr-1"),
                          }),
                          "Worse",
                        ],
                      }),
                      (0, m.jsxs)(nt, {
                        onClick: function () {
                          return e7("same");
                        },
                        title: "This response was the same in quality",
                        children: [
                          (0, m.jsx)(F.ZP, {
                            icon: b.Ny3,
                            className: (0, p.Z)(
                              "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                            ),
                          }),
                          "Same",
                        ],
                      }),
                      (0, m.jsx)(nt, {
                        onClick: ns,
                        title: "Skip this comparison",
                        children: (0, m.jsx)(F.ZP, {
                          icon: x.q5L,
                          size: "medium",
                        }),
                      }),
                    ],
                  })
                : null,
            nm = nu && et.length > 1,
            np = function () {
              return (0, m.jsxs)("div", {
                className: "flex gap-1",
                children: [nh, nd, nf],
              });
            },
            nv =
              null === (n = en[0].message.metadata) || void 0 === n
                ? void 0
                : n.shared_conversation_id,
            nx = null != nv;
          return (0, m.jsxs)(e6, {
            className: (0, p.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              eh
                ? (0, p.Z)(
                    "sm:rounded-2xl",
                    ed
                      ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                      : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                  )
                : (0, p.Z)(
                    !W && "border-b border-black/10 dark:border-gray-900/50",
                    ed ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
                  )
            ),
            ref: ek,
            children: [
              eH && (0, m.jsx)(ni, { children: eH }),
              (0, m.jsxs)(ne, {
                $isMessageRedesign: eh,
                className: (0, p.Z)(W ? "ml-5" : "m-auto"),
                children: [
                  (0, m.jsxs)(nn, {
                    children: [
                      (0, m.jsx)("div", {
                        className: eh ? "" : "w-[30px]",
                        children: ed
                          ? e$
                            ? (0, m.jsx)(A.Ph, {
                                plugin: e$,
                                notice: eU || void 0,
                              })
                            : (0, m.jsx)(A.k$, {
                                background: null != X ? X : eQ,
                                iconName: eW,
                                notice: eU || void 0,
                              })
                          : nx
                          ? (0, m.jsx)(A.k$, {
                              background: e3[nv.charCodeAt(0) % e3.length],
                              iconName: "user",
                            })
                          : (0, m.jsx)(A.Yt, {
                              user: null == er ? void 0 : er.user,
                              notice: eU || void 0,
                              size: eh ? "redesign" : "medium",
                            }),
                      }),
                      !eh &&
                        nu &&
                        ea &&
                        (0, m.jsx)(ez, {
                          currentPage: ec,
                          onChangeIndex: function (e) {
                            return y(et[e]);
                          },
                          length: et.length,
                          className: (0, p.Z)(
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                            et.length > 1 ? "visible" : "!invisible"
                          ),
                        }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: (0, p.Z)(
                      "relative",
                      eh
                        ? "min-w-0 grow"
                        : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"
                    ),
                    children: [
                      eh &&
                        (0, m.jsx)("div", {
                          className:
                            "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                          children: ed ? "ChatGPT" : nx ? "User" : "You",
                        }),
                      (0, m.jsx)(e9, { children: eY }),
                      eh
                        ? (!ea || nm || null != ng) &&
                          !W &&
                          (0, m.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [
                              (0, m.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [
                                  nm &&
                                    (0, m.jsx)(ez, {
                                      currentPage: ec,
                                      onChangeIndex: function (e) {
                                        return y(et[e]);
                                      },
                                      length: et.length,
                                      className:
                                        "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700",
                                    }),
                                  !ea && np(),
                                ],
                              }),
                              ng,
                            ],
                          })
                        : (0, m.jsxs)(m.Fragment, {
                            children: [
                              nc &&
                                ea &&
                                (0, m.jsx)(na, {
                                  $hidden: 0 !== H.size,
                                  children: nd,
                                }),
                              (nl || nu) &&
                                (0, m.jsxs)("div", {
                                  className: "flex justify-between lg:block",
                                  children: [
                                    !ea &&
                                      nu &&
                                      (0, m.jsx)(ez, {
                                        currentPage: ec,
                                        onChangeIndex: function (e) {
                                          return y(et[e]);
                                        },
                                        length: et.length,
                                        className: (0, p.Z)(
                                          "self-center pt-2",
                                          et.length > 1
                                            ? "visible"
                                            : "!invisible"
                                        ),
                                      }),
                                    nc &&
                                      !ea &&
                                      (0, m.jsx)(na, {
                                        $hidden: eq,
                                        children: nd,
                                      }),
                                    nl &&
                                      (0, m.jsxs)(na, {
                                        $hidden: eq,
                                        children: [nf, nh],
                                      }),
                                    eK && !ef && ng,
                                  ],
                                }),
                            ],
                          }),
                    ],
                  }),
                  eh &&
                    ea &&
                    !es &&
                    !W &&
                    (!J || ed) &&
                    (0, m.jsx)("div", {
                      className:
                        "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                      children: np(),
                    }),
                ],
              }),
            ],
          });
        }),
        e6 = y.Z.div(eQ()),
        e9 = y.Z.div(e$()),
        ne = y.Z.div(eJ(), function (e) {
          return e.$isMessageRedesign
            ? "relative"
            : "text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0";
        }),
        nn = y.Z.div(eY()),
        nt = y.Z.button(eX()),
        nr = y.Z.button(eK(), function (e) {
          return e.$isMessageRedesign
            ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm"
            : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";
        }),
        na = y.Z.div(e0(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        ni = y.Z.div(e1()),
        no = y.Z.div(e2());
    },
    13282: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = t(22830),
        a = t(4337),
        i = t(35250),
        o = t(70079),
        s = t(1454),
        l = t(34303),
        u = t(86526),
        c = t(38317);
      function d() {
        var e = (0, a._)(["flex ml-auto gap-2"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        var n = e.buttonText,
          t = e.onCopy,
          a = e.className,
          l = (0, r._)((0, o.useState)(!1), 2),
          d = l[0],
          f = l[1],
          g = (0, u.Z)(),
          m = (0, o.useCallback)(
            function () {
              t(),
                f(!0),
                setTimeout(function () {
                  g() && f(!1);
                }, 2e3);
            },
            [g, t]
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            !d &&
              (0, i.jsxs)(h, {
                onClick: m,
                className: a,
                children: [(0, i.jsx)(c.ZP, { icon: s.j4u }), n],
              }),
            d &&
              (0, i.jsxs)(h, {
                className: a,
                children: [(0, i.jsx)(c.ZP, { icon: s.UgA }), n && "Copied!"],
              }),
          ],
        });
      }
      var h = l.Z.button(d());
    },
    180: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(35250);
      function a(e) {
        var n,
          t = e.url,
          a = e.size,
          i = void 0 === a ? 16 : a,
          o = e.className;
        try {
          n = new URL(t);
        } catch (e) {
          return console.error(e), null;
        }
        return (0, r.jsx)("img", {
          src: "https://icons.duckduckgo.com/ip3/".concat(n.hostname, ".ico"),
          alt: "Favicon",
          width: i,
          height: i,
          className: o,
        });
      }
    },
    10604: function (e, n, t) {
      "use strict";
      var r = t(39324),
        a = t(22830),
        i = t(4337),
        o = t(35250),
        s = t(19841),
        l = t(70079),
        u = t(34303),
        c = t(38317);
      function d() {
        var e = (0, i._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      n.Z = l.forwardRef(function (e, n) {
        var t = e.name,
          i = e.placeholder,
          u = e.type,
          d = e.displayName,
          h = e.onChange,
          g = e.onBlur,
          m = e.value,
          p = e.saveOnBlur,
          v = e.icon,
          x = e.onInputIconClick,
          b = e.className,
          y = e.autoComplete,
          j = e.autoFocus,
          w = e.onPressEnter,
          k = (0, a._)((0, l.useState)(m), 2),
          C = k[0],
          _ = k[1],
          M = (0, l.useCallback)(
            function (e) {
              null == g || g(e), p && _(e.target.value);
            },
            [g, p]
          ),
          T = (0, l.useCallback)(
            function (e) {
              null == h || h(e), p && _(e.target.value);
            },
            [h, p]
          ),
          N = (0, l.useCallback)(
            function (e) {
              "Enter" === e.key && w && (e.preventDefault(), w());
            },
            [w]
          );
        (0, l.useEffect)(
          function () {
            _(m);
          },
          [m]
        );
        var I = (0, r._)({}, p ? {} : { value: m }, p ? { value: C } : {});
        return (0,
        o.jsxs)("div", { className: (0, s.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", b), children: [(0, o.jsx)("label", { htmlFor: t, className: "block text-xs font-medium text-gray-900 dark:text-gray-100", children: d }), (0, o.jsxs)("div", { className: (0, s.Z)(d && "mt-1", "relative"), children: [(0, o.jsx)("input", (0, r._)({ ref: n, type: u, name: t, id: t, className: (0, s.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", v && "pr-6"), placeholder: i, onBlur: M, onChange: T, onKeyDown: N, autoComplete: y, autoFocus: j }, I)), v && (0, o.jsx)(f, { onClick: x, children: (0, o.jsx)(c.ZP, { icon: v }) })] })] });
      });
      var f = u.Z.button(d());
    },
    37541: function (e, n, t) {
      "use strict";
      var r = t(35250),
        a = t(70060),
        i = t.n(a);
      t(70079);
      var o = function (e) {
        var n = e.children;
        return (0, r.jsx)(r.Fragment, { children: n });
      };
      n.Z = i()(
        function () {
          return Promise.resolve(o);
        },
        { ssr: !1 }
      );
    },
    5914: function (e, n, t) {
      "use strict";
      t.d(n, {
        j: function () {
          return f;
        },
      });
      var r = t(35250),
        a = t(70079),
        i = t(82841),
        o = t(36218),
        s = t(85023),
        l = t(64135),
        u = t(88038),
        c = t(97688),
        d = "oai/apps/hasSeenStatusUpdate/".concat("2023-03-25"),
        f = function () {
          var e = (0, l.hz)().has(u.Id),
            n = (0, a.useRef)(!!s.m.getItem(d)),
            t = (0, i.WS)();
          return (
            (0, a.useEffect)(
              function () {
                e &&
                  !n.current &&
                  t &&
                  (t(o.s6.oneOffStatusMessageShown),
                  c.m.warning(
                    "You attempted to purchase ChatGPT Plus during an outage. We've issued a refund and apologize for the inconvenience. If you’d like to continue your subscription, please re-subscribe.",
                    {
                      duration: 0,
                      hasCloseButton: !0,
                      onRemove: function () {
                        s.m.setItem(d, !0), (n.current = !0);
                      },
                    }
                  ));
              },
              [n, e, t]
            ),
            (0, r.jsx)("div", {})
          );
        };
    },
    90860: function (e, n, t) {
      "use strict";
      t.d(n, {
        g: function () {
          return F;
        },
      });
      var r = t(39324),
        a = t(22830),
        i = t(4337),
        o = t(35250),
        s = t(19841),
        l = t(70060),
        u = t.n(l),
        c = t(70079),
        d = t(2827),
        f = t(1454),
        h = t(3001),
        g = t(75908),
        m = t(35290),
        p = t(34303),
        v = t(82841),
        x = t(36218),
        b = t(64664),
        y = t(64135),
        j = t(88038),
        w = t(75527),
        k = t(32983),
        C = t(77442),
        _ = t(66958),
        M = t(38317),
        T = t(57924);
      function N() {
        var e = (0, i._)([
          "\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n",
          "\n",
          "\n",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = (0, i._)([
          "\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5  hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n",
          " ",
          "",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = (0, i._)([
          "",
          " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      var S = u()(Promise.resolve().then(t.bind(t, 22208)), {
          loadableGenerated: {
            webpack: function () {
              return [22208];
            },
          },
          ssr: !1,
        }),
        Z = (0, h.vU)({
          errorGeneratingResponse: {
            id: "PromptTextarea.errorGeneratingResponse",
            defaultMessage: "There was an error generating a response",
            description:
              "Error message shown when the response generation fails",
          },
          regenerateResponse: {
            id: "PromptTextarea.regenerateResponse",
            defaultMessage: "Regenerate response",
            description: "Button label for regenerating response",
          },
          continueGenerating: {
            id: "PromptTextarea.continueGenerating",
            defaultMessage: "Continue generating",
            description: "Button label for continuing response generation",
          },
          stopGenerating: {
            id: "PromptTextarea.stopGenerating",
            defaultMessage: "Stop generating",
            description: "Button label for stopping response generation",
          },
          placeholder: {
            id: "PromptTextarea.placeholder",
            defaultMessage: "Send a message...",
            description: "Placeholder text for the input field",
          },
          continueSharedConversationPlaceholder: {
            id: "PromptTextarea.ontinueSharedConversationPplaceholder",
            defaultMessage: "Send a message to continue the conversation.",
            description:
              "Placeholder text for the input field when viewing a shared conversation",
          },
          suggestionTooltip: {
            id: "PromptTextarea.suggestionTooltip",
            defaultMessage: "Click to send",
            description: "Tooltip for the suggestion button",
          },
        });
      function R() {
        var e = (0, a._)((0, c.useState)(0), 2),
          n = e[0],
          t = e[1];
        (0, c.useEffect)(function () {
          var e = setInterval(function () {
            t(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], i = 0; i < 3; i++)
          r.push(
            (0, o.jsx)(
              "span",
              { className: i <= n ? "" : "invisible", children: "\xb7" },
              i
            )
          );
        return (0, o.jsx)(o.Fragment, { children: r });
      }
      function A(e) {
        var n = e.suggestions,
          t = e.shouldRetry,
          r = e.currentInputRef,
          a = e.onSelectSuggestion,
          i = e.handleCreateNewCompletion,
          s = (0, g.Z)(),
          l = (0, c.useCallback)(
            function (e, n) {
              null !== r.current && (a(e), (r.current.value = e), i(void 0, n));
            },
            [r, i, a]
          );
        return (
          (0, c.useEffect)(
            function () {
              void 0 !== n && b.m.logEvent("chatgpt_prompt_show_suggestions");
            },
            [n]
          ),
          (0, o.jsx)("div", {
            className:
              "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
            children:
              t || void 0 === n
                ? null
                : n.slice(0, 2).map(function (e, n) {
                    return (0, o.jsxs)(
                      _.z,
                      {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          return l(e, n);
                        },
                        className:
                          "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [
                          e,
                          (0, o.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0, o.jsx)(T.u, {
                              label: s.formatMessage(Z.suggestionTooltip),
                              side: "top",
                              children: (0, o.jsx)(M.ZP, {
                                icon: f.LbG,
                                size: "small",
                              }),
                            }),
                          }),
                        ],
                      },
                      n
                    );
                  }),
          })
        );
      }
      n.Z = (0, c.forwardRef)(function (e, n) {
        var t = e.onAbortCompletion,
          i = e.onCreateNewCompletion,
          l = e.onRequestMoreCompletions,
          u = e.onContinueGenerating,
          h = e.onFileUpload,
          p = e.canUpload,
          T = e.modelBackend,
          N = e.clientThreadId,
          I = e.isCompletionInProgress,
          P = e.className,
          F = e.clearOnSubmit,
          O = void 0 === F || F,
          q = e.disabled,
          U = void 0 !== q && q,
          z = e.shouldRetry,
          H = e.canPause,
          V = void 0 !== H && H,
          W = e.canContinue,
          G = void 0 !== W && W,
          Q = e.suggestions,
          $ = e.isInteractableSharedThread,
          J = (0, g.Z)(),
          Y = (0, w.oq)(N),
          X = (0, w.Hk)(N),
          K = (0, C.w$)(),
          ee = (0, v.WS)(),
          en = (0, c.useContext)(k.gt).serviceStatus,
          et = (0, c.useContext)(k.QL).historyDisabled,
          er = (0, c.useRef)(null),
          ea = (0, a._)((0, c.useState)(""), 2),
          ei = ea[0],
          eo = ea[1],
          es = (0, c.useCallback)(
            function (e, n) {
              if ((null == e || e.preventDefault(), !U)) {
                var t,
                  r,
                  a =
                    null === (t = er.current) || void 0 === t
                      ? void 0
                      : t.value,
                  o = "".concat(
                    null === (r = er.current) || void 0 === r
                      ? void 0
                      : r.dataset.id,
                    "-nextPrompt"
                  );
                a &&
                  (i(
                    o,
                    { value: a || "" },
                    { eventSource: e ? "mouse" : "keyboard" },
                    { suggestions: Q }
                  ),
                  O && eo(""),
                  (0, d.SI)(1, er.current),
                  void 0 !== Q &&
                    (void 0 !== n
                      ? b.m.logEvent("chatgpt_prompt_use_suggestion", a, {
                          index: "".concat(n),
                        })
                      : b.m.logEvent("chatgpt_prompt_ignore_suggestions")));
              }
            },
            [O, U, i, eo, Q]
          ),
          el = (0, c.useCallback)(
            function () {
              t("", X), l(Y, { eventSource: "mouse" });
            },
            [Y, X, t, l]
          ),
          eu = (0, c.useCallback)(
            function () {
              t("", X),
                ee(x.s6.pauseCompletion, {
                  threadId: w.tQ.getServerThreadId(N),
                  eventSource: "mouse",
                });
            },
            [X, N, ee, t]
          ),
          ec = (0, c.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return !U;
                  },
                  handler: function (e) {
                    (!e.metaKey &&
                      (!K || e.shiftKey || e.nativeEvent.isComposing)) ||
                      (e.preventDefault(), I || es());
                  },
                },
                Escape: {
                  validator: function () {
                    return V && I;
                  },
                  handler: function () {
                    t("", X),
                      ee(x.s6.pauseCompletion, {
                        threadId: w.tQ.getServerThreadId(N),
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [U, K, I, es, V, t, X, ee, N]
          ),
          ed = (0, c.useCallback)(
            function (e) {
              var n;
              (null === (n = ec[e.key]) || void 0 === n
                ? void 0
                : n.validator(e)) && ec[e.key].handler(e);
            },
            [ec]
          );
        (0, c.useEffect)(function () {
          var e;
          null === (e = er.current) || void 0 === e || e.focus();
        }, []);
        var ef = "root" !== Y && !I && !(null == en ? void 0 : en.oof),
          eh = (0, c.useCallback)(
            function () {
              u(Y);
            },
            [Y, u]
          ),
          eg = (0, y.hz)().has(j.uj),
          em = (0, c.useMemo)(
            function () {
              return (0, o.jsxs)("div", {
                className: z ? "w-full" : "",
                children: [
                  z &&
                    (0, o.jsx)("div", {
                      className: "mb-3 text-center text-xs",
                      children: (0, o.jsx)(
                        m.Z,
                        (0, r._)({}, Z.errorGeneratingResponse)
                      ),
                    }),
                  (0, o.jsxs)(B, {
                    $shouldRetry: z,
                    children: [
                      !z &&
                        eg &&
                        (0, o.jsx)(A, {
                          suggestions: Q,
                          shouldRetry: z,
                          currentInputRef: er,
                          onSelectSuggestion: eo,
                          handleCreateNewCompletion: es,
                        }),
                      ef &&
                        (0, o.jsxs)(_.z, {
                          as: "button",
                          color: z ? "primary" : "neutral",
                          onClick: el,
                          className: (0, s.Z)(
                            z ? "m-auto" : "border-0 md:border"
                          ),
                          children: [
                            (0, o.jsx)(M.ZP, {
                              icon: f.Qxo,
                              size: K ? "xsmall" : "small",
                              className: "flex-shrink-0",
                            }),
                            (K || z) &&
                              (0, o.jsx)(
                                m.Z,
                                (0, r._)({}, Z.regenerateResponse)
                              ),
                          ],
                        }),
                      G &&
                        (0, o.jsxs)(_.z, {
                          as: "button",
                          color: "neutral",
                          onClick: eh,
                          className: "border-0 md:border",
                          children: [
                            (0, o.jsx)(M.ZP, {
                              icon: f.lV_,
                              className: "-rotate-180",
                              size: K ? "xsmall" : "small",
                            }),
                            K &&
                              (0, o.jsx)(
                                m.Z,
                                (0, r._)({}, Z.continueGenerating)
                              ),
                          ],
                        }),
                      V &&
                        I &&
                        (0, o.jsxs)(_.z, {
                          as: "button",
                          color: "neutral",
                          onClick: eu,
                          className: "border-0 md:border",
                          children: [
                            (0, o.jsx)(M.ZP, {
                              icon: f.jxP,
                              size: K ? "xsmall" : "small",
                            }),
                            K &&
                              (0, o.jsx)(m.Z, (0, r._)({}, Z.stopGenerating)),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            [G, V, ef, eg, eu, es, eo, el, eh, I, K, z, Q]
          );
        return (
          (0, c.useImperativeHandle)(n, function () {
            return { setInputValue: eo };
          }),
          (0, o.jsx)("form", {
            className: P,
            onSubmit: es,
            children: (0, o.jsxs)("div", {
              className:
                "relative flex h-full flex-1 items-stretch md:flex-col",
              children: [
                K && em,
                !z &&
                  (0, o.jsxs)(L, {
                    $disabled: z,
                    $historyDisabled: et,
                    children: [
                      (0, o.jsx)(d.ZP, {
                        id: D,
                        tabIndex: 0,
                        value: ei,
                        "data-id": Y,
                        ref: er,
                        style: { maxHeight: "200px" },
                        rows: 1,
                        onKeyDown: ed,
                        onChange: function (e) {
                          eo(e.target.value);
                        },
                        placeholder: $
                          ? J.formatMessage(
                              Z.continueSharedConversationPlaceholder
                            )
                          : J.formatMessage(Z.placeholder),
                        className: (0, s.Z)(
                          "m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent",
                          p ? "pl-8 md:pl-5" : "pl-2 md:pl-0"
                        ),
                        disabled: z,
                      }),
                      p &&
                        (0, o.jsx)(S, {
                          clientThreadId: N,
                          onFileUpload: h,
                          currentLeafId: Y,
                          modelBackend: T,
                          disabled: I,
                        }),
                      (0, o.jsx)(E, {
                        disabled: I || z || !("" !== ei) || U,
                        $onRightSide: !0,
                        $nudgeBottom: I,
                        className: I ? "" : "disabled:opacity-40",
                        children: I
                          ? (0, o.jsx)("div", {
                              className: "text-2xl",
                              children: (0, o.jsx)(R, {}),
                            })
                          : (0, o.jsx)(M.ZP, {
                              icon: f.LbG,
                              size: "small",
                              className: "mr-1",
                            }),
                      }),
                    ],
                  }),
                !K && em,
              ],
            }),
          })
        );
      });
      var D = "prompt-textarea";
      function F() {
        var e;
        null === (e = document.getElementById(D)) || void 0 === e || e.focus();
      }
      var L = p.Z.div(
          N(),
          function (e) {
            return e.$historyDisabled
              ? "bg-gray-900 text-white shadow-[0_0_15px_rgba(0,0,0,0.10)] dark:bg-gray-900 dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"
              : "";
          },
          function (e) {
            return e.$disabled && "bg-gray-100";
          }
        ),
        E = p.Z.button(
          I(),
          function (e) {
            return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1";
          },
          function (e) {
            return e.$onRightSide ? "right-1 md:right-2" : "left-1 md:left-2";
          }
        ),
        B = p.Z.div(P(), function (e) {
          return e.$shouldRetry ? "" : "h-full";
        });
    },
    47130: function (e, n, t) {
      "use strict";
      t.d(n, {
        j: function () {
          return G;
        },
        Z: function () {
          return V;
        },
      });
      var r = t(21722),
        a = t(39324),
        i = t(22830),
        o = t(4337),
        s = t(39889),
        l = t(35250),
        u = t(63020),
        c = t(56060),
        d = t(19841),
        f = t(91530),
        h = t.n(f),
        g = t(70079),
        m = t(1454),
        p = t(13002),
        v = t(3001),
        x = t(75908),
        b = t(35290),
        y = t(34303),
        j = t(32787),
        w = t(24274),
        k = t(97703),
        C = t(81292),
        _ = (0, g.createContext)(),
        M = function (e) {
          return (0, C.oR)((0, g.useContext)(_), e);
        },
        T = t(75527),
        N = t(32689),
        I = t(59710),
        P = t(66958),
        S = t(38317),
        Z = t(55041),
        R = t(19265),
        A = t(66850),
        D = t(97688);
      function F() {
        var e = (0, o._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      function L() {
        var e = (0, o._)(["grow flex-1 overflow-hidden"]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = (0, o._)([
          "w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50",
        ]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function B() {
        var e = (0, o._)([
          "mt-4 mx-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)] rounded-t-md h-[calc(100%-16px)] overflow-y-auto bg-white dark:bg-gray-800",
        ]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = (0, o._)([
          "flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n",
          "\n",
        ]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      function q() {
        var e = (0, o._)([
          "flex w-full items-center justify-left gap-2 min-h-[1.5rem]",
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = (0, o._)([
          "border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full",
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = (0, o._)(["flex-none h-full mt-auto mb-auto"]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      var H = (0, v.vU)({
        sharingModalTitle: {
          id: "thread.sharingModal.title",
          defaultMessage: "Share Link to Conversation",
          description:
            "Title of sharing feature in the title of the sharing modal",
        },
        sharingModalDescription: {
          id: "sharingModal.description",
          defaultMessage:
            "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared conversation.",
          description:
            "Description of sharing feature in the first paragraph of the sharing modal",
        },
        sharingModalMoreInfo: {
          id: "thread.sharingModal.moreInfo",
          defaultMessage: "More Info",
          description:
            "Link to a helpdesk article with more information about the sharing modal",
        },
        moderationBlocked: {
          id: "sharingModal.moderationBlocked",
          defaultMessage: "This shared link has been disabled by moderation.",
          description:
            "Error message in sharing modal when shared link has been moderated.",
        },
        confirmCloseWithChanges: {
          id: "thread.sharingModal.confirmCloseWithChanges",
          defaultMessage: "You have unsaved changes. Do you want to continue?",
          description:
            "Confirmation message when closing share modal with changes",
        },
      });
      function V(e) {
        var n = e.serverThreadId,
          t = e.activeRequests,
          r = (0, T.oq)(n),
          o = (0, i._)(
            (0, g.useState)(function () {
              return (0, k.Z)(function (e, n) {
                return {
                  title: void 0,
                  highlightedMessageId: void 0,
                  initiallyHighlightedMessageId: void 0,
                  currentNodeId: void 0,
                  shareLinkId: void 0,
                  shareLinkUrl: void 0,
                  isPublic: !1,
                  isDeleted: !1,
                  isAnonymous: !0,
                  linkAlreadyExisted: !1,
                  linkError: void 0,
                  moderationState: void 0,
                };
              });
            }),
            1
          )[0],
          s = 0 === t.size && "root" !== r,
          u = (0, g.useRef)(!1);
        return (
          (0, g.useEffect)(
            function () {
              if (s && !u.current) {
                u.current = !0;
                var e,
                  t = T.tQ.getThreadCurrentLeafId(n),
                  r =
                    null === (e = T.tQ.getThreadConversationTurns(n, t)[0]) ||
                    void 0 === e
                      ? void 0
                      : e.messages[0].message.id;
                o.setState({ highlightedMessageId: r });
                var a = T.tQ.getTree(n).getMessageId(t);
                w.ZP.createShareLink({
                  message_id: r,
                  current_node_id: a,
                  conversation_id: n,
                  is_anonymous: !0,
                })
                  .then(function (e) {
                    o.setState({
                      shareLinkId: e.share_id,
                      shareLinkUrl: e.share_url,
                      isPublic: e.is_public,
                      isDeleted: !e.is_visible,
                      title: e.title,
                      highlightedMessageId: e.highlighted_message_id,
                      initiallyHighlightedMessageId: e.highlighted_message_id,
                      currentNodeId: e.current_node_id,
                      linkAlreadyExisted: e.already_exists,
                      isAnonymous: e.is_anonymous,
                      moderationState: e.moderation_state,
                    });
                  })
                  .catch(function (e) {
                    e instanceof I.Q0 && "string" == typeof e.message
                      ? o.setState({ linkError: e.message })
                      : (D.m.danger(
                          "Failed to copy link to clipboard - could not create link"
                        ),
                        N.vm.closeSharingModal());
                  });
              }
            },
            [s]
          ),
          (0, l.jsx)(_.Provider, {
            value: o,
            children: (0, l.jsx)(Q, (0, a._)({}, e)),
          })
        );
      }
      function W(e) {
        return (
          !0 === e.has_been_auto_blocked ||
          !0 === e.has_been_auto_moderated ||
          !0 === e.has_been_blocked
        );
      }
      var G =
        "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq";
      function Q(e) {
        var n,
          t,
          o,
          f,
          y,
          k,
          C = e.serverThreadId,
          F = e.activeRequests,
          L = e.currentThreadModel,
          E = function () {
            (!ek ||
              window.confirm(B.formatMessage(H.confirmCloseWithChanges))) &&
              N.vm.closeSharingModal();
          },
          B = (0, x.Z)(),
          O = (0, g.useRef)(null),
          q = (0, i._)((0, g.useState)(!1), 2),
          U = q[0],
          z = q[1],
          V = (0, i._)((0, g.useState)(!1), 2),
          Q = V[0],
          er = V[1],
          ea = (0, i._)((0, g.useState)(!1), 2),
          ei = ea[0],
          eo = ea[1],
          es = (0, g.useContext)(_),
          el = M(function (e) {
            return e.title;
          }),
          eu = M(function (e) {
            return e.shareLinkId;
          }),
          ec = M(function (e) {
            return e.shareLinkUrl;
          }),
          ed = M(function (e) {
            return e.isAnonymous;
          }),
          ef = M(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          eh = M(function (e) {
            return e.currentNodeId;
          }),
          eg = M(function (e) {
            return e.isPublic;
          }),
          em =
            M(function (e) {
              return e.linkAlreadyExisted;
            }) && eg,
          ep = M(function (e) {
            return e.linkError;
          }),
          ev = M(function (e) {
            return e.moderationState;
          }),
          ex = null != ev && W(ev),
          eb = (0, g.useRef)(),
          ey = (0, g.useRef)();
        (0, g.useEffect)(
          function () {
            em && ((eb.current = el), (ey.current = ed));
          },
          [em]
        );
        var ej = (0, j.kP)().session,
          ew =
            ((n = (0, r._)(function (e, n) {
              var t, r, a, i, o, l, u;
              return (0, s.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    er(!0),
                      (r = (t = es.getState()).highlightedMessageId),
                      (a = t.title),
                      (i = t.isDeleted),
                      (o = t.isAnonymous);
                    try {
                      navigator.clipboard.writeText(n);
                    } catch (e) {
                      return (
                        console.warn("Could not copy link to clipboard: " + e),
                        D.m.warning("Failed to copy link to clipboard"),
                        er(!1),
                        [2]
                      );
                    }
                    s.label = 1;
                  case 1:
                    return (
                      s.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        w.ZP.updateShareLink({
                          share_id: e,
                          highlighted_message_id: r,
                          title: null != a ? a : void 0,
                          is_public: !i,
                          is_visible: !i,
                          is_anonymous: o,
                        }),
                      ]
                    );
                  case 2:
                    if (W((l = s.sent().moderation_state)))
                      return es.setState({ moderationState: l }), [2];
                    return (
                      es.setState({ isPublic: !0, moderationState: l }),
                      eo(!0),
                      setTimeout(function () {
                        N.vm.closeSharingModal(),
                          D.m.success(
                            "Copied shared conversation URL to clipboard!"
                          );
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (u = s.sent()) instanceof I.Q0 &&
                        "string" == typeof u.message &&
                        es.setState({ linkError: u.message }),
                      [3, 5]
                    );
                  case 4:
                    return er(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, t) {
              return n.apply(this, arguments);
            }),
          ek = em && (el !== eb.current || ed !== ey.current),
          eC = (0, l.jsxs)(Z.mH, {
            onClick: function () {
              return ew(eu, ec);
            },
            color: "primary",
            disabled: Q || ei || null == eu || null == ec || null != ep || ex,
            children: [
              ei
                ? (0, l.jsx)(S.ZP, { icon: m.LSm })
                : Q
                ? (0, l.jsx)(R.Z, {})
                : (0, l.jsx)(S.ZP, { icon: m.UH }),
              ei
                ? "Copied!"
                : Q
                ? "Copying..."
                : ek
                ? "Update and Copy Link"
                : "Copy Link",
            ],
          }),
          e_ = (0, g.useCallback)(
            function (e) {
              var n;
              null == e || e.preventDefault(),
                es.setState({
                  title:
                    null === (n = O.current) || void 0 === n ? void 0 : n.value,
                }),
                z(!1);
            },
            [es]
          ),
          eM = (0, g.useCallback)(
            function (e) {
              "Enter" === e.key && e_();
            },
            [e_]
          ),
          eT =
            ((t = (0, r._)(function () {
              return (0, s.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      w.ZP.deleteShareLink({
                        share_id: es.getState().shareLinkId,
                      })
                        .catch(function (e) {
                          D.m.danger("Failed to delete shared link");
                        })
                        .then(function () {
                          N.vm.closeSharingModal();
                        }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            })),
            function () {
              return t.apply(this, arguments);
            }),
          eN =
            ((o = (0, r._)(function () {
              return (0, s.Jh)(this, function (e) {
                return (
                  es.setState({ isAnonymous: !0 }),
                  T.qN.setState(function (e) {
                    e.threads[C].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return o.apply(this, arguments);
            }),
          eI =
            ((f = (0, r._)(function () {
              return (0, s.Jh)(this, function (e) {
                return (
                  es.setState({ isAnonymous: !1 }),
                  T.qN.setState(function (e) {
                    var n;
                    e.threads[C].initialThreadData.authorName =
                      null == ej
                        ? void 0
                        : null === (n = ej.user) || void 0 === n
                        ? void 0
                        : n.name;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return f.apply(this, arguments);
            }),
          eP = (0, l.jsxs)(K, {
            $active: U,
            children: [
              (0, l.jsxs)("div", {
                className: "flex-1 pr-1",
                children: [
                  void 0 !== el
                    ? U
                      ? (0, l.jsx)(en, {
                          ref: O,
                          type: "text",
                          defaultValue: null != el ? el : "",
                          autoFocus: !0,
                          onKeyDown: eM,
                          onBlur: e_,
                        })
                      : (0, l.jsxs)(ee, {
                          onDoubleClick: function () {
                            return z(!0);
                          },
                          children: [
                            el,
                            U || null == el
                              ? null
                              : (0, l.jsx)("button", {
                                  onClick: function () {
                                    return z(!0);
                                  },
                                  className: "text-gray-500",
                                  children: (0, l.jsx)(S.ZP, {
                                    icon: m.Nte,
                                    size: "small",
                                  }),
                                }),
                          ],
                        })
                    : (0, l.jsx)("div", { className: "h-6" }),
                  (0, l.jsxs)("div", {
                    className: "mt-1 text-gray-500",
                    children: [
                      !ed &&
                        (0, l.jsxs)("span", {
                          children: [
                            null == ej
                              ? void 0
                              : null === (k = ej.user) || void 0 === k
                              ? void 0
                              : k.name,
                            " \xb7 ",
                          ],
                        }),
                      (0, l.jsx)(v.Ji, {
                        value: new Date(),
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(et, {
                children: (0, l.jsxs)(c.fC, {
                  children: [
                    (0, l.jsx)(c.xz, {
                      asChild: !0,
                      children: (0, l.jsx)(P.z, {
                        color: "neutral",
                        className: "mb-auto mt-auto",
                        children: (0, l.jsx)(p.JEI, {}),
                      }),
                    }),
                    (0, l.jsx)(c.h_, {
                      children: (0, l.jsxs)(c.VY, {
                        className:
                          "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                        side: "top",
                        align: "end",
                        children: [
                          ed &&
                            (0, l.jsx)(P.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: eI,
                              children: (0, l.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, l.jsx)(S.ZP, {
                                    icon: m.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, l.jsx)("div", {
                                    children: "Share your name",
                                  }),
                                ],
                              }),
                            }),
                          !ed &&
                            (0, l.jsx)(P.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: eN,
                              children: (0, l.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, l.jsx)(S.ZP, {
                                    icon: m.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, l.jsx)("div", {
                                    children: "Share anonymously",
                                  }),
                                ],
                              }),
                            }),
                          em &&
                            (0, l.jsx)(P.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: eT,
                              children: (0, l.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, l.jsx)(S.ZP, {
                                    icon: m.Ybf,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, l.jsx)("div", {
                                    children: "Delete Link",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          eS =
            ((y = (0, r._)(function (e, n) {
              return (0, s.Jh)(this, function (e) {
                return [2];
              });
            })),
            function (e, n) {
              return y.apply(this, arguments);
            }),
          eZ = ep;
        return (
          null == eZ &&
            ((null == ev ? void 0 : ev.has_been_auto_blocked) ||
              (null == ev ? void 0 : ev.has_been_auto_moderated) ||
              (null == ev ? void 0 : ev.has_been_blocked)) &&
            (eZ = (0, l.jsx)(b.Z, (0, a._)({}, H.moderationBlocked))),
          (0, l.jsxs)(Z.ZP, {
            isOpen: !0,
            onModalClose: function () {
              E();
            },
            size: "custom",
            type: "success",
            className: "max-w-2xl",
            title: B.formatMessage(H.sharingModalTitle),
            closeButton: (0, l.jsx)(Z.ol, {
              onClose: function () {
                E();
              },
            }),
            primaryButton: null,
            children: [
              null != eZ &&
                (0, l.jsx)("div", {
                  className: "bg-red-500 text-white p-4 rounded-md mb-4",
                  children: eZ,
                }),
              (0, l.jsx)("div", {
                className: (0, d.Z)("w-full"),
                children: (0, l.jsx)("p", {
                  className: (0, d.Z)("mb-6 text-gray-500"),
                  children: (0, l.jsx)(
                    b.Z,
                    (0, a._)({}, H.sharingModalDescription)
                  ),
                }),
              }),
              (0, l.jsx)(Y, {
                children: (0, l.jsx)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: (0, l.jsx)($, {
                    children: (0, l.jsxs)(J, {
                      children: [
                        (0, l.jsx)(u.f, {
                          ratio: 1.9,
                          className: "overflow-hidden",
                          children: (0, l.jsx)(X, {
                            children:
                              null != eh
                                ? (0, l.jsx)(A.Z, {
                                    onChangeItemInView: h(),
                                    onRequestMoreCompletions: h(),
                                    onUpdateNode: h(),
                                    onChangeRating: h(),
                                    onDeleteNode: h(),
                                    onRequestCompletion: h(),
                                    onSandboxLinkClick: eS,
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      h(),
                                    clientThreadId: C,
                                    conversationLeafId: eh,
                                    activeRequests: F,
                                    currentThreadModel: L,
                                    inlineEmbeddedDisplay: !0,
                                    isStaticSharedThread: !0,
                                    isNewThread: !1,
                                    initiallyHighlightedMessageId: ef,
                                  })
                                : (0, l.jsx)("div", {
                                    className:
                                      "flex items-center justify-center h-full",
                                    children: (0, l.jsx)(R.Z, {
                                      className:
                                        "text-gray-400 dark:text-gray-500",
                                    }),
                                  }),
                          }),
                        }),
                        eP,
                      ],
                    }),
                  }),
                }),
              }),
              (0, l.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, l.jsx)("div", {
                    children: (0, l.jsxs)("a", {
                      href: G,
                      className:
                        "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      target: "_blank",
                      rel: "noreferrer",
                      children: [
                        !1 && B.formatMessage(H.sharingModalMoreInfo),
                        !1 && (0, l.jsx)(S.ZP, { icon: m.AlO }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", { className: "text-right", children: eC }),
                ],
              }),
            ],
          })
        );
      }
      var $ = y.Z.main(F()),
        J = y.Z.div(L()),
        Y = y.Z.div(E()),
        X = y.Z.div(B()),
        K = y.Z.div(O(), function (e) {
          return e.$active, "";
        }),
        ee = y.Z.div(q()),
        en = y.Z.input(U()),
        et = y.Z.div(z());
    },
    44825: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return rn;
        },
      });
      var r,
        a,
        i,
        o = t(39324),
        s = t(70216),
        l = t(22830),
        u = t(4337),
        c = t(35250),
        d = t(35448),
        f = t(68555),
        h = t(70079),
        g = t(34303),
        m = t(82841),
        p = t(36218),
        v = t(64135),
        x = t(75527),
        b = t(81292),
        y = t(58392),
        j = (0, b.ZP)(
          (0, y.n)(function () {
            return { aborters: {} };
          })
        ),
        w = j.setState,
        k = {
          addAborter: function (e, n) {
            w(function (t) {
              null != t.aborters[e] &&
                console.warn(
                  "Setting aborter for id ".concat(e, " but it already exists")
                ),
                (t.aborters[e] = n);
            });
          },
          abortAndRemoveById: function (e) {
            w(function (n) {
              var t = n.aborters[e];
              null != t && (t.abort(), delete n.aborters[e]);
            });
          },
          removeAborterById: function (e) {
            w(function (n) {
              delete n.aborters[e];
            });
          },
          reset: function () {
            w(function () {
              return { aborters: {} };
            });
          },
          abortAllAndReset: function () {
            w(function (e) {
              Object.keys(e.aborters).forEach(function (n) {
                e.aborters[n].abort(), delete e.aborters[n];
              });
            });
          },
        },
        C = t(32689),
        _ = t(32983),
        M = t(19841),
        T = t(7851),
        N = t(26430),
        I = t(84913),
        P = t(44043),
        S = t(82187),
        Z = t(69262),
        R = t(75861),
        A = t(70575),
        D = t(91530),
        F = t.n(D),
        L = t(1454),
        E = t(3001),
        B = t(75908),
        O = t(35290),
        q = t(24274),
        U = t(88038),
        z = t(77442);
      function H(e, n, t) {
        var r = (0, x.XL)(e),
          a = r.title,
          i = r.titleSource,
          o = (0, l._)((0, h.useState)(!1), 2),
          s = o[0],
          u = o[1],
          c = null != a ? a : n,
          d = (0, h.useRef)(c);
        return (
          (0, h.useEffect)(
            function () {
              return (
                t && i === x._L.Generated && c !== d.current && u(!0),
                function () {
                  d.current = c;
                }
              );
            },
            [t, c, i]
          ),
          { isTypingEffect: s, resolvedTitle: c }
        );
      }
      var V = t(19051),
        W = t(51217),
        G = t(86526);
      function Q(e) {
        var n = e.text,
          t = (0, G.Z)(),
          r = (0, l._)((0, h.useState)(!0), 2),
          a = r[0],
          i = r[1],
          o = (0, l._)((0, h.useState)(0), 2),
          s = o[0],
          u = o[1],
          d = (0, h.useMemo)(
            function () {
              return new $().humanTypingDelaysQuertyDistance(n);
            },
            [n]
          );
        return (
          (0, h.useEffect)(
            function () {
              n &&
                a &&
                (i(!0),
                d.forEach(function (e, n) {
                  setTimeout(function () {
                    t() && (u(n), n === d.length - 1 && i(!1));
                  }, e);
                }));
            },
            [d, t, a, n]
          ),
          (0, c.jsxs)(c.Fragment, {
            children: [n.substring(0, s + 1), a && "▋"],
          })
        );
      }
      var $ = (function () {
          function e() {
            (0, W._)(this, e);
          }
          var n = e.prototype;
          return (
            (n.qwertyDistance = function (e, n) {
              var t,
                r,
                a = {
                  q: [0, 0],
                  w: [1, 0],
                  e: [2, 0],
                  r: [3, 0],
                  t: [4, 0],
                  y: [5, 0],
                  u: [6, 0],
                  i: [7, 0],
                  o: [8, 0],
                  p: [9, 0],
                  a: [0, 1],
                  s: [1, 1],
                  d: [2, 1],
                  f: [3, 1],
                  g: [4, 1],
                  h: [5, 1],
                  j: [6, 1],
                  k: [7, 1],
                  l: [8, 1],
                  z: [0, 2],
                  x: [1, 2],
                  c: [2, 2],
                  v: [3, 2],
                  b: [4, 2],
                  n: [5, 2],
                  m: [6, 2],
                },
                i = (0, l._)(
                  null !== (t = a[e.toLowerCase()]) && void 0 !== t
                    ? t
                    : [0, 0],
                  2
                ),
                o = i[0],
                s = i[1],
                u = (0, l._)(
                  null !== (r = a[n.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(o - u[0]) + Math.abs(s - u[1]);
            }),
            (n.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  i = 0;
                i < e.length;
                ++i
              ) {
                var o = void 0;
                if (i > 0) {
                  var s = this.qwertyDistance(e[i - 1], e[i]);
                  o =
                    0 === s
                      ? this.getRandomInt(n, Math.floor(t / 2))
                      : 1 === s
                      ? this.getRandomInt(n, Math.floor((2 * t) / 3))
                      : this.getRandomInt(n, t);
                } else o = this.getRandomInt(n, t);
                a.push(o + r), (r += o);
              }
              return a;
            }),
            (n.getRandomInt = function (e, n) {
              return Math.floor(Math.random() * (n - e + 1)) + e;
            }),
            e
          );
        })(),
        J = t(66958),
        Y = t(38317),
        X = t(19265),
        K = t(38675),
        ee = t(32787),
        en = t(85023),
        et = t(97688),
        er = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21"),
        ea = "conversationHistory";
      function ei() {
        var e,
          n = (0, v.hz)().has(U.Ud),
          t = (0, v.Xj)().isLoading,
          r = (0, ee.kP)().session,
          a = null == r ? void 0 : r.accessToken,
          i = !n && !!a && !t,
          o = (0, K.N)({
            queryKey: [ea],
            queryFn: function (e) {
              var n = e.pageParam;
              return q.ZP.getConversations(
                n || 0,
                28,
                null == r ? void 0 : r.accessToken
              );
            },
            getNextPageParam: function (e) {
              var n = e.offset + e.limit;
              return n < e.total ? n : void 0;
            },
            enabled: i,
          }),
          s = o.data,
          l = o.fetchNextPage,
          u = o.hasNextPage,
          c = o.isInitialLoading,
          d = o.isFetchingNextPage,
          f = o.isError,
          g = (0, h.useMemo)(
            function () {
              return null !==
                (e =
                  null == s
                    ? void 0
                    : s.pages.flatMap(function (e) {
                        return e.items;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [s]
          );
        return {
          data: s,
          conversations: g,
          fetchNextPage: l,
          hasNextPage: u,
          isLoading: c,
          isFetchingNextPage: d,
          isError: i && f,
        };
      }
      function eo() {
        var e = (0, d.NL)();
        return (0, h.useCallback)(
          function () {
            e.invalidateQueries([ea]);
          },
          [e]
        );
      }
      function es() {
        var e = (0, u._)([
          "flex flex-col gap-2 pb-2 text-gray-100 text-sm\n",
          "",
        ]);
        return (
          (es = function () {
            return e;
          }),
          e
        );
      }
      function el() {
        var e = (0, u._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          ")}\n",
          ")}\n",
          "\n",
        ]);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function eu() {
        var e = (0, u._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (eu = function () {
            return e;
          }),
          e
        );
      }
      function ec() {
        var e = (0, u._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (ec = function () {
            return e;
          }),
          e
        );
      }
      function ed() {
        var e = (0, u._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (ed = function () {
            return e;
          }),
          e
        );
      }
      function ef() {
        var e = (0, u._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900",
        ]);
        return (
          (ef = function () {
            return e;
          }),
          e
        );
      }
      function eh() {
        var e = (0, u._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }
      function eg() {
        var e = (0, u._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (eg = function () {
            return e;
          }),
          e
        );
      }
      function em() {
        var e = (0, u._)(["p-1 hover:text-white"]);
        return (
          (em = function () {
            return e;
          }),
          e
        );
      }
      var ep = (0, E.vU)({
          historyBucketToday: {
            id: "history.bucket.today",
            defaultMessage: "Today",
            description: "Label for today's history bucket",
          },
          historyBucketYesterday: {
            id: "history.bucket.yesterday",
            defaultMessage: "Yesterday",
            description: "Label for yesterday's history bucket",
          },
          historyBucketLastSeven: {
            id: "history.bucket.lastSeven",
            defaultMessage: "Previous 7 Days",
            description: "Label for the history bucket of the previous 7 days",
          },
          historyBucketLastThirty: {
            id: "history.bucket.lastThirty",
            defaultMessage: "Previous 30 Days",
            description: "Label for the history bucket of the previous 30 days",
          },
          unableToLoadHistory: {
            id: "history.unableToLoad",
            defaultMessage: "Unable to load history",
            description: "Error message when history fails to load",
          },
          retryButton: {
            id: "history.retryButton",
            defaultMessage: "Retry",
            description: "Button to retry loading history",
          },
          showMoreButton: {
            id: "history.showMoreButton",
            defaultMessage: "Show more",
            description: "Button to show more history items",
          },
        }),
        ev = {
          initial: function (e) {
            return e.isNew ? { opacity: 0, height: 0, overflow: "hidden" } : {};
          },
          animate: function () {
            return { opacity: 1, height: "auto" };
          },
          exit: function () {
            return { opacity: 0, height: 0 };
          },
        };
      function ex(e) {
        var n,
          t,
          r,
          a,
          i,
          s,
          u = e.activeId,
          d = e.onNewThread,
          f = e.setActiveRequests,
          g = (0, B.Z)(),
          m = (0, l._)((0, h.useState)(!1), 2),
          p = m[0],
          x = m[1],
          b = (0, l._)((0, h.useState)(0), 2),
          y = b[0],
          j = b[1],
          w = (0, V.Z)(),
          k = ei(),
          C = k.conversations,
          _ = k.hasNextPage,
          D = k.fetchNextPage,
          F = k.isLoading,
          L = k.isFetchingNextPage,
          E = k.isError,
          q = (0, v.hz)().has(U.DY),
          z = (0, h.useRef)(null),
          H = (0, h.useCallback)(
            function (e) {
              var n;
              q &&
                !F &&
                null != e &&
                (null === (n = z.current) || void 0 === n || n.disconnect(),
                (z.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && _ && D();
                })),
                z.current.observe(e));
            },
            [q, F, _, D]
          );
        (0, h.useEffect)(function () {
          return function () {
            var e;
            null === (e = z.current) || void 0 === e || e.disconnect();
          };
        }, []);
        var W = eo();
        (n = (0, h.useRef)(!!en.m.getItem(er))),
          (r = (t = ei()).data),
          (a = t.isError),
          (0, h.useEffect)(
            function () {
              var e, t;
              a ||
                (null == r
                  ? void 0
                  : null === (e = r.pages) || void 0 === e
                  ? void 0
                  : null === (t = e[0]) || void 0 === t
                  ? void 0
                  : t.has_missing_conversations) !== !0 ||
                n.current ||
                et.m.warning(
                  "We've restored conversation history for all ChatGPT users and resolved the underlying issue, which was caused by a significant bug in an open-source library.\n\nIn order to ensure that this issue does not reoccur, users will not be able to retrieve their chat history from the morning of March 20th. We apologize to our users for any difficulties this may cause.",
                  {
                    duration: 0,
                    hasCloseButton: !0,
                    onRemove: function () {
                      en.m.setItem(er, !0), (n.current = !0);
                    },
                  }
                );
            },
            [null == r ? void 0 : r.pages, a]
          );
        var G =
          ((i = (0, h.useRef)()),
          (s = (0, h.useRef)()),
          ((0, h.useEffect)(
            function () {
              (i.current = s.current), (s.current = C);
            },
            [C]
          ),
          C === s.current)
            ? i.current
            : s.current);
        (0, h.useEffect)(
          function () {
            w(function () {
              j(y + 1);
            }, (0, N.Z)((0, I.Z)(), Date.now()) + 1e3);
          },
          [y, w]
        );
        var Q = 0 === C.length,
          $ = (0, h.useMemo)(
            function () {
              return C.reduce(
                function (e, n) {
                  var t,
                    r,
                    a = new Date(
                      null !==
                        (r =
                          null !== (t = n.update_time) && void 0 !== t
                            ? t
                            : n.create_time) && void 0 !== r
                        ? r
                        : 0
                    ),
                    i = (0, T.Z)(new Date(), a);
                  if (0 === i) e.recent.today.items.push(n);
                  else if (i <= 1) e.recent.yesterday.items.push(n);
                  else if (i <= 7) e.recent.lastSeven.items.push(n);
                  else if (i <= 30) e.recent.lastThirty.items.push(n);
                  else if ((0, Z.Z)(a)) {
                    var o = (0, S.Z)(a),
                      s = (0, P.Z)(a),
                      l = "".concat(o, "-").concat(s);
                    e.dynamicMonths[l]
                      ? e.dynamicMonths[l].items.push(n)
                      : (e.dynamicMonths[l] = {
                          label: g.formatDate(a, { month: "long" }),
                          items: [n],
                        });
                  } else {
                    var u = (0, S.Z)(a),
                      c = "".concat(u, "-");
                    e.dynamicYears[c]
                      ? e.dynamicYears[c].items.push(n)
                      : (e.dynamicYears[c] = {
                          label: g.formatDate(a, { year: "numeric" }),
                          items: [n],
                        });
                  }
                  return e;
                },
                {
                  recent: {
                    today: {
                      label: (0, c.jsx)(
                        O.Z,
                        (0, o._)({}, ep.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, c.jsx)(
                        O.Z,
                        (0, o._)({}, ep.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, c.jsx)(
                        O.Z,
                        (0, o._)({}, ep.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, c.jsx)(
                        O.Z,
                        (0, o._)({}, ep.historyBucketLastThirty)
                      ),
                      items: [],
                    },
                  },
                  dynamicMonths: {},
                  dynamicYears: {},
                }
              );
            },
            [y, C]
          );
        return (0, c.jsxs)(eb, {
          $centered: F || (E && Q),
          children: [
            Q && F && (0, c.jsx)(X.Z, { className: "m-auto" }),
            Q &&
              E &&
              (0, c.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, c.jsx)(O.Z, (0, o._)({}, ep.unableToLoadHistory)),
                  !p &&
                    (0, c.jsx)("div", {
                      className: "mt-1",
                      children: (0, c.jsx)(J.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          x(!0), W();
                        },
                        children: (0, c.jsx)(O.Z, (0, o._)({}, ep.retryButton)),
                      }),
                    }),
                ],
              }),
            !F &&
              (0, c.jsx)("div", {
                children: (0, c.jsx)(R.M, {
                  initial: !1,
                  children: [$.recent, $.dynamicMonths, $.dynamicYears].flatMap(
                    function (e, n) {
                      return (0, c.jsx)(
                        "span",
                        {
                          children: Object.entries(e).map(function (e) {
                            var n = (0, l._)(e, 2),
                              t = n[0],
                              r = n[1],
                              a = r.items,
                              i = r.label;
                            if ("today" !== t && !a.length) return null;
                            var o = !!a.find(function (e) {
                              var n;
                              return (
                                C.length > 0 &&
                                e.id ===
                                  (null === (n = C[0]) || void 0 === n
                                    ? void 0
                                    : n.id)
                              );
                            });
                            return (0, c.jsxs)(
                              A.E.div,
                              {
                                className: "relative",
                                layoutId: "bucket-".concat(t),
                                layout: "position",
                                initial: {
                                  height: 0,
                                  opacity: 1,
                                  position: "relative",
                                },
                                animate: {
                                  height: "auto",
                                  opacity: 1,
                                  transition: { duration: 0.2, ease: "easeIn" },
                                },
                                children: [
                                  a.length > 0 &&
                                    (0, c.jsx)(A.E.div, {
                                      className: (0, M.Z)(
                                        "sticky top-0",
                                        o ? "z-[16]" : "z-[14]"
                                      ),
                                      layoutId: "bucketTitle-".concat(t),
                                      layout: "position",
                                      children: (0, c.jsx)(e_, { children: i }),
                                    }),
                                  (0, c.jsx)("ol", {
                                    children: a.map(function (e, n) {
                                      var t = u === e.id,
                                        r =
                                          null == G
                                            ? void 0
                                            : G.find(function (n) {
                                                return n.id === e.id;
                                              });
                                      return (0,
                                      c.jsx)(A.E.li, { className: (0, M.Z)("relative", o && 0 === n ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !r }, variants: ev, initial: "initial", animate: "animate", exit: "exit", children: (0, c.jsx)(ey, { id: e.id, title: e.title, active: t, onNewThread: d, setActiveRequests: f, forwardRef: _ && C[C.length - 5 - 1].id === e.id ? H : void 0 }) }, "history-item-".concat(e.id));
                                    }),
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        },
                        "category-".concat(n)
                      );
                    }
                  ),
                }),
              }),
            q
              ? L &&
                (0, c.jsx)("div", {
                  className: "m-4 mb-5 flex justify-center",
                  children: (0, c.jsx)(X.Z, {}),
                })
              : (0, c.jsx)(c.Fragment, {
                  children:
                    _ &&
                    (0, c.jsx)(J.z, {
                      as: "button",
                      onClick: function () {
                        return D();
                      },
                      color: "dark",
                      className: "m-auto mb-2",
                      size: "small",
                      loading: L,
                      children: (0, c.jsx)(
                        O.Z,
                        (0, o._)({}, ep.showMoreButton)
                      ),
                    }),
                }),
          ],
        });
      }
      var eb = g.Z.div(es(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function ey(e) {
        var n = e.id,
          t = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.forwardRef,
          o = e.setActiveRequests,
          s = (0, z.w$)(),
          u = (0, m.WS)(),
          d = (0, f.useRouter)(),
          g = (0, l._)((0, h.useState)(!1), 2),
          b = g[0],
          y = g[1],
          j = (0, h.useRef)(null),
          w = (0, l._)((0, h.useState)(!1), 2),
          _ = w[0],
          T = w[1],
          N = (0, v.hz)().has(U.RJ) && r,
          I = eo(),
          P = (0, h.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                y(!1),
                (null === (r = j.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = j.current) || void 0 === a
                    ? void 0
                    : a.value) !== t)
              ) {
                var i = j.current.value;
                q.ZP.patchConversation(n, { title: i }),
                  x.tQ.setTitle(n, i, x._L.User),
                  u(p.s6.renameThread, { threadId: n, content: i }),
                  I();
              }
            },
            [u, n, I, t]
          ),
          S = (0, h.useCallback)(
            function (e) {
              "Enter" === e.key && P();
            },
            [P]
          ),
          Z = (0, h.useCallback)(
            function () {
              q.ZP.patchConversation(n, { is_visible: !1 }).then(function () {
                I();
              }),
                a();
            },
            [n, a, I]
          ),
          R = (0, h.useCallback)(
            function (e) {
              k.abortAllAndReset(),
                o(new Set()),
                e.preventDefault(),
                u(p.s6.loadThread, { threadId: n }),
                d.push("/c/".concat(n), void 0, { shallow: !0 });
            },
            [u, n, d, o]
          ),
          A = H(n, t, r),
          D = A.resolvedTitle,
          E = A.isTypingEffect;
        if (b)
          return (0, c.jsxs)(ew, {
            $active: r,
            children: [
              (0, c.jsx)(Y.ZP, { icon: L.IC0, className: "flex-shrink-0" }),
              (0, c.jsx)(ek, {
                ref: j,
                type: "text",
                defaultValue: null != D ? D : "",
                autoFocus: !0,
                onKeyDown: S,
                className: "mr-0",
                onBlur: P,
              }),
              (0, c.jsxs)(eT, {
                $active: !0,
                children: [
                  (0, c.jsx)(eN, {
                    onClick: P,
                    children: (0, c.jsx)(Y.ZP, { icon: L.UgA }),
                  }),
                  (0, c.jsx)(eN, {
                    onClick: function (e) {
                      e.preventDefault(), y(!1);
                    },
                    children: (0, c.jsx)(Y.ZP, { icon: L.q5L }),
                  }),
                ],
              }),
            ],
          });
        var B = E && r && s;
        return (0, c.jsxs)(ej, {
          onClick: r ? F() : R,
          $active: r,
          $sharing: N,
          className: (0, M.Z)("group", B && "animate-flash"),
          ref: i,
          children: [
            (0, c.jsx)(Y.ZP, { icon: _ ? L.Ybf : L.IC0 }),
            (0, c.jsxs)(eC, {
              children: [
                B
                  ? (0, c.jsx)(Q, { text: null != D ? D : "" })
                  : _
                  ? 'Delete "'.concat(D, '"?')
                  : D,
                (!E || !r) && (0, c.jsx)(eM, { $active: r }),
              ],
            }),
            _ &&
              (0, c.jsxs)(eT, {
                $active: !0,
                children: [
                  (0, c.jsx)(eN, {
                    onClick: Z,
                    children: (0, c.jsx)(Y.ZP, { icon: L.UgA }),
                  }),
                  (0, c.jsx)(eN, {
                    onClick: function () {
                      T(!1);
                    },
                    children: (0, c.jsx)(Y.ZP, { icon: L.q5L }),
                  }),
                ],
              }),
            r &&
              !_ &&
              (0, c.jsxs)(eT, {
                $active: r,
                children: [
                  (0, c.jsx)(eN, {
                    onClick: function (e) {
                      e.preventDefault(), y(!0);
                    },
                    children: (0, c.jsx)(Y.ZP, { icon: L.Nte }),
                  }),
                  N &&
                    (0, c.jsx)(eN, {
                      onClick: function (e) {
                        e.preventDefault(), C.vm.openSharingModal(n);
                      },
                      children: (0, c.jsx)(Y.ZP, { icon: L.A8q }),
                    }),
                  (0, c.jsx)(eN, {
                    onClick: function () {
                      return T(!0);
                    },
                    children: (0, c.jsx)(Y.ZP, { icon: L.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var ej = g.Z.a(
          el(),
          function (e) {
            var n = e.$active,
              t = e.$sharing;
            return n && t ? "pr-[4.5rem]" : "";
          },
          function (e) {
            var n = e.$active,
              t = e.$sharing;
            return n && !t ? "pr-14" : "";
          },
          function (e) {
            return e.$active
              ? "bg-gray-800 hover:bg-gray-800"
              : "hover:pr-4 bg-gray-900";
          }
        ),
        ew = g.Z.div(eu(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "bg-gray-900";
        }),
        ek = g.Z.input(ec()),
        eC = g.Z.div(ed()),
        e_ = g.Z.h3(ef()),
        eM = g.Z.div(eh(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        eT = g.Z.div(eg(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        eN = g.Z.button(em()),
        eI = t(71209),
        eP = t(9849),
        eS = t(40638),
        eZ = t(24760),
        eR = t(70788),
        eA = t(37812),
        eD = t(19208),
        eF = t.n(eD),
        eL = t(87316),
        eE = t(46110),
        eB = t(44544),
        eO = t(55041),
        eq = t(98454),
        eU = t(25260),
        ez = t(24396);
      function eH() {
        var e = (0, ee.kP)().session,
          n = (0, v.hz)(),
          t = (0, ez.a)(
            ["accounts"],
            function () {
              return q.ZP.getAccounts(null == e ? void 0 : e.accessToken);
            },
            {
              enabled:
                !!(null == e ? void 0 : e.accessToken) &&
                n.has("business_seats"),
              onError: function (e) {
                console.error(e),
                  et.m.danger("Failed to get the accounts you're a part of");
              },
            }
          );
        return { data: t.data, isLoading: t.isLoading };
      }
      var eV = (0, b.ZP)(function () {
          return { isModalOpen: !1, currentAccount: null };
        }),
        eW = {
          setIsModalOpen: function (e) {
            eV.setState({ isModalOpen: e });
          },
          setCurrentAccount: function (e) {
            eV.setState({ currentAccount: e });
          },
        },
        eG = (0, E.vU)({
          accountSwitcherTitle: {
            id: "accountSwitcher.title",
            defaultMessage: "Choose Account",
            description: "title for account switcher modal",
          },
          emptyAccountTitle: {
            id: "accountSwitcher.emptyAccountTitle",
            defaultMessage: "Untitled Workspace",
            description: "title for workspace without a name",
          },
          personalAccount: {
            id: "accountSwitcher.personalAccount",
            defaultMessage: "Personal",
            description: "label for personal tier account",
          },
          businessAccount: {
            id: "accountSwitcher.businessAccount",
            defaultMessage: "Business",
            description: "label for business tier account",
          },
        });
      function eQ() {
        var e = eV(),
          n = eH(),
          t = n.data,
          r = n.isLoading;
        return (
          (0, h.useEffect)(
            function () {
              var e = (0, eB.getCookie)("_account");
              if ("string" == typeof e && "" !== e) {
                var n =
                  null == t
                    ? void 0
                    : t.data.find(function (n) {
                        return n.id === e;
                      });
                n && eW.setCurrentAccount(n);
              }
            },
            [r, t]
          ),
          {
            isModalOpen: e.isModalOpen,
            currentAccount: e.currentAccount,
            accounts: (null == t ? void 0 : t.data) || [],
          }
        );
      }
      function e$(e) {
        var n,
          t,
          r,
          a,
          i = e.account,
          o = (0, ee.kP)().session,
          s = eQ().currentAccount,
          l = (null == s ? void 0 : s.id) === i.id,
          u = (0, B.Z)(),
          d = (0, c.jsx)("div", {
            className:
              "bg-blue-100 rounded-full w-10 h-10 items-center justify-center flex",
            children: (0, c.jsx)(Y.ZP, {
              icon: eq.Z,
              size: "small",
              className: "text-blue-400",
            }),
          });
        "personal" === i.structure &&
          (null == o
            ? void 0
            : null === (n = o.user) || void 0 === n
            ? void 0
            : n.picture) !== void 0 &&
          (d = (0, c.jsx)(eF(), {
            src:
              null == o
                ? void 0
                : null === (t = o.user) || void 0 === t
                ? void 0
                : t.picture,
            alt: "Profile",
            width: 24,
            height: 24,
            className: "rounded-full relative top-1 w-10 h-10",
          }));
        var f = (0, h.useCallback)(
            function () {
              (0, eB.setCookie)("_account", i.id, { maxAge: 31536e5 }),
                eW.setCurrentAccount(i);
            },
            [i]
          ),
          g = i.name;
        return (
          "personal" === i.structure &&
            (g =
              (null == o
                ? void 0
                : null === (r = o.user) || void 0 === r
                ? void 0
                : r.name) !== void 0
                ? null == o
                  ? void 0
                  : null === (a = o.user) || void 0 === a
                  ? void 0
                  : a.name
                : u.formatMessage(eG.emptyAccountTitle)),
          g || (g = u.formatMessage(eG.emptyAccountTitle)),
          (0, c.jsxs)("button", {
            onClick: f,
            className: (0, M.Z)({
              "hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 rounded-lg  w-full p-4 items-center flex gap-2":
                !0,
              "bg-gray-50 dark:bg-gray-800": l,
            }),
            children: [
              (0, c.jsxs)("div", {
                className: "flex gap-4 w-full",
                children: [
                  d,
                  (0, c.jsxs)("div", {
                    className:
                      "flex flex-1 flex-col gap-2 w-full items-start justify-start",
                    children: [
                      (0, c.jsx)("div", {
                        className: "font-medium capitalize align-top inline",
                        children: g,
                      }),
                      (0, c.jsx)("div", {
                        className: "text-sm text-gray-500",
                        children:
                          "personal" == i.structure
                            ? u.formatMessage(eG.personalAccount)
                            : u.formatMessage(eG.businessAccount),
                      }),
                    ],
                  }),
                ],
              }),
              (0, c.jsx)("div", {
                className: "flex h-full items-center p-1",
                children:
                  l &&
                  (0, c.jsx)("div", {
                    className: "",
                    children: (0, c.jsx)(Y.ZP, { icon: eU.Z, size: "medium" }),
                  }),
              }),
            ],
          })
        );
      }
      function eJ(e) {
        var n = e.data.data.map(function (e) {
          return (0, c.jsx)(e$, { account: e }, e.id);
        });
        return (0, c.jsx)("div", {
          className: "flex flex-col gap-2 w-full",
          children: n,
        });
      }
      function eY() {
        var e = eV().isModalOpen,
          n = eH(),
          t = n.data,
          r = n.isLoading,
          a = (0, B.Z)(),
          i = (0, h.useCallback)(function () {
            eW.setIsModalOpen(!1);
          }, []);
        return r || !t
          ? null
          : (0, c.jsx)(eO.ZP, {
              onModalClose: i,
              closeButton: (0, c.jsx)(eO.ol, { onClose: i }),
              type: "success",
              isOpen: e,
              fullBleed: !0,
              title: a.formatMessage(eG.accountSwitcherTitle),
              children: (0, c.jsx)("div", {
                className:
                  "flex items-center justify-between w-full  px-6 py-4",
                children: (0, c.jsx)(eJ, { data: t }),
              }),
            });
      }
      var eX = t(181),
        eK = t(13451),
        e0 = t(86546),
        e1 = t(13002),
        e2 = t(21437),
        e3 = t(86433),
        e4 = t(10604),
        e5 = t(21722),
        e8 = t(39889),
        e7 = t(57311),
        e6 = t(13282);
      function e9(e) {
        var n = e.children,
          t = e.sidebarOpen,
          r = e.onClose;
        return (0, c.jsx)(eS.u.Root, {
          show: t,
          as: h.Fragment,
          children: (0, c.jsxs)(eZ.V, {
            as: "div",
            className: "relative z-10",
            onClose: r,
            children: [
              (0, c.jsx)("div", { className: "fixed inset-0" }),
              (0, c.jsx)("div", {
                className: "fixed inset-0 overflow-hidden",
                children: (0, c.jsx)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: (0, c.jsx)("div", {
                    className:
                      "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                    children: (0, c.jsx)(eS.u.Child, {
                      as: h.Fragment,
                      enter:
                        "transform transition ease-in-out duration-100 sm:duration-300",
                      enterFrom: "translate-x-full",
                      enterTo: "translate-x-0",
                      leave:
                        "transform transition ease-in-out duration-300 sm:duration-500",
                      leaveFrom: "translate-x-0",
                      leaveTo: "translate-x-full",
                      children: (0, c.jsx)(eZ.V.Panel, {
                        className:
                          "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                        children: (0, c.jsx)("div", {
                          className:
                            "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                          children: n,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var ne = t(57924);
      function nn() {
        var e = (0, u._)([
          "overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-800",
        ]);
        return (
          (nn = function () {
            return e;
          }),
          e
        );
      }
      function nt() {
        var e = (0, u._)(["whitespace-pre-wrap text-sm"]);
        return (
          (nt = function () {
            return e;
          }),
          e
        );
      }
      function nr() {
        var e = (0, u._)([
          "px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200",
        ]);
        return (
          (nr = function () {
            return e;
          }),
          e
        );
      }
      function na(e) {
        var n = e.children,
          t = e.title,
          r = e.icon,
          a = e.isOpen,
          i = e.slideOver,
          o = e.onClose,
          s = (0, c.jsxs)(ns, {
            children: [
              (0, c.jsxs)("div", {
                className: "flex items-start justify-between",
                children: [
                  (0, c.jsxs)("div", {
                    className:
                      "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                    children: [(0, c.jsx)(Y.ZP, { icon: r }), t],
                  }),
                  (0, c.jsx)("div", {
                    className: "mr-2 mt-2 flex h-7 items-center",
                    children: (0, c.jsxs)("button", {
                      type: "button",
                      className:
                        "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                      onClick: o,
                      children: [
                        (0, c.jsx)("span", {
                          className: "sr-only",
                          children: "Close sidebar",
                        }),
                        (0, c.jsx)(Y.ZP, {
                          icon: L.q5L,
                          size: "medium",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              n,
            ],
          });
        return i
          ? (0, c.jsx)(e9, { sidebarOpen: a, onClose: o, children: s })
          : a
          ? s
          : null;
      }
      function ni(e) {
        var n = e.clientThreadId,
          t = e.currentLeafId,
          r = e.isOpen,
          a = e.slideOver,
          i = e.onClose,
          o = (0, x.u9)(n, t),
          s = (0, l._)((0, h.useState)(), 2),
          u = s[0],
          d = s[1],
          f = (0, v.hz)(),
          g = (0, h.useCallback)(function () {
            d(void 0);
          }, []),
          m = (0, h.useCallback)(
            function () {
              var e = x.tQ.getTree(n);
              navigator.clipboard.writeText(e.getTextFromThread(t));
            },
            [t, n]
          );
        if (!f.has("debug")) return null;
        var p = o.map(function (e, n) {
          var t = e.author,
            r = t.role,
            a = t.name;
          return (0, c.jsxs)(
            nu,
            {
              role: "button",
              onClick: function () {
                return d(n);
              },
              children: [
                (0, c.jsxs)("div", {
                  className: "text-xs font-medium uppercase text-gray-400",
                  children: [
                    r,
                    a && a !== r && " (".concat(a, ")"),
                    " -> ",
                    e7.Cv.getRecipientFromMessage(e),
                  ],
                }),
                (0, c.jsx)("div", { children: e7.Cv.getTextFromMessage(e) }),
              ],
            },
            e.id
          );
        });
        return (0, c.jsxs)(na, {
          icon: L.cDN,
          title: "Debug",
          isOpen: r,
          slideOver: a,
          onClose: i,
          children: [
            (0, c.jsxs)("div", {
              className:
                "flex items-center justify-between border-y bg-gray-100 px-4 py-1 text-xs font-medium uppercase text-gray-700",
              children: [
                "Conversation messages",
                (0, c.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, c.jsx)(ne.u, {
                      label: "Copy conversation text to clipboard",
                      children: (0, c.jsx)(e6.Z, { onCopy: m }),
                    }),
                    (0, c.jsx)(ne.u, {
                      label: "Download raw conversation",
                      children: (0, c.jsx)(no, {
                        clientThreadId: n,
                        messages: o,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, c.jsx)(nl, { children: p }),
            void 0 !== u &&
              (0, c.jsx)(
                eO.ZP,
                {
                  isOpen: !0,
                  onModalClose: g,
                  type: "success",
                  children: (0, c.jsx)("pre", {
                    className:
                      "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                    children: JSON.stringify(o[u], null, 2),
                  }),
                },
                "DebugMessageModal-".concat(u)
              ),
          ],
        });
      }
      function no(e) {
        var n = e.clientThreadId,
          t = e.messages,
          r = (0, h.useCallback)(
            function () {
              var e = JSON.stringify(t) + "\n",
                r = new Blob([e], { type: "application/json" }),
                a = URL.createObjectURL(r),
                i = document.createElement("a");
              (i.href = a),
                (i.download = "messages-".concat(
                  x.tQ.getServerThreadId(n),
                  ".jsonl"
                )),
                i.click(),
                URL.revokeObjectURL(a);
            },
            [n, t]
          );
        return (0, c.jsx)("button", {
          onClick: r,
          children: (0, c.jsx)(Y.ZP, { icon: L._hL }),
        });
      }
      var ns = g.Z.div(nn()),
        nl = g.Z.pre(nt()),
        nu = g.Z.div(nr()),
        nc = t(17915),
        nd = t(86573),
        nf = t(38631),
        nh = t(49910),
        ng = t(697),
        nm = (0, b.ZP)(function () {
          return { isOpen: !1 };
        }),
        np = {
          close: function () {
            nm.setState({ isOpen: !1 });
          },
          setIsOpen: function (e) {
            nm.setState({ isOpen: e });
          },
        };
      function nv(e) {
        var n = e.slideOver,
          t = (0, l._)((0, h.useState)(), 2),
          r = t[0],
          a = t[1],
          i = (0, l._)((0, h.useState)(!1), 2),
          o = i[0],
          s = i[1],
          u = (0, l._)((0, h.useState)(!1), 2),
          f = u[0],
          g = u[1],
          m = (0, l._)((0, h.useState)(!1), 2),
          p = m[0],
          x = m[1],
          b = (0, ee.kP)().session,
          y = (null == b ? void 0 : b.user) != null && (0, ee.yl)(b.user),
          j = (0, v.hz)(),
          w = (0, d.NL)(),
          k = nm(function (e) {
            return e.isOpen;
          }),
          C = (0, ng.p0)(),
          _ = (0, nc.sd)().fetchManifestAndSpec,
          M = (0, h.useMemo)(
            function () {
              return y ? C[0] : C.find(nd.cf);
            },
            [C, y]
          ),
          T = (0, h.useCallback)(
            (0, e5._)(function () {
              return (0, e8.Jh)(this, function (e) {
                return (
                  M &&
                    (a(void 0),
                    _({
                      domain: M.domain,
                      onSuccess: function (e) {
                        a({
                          manifestValidationInfo:
                            e.scrapeManifestResponse.manifest_validation_info,
                          apiValidationInfo: e.apiValidationInfo,
                        }),
                          null != e.scrapeManifestResponse.plugin &&
                            (0, nc.aU)(e.scrapeManifestResponse.plugin, w, [
                              "installedAip",
                            ]);
                      },
                      onError: function (e) {
                        et.m.danger(
                          (null == e ? void 0 : e.message) ||
                            "Error refreshing plugin."
                        );
                      },
                    })),
                  [2]
                );
              });
            }),
            [M, w, _]
          );
        return ((0, h.useEffect)(
          function () {
            k && T();
          },
          [k, T]
        ),
        j.has("tools3_dev"))
          ? (0, c.jsx)(na, {
              icon: L.V7f,
              title: "Plugin devtools",
              isOpen: k,
              slideOver: n,
              onClose: np.close,
              children: (0, c.jsx)("div", {
                className:
                  "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                children:
                  null != M
                    ? (0, c.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, c.jsx)("div", {
                            children: (0, c.jsx)(J.z, {
                              size: "small",
                              color: "neutral",
                              onClick: T,
                              children: "Refresh plugin",
                            }),
                          }),
                          r
                            ? (0, c.jsxs)(c.Fragment, {
                                children: [
                                  (0, c.jsx)(nf.Z, { plugin: M }),
                                  (0, c.jsxs)("div", {
                                    children: ["Plugin id: ", M.id],
                                  }),
                                  (0, c.jsx)(nh.rC, {
                                    manifestValidationInfo:
                                      r.manifestValidationInfo,
                                    expanded: o,
                                    onChangeExpanded: s,
                                  }),
                                  null != r.apiValidationInfo &&
                                    (0, c.jsxs)(c.Fragment, {
                                      children: [
                                        (0, c.jsx)(nh.q6, {
                                          apiValidationInfo:
                                            r.apiValidationInfo,
                                          expanded: f,
                                          onChangeExpanded: g,
                                        }),
                                        (0, c.jsx)(nh.bf, {
                                          apiValidationInfo:
                                            r.apiValidationInfo,
                                          expanded: p,
                                          onChangeExpanded: x,
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, c.jsx)("div", {
                                className: "self-center",
                                children: (0, c.jsx)(X.Z, {}),
                              }),
                        ],
                      })
                    : (0, c.jsxs)("div", {
                        className: "mt-4 text-center",
                        children: [
                          "Please enable a localhost plugin",
                          " ",
                          y && " (or any plugin if you're an OpenAI employee) ",
                          "to use devtools.",
                        ],
                      }),
              }),
            })
          : null;
      }
      var nx = t(44925),
        nb = t(68789),
        ny = {
          Root: function (e) {
            var n = e.children,
              t = e.className;
            return (0, c.jsx)("div", {
              className: (0, M.Z)(
                "overflow-y-auto rounded-md border border-gray-100 dark:border-gray-700",
                t
              ),
              children: (0, c.jsx)("table", {
                className: "w-full border-separate border-spacing-0",
                children: n,
              }),
            });
          },
          Header: function (e) {
            var n = e.children;
            return (0, c.jsx)("thead", {
              children: (0, c.jsx)("tr", { children: n }),
            });
          },
          HeaderCell: function (e) {
            var n = e.textAlign,
              t = e.children;
            return (0, c.jsx)("th", {
              className: (0, M.Z)(
                "sticky top-0 border-b font-medium border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-gray-700 dark:text-gray-200 rounded-t",
                "left" === (void 0 === n ? "left" : n)
                  ? "text-left"
                  : "text-right"
              ),
              children: t,
            });
          },
          Body: function (e) {
            var n = e.children;
            return (0, c.jsx)("tbody", { children: n });
          },
          Row: function (e) {
            var n = e.children;
            return (0, c.jsx)("tr", { children: n });
          },
          Cell: function (e) {
            var n = e.children;
            return (0, c.jsx)("td", {
              className:
                "[tr:last-child_&]:border-b-0 border-b border-gray-100 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-500",
              children: n,
            });
          },
          Actions: function (e) {
            var n = e.children;
            return (0, c.jsx)("div", {
              className: "flex items-center justify-end gap-2",
              children: n,
            });
          },
        },
        nj = ["sharedConversations"],
        nw = (0, E.vU)({
          name: {
            id: "sharedConversationModal.name",
            defaultMessage: "Name",
            description: "Table column header",
          },
          dateShared: {
            id: "sharedConversationModal.dateShared",
            defaultMessage: "Date shared",
            description: "Table column header",
          },
          loading: {
            id: "sharedConversationModal.loading",
            defaultMessage: "Loading...",
            description: "Loading message",
          },
          somethingWentWrong: {
            id: "sharedConversationModal.somethingWentWrong",
            defaultMessage: "Something went wrong...",
            description: "Error message",
          },
          retry: {
            id: "sharedConversationModal.retry",
            defaultMessage: "Retry",
            description: "Retry button text",
          },
          noSharedConversations: {
            id: "sharedConversationModal.noSharedConversations",
            defaultMessage: "You have no shared links.",
            description: "No shared links message",
          },
          title: {
            id: "sharedConversationModal.title",
            defaultMessage: "Shared Links",
            description: "Shared links modal title",
          },
          goToOriginConversation: {
            id: "sharedConversationModal.goToOriginConversation",
            defaultMessage: "Go to conversation",
            description: "Label for conversation icon",
          },
          deleteSharedConversation: {
            id: "sharedConversationModal.deleteSharedConversation",
            defaultMessage: "Delete shared conversation",
            description: "Label for delete shared conversation icon",
          },
          deleteSharedConversationFailed: {
            id: "sharedConversationModal.deleteSharedConversationFailed",
            defaultMessage: "Deleting shared conversation failed",
            description: "Toaster message when deleting share link fails",
          },
          deleteAllSharedConversations: {
            id: "sharedConversationModal.deleteSharedAllConversations",
            defaultMessage: "Delete all shared links",
            description: "Menu item for deleting all shared links",
          },
          deleteAllSharedConversationsConfirm: {
            id: "sharedConversationModal.deleteSharedAllConversationsConfirm",
            defaultMessage:
              "Are you sure you want to delete all your shared links?",
            description: "Confirmation message for deleting share links",
          },
          deleteAllSharedConversationsFailed: {
            id: "sharedConversationModal.deleteSharedAllConversationsFailed",
            defaultMessage: "Deleting shared links failed",
            description: "Toaster message when deleting all share links fails",
          },
        });
      function nk() {
        var e = (0, d.NL)(),
          n = (0, B.Z)(),
          t = (0, eK.D)({
            mutationFn: function () {
              return q.ZP.deleteAllSharedConversations();
            },
            onSettled: function () {
              e.invalidateQueries(nj);
            },
            onError: function () {
              et.m.danger(
                n.formatMessage(nw.deleteAllSharedConversationsFailed)
              );
            },
          }).mutate;
        return (0, c.jsxs)(nb.fC, {
          children: [
            (0, c.jsx)(nb.xz, {
              asChild: !0,
              children: (0, c.jsx)("button", {
                className:
                  "text-gray-500 hover:text-gray-600 radix-state-open:text-gray-600 dark:hover:text-gray-400 dark:radix-state-open:text-gray-400",
                children: (0, c.jsx)(Y.ZP, { icon: L.K9M }),
              }),
            }),
            (0, c.jsx)(nb.Uv, {
              children: (0, c.jsx)(nb.VY, {
                className:
                  "min-w-[8rem] rounded-md bg-white py-1 shadow-lg dark:bg-gray-800",
                side: "bottom",
                sideOffset: 4,
                children: (0, c.jsx)(nb.ck, {
                  onClick: function () {
                    window.confirm(
                      n.formatMessage(nw.deleteAllSharedConversationsConfirm)
                    ) && t();
                  },
                  className:
                    "select-none px-2 py-1 radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700 text-red-500",
                  children: (0, c.jsx)(
                    O.Z,
                    (0, o._)({}, nw.deleteAllSharedConversations)
                  ),
                }),
              }),
            }),
          ],
        });
      }
      function nC() {
        return q.ZP.getSharedConversations();
      }
      function n_(e) {
        var n = e.sharedConversation,
          t = (0, B.Z)(),
          r = (0, d.NL)(),
          a = (0, eK.D)({
            mutationFn: function (e) {
              var n = e.sharedConversationId;
              return q.ZP.deleteShareLink({ share_id: n });
            },
            onSettled: function () {
              r.invalidateQueries(nj);
            },
            onError: function () {
              et.m.danger(t.formatMessage(nw.deleteSharedConversationFailed));
            },
          }).mutate;
        return (0, c.jsxs)(ny.Row, {
          children: [
            (0, c.jsx)(ny.Cell, {
              children: (0, c.jsxs)("a", {
                href: "/share/".concat(n.id),
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex items-center gap-2 align-top text-blue-500 dark:text-blue-400",
                children: [
                  (0, c.jsx)(Y.ZP, { icon: L.XKb, className: "flex-shrink-0" }),
                  n.title,
                ],
              }),
            }),
            (0, c.jsx)(ny.Cell, {
              children:
                null != n.create_time
                  ? (0, c.jsx)(E.Ji, {
                      value: n.create_time,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    })
                  : null,
            }),
            (0, c.jsx)(ny.Cell, {
              children: (0, c.jsxs)(ny.Actions, {
                children: [
                  (0, c.jsx)("a", {
                    href: "/c/".concat(n.conversation_id),
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": t.formatMessage(nw.goToOriginConversation),
                    title: t.formatMessage(nw.goToOriginConversation),
                    className:
                      "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    children: (0, c.jsx)(Y.ZP, { icon: L.IC0 }),
                  }),
                  (0, c.jsx)("button", {
                    onClick: function () {
                      a({ sharedConversationId: n.id });
                    },
                    "aria-label": t.formatMessage(nw.deleteSharedConversation),
                    title: t.formatMessage(nw.deleteSharedConversation),
                    className:
                      "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    children: (0, c.jsx)(Y.ZP, { icon: L.Ybf }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function nM(e) {
        var n,
          t = e.onClose,
          r = (0, ez.a)({
            queryKey: nj,
            queryFn: nC,
            refetchOnMount: "always",
          }),
          a = r.data,
          i = r.isLoading,
          s = r.isError,
          l = r.refetch,
          u = (0, B.Z)();
        return (
          (n = i
            ? (0, c.jsx)("div", {
                className: "pb-8 text-gray-400 dark:text-gray-600",
                children: (0, c.jsx)(O.Z, (0, o._)({}, nw.loading)),
              })
            : s
            ? (0, c.jsxs)("div", {
                children: [
                  (0, c.jsx)("div", {
                    className: "text-red-500 mb-4",
                    children: (0, c.jsx)(
                      O.Z,
                      (0, o._)({}, nw.somethingWentWrong)
                    ),
                  }),
                  (0, c.jsx)("div", {
                    children: (0, c.jsx)(J.z, {
                      color: "neutral",
                      onClick: function () {
                        l();
                      },
                      children: (0, c.jsx)(O.Z, (0, o._)({}, nw.retry)),
                    }),
                  }),
                ],
              })
            : 0 === a.total
            ? (0, c.jsx)("div", {
                className: "pb-8 text-gray-600 dark:text-gray-400",
                children: (0, c.jsx)(
                  O.Z,
                  (0, o._)({}, nw.noSharedConversations)
                ),
              })
            : (0, c.jsxs)(ny.Root, {
                className: "max-h-[28rem]",
                children: [
                  (0, c.jsxs)(ny.Header, {
                    children: [
                      (0, c.jsx)(ny.HeaderCell, {
                        children: (0, c.jsx)(O.Z, (0, o._)({}, nw.name)),
                      }),
                      (0, c.jsx)(ny.HeaderCell, {
                        children: (0, c.jsx)(O.Z, (0, o._)({}, nw.dateShared)),
                      }),
                      (0, c.jsx)(ny.HeaderCell, {
                        textAlign: "right",
                        children: (0, c.jsx)(nk, {}),
                      }),
                    ],
                  }),
                  (0, c.jsx)(ny.Body, {
                    children: a.items.map(function (e) {
                      return (0, c.jsx)(n_, { sharedConversation: e }, e.id);
                    }),
                  }),
                ],
              })),
          (0, c.jsx)(eO.ZP, {
            type: "success",
            size: "custom",
            isOpen: !0,
            title: u.formatMessage(nw.title),
            closeButton: (0, c.jsx)(eO.ol, { onClose: t }),
            className: "max-w-2xl",
            onModalClose: t,
            children: n,
          })
        );
      }
      var nT = t(16681);
      function nN(e) {
        var n = e.onChange,
          t = e.enabled,
          r = e.label,
          a = e.disabled,
          i = (0, h.useCallback)(
            function () {
              n(!t);
            },
            [t, n]
          );
        return (0, c.jsx)(nT.fC, {
          checked: t,
          disabled: a,
          onCheckedChange: i,
          "aria-label": r,
          className: (0, M.Z)(
            a && "cursor-not-allowed opacity-30",
            "bg-gray-200 radix-state-checked:bg-green-600",
            "relative h-[25px] w-[42px] cursor-pointer rounded-full"
          ),
          children: (0, c.jsx)(nT.bU, {
            className: (0, M.Z)(
              "block h-[21px] w-[21px] rounded-full",
              "translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]",
              "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
            ),
          }),
        });
      }
      function nI() {
        var e = (0, u._)(["block text-sm font-medium mb-1"]);
        return (
          (nI = function () {
            return e;
          }),
          e
        );
      }
      var nP = (0, E.vU)({
        settings: {
          id: "settingsModal.settings",
          defaultMessage: "Settings",
          description: "Title for the settings modal",
        },
        theme: {
          id: "settingsModal.theme",
          defaultMessage: "Theme",
          description: "Label for the theme setting",
        },
        system: {
          id: "settingsModal.system",
          defaultMessage: "System",
          description: "Option for the system theme",
        },
        dark: {
          id: "settingsModal.dark",
          defaultMessage: "Dark",
          description: "Option for the dark theme",
        },
        light: {
          id: "settingsModal.light",
          defaultMessage: "Light",
          description: "Option for the light theme",
        },
        sharedConversations: {
          id: "settingsModal.sharedConversations",
          defaultMessage: "Shared Links",
          description: "Label for the shared conversation/link button",
        },
        sharedConversationsButton: {
          id: "settingsModal.sharedConversationsButton",
          defaultMessage: "Manage",
          description: "Manage shared links/conversations button",
        },
        exportData: {
          id: "settingsModal.exportData",
          defaultMessage: "Export data",
          description: "Label for the export data button",
        },
        exportButton: {
          id: "settingsModal.exportButton",
          defaultMessage: "Export",
          description: "Export data button",
        },
        deleteAccount: {
          id: "settingsModal.deleteAccount",
          defaultMessage: "Delete account",
          description: "Label for the delete account button",
        },
        deleteAccountButton: {
          id: "settingsModal.deleteButton",
          defaultMessage: "Delete",
          description: "Delete account button",
        },
        openPluginDevtools: {
          id: "settingsModal.openPluginDevtools",
          defaultMessage: "Open plugin devtools",
          description: "Label for the open plugin devtools setting",
        },
        enable2fa: {
          id: "settingsModal.enable2fa",
          defaultMessage: "Enable two-factor authentication",
          description: "Label for the enable 2FA button",
        },
        enable: {
          id: "settingsModal.enable",
          defaultMessage: "Enable",
          description: "Enable 2FA button",
        },
        disable: {
          id: "settingsModal.disable",
          defaultMessage: "Disable",
          description: "Disable 2FA button",
        },
        disable2fa: {
          id: "settingsModal.disable2fa",
          defaultMessage: "Disable two factor authentication",
          description: "Label for the mfa remove button.",
        },
        chatHistoryDescription: {
          id: "settingsModal.chatHistoryDescription",
          defaultMessage:
            "Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <link>Learn more</link>",
          description: "Description for the chat history setting",
        },
        dataExportRequested: {
          id: "settingsModal.dataExportRequested",
          defaultMessage:
            "Successfully exported data. You should receive an email shortly with your data.",
          description: "Message shown when a data export request is received",
        },
        dataExportFailed: {
          id: "settingsModal.dataExportFailed",
          defaultMessage:
            "We were unable to process your export at this time. Please try again later.",
          description: "Message shown when a data export request fails",
        },
        dataExportModalTitle: {
          id: "settingsModal.dataExportModalTitle",
          defaultMessage: "Request data export - are you sure?",
          description: "Title for the data export modal",
        },
        dataExportModalConfirm: {
          id: "settingsModal.dataExportModalConfirm",
          defaultMessage: "Confirm export",
          description: "Confirm button for the data export modal",
        },
        dataExportModalCancel: {
          id: "settingsModal.dataExportModalCancel",
          defaultMessage: "Cancel",
          description: "Cancel button for the data export modal",
        },
        dataExportModalDescription1: {
          id: "settingsModal.dataExportModalDescription1",
          defaultMessage:
            "Your account details and conversations will be included in the export.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription2: {
          id: "settingsModal.dataExportModalDescription2",
          defaultMessage:
            "The data will be sent to your registered email in a downloadable file.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription3: {
          id: "settingsModal.dataExportModalDescription3",
          defaultMessage:
            "Processing may take some time. You'll be notified when it's ready.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription4: {
          id: "settingsModal.dataExportModalDescription4",
          defaultMessage: 'To proceed, click "Confirm export" below.',
          description: "Description for the data export modal",
        },
        deleteAccountSessionTooOld: {
          id: "settingsModal.deleteAccountSessionTooOld",
          defaultMessage:
            "Your login session is too old. Please log in again before deleting your account.",
          description:
            "Message shown when the user's login session is too old to delete their account.",
        },
        deleteAccountFailed: {
          id: "settingsModal.deleteAccountFailed",
          defaultMessage: "Failed to delete account. Please try again later.",
          description:
            "Message shown when there's an error deleting the user's account.",
        },
        deleteAccountTitle: {
          id: "settingsModal.deleteAccountTitle",
          defaultMessage: "Delete account - are you sure?",
          description: "Title for the delete account confirmation modal.",
        },
        deleteAccountWarning: {
          id: "settingsModal.deleteAccountWarning",
          defaultMessage:
            "Deleting your account is permanent and cannot be undone.",
          description:
            "Warning message about account deletion being permanent.",
        },
        reuseEmailPhoneWarning: {
          id: "settingsModal.reuseEmailPhoneWarning",
          defaultMessage:
            "For security reasons, you cannot reuse the same email or phone number for a new account.",
          description:
            "Warning message about not being able to reuse email or phone number for a new account.",
        },
        dataRemovalWarning: {
          id: "settingsModal.dataRemovalWarning",
          defaultMessage:
            "All your data, including profile, conversations, and API usage, will be removed.",
          description:
            "Warning message about data removal after account deletion.",
        },
        apiAccessDeletionWarning: {
          id: "settingsModal.apiAccessDeletionWarning",
          defaultMessage:
            "If you've been using ChatGPT with the API, this access will also be deleted.",
          description: "Warning message about API access being deleted.",
        },
        iapSubscriptionWarning: {
          id: "settingsModal.iapSubscriptionWarning",
          defaultMessage:
            "You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.",
          description: "Warning message about cancelling in-app subscriptions.",
        },
        typeEmailLabel: {
          id: "settingsModal.typeEmailLabel",
          defaultMessage: "Please type your account email.",
          description: "Label for email input field when deleting an account.",
        },
        typeDeleteInputLabel: {
          id: "settingsModal.typeDeleteInputLabel",
          defaultMessage: 'To proceed, type "DELETE" in the input field below.',
          description: "Label for DELETE input field when deleting an account.",
        },
        lockedButtonLabel: {
          id: "settingsModal.lockedButtonLabel",
          defaultMessage: "Locked",
          description: "Label for the locked button when deleting an account.",
        },
        deleteAccountButtonLabel: {
          id: "settingsModal.deleteAccountButtonLabel",
          defaultMessage: "Permanently delete my account",
          description: "Label for the button to confirm account deletion.",
        },
        recentLoginMessage: {
          id: "settingsModal.recentLoginMessage",
          defaultMessage:
            "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
          description:
            "Message shown when the user needs to log in again to delete their account.",
        },
        refreshLoginButtonLabel: {
          id: "settingsModal.refreshLoginButtonLabel",
          defaultMessage: "Refresh login",
          description: "Label for the button to refresh login.",
        },
        dataControlsLabel: {
          id: "settingsModal.dataControlsLabel",
          defaultMessage: "Data Controls",
          description: "Label for the data controls section.",
        },
        hideLabel: {
          id: "settingsModal.hideLabel",
          defaultMessage: "Hide",
          description: "Label for the hide button.",
        },
        showLabel: {
          id: "settingsModal.showLabel",
          defaultMessage: "Show",
          description: "Label for the show button.",
        },
        chatHistoryToggleLabel: {
          id: "settingsModal.chatHistoryToggleLabel",
          defaultMessage: "Chat History & Training",
          description: "Label for the chat history toggle.",
        },
        dataControlsTab: {
          id: "settingsModal.dataControls",
          defaultMessage: "Data controls",
          description: "Label for the data controls tab",
        },
        betaIntro: {
          id: "settingsModal.betaIntro",
          defaultMessage:
            "As a Plus user, enjoy early access to experimental new features, which may change during development.",
          description: "Introduction for the beta features tab",
        },
        betaSettingsUpdateFailed: {
          id: "settingsModal.betaSettingsUpdateFailed",
          defaultMessage: "Failed to update your beta setting",
          description:
            "Message shown when there's an error updating beta settings",
        },
        betaPluginToggleLabel: {
          id: "settingsModal.betaPluginToggleLabel",
          defaultMessage: "Plugins",
          description: "Label for the Plugins beta toggle.",
        },
        betaPluginToggleDescription: {
          id: "settingsModal.betaPluginToggleDescription",
          defaultMessage:
            "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
          description: "Description for the Plugins beta toggle.",
        },
        betaBrowsingToggleLabel: {
          id: "settingsModal.betaBrowsingToggleLabel",
          defaultMessage: "Web browsing",
          description: "Label for the Browsing beta toggle.",
        },
        betaBrowsingToggleLabelBing: {
          id: "settingsModal.betaBrowsingToggleLabel.bing",
          defaultMessage: "Browse with Bing",
          description: "Label for the Browse with Bing beta toggle.",
        },
        betaBrowsingToggleDescription: {
          id: "settingsModal.betaBrowsingToggleDescription",
          defaultMessage:
            "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
          description: "Description for the Browsing beta toggle.",
        },
        betaCodeInterpreterToggleLabel: {
          id: "settingsModal.betaCodeInterpreterToggleLabel",
          defaultMessage: "Code interpreter",
          description: "Label for the Code interpreter beta toggle.",
        },
        betaCodeInterpreterToggleDescription: {
          id: "settingsModal.betaCodeInterpreterToggleDescription",
          defaultMessage:
            "Your favorite GPT models now use a python sandbox. Once enabled, ChatGPT can build and run python code.",
          description: "Description for the Code interpreter beta toggle.",
        },
        generalTab: {
          id: "settingsModal.general",
          defaultMessage: "General",
          description: "Label for the general tab",
        },
        betaTab: {
          id: "settingsModal.beta",
          defaultMessage: "Beta features",
          description: "Label for the Beta Features tab",
        },
        clearChatLabel: {
          id: "settingsModal.clearChatLabel",
          defaultMessage: "Clear all chats",
          description: "Label for the clear chat button",
        },
        clearChatButton: {
          id: "settingsModal.clearChatButton",
          defaultMessage: "Clear",
          description: "Clear chat button",
        },
      });
      function nS(e) {
        var n,
          t,
          r = e.onClose,
          a = e.onToggleHistoryDisabled,
          s = e.onDeleteHistory,
          u = (0, B.Z)(),
          d = ei().conversations.length > 0,
          f = (0, z.w$)(),
          g = (0, l._)((0, h.useState)(!1), 2),
          m = g[0],
          p = g[1],
          x = (0, l._)((0, h.useState)(!1), 2),
          b = x[0],
          y = x[1],
          j = (0, l._)((0, h.useState)(!1), 2),
          w = j[0],
          k = j[1],
          C = (0, l._)((0, h.useState)(i.General), 2),
          T = C[0],
          N = C[1],
          I = (0, h.useContext)(_.QL),
          P = I.historyDisabled,
          S = I.toggleHistoryDisabled,
          Z = nm(function (e) {
            return e.isOpen;
          }),
          R = (0, v.hz)(),
          A = R.has(U.RJ),
          D = R.has("data_export_enabled"),
          F = R.has("data_deletion_enabled"),
          L = (0, ee.kP)().session,
          E = (0, e2.Fl)(),
          q = E.isBetaFeaturesUiEnabled,
          H = E.isPluginsAvailable,
          V = E.isBrowsingAvailable,
          W = E.isCodeInterpreterAvailable,
          G = (0, h.useCallback)(function () {
            p(!1);
          }, []),
          Q = (0, h.useCallback)(function () {
            y(!1);
          }, []),
          $ = (0, h.useCallback)(function () {
            p(!0);
          }, []),
          J = (0, h.useCallback)(function () {
            y(!0);
          }, []),
          Y = (0, h.useCallback)(
            function () {
              a(), S();
            },
            [a, S]
          ),
          X = (0, e3.S)(),
          K = X.setupMfa,
          en = X.isUsernamePassword,
          et = X.removeMfa;
        return m
          ? (0, c.jsx)(nF, { onClose: G })
          : b
          ? (0, c.jsx)(nO, { onClose: Q })
          : w
          ? (0, c.jsx)(nM, {
              onClose: function () {
                k(!1);
              },
            })
          : (0, c.jsx)(eO.ZP, {
              size: "custom",
              isOpen: !0,
              onModalClose: r,
              className: "md:w-[680px]",
              type: "success",
              title: u.formatMessage(nP.settings),
              closeButton: (0, c.jsx)(eO.ol, { onClose: r }),
              children: (0, c.jsxs)(eX.fC, {
                className: "flex flex-col gap-6 md:flex-row",
                defaultValue: T,
                orientation: f ? "vertical" : void 0,
                onValueChange: function (e) {
                  N(e);
                },
                children: [
                  (0, c.jsxs)(eX.aV, {
                    className: (0, M.Z)(
                      "-ml-[8px] flex min-w-[180px] flex-shrink-0",
                      f
                        ? "flex-col"
                        : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"
                    ),
                    children: [
                      (0, c.jsx)(nL, {
                        value: i.General,
                        icon: e1.oq2,
                        label: (0, c.jsx)(O.Z, (0, o._)({}, nP.generalTab)),
                      }),
                      q &&
                        (V || H || W) &&
                        (0, c.jsx)(nL, {
                          value: i.BetaFeatures,
                          icon: e1.rTN,
                          label: (0, c.jsx)(O.Z, (0, o._)({}, nP.betaTab)),
                        }),
                      (0, c.jsx)(nL, {
                        value: i.DataControls,
                        icon: e1.tQn,
                        label: (0, c.jsx)(
                          O.Z,
                          (0, o._)({}, nP.dataControlsTab)
                        ),
                      }),
                    ],
                  }),
                  (0, c.jsxs)(nE, {
                    value: i.General,
                    children: [
                      (0, c.jsx)(nB, { children: (0, c.jsx)(nD, {}) }),
                      R.has("tools3_dev") &&
                        (0, c.jsx)(nB, {
                          children: (0, c.jsx)(nR, {
                            label: u.formatMessage(nP.openPluginDevtools),
                            enabled: Z,
                            onChange: np.setIsOpen,
                          }),
                        }),
                      (0, c.jsx)(nB, {
                        children: (0, c.jsx)(nA, {
                          color: "danger",
                          disabled: !d,
                          label: u.formatMessage(nP.clearChatLabel),
                          buttonLabel: u.formatMessage(nP.clearChatButton),
                          onClick: s,
                        }),
                      }),
                    ],
                  }),
                  (0, c.jsx)(nE, {
                    value: i.BetaFeatures,
                    children: (0, c.jsx)(nZ, {}),
                  }),
                  (0, c.jsxs)(nE, {
                    value: i.DataControls,
                    children: [
                      (0, c.jsx)(nB, {
                        children: (0, c.jsx)(nR, {
                          label: u.formatMessage(nP.chatHistoryToggleLabel),
                          enabled: !P,
                          onChange: Y,
                          description: (0, c.jsx)(
                            O.Z,
                            (0, eI._)((0, o._)({}, nP.chatHistoryDescription), {
                              values: {
                                link: function (e) {
                                  return (0, c.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/7730893 ",
                                    target: "_blank",
                                    className: "underline",
                                    rel: "noreferrer",
                                    children: e,
                                  });
                                },
                              },
                            })
                          ),
                        }),
                      }),
                      A &&
                        (0, c.jsx)(nB, {
                          children: (0, c.jsx)(nA, {
                            label: u.formatMessage(nP.sharedConversations),
                            buttonLabel: u.formatMessage(
                              nP.sharedConversationsButton
                            ),
                            onClick: function () {
                              k(!0);
                            },
                          }),
                        }),
                      D &&
                        (0, c.jsx)(nB, {
                          children: (0, c.jsx)(nA, {
                            label: u.formatMessage(nP.exportData),
                            buttonLabel: u.formatMessage(nP.exportButton),
                            onClick: $,
                          }),
                        }),
                      F &&
                        (0, c.jsx)(nB, {
                          children: (0, c.jsx)(nA, {
                            label: u.formatMessage(nP.deleteAccount),
                            buttonLabel: u.formatMessage(
                              nP.deleteAccountButton
                            ),
                            color: "danger",
                            onClick: J,
                          }),
                        }),
                      !(null == L
                        ? void 0
                        : null === (n = L.user) || void 0 === n
                        ? void 0
                        : n.mfa) &&
                        en &&
                        (0, c.jsx)(nB, {
                          children: (0, c.jsx)(nA, {
                            label: u.formatMessage(nP.enable2fa),
                            buttonLabel: u.formatMessage(nP.enable),
                            onClick: K,
                          }),
                        }),
                      (null == L
                        ? void 0
                        : null === (t = L.user) || void 0 === t
                        ? void 0
                        : t.mfa) &&
                        en &&
                        (0, c.jsx)(nB, {
                          children: (0, c.jsx)(nA, {
                            label: u.formatMessage(nP.disable2fa),
                            buttonLabel: u.formatMessage(nP.disable),
                            onClick: et,
                            color: "danger",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            });
      }
      function nZ() {
        var e,
          n = (0, B.Z)(),
          t = (0, ee.kP)().session,
          r = (0, v.hz)(),
          a = (0, e2.N2)(),
          i = (0, e2.Fl)(),
          s = i.isBrowsingAvailable,
          l = i.isBrowsingEnabled,
          u = i.isPluginsAvailable,
          d = i.isPluginsEnabled,
          f = i.isCodeInterpreterAvailable,
          h = i.isCodeInterpreterEnabled,
          g = (0, eK.D)({
            mutationFn: function (n) {
              var r = n.feature,
                a = n.enabled;
              return q.ZP.setUserSettingsBetaFeature(
                null !== (e = null == t ? void 0 : t.accessToken) &&
                  void 0 !== e
                  ? e
                  : "",
                r,
                a
              );
            },
            onSettled: a,
            onError: function () {
              et.m.danger(n.formatMessage(nP.betaSettingsUpdateFailed));
            },
          }),
          m = g.isLoading,
          p = g.variables,
          x = g.mutate,
          b = m && (null == p ? void 0 : p.feature) === e2.tr.BROWSING,
          y = m && (null == p ? void 0 : p.feature) === e2.tr.CODE_INTERPRETER,
          j = m && (null == p ? void 0 : p.feature) === e2.tr.PLUGINS;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(nB, {
              children: (0, c.jsx)("p", {
                children: (0, c.jsx)(O.Z, (0, o._)({}, nP.betaIntro)),
              }),
            }),
            s &&
              (0, c.jsx)(nB, {
                children: (0, c.jsx)(nR, {
                  label: n.formatMessage(
                    r.has(U.oQ)
                      ? nP.betaBrowsingToggleLabelBing
                      : nP.betaBrowsingToggleLabel
                  ),
                  disabled: b,
                  enabled: b ? (null == p ? void 0 : p.enabled) : l,
                  onChange: function (e) {
                    x({ feature: e2.tr.BROWSING, enabled: e });
                  },
                  description: (0, c.jsx)(
                    O.Z,
                    (0, o._)({}, nP.betaBrowsingToggleDescription)
                  ),
                }),
              }),
            u &&
              (0, c.jsx)(nB, {
                children: (0, c.jsx)(nR, {
                  label: n.formatMessage(nP.betaPluginToggleLabel),
                  disabled: j,
                  enabled: j ? (null == p ? void 0 : p.enabled) : d,
                  onChange: function (e) {
                    x({ feature: e2.tr.PLUGINS, enabled: e });
                  },
                  description: (0, c.jsx)(
                    O.Z,
                    (0, o._)({}, nP.betaPluginToggleDescription)
                  ),
                }),
              }),
            f &&
              (0, c.jsx)(nB, {
                children: (0, c.jsx)(nR, {
                  label: n.formatMessage(nP.betaCodeInterpreterToggleLabel),
                  disabled: y,
                  enabled: y ? (null == p ? void 0 : p.enabled) : h,
                  onChange: function (e) {
                    x({ feature: e2.tr.CODE_INTERPRETER, enabled: e });
                  },
                  description: (0, c.jsx)(
                    O.Z,
                    (0, o._)({}, nP.betaCodeInterpreterToggleDescription)
                  ),
                }),
              }),
          ],
        });
      }
      function nR(e) {
        var n = e.label,
          t = e.disabled,
          r = e.enabled,
          a = e.onChange,
          i = e.description;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, c.jsx)("div", { children: n }),
                (0, c.jsx)(nN, {
                  disabled: t,
                  enabled: r,
                  onChange: a,
                  label: n,
                }),
              ],
            }),
            null != i &&
              (0, c.jsx)("div", {
                className: "mt-2 text-xs text-gray-500 dark:text-gray-600",
                children: i,
              }),
          ],
        });
      }
      function nA(e) {
        var n = e.color,
          t = e.disabled,
          r = e.label,
          a = e.buttonLabel,
          i = e.onClick;
        return (0, c.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, c.jsx)("div", { children: r }),
            (0, c.jsx)(J.z, {
              color: void 0 === n ? "neutral" : n,
              disabled: !!t,
              onClick: i,
              children: a,
            }),
          ],
        });
      }
      function nD() {
        var e = (0, e0.F)(),
          n = e.theme,
          t = e.setTheme;
        return (0, c.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, c.jsx)("div", {
              children: (0, c.jsx)(O.Z, (0, o._)({}, nP.theme)),
            }),
            (0, c.jsxs)("select", {
              value: n,
              onChange: function (e) {
                t(e.target.value);
              },
              className:
                "rounded border border-black/10 bg-transparent text-sm dark:border-white/20",
              children: [
                (0, c.jsx)("option", {
                  value: "system",
                  children: (0, c.jsx)(O.Z, (0, o._)({}, nP.system)),
                }),
                (0, c.jsx)("option", {
                  value: "dark",
                  children: (0, c.jsx)(O.Z, (0, o._)({}, nP.dark)),
                }),
                (0, c.jsx)("option", {
                  value: "light",
                  children: (0, c.jsx)(O.Z, (0, o._)({}, nP.light)),
                }),
              ],
            }),
          ],
        });
      }
      function nF(e) {
        var n = e.onClose,
          t = (0, B.Z)(),
          r = (0, ee.kP)().session,
          a = null == r ? void 0 : r.accessToken,
          i = (0, h.useCallback)(
            function () {
              try {
                q.ZP.submitDataExport(a).then(function () {
                  et.m.success(t.formatMessage(nP.dataExportRequested)), n();
                });
              } catch (e) {
                et.m.warning(t.formatMessage(nP.dataExportFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [a, t, n]
          );
        return (0, c.jsx)(eO.ZP, {
          isOpen: !0,
          onModalClose: n,
          type: "success",
          title: t.formatMessage(nP.dataExportModalTitle),
          primaryButton: (0, c.jsx)(eO.mH, {
            title: t.formatMessage(nP.dataExportModalConfirm),
            color: "primary",
            onClick: i,
          }),
          secondaryButton: (0, c.jsx)(eO.mH, {
            title: t.formatMessage(nP.dataExportModalCancel),
            color: "neutral",
            onClick: n,
          }),
          children: (0, c.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, c.jsxs)("ul", {
                className: "my-3 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, c.jsx)("li", {
                    children: (0, c.jsx)(
                      O.Z,
                      (0, o._)({}, nP.dataExportModalDescription1)
                    ),
                  }),
                  (0, c.jsx)("li", {
                    children: (0, c.jsx)(
                      O.Z,
                      (0, o._)({}, nP.dataExportModalDescription2)
                    ),
                  }),
                  (0, c.jsx)("li", {
                    children: (0, c.jsx)(
                      O.Z,
                      (0, o._)({}, nP.dataExportModalDescription3)
                    ),
                  }),
                ],
              }),
              (0, c.jsx)("div", {
                children: (0, c.jsx)(
                  O.Z,
                  (0, o._)({}, nP.dataExportModalDescription4)
                ),
              }),
            ],
          }),
        });
      }
      function nL(e) {
        var n = e.value,
          t = e.icon,
          r = e.label,
          a = (0, z.w$)();
        return (0, c.jsxs)(eX.xz, {
          className: (0, M.Z)(
            "group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white",
            { "flex-1 items-center justify-center": !a }
          ),
          value: n,
          children: [
            (0, c.jsx)(Y.ZP, {
              icon: t,
              strokeWidth: 0,
              className:
                "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500",
            }),
            (0, c.jsx)("div", { children: r }),
          ],
        });
      }
      function nE(e) {
        var n = e.value,
          t = e.children;
        return (0, c.jsx)(eX.VY, {
          className: "w-full md:min-h-[300px]",
          value: n,
          children: (0, c.jsx)("div", {
            className:
              "flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300",
            children: t,
          }),
        });
      }
      function nB(e) {
        var n = e.children;
        return (0, c.jsx)("div", {
          className:
            "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
          children: n,
        });
      }
      function nO(e) {
        var n,
          t = e.onClose,
          r = (0, B.Z)(),
          a = (0, ee.kP)().session,
          i = null == a ? void 0 : a.accessToken,
          s =
            null == a
              ? void 0
              : null === (n = a.user) || void 0 === n
              ? void 0
              : n.email,
          u = (0, l._)((0, h.useState)(""), 2),
          d = u[0],
          f = u[1],
          g = (0, l._)((0, h.useState)(""), 2),
          m = g[0],
          p = g[1],
          x = (0, h.useCallback)(
            function () {
              var e,
                n =
                  null == a
                    ? void 0
                    : null === (e = a.user) || void 0 === e
                    ? void 0
                    : e.iat;
              return void 0 === n || Date.now() / 1e3 - n < 600;
            },
            [a]
          ),
          b = (0, h.useCallback)(
            function () {
              try {
                x()
                  ? q.ZP.deactivateAccount(i).then(function () {
                      (0, ee.w7)();
                    })
                  : et.m.warning(
                      r.formatMessage(nP.deleteAccountSessionTooOld),
                      { hasCloseButton: !0 }
                    );
              } catch (e) {
                et.m.warning(r.formatMessage(nP.deleteAccountFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [i, r, x]
          ),
          y = (0, h.useCallback)(function () {
            (0, ee.w7)();
          }, []),
          j = "DELETE" === m && (void 0 === s || d === s),
          w = (0, l._)(
            (0, h.useState)(function () {
              return x();
            }),
            1
          )[0],
          k = (0, v.e2)();
        return (0, c.jsx)(eO.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: "success",
          title: r.formatMessage(nP.deleteAccountTitle),
          closeButton: (0, c.jsx)(eO.ol, { onClose: t }),
          children: (0, c.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, c.jsxs)("ul", {
                className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, c.jsx)("li", {
                    children: (0, c.jsx)(
                      O.Z,
                      (0, o._)({}, nP.deleteAccountWarning)
                    ),
                  }),
                  (0, c.jsx)("li", {
                    children: (0, c.jsx)(
                      O.Z,
                      (0, o._)({}, nP.reuseEmailPhoneWarning)
                    ),
                  }),
                  (0, c.jsx)("li", {
                    children: (0, c.jsx)(
                      O.Z,
                      (0, o._)({}, nP.dataRemovalWarning)
                    ),
                  }),
                  (0, c.jsx)("li", {
                    children: (0, c.jsx)(
                      O.Z,
                      (0, o._)({}, nP.apiAccessDeletionWarning)
                    ),
                  }),
                  (null == k ? void 0 : k.purchase_origin_platform) ===
                    nx._.MOBILE_IOS &&
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)(
                        O.Z,
                        (0, o._)({}, nP.iapSubscriptionWarning)
                      ),
                    }),
                ],
              }),
              w
                ? (0, c.jsxs)(c.Fragment, {
                    children: [
                      void 0 !== s
                        ? (0, c.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, c.jsx)(nq, {
                                children: (0, c.jsx)(
                                  O.Z,
                                  (0, o._)({}, nP.typeEmailLabel)
                                ),
                              }),
                              (0, c.jsx)(e4.Z, {
                                value: d,
                                placeholder: s,
                                name: "email",
                                onChange: function (e) {
                                  f(e.target.value);
                                },
                              }),
                            ],
                          })
                        : null,
                      (0, c.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, c.jsx)(nq, {
                            children: (0, c.jsx)(
                              O.Z,
                              (0, o._)({}, nP.typeDeleteInputLabel)
                            ),
                          }),
                          (0, c.jsx)(e4.Z, {
                            value: m,
                            onChange: function (e) {
                              p(e.target.value);
                            },
                            name: "delete",
                            className: "mb-4",
                          }),
                        ],
                      }),
                      (0, c.jsx)(J.z, {
                        color: j ? "danger" : "disabled",
                        onClick: b,
                        disabled: !j,
                        className: "w-full",
                        children: j
                          ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                (0, c.jsx)(Y.ZP, { icon: L.BJv }),
                                " ",
                                (0, c.jsx)(
                                  O.Z,
                                  (0, o._)({}, nP.deleteAccountButtonLabel)
                                ),
                              ],
                            })
                          : (0, c.jsxs)(c.Fragment, {
                              children: [
                                (0, c.jsx)(Y.ZP, { icon: L.UIZ }),
                                " ",
                                (0, c.jsx)(
                                  O.Z,
                                  (0, o._)({}, nP.lockedButtonLabel)
                                ),
                              ],
                            }),
                      }),
                    ],
                  })
                : (0, c.jsxs)(c.Fragment, {
                    children: [
                      (0, c.jsx)("p", {
                        className: "pb-4 text-xs text-gray-500",
                        children: (0, c.jsx)(
                          O.Z,
                          (0, o._)({}, nP.recentLoginMessage)
                        ),
                      }),
                      (0, c.jsx)(J.z, {
                        color: "primary",
                        onClick: y,
                        className: "w-full",
                        children: (0, c.jsx)(
                          O.Z,
                          (0, o._)({}, nP.refreshLoginButtonLabel)
                        ),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      ((r = i || (i = {})).General = "General"),
        (r.BetaFeatures = "BetaFeatures"),
        (r.DataControls = "DataControls");
      var nq = g.Z.label(nI());
      function nU(e) {
        var n = e.children;
        return (0, c.jsx)(eS.u, {
          as: h.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
          children: n,
        });
      }
      var nz = t(2827),
        nH = (0, E.vU)({
          profilePlaceholder: {
            id: "profile.myprofile.placeholder",
            defaultMessage:
              "• Where I live: San Francisco\n• My native language is: English\n• What I do for work: Researcher at OpenAI\n• What I do for fun: Hiking, music, and cooking\n• Preferred communication style: concise, simple language\n• I'd like ChatGPT to be: a helpful assistant",
            description: "placeholder for my profile textarea",
          },
          save: {
            id: "profile.myprofile.save",
            defaultMessage: "Save",
            description: "save button for my profile modal",
          },
          close: {
            id: "profile.myprofile.close",
            defaultMessage: "Close",
            description: "close button for my profile modal",
          },
          helpText: {
            id: "profile.myprofile.helptext",
            defaultMessage:
              "Add any information that you’d like ChatGPT to remember about you and your preferences.",
            description: "help text for my profile modal",
          },
          profileTitle: {
            id: "profile.myprofile.title",
            defaultMessage: "My Profile",
            description: "title for my profile modal",
          },
        }),
        nV = (0, b.ZP)(function () {
          return { isProfileModalOpen: !1, userMessage: "" };
        }),
        nW = {
          setIsProfileModalOpen: function (e) {
            nV.setState({ isProfileModalOpen: e });
          },
          setUserMessage: function (e) {
            nV.setState({ userMessage: e });
          },
        };
      function nG() {
        var e = nV(),
          n = e.isProfileModalOpen,
          t = e.userMessage,
          r = (0, h.useCallback)(function () {
            nW.setIsProfileModalOpen(!1);
          }, []),
          a = (0, ee.kP)(),
          i = a.session,
          s = a.loading,
          l = (0, h.useCallback)(
            function () {
              q.ZP.createOrUpdateUserSystemMessage(
                (null == i ? void 0 : i.accessToken) || "",
                t
              ),
                nW.setIsProfileModalOpen(!1);
            },
            [t, i]
          ),
          u = (0, v.hz)();
        (0, ez.a)(
          [null == i ? void 0 : i.accessToken],
          function () {
            return q.ZP.getUserSystemMessage(
              (null == i ? void 0 : i.accessToken) || ""
            );
          },
          {
            enabled: !!(
              !s &&
              (null == i ? void 0 : i.accessToken) &&
              u.has("system_message2")
            ),
            onSuccess: function (e) {
              (null == e ? void 0 : e.data) && nW.setUserMessage(e.data);
            },
            onError: function () {
              et.m.danger("Failed to get the profile");
            },
          }
        );
        var d = (0, B.Z)();
        return (0, c.jsxs)(eO.ZP, {
          isOpen: n,
          onModalClose: function () {
            nW.setIsProfileModalOpen(!1);
          },
          type: "success",
          title: d.formatMessage(nH.profileTitle),
          closeButton: (0, c.jsx)(eO.ol, { onClose: r }),
          secondaryButton: (0, c.jsx)(eO.mH, {
            onClick: r,
            children: (0, c.jsx)(O.Z, (0, o._)({}, nH.close)),
          }),
          primaryButton: (0, c.jsx)(eO.mH, {
            onClick: l,
            color: "primary",
            children: (0, c.jsx)(O.Z, (0, o._)({}, nH.save)),
          }),
          children: [
            (0, c.jsx)("p", {
              className: "text-muted pb-4 pt-2",
              children: (0, c.jsx)(O.Z, (0, o._)({}, nH.helpText)),
            }),
            (0, c.jsx)(nz.ZP, {
              className:
                "w-full rounded border-gray-300 p-4 placeholder:text-gray-300  dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
              rows: 8,
              value: t,
              onChange: function (e) {
                return nW.setUserMessage(e.target.value);
              },
            }),
          ],
        });
      }
      function nQ() {
        var e = (0, u._)([
          "flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm",
        ]);
        return (
          (nQ = function () {
            return e;
          }),
          e
        );
      }
      function n$() {
        var e = (0, u._)(["", ""]);
        return (
          (n$ = function () {
            return e;
          }),
          e
        );
      }
      function nJ() {
        var e = (0, u._)(["my-1.5 h-px bg-white/20"]);
        return (
          (nJ = function () {
            return e;
          }),
          e
        );
      }
      function nY() {
        var e = (0, u._)([
          "rounded-md border border-white/20 hover:bg-gray-500/10",
        ]);
        return (
          (nY = function () {
            return e;
          }),
          e
        );
      }
      function nX() {
        var e = (0, u._)([
          "flex-col flex-1 transition-opacity duration-500\n",
          "\n",
          "",
        ]);
        return (
          (nX = function () {
            return e;
          }),
          e
        );
      }
      var nK = (0, E.vU)({
          helpAndFaq: {
            id: "navigation.helpAndFaq",
            defaultMessage: "使用帮助",
            description: "menu item",
          },
          confirmClearConversations: {
            id: "navigation.confirmClearConversations",
            defaultMessage: "Confirm clear conversations",
            description: "Confirmation text for clearing conversations",
          },
          clearConversations: {
            id: "navigation.clearConversations",
            defaultMessage: "Clear conversations",
            description: "Clear conversations menu item",
          },
          setupTeam: {
            id: "navigation.setupTeam",
            defaultMessage: "Buy ChatGPT Business",
            description: "Buy ChatGPT for teams menu item",
          },
          myPlan: {
            id: "navigation.myPlan",
            defaultMessage: "My plan",
            description: "My plan menu item",
          },
          myProfile: {
            id: "navigation.myProfile",
            defaultMessage: "My profile",
            description: "Profile menu item",
          },
          settings: {
            id: "navigation.settings",
            defaultMessage: "Settings",
            description: "Settings menu item",
          },
          logOut: {
            id: "navigation.logOut",
            defaultMessage: "Log out",
            description: "Log out menu item",
          },
          upgradeToPlus: {
            id: "navigation.upgradeToPlus",
            defaultMessage: "Upgrade to Plus",
            description: "Upgrade to Plus menu item",
          },
          renewPlus: {
            id: "navigation.renewPlus",
            defaultMessage: "Renew Plus",
            description: "Renew Plus menu item",
          },
          newChat: {
            id: "navigation.newChat",
            defaultMessage: "New chat",
            description: "New chat button label",
          },
          clearChat: {
            id: "navigation.clearChat",
            defaultMessage: "Clear chat",
            description: "Clear chat button label",
          },
          chatHistoryLabel: {
            id: "navigation.chatHistoryLabel",
            defaultMessage: "Chat history",
            description: "Chat history label heading",
          },
          chatHistoryOff: {
            id: "navigation.chatHistoryOff",
            defaultMessage: "Chat History is off for this browser.",
            description: "Text indicating that chat history is turned off",
          },
          chatHistoryOffDescription: {
            id: "navigation.chatHistoryOffDescription",
            defaultMessage:
              "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
            description: "Description for chat history being off",
          },
          learnMore: {
            id: "navigation.learnMore",
            defaultMessage: "Learn more",
            description: "Learn more link text",
          },
          enableChatHistory: {
            id: "navigation.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          closeSidebar: {
            id: "navigation.closeSidebar",
            defaultMessage: "Close sidebar",
            description: "Close sidebar button label",
          },
          openSidebar: {
            id: "navigation.openSidebar",
            defaultMessage: "Open sidebar",
            description: "Open sidebar button label",
          },
          newLabel: {
            id: "navigation.newLabel",
            defaultMessage: "NEW",
            description: "Label for new features or items",
          },
        }),
        n0 = g.Z.a(nQ()),
        n1 = (0, g.Z)(n0)(n$(), function (e) {
          return e.$active ? "bg-gray-800" : "hover:bg-gray-800";
        });
      function n2(e) {
        var n = e.onClick,
          t = e.href,
          r = e.target,
          a = e.children;
        return (0, c.jsx)(eP.v.Item, {
          children: function (e) {
            var i = e.active;
            return (0, c.jsx)(n0, {
              as: void 0 !== t ? "a" : "button",
              onClick: n,
              href: t,
              target: r,
              className: (0, M.Z)(i ? "bg-gray-700" : "hover:bg-gray-700"),
              children: a,
            });
          },
        });
      }
      var n3 = g.Z.div(nJ()),
        n4 = (0, g.Z)(n0)(nY()),
        n5 = g.Z.div(
          nX(),
          function (e) {
            return e.$disableScroll
              ? "overflow-y-hidden opacity-20 pointer-events-none"
              : "overflow-y-auto";
          },
          function (e) {
            return e.$offsetScrollbar && "-mr-2";
          }
        );
      function n8() {
        var e = (0, v.hz)(),
          n = (0, ee.kP)().session,
          t = null == n ? void 0 : n.user;
        return e.has("business_seats") && t
          ? (0, c.jsx)(c.Fragment, {
              children: (0, c.jsx)(n2, {
                onClick: function () {
                  eW.setIsModalOpen(!0);
                },
                children: (0, c.jsxs)("div", {
                  className: "flex w-full flex-col gap-2",
                  children: [
                    (0, c.jsx)(eF(), {
                      src: null == t ? void 0 : t.picture,
                      alt: "Profile",
                      width: 48,
                      height: 48,
                      className: "rounded-full",
                    }),
                    (0, c.jsxs)("div", {
                      className:
                        "flex w-full items-center justify-between gap-2",
                      children: [
                        (0, c.jsxs)("div", {
                          className: "flex flex-col items-start gap-1",
                          children: [
                            (0, c.jsx)("div", {
                              className: "text-base text-white",
                              children: null == t ? void 0 : t.name,
                            }),
                            (0, c.jsx)("div", {
                              className: "text-sm text-gray-500",
                              children: null == t ? void 0 : t.email,
                            }),
                          ],
                        }),
                        (0, c.jsx)("div", {
                          children: (0, c.jsx)(Y.ZP, {
                            icon: eR.Z,
                            size: "small",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      function n7(e) {
        var n = e.showCustomerPortalMenuItem,
          t = e.onClickCustomerPortal,
          r = e.onClickSettings,
          a = e.onDeleteHistory,
          i = (0, m.WS)(),
          s = (0, l._)((0, h.useState)(!1), 2),
          u = s[0],
          d = s[1],
          f = (0, h.useCallback)(
            function () {
              d(!1), a();
            },
            [a]
          ),
          g = ei().conversations.length > 0,
          x = (0, v.hz)();
        return (0, c.jsxs)("nav", {
          children: [
            (0, c.jsx)(n8, {}),
            (0, c.jsxs)(n2, {
              as: "a",
              href: "https://www.xyhelper.com.cn",
              target: "_blank",
              onClick: function () {
                i(p.s6.clickFaqLink);
              },
              children: [
                (0, c.jsx)(Y.ZP, { icon: L.AlO }),
                (0, c.jsx)(O.Z, (0, o._)({}, nK.helpAndFaq)),
              ],
            }),
            (0, c.jsx)(n3, {}),
            g &&
              (0, c.jsxs)(n2, {
                onClick: function (e) {
                  u ? f() : (d(!0), e.preventDefault());
                },
                children: [
                  (0, c.jsx)(Y.ZP, { icon: u ? L.UgA : L.Ybf }),
                  u
                    ? (0, c.jsx)(
                        O.Z,
                        (0, o._)({}, nK.confirmClearConversations)
                      )
                    : (0, c.jsx)(O.Z, (0, o._)({}, nK.clearConversations)),
                ],
              }),
            n &&
              t &&
              (0, c.jsxs)(n2, {
                onClick: t,
                children: [
                  (0, c.jsx)(Y.ZP, { icon: L.fzv }),
                  (0, c.jsx)(O.Z, (0, o._)({}, nK.myPlan)),
                ],
              }),
            x.has("system_message2") &&
              (0, c.jsxs)(n2, {
                onClick: function () {
                  return nW.setIsProfileModalOpen(!0);
                },
                children: [
                  (0, c.jsx)(Y.ZP, { icon: L.yK7 }),
                  (0, c.jsx)(O.Z, (0, o._)({}, nK.myProfile)),
                ],
              }),
            (0, c.jsxs)(n2, {
              onClick: r,
              children: [
                (0, c.jsx)(Y.ZP, { icon: L.nbt }),
                (0, c.jsx)(O.Z, (0, o._)({}, nK.settings)),
              ],
            }),
            (0, c.jsx)(n3, {}),
            (0, c.jsxs)(n2, {
              onClick: function () {
                i(p.s6.clickLogOut, { eventSource: "mouse" }), (0, ee.w7)();
              },
              children: [
                (0, c.jsx)(Y.ZP, { icon: L.xqh }),
                (0, c.jsx)(O.Z, (0, o._)({}, nK.logOut)),
              ],
            }),
          ],
        });
      }
      function n6(e) {
        var n,
          t = e.showCustomerPortalMenuItem,
          r = e.onClickCustomerPortal,
          a = e.onClickSettings,
          i = e.onDeleteHistory,
          o = (0, ee.kP)().session;
        return (0, c.jsxs)(eP.v, {
          as: "div",
          className: "group relative",
          children: [
            (0, c.jsxs)(eP.v.Button, {
              className:
                "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
              children: [
                (0, c.jsx)("div", {
                  className: "-ml-0.5 w-5 flex-shrink-0",
                  children:
                    null != o
                      ? (0, c.jsx)(eE.Yt, { user: o.user, size: "small" })
                      : null,
                }),
                (0, c.jsx)("div", {
                  className:
                    "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
                  children:
                    null == o
                      ? void 0
                      : null === (n = o.user) || void 0 === n
                      ? void 0
                      : n.name,
                }),
                (0, c.jsx)(Y.ZP, {
                  icon: L.K9M,
                  size: "small",
                  className: "flex-shrink-0 text-gray-500",
                }),
              ],
            }),
            (0, c.jsx)(nU, {
              children: (0, c.jsx)(eP.v.Items, {
                className:
                  "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-[#050509] py-1.5 outline-none",
                children: (0, c.jsx)(n7, {
                  showCustomerPortalMenuItem: t,
                  onClickCustomerPortal: r,
                  onClickSettings: a,
                  onDeleteHistory: i,
                }),
              }),
            }),
          ],
        });
      }
      function n9(e) {
        var n = e.onClickAccountPayment,
          t = e.showAccountPaymentMenuItem,
          r = e.onClickCustomerPortal,
          a = e.showCustomerPortalMenuItem,
          i = e.onDeleteHistory,
          s = e.onNewThread,
          u = e.children,
          d = (0, B.Z)(),
          f = (0, v.hz)(),
          g = (0, h.useRef)(null),
          m = (0, l._)((0, h.useState)(!1), 2),
          p = m[0],
          x = m[1],
          b = (0, h.useContext)(_.QL),
          y = b.historyDisabled,
          j = b.toggleHistoryDisabled,
          w = b.getModifiedSettings,
          k = b.unsetModifiedSettings,
          C = w(),
          T = (0, l._)((0, h.useState)(C), 2),
          N = T[0],
          I = T[1],
          P = (0, h.useCallback)(function () {
            I(!0);
          }, []),
          S = (0, h.useCallback)(
            function () {
              I(!1), k();
            },
            [k]
          ),
          Z = (0, h.useCallback)(
            function () {
              s(), j();
            },
            [s, j]
          ),
          R = (0, h.useMemo)(
            function () {
              return (0, c.jsxs)("div", {
                className: (0, M.Z)(
                  "absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",
                  y ? "visible max-h-72" : "invisible max-h-0"
                ),
                children: [
                  (0, c.jsxs)("div", {
                    className: "bg-gray-900 px-4 py-3",
                    children: [
                      (0, c.jsx)("div", {
                        className: "p-1 text-sm text-gray-100",
                        children: (0, c.jsx)(
                          O.Z,
                          (0, o._)({}, nK.chatHistoryOff)
                        ),
                      }),
                      (0, c.jsx)("div", {
                        className: "p-1 text-xs text-gray-500",
                        children: (0, c.jsx)(
                          O.Z,
                          (0, eI._)(
                            (0, o._)({}, nK.chatHistoryOffDescription),
                            {
                              values: {
                                learnMore: (0, c.jsx)("a", {
                                  href: "https://help.openai.com/en/articles/7730893",
                                  target: "_blank",
                                  className: "underline",
                                  rel: "noreferrer",
                                  children: (0, c.jsx)(
                                    O.Z,
                                    (0, o._)({}, nK.learnMore)
                                  ),
                                }),
                                b: function (e) {
                                  return (0, c.jsx)("strong", { children: e });
                                },
                              },
                            }
                          )
                        ),
                      }),
                      (0, c.jsxs)(J.z, {
                        className: "mt-4 w-full",
                        onClick: Z,
                        color: "primary",
                        size: "medium",
                        children: [
                          (0, c.jsx)(Y.ZP, { icon: L.$IY }),
                          (0, c.jsx)(O.Z, (0, o._)({}, nK.enableChatHistory)),
                        ],
                      }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className:
                      "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900",
                  }),
                ],
              });
            },
            [y, Z]
          );
        (0, h.useEffect)(
          function () {
            if (g.current) {
              var e;
              x(
                (e = g.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth
              );
            }
          },
          [u]
        );
        var A = !(0, v.nR)() && !f.has("disable_upgrade_ui"),
          D = (0, v.KQ)();
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)("div", {
              className:
                "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
              children: [
                (0, c.jsx)(eA.f, {
                  asChild: !0,
                  children: (0, c.jsx)("h2", {
                    children: (0, c.jsx)(
                      O.Z,
                      (0, o._)({}, nK.chatHistoryLabel)
                    ),
                  }),
                }),
                (0, c.jsxs)("nav", {
                  className: "flex h-full w-full flex-col p-2",
                  "aria-label": d.formatMessage(nK.chatHistoryLabel),
                  children: [
                    (0, c.jsxs)(n4, {
                      onClick: s,
                      className: "mb-1 flex-shrink-0",
                      children: [
                        (0, c.jsx)(Y.ZP, { icon: y ? L.Bw1 : L.OvN }),
                        (0, c.jsx)(
                          O.Z,
                          (0, o._)({}, y ? nK.clearChat : nK.newChat)
                        ),
                      ],
                    }),
                    R,
                    (0, c.jsx)(n5, {
                      ref: g,
                      $offsetScrollbar: p,
                      $disableScroll: y,
                      children: u,
                    }),
                    (0, c.jsxs)("div", {
                      className: "border-t border-white/20 pt-2",
                      children: [
                        t &&
                          (0, c.jsx)(n1, {
                            onClick: n,
                            className: "rounded-md",
                            children: (0, c.jsxs)("span", {
                              className: "flex w-full flex-row justify-between",
                              children: [
                                (0, c.jsxs)("span", {
                                  className:
                                    "gold-new-button flex items-center gap-3",
                                  children: [
                                    (0, c.jsx)(Y.ZP, { icon: L.fzv }),
                                    D
                                      ? (0, c.jsx)(
                                          O.Z,
                                          (0, o._)({}, nK.renewPlus)
                                        )
                                      : (0, c.jsx)(
                                          O.Z,
                                          (0, o._)({}, nK.upgradeToPlus)
                                        ),
                                  ],
                                }),
                                A &&
                                  !D &&
                                  (0, c.jsx)("span", {
                                    className:
                                      "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                    children: (0, c.jsx)(
                                      O.Z,
                                      (0, o._)({}, nK.newLabel)
                                    ),
                                  }),
                              ],
                            }),
                          }),
                        (0, c.jsx)(n6, {
                          showCustomerPortalMenuItem: a,
                          onClickCustomerPortal: r,
                          onClickSettings: P,
                          onDeleteHistory: i,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            N &&
              (0, c.jsx)(nS, {
                onClose: S,
                onToggleHistoryDisabled: s,
                onDeleteHistory: i,
              }),
            f.has("system_message2") && (0, c.jsx)(nG, {}),
            f.has("business_seats") && (0, c.jsx)(eY, {}),
          ],
        });
      }
      var te = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            i = e.onDeleteHistory,
            o = e.onNewThread,
            s = e.children;
          return (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)("div", {
              className: "flex h-full min-h-0 flex-col ",
              children: (0, c.jsx)(n9, {
                onClickAccountPayment: n,
                showAccountPaymentMenuItem: t,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: a,
                onDeleteHistory: i,
                onNewThread: o,
                children: s,
              }),
            }),
          });
        },
        tn = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            i = e.onDeleteHistory,
            s = e.onClose,
            l = e.sidebarOpen,
            u = e.onNewThread,
            d = e.children;
          return (0, c.jsx)(eS.u.Root, {
            show: l,
            as: h.Fragment,
            children: (0, c.jsxs)(eZ.V, {
              as: "div",
              className: "relative",
              onClose: s,
              children: [
                (0, c.jsx)(eS.u.Child, {
                  as: h.Fragment,
                  enter: "transition-opacity ease-linear duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "transition-opacity ease-linear duration-300",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, c.jsx)("div", {
                    className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                  }),
                }),
                (0, c.jsxs)("div", {
                  className: "fixed inset-0 flex",
                  children: [
                    (0, c.jsx)(eS.u.Child, {
                      as: h.Fragment,
                      enter: "transition ease-in-out duration-300 transform",
                      enterFrom: "-translate-x-full",
                      enterTo: "translate-x-0",
                      leave: "transition ease-in-out duration-300 transform",
                      leaveFrom: "translate-x-0",
                      leaveTo: "-translate-x-full",
                      children: (0, c.jsxs)(eZ.V.Panel, {
                        className:
                          "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                        children: [
                          (0, c.jsx)(eS.u.Child, {
                            as: h.Fragment,
                            enter: "ease-in-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in-out duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, c.jsx)("div", {
                              className: "absolute right-0 top-0 -mr-12 pt-2",
                              children: (0, c.jsxs)("button", {
                                type: "button",
                                className:
                                  "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                onClick: s,
                                children: [
                                  (0, c.jsx)("span", {
                                    className: "sr-only",
                                    children: (0, c.jsx)(
                                      O.Z,
                                      (0, o._)({}, nK.closeSidebar)
                                    ),
                                  }),
                                  (0, c.jsx)(Y.ZP, {
                                    icon: L.q5L,
                                    size: "medium",
                                    className: "text-white",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, c.jsx)(n9, {
                            onClickAccountPayment: n,
                            showAccountPaymentMenuItem: t,
                            onClickCustomerPortal: r,
                            showCustomerPortalMenuItem: a,
                            onDeleteHistory: i,
                            onNewThread: u,
                            children: d,
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)("div", { className: "w-14 flex-shrink-0" }),
                  ],
                }),
              ],
            }),
          });
        },
        tt = function (e) {
          var n = e.clientThreadId,
            t = e.onClickOpenSidebar,
            r = e.onNewThread,
            a = e.title,
            i = (0, h.useContext)(_.QL),
            s = i.historyDisabled,
            l = i.toggleHistoryDisabled,
            u = H(n, a, !0),
            d = u.resolvedTitle,
            f = u.isTypingEffect;
          return (0, c.jsxs)("div", {
            className:
              "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
            children: [
              (0, c.jsxs)("button", {
                type: "button",
                className:
                  "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                onClick: t,
                children: [
                  (0, c.jsx)("span", {
                    className: "sr-only",
                    children: (0, c.jsx)(O.Z, (0, o._)({}, nK.openSidebar)),
                  }),
                  (0, c.jsx)(Y.ZP, {
                    icon: L.cur,
                    "aria-hidden": "true",
                    size: "medium",
                  }),
                ],
              }),
              (0, c.jsx)("h1", {
                className: "flex-1 text-center text-base font-normal",
                children: s
                  ? (0, c.jsxs)("div", {
                      className:
                        "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                      onClick: l,
                      children: [
                        (0, c.jsx)(L.$IY, {}),
                        (0, c.jsx)(O.Z, (0, o._)({}, nK.enableChatHistory)),
                      ],
                    })
                  : f && null != d
                  ? (0, c.jsx)(Q, { text: d })
                  : null != d
                  ? d
                  : (0, c.jsx)(O.Z, (0, o._)({}, nK.newChat)),
              }),
              (0, c.jsx)("button", {
                type: "button",
                className: "px-3",
                onClick: r,
                children: (0, c.jsx)(Y.ZP, {
                  icon: s ? L.Bw1 : L.OvN,
                  size: "medium",
                }),
              }),
            ],
          });
        };
      function tr(e) {
        var n = e.toggleNavigationSidebar,
          t = e.handleAccountPayment,
          r = e.handleClickCustomerPortal,
          a = e.handleResetThread,
          i = e.activeSidebar,
          o = e.isAccountPaid,
          s = e.children,
          l = (0, f.useRouter)(),
          u = (0, h.useRef)(null),
          d = (0, z.w$)(),
          g = (0, eL.g)(function (e) {
            return e.flags.isUserInCanPayGroup;
          }),
          m = eo(),
          p = (0, C.tN)(function (e) {
            return e.isNavigationCollapsed;
          }),
          x = !0 === o,
          b = (0, h.useCallback)(
            function () {
              q.ZP.deleteConversations().then(function () {
                m();
              }),
                a(),
                "/" !== l.asPath && l.replace({ pathname: "/" });
            },
            [a, m, l]
          ),
          y = eQ().currentAccount,
          j =
            (!(0, v.hz)().has("business_seats") ||
              (null == y ? void 0 : y.structure) !== "workspace") &&
            !1 === o &&
            g;
        return d
          ? (0, c.jsx)(A.E.div, {
              className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
              ref: u,
              initial: !1,
              animate: {
                width: p ? 0 : "260px",
                transition: { duration: 0.2, ease: "easeOut" },
              },
              onAnimationStart: function () {
                u.current && (u.current.style.visibility = "visible");
              },
              onAnimationComplete: function () {
                u.current && p && (u.current.style.visibility = "hidden");
              },
              children: (0, c.jsx)("div", {
                className: "h-full w-[260px]",
                children: (0, c.jsx)(te, {
                  onClickAccountPayment: t,
                  showAccountPaymentMenuItem: j,
                  onClickCustomerPortal: r,
                  showCustomerPortalMenuItem: x,
                  onDeleteHistory: b,
                  onNewThread: a,
                  children: s,
                }),
              }),
            })
          : (0, c.jsx)(tn, {
              onClose: n,
              sidebarOpen: "navigation" === i,
              onClickAccountPayment: t,
              showAccountPaymentMenuItem: j,
              onClickCustomerPortal: r,
              showCustomerPortalMenuItem: x,
              onDeleteHistory: b,
              onNewThread: a,
              children: s,
            });
      }
      var ta = t(37541),
        ti = { showAccountPaymentModal: !1 },
        to = (0, b.ZP)()(function (e) {
          return (0, eI._)((0, o._)({}, ti), {
            setShowAccountPaymentModal: function (n) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : F();
              e({ showAccountPaymentModal: n }), t && t();
            },
          });
        }),
        ts = t(6128),
        tl = t(5437),
        tu = t.n(tl),
        tc = t(11253),
        td = t.n(tc),
        tf = t(75179),
        th = t(69403),
        tg = t(22208),
        tm = t(81949);
      function tp(e) {
        var n = e.id,
          t = e.label,
          r = e.disabled;
        return (0, c.jsxs)("div", {
          className: "form-check",
          children: [
            (0, c.jsx)("input", {
              className:
                "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              disabled: r,
              value: "",
              id: n,
            }),
            (0, c.jsx)("label", {
              className: "form-check-label text-gray-800 dark:text-gray-100",
              htmlFor: n,
              children: t,
            }),
          ],
        });
      }
      var tv = t(88888);
      function tx() {
        var e = (0, u._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (tx = function () {
            return e;
          }),
          e
        );
      }
      function tb() {
        var e = (0, u._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (tb = function () {
            return e;
          }),
          e
        );
      }
      function ty() {
        var e = (0, u._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (ty = function () {
            return e;
          }),
          e
        );
      }
      function tj() {
        var e = (0, u._)([""]);
        return (
          (tj = function () {
            return e;
          }),
          e
        );
      }
      var tw = (0, E.vU)({
        submitFeedback: {
          id: "feedbackModal.submitFeedback",
          defaultMessage: "Submit feedback",
          description: "Button text for submitting the feedback",
        },
        submitReport: {
          id: "feedbackModal.submitReport",
          defaultMessage: "Submit report",
          description: "Button text for submitting a content-moderation report",
        },
        submitRejectModeration: {
          id: "feedbackModal.moderationReject",
          defaultMessage: "Block Content",
          description:
            "Button text for rejecting the share link and blocking it from being viewed",
        },
        submitAcceptModeration: {
          id: "feedbackModal.moderationAccept",
          defaultMessage: "Allow Content",
          description:
            "Button text for accepting the share link and allowing it to be viewed",
        },
        thumbsUpPlaceholder: {
          id: "feedbackModal.thumbsUpPlaceholder",
          defaultMessage: "What do you like about the response?",
          description:
            "Placeholder for textarea input when user chooses thumbs up",
        },
        thumbsDownPlaceholder: {
          id: "feedbackModal.thumbsDownPlaceholder",
          defaultMessage:
            "What was the issue with the response? How could it be improved?",
          description:
            "Placeholder for textarea input when user chooses thumbs down",
        },
        reportContentExplanationPlaceholder: {
          id: "feedbackModal.reportContentExplanationPlaceholder",
          defaultMessage:
            "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
          description:
            "Placeholder for textarea input when user chooses to report a shared conversation",
        },
        harmfulUnsafe: {
          id: "feedbackModal.harmfulUnsafe",
          defaultMessage: "This is harmful / unsafe",
          description: "Label for harmful/unsafe checkbox",
        },
        harmfulOffensive: {
          id: "feedbackModal.harmfulOffensive",
          defaultMessage: "This content is harmful or offensive",
          description: "Label for harmful/offensive checkbox",
        },
        copyrightContent: {
          id: "feedbackModal.copyrightContent",
          defaultMessage: "This content violates copyright law",
          description: "Label for Copyrighted Content checkbox",
        },
        reportOtherContent: {
          id: "feedbackModal.reportOtherContent",
          defaultMessage:
            "I don't like this for some other reason (please describe)",
          description: "Label for Report Other Content checkbox",
        },
        notTrue: {
          id: "feedbackModal.notTrue",
          defaultMessage: "This isn't true",
          description: "Label for not true checkbox",
        },
        notHelpful: {
          id: "feedbackModal.notHelpful",
          defaultMessage: "This isn't helpful",
          description: "Label for not helpful checkbox",
        },
        dontLikeThis: {
          id: "feedbackModal.dontLikeThis",
          defaultMessage: "I don't like this",
          description: "Label for I Don't Like This checkbox",
        },
        sexualAbuse: {
          id: "feedbackModal.sexualAbuse",
          defaultMessage: "This content contains sexual abuse",
          description: "Label for Sexual Abuse checkbox",
        },
        provideAdditionalFeedback: {
          id: "feedbackModal.provideAdditionalFeedback",
          defaultMessage: "Provide additional feedback",
          description: "Title for the critique feedback modal",
        },
        provideReportModalTitle: {
          id: "feedbackModal.provideReportModalTitle",
          defaultMessage: "Report This Content",
          description: "Title for the 'report' feedback modal",
        },
        pickBestAnswer: {
          id: "feedbackModal.pickBestAnswer",
          defaultMessage: "Pick the best answer to improve the model",
          description: "Title for the compare feedback modal",
        },
        newAnswer: {
          id: "feedbackModal.newAnswer",
          defaultMessage: "New Answer",
          description: "Title for the new answer during comparison",
        },
        originalAnswer: {
          id: "feedbackModal.originalAnswer",
          defaultMessage: "Original Answer",
          description: "Title for the original answer during comparison",
        },
        newAnswerBetter: {
          id: "feedbackModal.newAnswerBetter",
          defaultMessage: "New answer is better",
          description: "Button text for choosing new answer during comparison",
        },
        originalAnswerBetter: {
          id: "feedbackModal.originalAnswerBetter",
          defaultMessage: "Original answer is better",
          description:
            "Button text for choosing original answer during comparison",
        },
        neitherAnswerBetter: {
          id: "feedbackModal.neitherAnswerBetter",
          defaultMessage: "Neither answer is better",
          description:
            "Button text for choosing neither answer during comparison",
        },
        skipStep: {
          id: "feedbackModal.skipStep",
          defaultMessage: "Skip this step",
          description: "Button text for skipping comparison step",
        },
        continueWithChosenAnswer: {
          id: "feedbackModal.continueWithChosenAnswer",
          defaultMessage:
            "The conversation will continue with the answer you choose.",
          description: "Information text for user during comparison",
        },
      });
      function tk(e) {
        var n,
          t,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.length) === 1 &&
          !(null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.some(function (e) {
                return "error" in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              e7.Cv.getTextFromMessage(
                null == e ? void 0 : e.messages[0].message
              ).length < 20
            ))
        );
      }
      function tC(e) {
        var n,
          t,
          r = e.ratingModalNodeId,
          a = e.ratingModalOpen,
          i = e.onCloseRatingModal,
          s = e.handleSubmitFeedback,
          u = e.onHandleChangeFeedbackComparisonRating,
          d = e.feedbackTextareaRef,
          f = e.clientThreadId,
          g = e.activeRequests,
          b = e.currentModelId,
          y = e.onChangeItemInView,
          j = e.onRequestMoreCompletions,
          w = e.onDeleteNode,
          k = e.onRequestCompletion,
          C = e.onUpdateNode,
          _ = e.onSandboxLinkClick,
          T = (0, B.Z)(),
          N = x.tQ.getTree(f),
          I = (0, x.XK)(f);
        (0, h.useEffect)(
          function () {
            "report" === a && ee.pg.forceEnableSession();
          },
          [a]
        );
        var P = (0, h.useRef)(0.5 > Math.random() ? "left" : "right"),
          S = null == N ? void 0 : N.getConversationTurns(r || "root"),
          Z = S.length - 1,
          R = S[S.length - 1],
          A = (0, v.hz)().has(U.FZ),
          D = (0, l._)((0, h.useState)("critique"), 2),
          E = D[0],
          H = D[1],
          V = (0, z.w$)(),
          W = (0, v.hz)().has(U.Pt) && tk(R, !0) && V,
          G = (0, m.WS)(),
          Q = (0, h.useMemo)(
            function () {
              return {
                id: r || "root",
                threadId: x.tQ.getServerThreadId(f),
                rating: a,
                model: b,
              };
            },
            [r, f, a, b]
          ),
          $ =
            null == S
              ? void 0
              : S[(null == S ? void 0 : S.length) - 1].variantIds,
          J = null == $ ? void 0 : $[(null == $ ? void 0 : $.length) - 1],
          Y = (t = (n = null == N ? void 0 : N.getConversationTurns(J))[
            n.length - 1
          ]).messages[t.messages.length - 1].nodeId,
          X = null == N ? void 0 : N.getConversationTurns(Y),
          K = (0, h.useMemo)(
            function () {
              var e =
                null == X ? void 0 : X[(null == X ? void 0 : X.length) - 1];
              return "thumbsDown" === a && W && tk(e) && tk(R);
            },
            [a, W, X, R]
          ),
          en = (0, h.useRef)(Date.now()),
          er = (0, h.useRef)(-1),
          ea = (0, h.useRef)(Date.now()),
          ei = (0, h.useRef)(Date.now());
        (0, h.useEffect)(
          function () {
            "compare" === E
              ? ((er.current = Date.now()), G(p.s6.displayedComparisonUIV0, Q))
              : "critique" === E &&
                "thumbsDown" === a &&
                G(p.s6.displayedThumbsDownFeedbackForm, Q);
          },
          [E]
        );
        var eo = S.length - 2,
          es = X.length - 1,
          el = X[X.length - 1],
          eu = (0, h.useMemo)(
            function () {
              return el && e7.Cv.getRequestIdFromConversationTurn(el);
            },
            [el]
          ),
          ec = (0, h.useMemo)(
            function () {
              return g.has(eu);
            },
            [g, eu]
          );
        (0, h.useMemo)(
          function () {
            ec || (ei.current = Date.now());
          },
          [ec]
        );
        var ed = R.messages,
          ef = ed[ed.length - 1],
          eh = ef.message.id,
          eg = ef.nodeId,
          em = N.getLeafFromNode(eg),
          ep = el.messages,
          ev = ep[ep.length - 1],
          ex = ev.message.id,
          eb = ev.nodeId,
          ey = N.getLeafFromNode(eb),
          ej =
            "critique" === E
              ? "report" === a
                ? T.formatMessage(tw.provideReportModalTitle)
                : T.formatMessage(tw.provideAdditionalFeedback)
              : T.formatMessage(tw.pickBestAnswer),
          ew = (0, h.useRef)([]),
          ek = (0, h.useRef)(""),
          eC = (0, h.useCallback)(
            function () {
              var e,
                n =
                  null === (e = d.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ew.current = (0, tm._)(n || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace("feedback-", "");
                })),
                (ek.current =
                  (null == n ? void 0 : n["feedback-other"].value) || "");
            },
            [d]
          ),
          e_ = (0, h.useCallback)(
            function () {
              eC(),
                s(ek.current, ew.current),
                "thumbsDown" === a && G(p.s6.submitThumbsDownFeedbackForm, Q),
                K ? H("compare") : i();
            },
            [eC, s, a, K, G, Q, i]
          ),
          eM = (0, h.useCallback)(
            function (e, n) {
              var t = x.tQ.getServerThreadId(f);
              if (null != t) {
                var r = x.tQ.getThreadCurrentLeafId(f);
                q.ZP.submitSharedConversationReportFeedback({
                  message_id: r,
                  shared_conversation_id: t,
                  text: e,
                  tags: n,
                })
                  .then(function () {
                    et.m.success("Moderation logged successfully");
                  })
                  .catch(function () {
                    et.m.danger(
                      "Moderation NOT logged successfully! Please try again"
                    );
                  }),
                  i();
              }
            },
            [f, i]
          ),
          eT = (0, h.useCallback)(
            function () {
              eC(),
                ew.current.push("moderation-reject"),
                eM(ek.current, ew.current);
            },
            [eM, eC]
          ),
          eN = (0, h.useCallback)(
            function () {
              eC(),
                ew.current.push("moderation-accept"),
                eM(ek.current, ew.current);
            },
            [eM, eC]
          ),
          eP =
            "moderate" === a
              ? (0, c.jsxs)(c.Fragment, {
                  children: [
                    (0, c.jsx)(eO.mH, {
                      title: T.formatMessage(tw.submitRejectModeration),
                      color: "danger",
                      onClick: eT,
                    }),
                    (0, c.jsx)(eO.mH, {
                      title: T.formatMessage(tw.submitAcceptModeration),
                      color: "primary",
                      onClick: eN,
                    }),
                  ],
                })
              : "critique" === E
              ? (0, c.jsx)(eO.mH, {
                  title: T.formatMessage(
                    "report" === a ? tw.submitReport : tw.submitFeedback
                  ),
                  onClick: e_,
                })
              : null,
          eS = "left" === P.current,
          eZ = eS ? "new" : "original",
          eR = eS ? "original" : "new",
          eA = eS
            ? T.formatMessage(tw.newAnswer)
            : T.formatMessage(tw.originalAnswer),
          eD = eS
            ? T.formatMessage(tw.originalAnswer)
            : T.formatMessage(tw.newAnswer),
          eF = eS
            ? T.formatMessage(tw.newAnswerBetter)
            : T.formatMessage(tw.originalAnswerBetter),
          eL = eS
            ? T.formatMessage(tw.originalAnswerBetter)
            : T.formatMessage(tw.newAnswerBetter),
          eE = a && "report" !== a && "moderate" !== a,
          eB = (0, h.useCallback)(
            function (e) {
              var n = "left" === e ? eZ : "right" === e ? eR : "same";
              if (
                (G(
                  p.s6.submittedComparisonUIV0,
                  Object.assign({}, Q, { choice: n })
                ),
                eE)
              ) {
                var t = x.tQ.getTree(f),
                  r = t.getMetadata(eg);
                t.updateNode(eg, {
                  metadata: {
                    $set: (0, eI._)((0, o._)({}, r), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var s = t.getMetadata(eb);
                t.updateNode(eb, {
                  metadata: {
                    $set: (0, eI._)((0, o._)({}, s), {
                      inlineComparisonRating: n,
                    }),
                  },
                }),
                  u(
                    eh,
                    ex,
                    a,
                    n,
                    P.current,
                    en.current,
                    er.current,
                    ea.current,
                    ei.current,
                    ek.current,
                    ew.current
                  );
              }
              x.tQ.setThreadCurrentLeafId(f, e === P.current ? ey.id : em.id),
                i();
            },
            [eZ, eR, G, Q, eE, f, ey.id, em.id, i, eg, eb, u, eh, ex, a]
          ),
          eq = !ec && null != ei.current && K,
          eU = (0, h.useCallback)(
            function () {
              i(),
                "critique" === E
                  ? G(p.s6.skippedThumbsDownFeedbackForm, Object.assign({}, Q))
                  : "compare" === E &&
                    G(p.s6.skippedComparisonUIV0, Object.assign({}, Q));
            },
            [i, G, Q, E]
          ),
          ez = (0, l._)((0, h.useState)([]), 2),
          eH = ez[0],
          eV = ez[1];
        return (
          (0, h.useEffect)(function () {
            "moderate" === a &&
              q.ZP.fetchShareModerationCategories().then(function (e) {
                var n = e.moderation_categories;
                eV(
                  Object.keys(n).map(function (e) {
                    return [e, n[e]];
                  })
                );
              });
          }, []),
          (0, c.jsxs)(
            eO.ZP,
            {
              isOpen: !0,
              onModalClose: eU,
              closeButton: (0, c.jsx)(eO.ol, { onClose: eU }),
              size: "custom",
              className: "md:w-[672px] lg:w-[896px] xl:w-[1024px] xl:max-w-7xl",
              type:
                "critique" === E
                  ? "thumbsUp" === a
                    ? "success"
                    : "danger"
                  : "success",
              icon:
                "critique" === E ? ("thumbsUp" === a ? L.fmn : L.oLd) : void 0,
              title: ej,
              primaryButton: eP,
              children: [
                "critique" === E &&
                  (0, c.jsxs)("form", {
                    ref: d,
                    children: [
                      (0, c.jsx)(nz.ZP, {
                        id: "feedback-other",
                        placeholder:
                          "thumbsUp" === a
                            ? T.formatMessage(tw.thumbsUpPlaceholder)
                            : "report" === a
                            ? T.formatMessage(
                                tw.reportContentExplanationPlaceholder
                              )
                            : T.formatMessage(tw.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                      }),
                      "thumbsDown" === a &&
                        (0, c.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, c.jsx)(tp, {
                              id: "feedback-harmful",
                              label: T.formatMessage(tw.harmfulUnsafe),
                            }),
                            (0, c.jsx)(tp, {
                              id: "feedback-false",
                              label: T.formatMessage(tw.notTrue),
                            }),
                            (0, c.jsx)(tp, {
                              id: "feedback-not-helpful",
                              label: T.formatMessage(tw.notHelpful),
                            }),
                          ],
                        }),
                      null != a &&
                        !eE &&
                        (0, c.jsx)(c.Fragment, {
                          children: (0, c.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              "report" === a &&
                                (0, c.jsxs)(c.Fragment, {
                                  children: [
                                    (0, c.jsx)(tp, {
                                      id: "feedback-dont-like-this",
                                      label: T.formatMessage(tw.dontLikeThis),
                                    }),
                                    (0, c.jsx)(tp, {
                                      id: "feedback-false",
                                      label: T.formatMessage(tw.notTrue),
                                    }),
                                    (0, c.jsx)(tp, {
                                      id: "feedback-not-helpful",
                                      label: T.formatMessage(tw.notHelpful),
                                    }),
                                    (0, c.jsx)(tp, {
                                      id: "feedback-harmful-offensive",
                                      label: T.formatMessage(
                                        tw.harmfulOffensive
                                      ),
                                    }),
                                    (0, c.jsx)(tp, {
                                      id: "feedback-sexual-abuse",
                                      label: T.formatMessage(tw.sexualAbuse),
                                    }),
                                  ],
                                }),
                              "moderate" === a &&
                                (0, c.jsxs)(c.Fragment, {
                                  children: [
                                    eH.map(function (e) {
                                      var n = (0, l._)(e, 2),
                                        t = n[0],
                                        r = n[1];
                                      return (0,
                                      c.jsx)(tp, { id: "feedback-" + t, label: r }, t);
                                    }),
                                    (0, c.jsx)(tp, {
                                      id: "feedback-copyright",
                                      label: T.formatMessage(
                                        tw.copyrightContent
                                      ),
                                    }),
                                  ],
                                }),
                              (0, c.jsx)(tp, {
                                id: "feedback-content-other",
                                label: T.formatMessage(tw.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "compare" === E &&
                  X &&
                  void 0 !== I &&
                  (0, c.jsxs)("div", {
                    className: (0, M.Z)("w-full"),
                    children: [
                      (0, c.jsx)("p", {
                        className: (0, M.Z)("mb-7 mt-3"),
                        children: (0, c.jsx)(
                          O.Z,
                          (0, o._)({}, tw.continueWithChosenAnswer)
                        ),
                      }),
                      (0, c.jsx)(tT, {
                        className: A ? "rounded-2xl" : "rounded-md",
                        children: (0, c.jsx)(tN, {
                          children: (0, c.jsx)(tv.Z, {
                            currentModelId: b,
                            turnIndex: eo,
                            isFinalTurn: !1,
                            clientThreadId: f,
                            onChangeItemInView: y,
                            onChangeRating: F(),
                            onRequestMoreCompletions: j,
                            onDeleteNode: w,
                            onRequestCompletion: k,
                            onUpdateNode: C,
                            onSandboxLinkClick: _,
                            activeRequests: g,
                            showInlineEmbeddedDisplay: !0,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              F(),
                          }),
                        }),
                      }),
                      (0, c.jsxs)("div", {
                        className: (0, M.Z)(),
                        children: [
                          (0, c.jsxs)("div", {
                            className: (0, M.Z)(
                              "mb-2 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, c.jsx)("div", {
                                children: (0, c.jsx)("p", {
                                  className: (0, M.Z)("font-semibold"),
                                  children: eA,
                                }),
                              }),
                              (0, c.jsx)("div", {
                                children: (0, c.jsx)("p", {
                                  className: (0, M.Z)("font-semibold"),
                                  children: eD,
                                }),
                              }),
                            ],
                          }),
                          (0, c.jsxs)("div", {
                            className: (0, M.Z)(
                              "mb-5 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, c.jsxs)(tM, {
                                children: [
                                  (0, c.jsx)(tN, {
                                    children: (0, c.jsx)(tv.Z, {
                                      currentModelId: b,
                                      turnIndex: eS ? es : Z,
                                      conversationLeafId: eS ? eb : eg,
                                      isFinalTurn: !0,
                                      clientThreadId: f,
                                      onChangeItemInView: y,
                                      onChangeRating: F(),
                                      onDeleteNode: w,
                                      onRequestMoreCompletions: j,
                                      onRequestCompletion: k,
                                      onUpdateNode: C,
                                      onSandboxLinkClick: _,
                                      activeRequests: g,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        F(),
                                    }),
                                  }),
                                  (0, c.jsx)(t_, {
                                    children: (0, c.jsx)(eO.mH, {
                                      disabled: !eq,
                                      title: eF,
                                      onClick: function () {
                                        return eB("left");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                              (0, c.jsxs)(tM, {
                                children: [
                                  (0, c.jsx)(tN, {
                                    children: (0, c.jsx)(tv.Z, {
                                      currentModelId: b,
                                      turnIndex: eS ? Z : es,
                                      conversationLeafId: eS ? eg : eb,
                                      isFinalTurn: !0,
                                      clientThreadId: f,
                                      onChangeItemInView: y,
                                      onChangeRating: F(),
                                      onDeleteNode: w,
                                      onRequestMoreCompletions: j,
                                      onRequestCompletion: k,
                                      onUpdateNode: C,
                                      onSandboxLinkClick: _,
                                      activeRequests: g,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        F(),
                                    }),
                                  }),
                                  (0, c.jsx)(t_, {
                                    children: (0, c.jsx)(eO.mH, {
                                      disabled: !eq,
                                      title: eL,
                                      onClick: function () {
                                        return eB("right");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, c.jsx)("div", {
                            className: (0, M.Z)("grid w-full"),
                            children: (0, c.jsxs)("div", {
                              className: (0, M.Z)("mb-2 text-right"),
                              children: [
                                (0, c.jsx)(eO.mH, {
                                  disabled: !eq,
                                  title: T.formatMessage(
                                    tw.neitherAnswerBetter
                                  ),
                                  color: "primary",
                                  onClick: function () {
                                    return eB("same");
                                  },
                                  className: (0, M.Z)("mr-2"),
                                }),
                                (0, c.jsx)(eO.mH, {
                                  title: T.formatMessage(tw.skipStep),
                                  onClick: function () {
                                    return i();
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            },
            "RatingModal-".concat(r)
          )
        );
      }
      var t_ = g.Z.div(tx()),
        tM = g.Z.div(tb()),
        tT = g.Z.div(ty()),
        tN = g.Z.div(tj());
      function tI() {
        var e,
          n,
          t,
          r,
          a,
          i,
          o =
            ((n = (e = (0, e3.S)()).isLoggedInWithMfa),
            (t = e.isUsernamePassword),
            (r = e.setupMfa),
            (i = (a = (0, ng.p0)()).filter(function (e) {
              return !(
                "none" === e.manifest.auth.type ||
                "service_http" === e.manifest.auth.type
              );
            })),
            (n || !t) && (i = []),
            {
              disablePluginsThatWeCantUse: function () {
                var e = a.filter(function (e) {
                  return (
                    "none" === e.manifest.auth.type ||
                    "service_http" === e.manifest.auth.type
                  );
                });
                (0, ng.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              },
              pluginsWeCantUse: i,
              setupMfa: r,
            }),
          s = o.disablePluginsThatWeCantUse,
          l = o.pluginsWeCantUse,
          u = o.setupMfa,
          d = (0, h.useCallback)(
            function () {
              s();
            },
            [s]
          );
        return 0 === l.length
          ? null
          : (0, c.jsx)(eO.ZP, {
              isOpen: !0,
              onModalClose: d,
              title: "Some of your plugins require two-factor authentication.",
              primaryButton: (0, c.jsx)(eO.mH, {
                onClick: u,
                title: "Setup two-factor authentication",
                color: "primary",
              }),
              secondaryButton: (0, c.jsx)(eO.mH, {
                onClick: s,
                title: "Turn off the plugins",
              }),
              type: "danger",
              children: (0, c.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: l.map(function (e) {
                  return (0,
                  c.jsx)("div", { className: "w-full", children: (0, c.jsx)(nf.Z, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var tP = t(16578),
        tS = t.n(tP),
        tZ = t(74853),
        tR = t(99652),
        tA = t(1220);
      function tD(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = (0, m.WS)(),
          a = (0, l._)((0, h.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, f.useRouter)(),
          u = (0, h.useCallback)(
            function () {
              r(p.s6.closeAccountPaymentModal), t();
            },
            [t, r]
          ),
          d = (0, h.useCallback)(
            (0, e5._)(function () {
              var e;
              return (0, e8.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    o(!0), r(p.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, q.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), s.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      et.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return o(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [s, r, o]
          ),
          g = (0, h.useCallback)(
            function () {
              r(p.s6.clickAccountPaymentGetHelp);
            },
            [r]
          ),
          x = (0, v.hz)(),
          b = (0, v.e2)(),
          y = (0, v.YD)();
        return (0, c.jsxs)(tZ.x, {
          isOpen: n,
          onClose: t,
          children: [
            (0, c.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, c.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, c.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: u,
                  children: (0, c.jsx)(L.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, c.jsx)("div", {
              className: "grid",
              children: (0, c.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, c.jsx)(tR.Oi, {
                  rowElements: [
                    (0, c.jsx)(
                      tR.Cu,
                      {
                        text: tA.S.plus.name,
                        children: (0, c.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: tA.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, c.jsx)(
                      tR.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        text: tA.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, c.jsx)(
                      tR.G,
                      { text: tA.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, c.jsx)(
                      tR.G,
                      { text: tA.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, c.jsx)(
                      tR.G,
                      { className: "sm:pb-1", text: tA.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (null == b ? void 0 : b.purchase_origin_platform) ===
                      nx._.MOBILE_IOS &&
                      !1 &&
                      (0, c.jsx)(
                        tR.Hb,
                        {
                          className: "sm:pb-1",
                          text: tA.S.manageSubscriptionIos.callToAction,
                        },
                        "row-plus-plan-manage-ios"
                      ),
                    (!b || b.purchase_origin_platform === nx._.WEBAPP) &&
                      y &&
                      !1 &&
                      (0, c.jsx)(
                        tR.nR,
                        {
                          className: "sm:pb-1",
                          isLoading: i,
                          text: tA.S.manageSubscriptionWeb.callToAction,
                          onClick: d,
                        },
                        "row-plus-plan-manage"
                      ),
                    !1 &&
                      (0, c.jsx)(
                        tS(),
                        {
                          href: nx.L,
                          target: "_blank",
                          passHref: !0,
                          children: (0, c.jsx)(
                            tR.nR,
                            {
                              className: "sm:pb-1",
                              isLoading: !1,
                              text: tA.S.getHelp.callToAction,
                              onClick: g,
                            },
                            "row-plus-plan-help"
                          ),
                        },
                        "row-plus-plan-help-link"
                      ),
                    x.has("business_seats")
                      ? (0, c.jsx)(
                          tS(),
                          {
                            href: "/payments/business",
                            target: "_blank",
                            passHref: !0,
                            children: (0, c.jsx)(
                              tR.nR,
                              {
                                className: "sm:pb-1",
                                isLoading: !1,
                                text: tA.S.business.callToAction,
                                onClick: g,
                              },
                              "row-plus-plan-help"
                            ),
                          },
                          "row-plus-plan-create-business-team"
                        )
                      : null,
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var tF = t(48432),
        tL = t(90860),
        tE = t(47130);
      function tB() {
        var e = (0, u._)(["p-2 rounded-md ", ""]);
        return (
          (tB = function () {
            return e;
          }),
          e
        );
      }
      var tO = (0, E.vU)({
        newChat: {
          defaultMessage: "New chat",
          id: "Stage.newChat",
          description: "New chat button tooltip",
        },
        closeSidebar: {
          defaultMessage: "Close sidebar",
          id: "Stage.closeSidebar",
          description: "Close sidebar button tooltip",
        },
        openSidebar: {
          defaultMessage: "Open sidebar",
          id: "Stage.openSidebar",
          description: "Open sidebar button tooltip",
        },
        closeDebug: {
          defaultMessage: "Close debug sidebar",
          id: "Stage.closeDebug",
          description: "Close debug sidebar button tooltip",
        },
        openDebug: {
          defaultMessage: "Open debug sidebar",
          id: "Stage.openDebug",
          description: "Open debug sidebar button tooltip",
        },
      });
      function tq(e) {
        var n = e.isStaticSharedThread,
          t = e.handleResetThread,
          r = e.toggleDebugSidebar,
          a = e.activeSidebar,
          i = (0, B.Z)(),
          o = (0, C.tN)().isNavigationCollapsed,
          s = (0, v.hz)(),
          l = s.has(U.M6),
          u = "debug" === a,
          d = s.has("debug") && (l || !u);
        return n
          ? null
          : (0, c.jsxs)(c.Fragment, {
              children: [
                l &&
                  (0, c.jsx)("div", {
                    className:
                      "absolute left-4 top-4 z-10 hidden md:inline-block",
                    children: (0, c.jsx)(ne.u, {
                      side: "right",
                      label: o
                        ? i.formatMessage(tO.openSidebar)
                        : i.formatMessage(tO.closeSidebar),
                      children: (0, c.jsx)(tU, {
                        $isNewLayout: l,
                        onClick: C.vm.toggleNavigation,
                        "aria-label": o
                          ? i.formatMessage(tO.openSidebar)
                          : i.formatMessage(tO.closeSidebar),
                        children: (0, c.jsx)(Y.ZP, { icon: L.iYc }),
                      }),
                    }),
                  }),
                (0, c.jsxs)("div", {
                  className: (0, M.Z)(
                    "absolute z-10 hidden flex-col gap-2 md:flex",
                    l ? "right-4 top-4" : "right-3 top-3"
                  ),
                  children: [
                    l &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)(ne.u, {
                            side: "left",
                            label: i.formatMessage(tO.newChat),
                            children: (0, c.jsx)(tU, {
                              $isNewLayout: l,
                              onClick: function () {
                                t();
                              },
                              "aria-label": i.formatMessage(tO.newChat),
                              children: (0, c.jsx)(Y.ZP, { icon: L.vPQ }),
                            }),
                          }),
                          d &&
                            (0, c.jsx)("div", {
                              className:
                                "my-3 border-t-[1px] border-black/20 dark:border-white/20",
                            }),
                        ],
                      }),
                    d &&
                      (0, c.jsx)(ne.u, {
                        side: "left",
                        label: u
                          ? i.formatMessage(tO.closeDebug)
                          : i.formatMessage(tO.openDebug),
                        children: (0, c.jsx)(tU, {
                          className: (0, M.Z)(
                            d && "opacity-40 hover:opacity-100"
                          ),
                          onClick: r,
                          $isNewLayout: l,
                          "aria-label": u
                            ? i.formatMessage(tO.closeDebug)
                            : i.formatMessage(tO.openDebug),
                          children: (0, c.jsx)(Y.ZP, { icon: L.cDN }),
                        }),
                      }),
                  ],
                }),
              ],
            });
      }
      var tU = g.Z.button(tB(), function (e) {
          return e.$isNewLayout
            ? "hover:bg-black/10 hover:dark:bg-white/10"
            : "bg-black/10 dark:bg-white/10 ";
        }),
        tz = t(66850),
        tH = t(89678),
        tV = t.n(tH),
        tW = t(55989),
        tG = t(5046),
        tQ = t(66523),
        t$ = t(90076),
        tJ = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ],
        tY = t(70060),
        tX = t.n(tY)()(
          function () {
            return Promise.resolve().then(t.bind(t, 1215));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1215];
              },
            },
            ssr: !1,
          }
        );
      function tK(e) {
        var n = e.children;
        return (0, c.jsx)(tX, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: n,
        });
      }
      function t0() {
        var e = (0, u._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (t0 = function () {
            return e;
          }),
          e
        );
      }
      function t1() {
        var e = (0, u._)(["grow flex-1 overflow-hidden"]);
        return (
          (t1 = function () {
            return e;
          }),
          e
        );
      }
      function t2() {
        var e = (0, u._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2",
        ]);
        return (
          (t2 = function () {
            return e;
          }),
          e
        );
      }
      var t3 = (0, E.vU)({
        contentPolicyViolation: {
          id: "thread.modal.restrictedTerms.title",
          defaultMessage: "This prompt may violate our content policy.",
          description: "Title for the restricted terms modal",
        },
        acknowledge: {
          id: "thread.modal.common.acknowledge",
          defaultMessage: "Acknowledge",
          description: "Acknowledge button text",
        },
        doNotShareSensitive: {
          id: "thread.modal.onboarding.title",
          defaultMessage:
            "Do not share sensitive materials with this application",
          description: "Title for the onboarding warning modal",
        },
        freeResearchPreview: {
          id: "thread.chatgptFreeResearchPreview",
          defaultMessage:
            "This service is not an official OpenAI service. Powered by <link>xyhelper</link>",
          description: "Free Research Preview disclaimer",
        },
        mayProduceInaccurateInformation: {
          id: "thread.chatgptMayProduceInaccurateInformation",
          defaultMessage:
            "This service is not an official OpenAI service. Powered by <link>xyhelper</link>",
          description:
            "ChatGPT disclaimer for producing inaccurate information",
        },
        somethingWentWrong: {
          id: "thread.modal.unrecoverableError.title",
          defaultMessage: "Something went wrong",
          description: "Title for the UnrecoverableErrorModal",
        },
        tryAgainLater: {
          id: "thread.modal.unrecoverableError.description",
          defaultMessage:
            "We're sorry, but something went wrong. Please try again later.",
          description: "Description for the UnrecoverableErrorModal",
        },
        resetThread: {
          id: "thread.modal.unrecoverableError.resetThread",
          defaultMessage: "Reset thread",
          description: "Reset thread button text",
        },
        reportModalThankYouTitle: {
          id: "thread.modal.reportModalThankYou.title",
          defaultMessage: "Thank you for your report!",
          description: "Title for the post-report thank-you modal",
        },
        reportModalThankYouDescription: {
          id: "thread.modal.reportModalThankYou.description",
          defaultMessage: "Thank you for your report.",
          description: "Description for the post-report thank-you modal",
        },
        reportModalThankYouDismiss: {
          id: "thread.modal.reportModalThankYou.dismissButton",
          defaultMessage: "Close",
          description: "Close button for the post-report thank-you modal",
        },
        sharedConversationContinueConversation: {
          id: "thread.sharedConversation.continue",
          defaultMessage: "Continue this conversation",
          description:
            "Button for shared links to allow user to continue conversation in their own history",
        },
        sharedConversationReportConversation: {
          id: "thread.sharedConversation.report",
          defaultMessage: "Report conversation",
          description:
            "Button for shared links to report conversation for legal, safety, or other reasons",
        },
        sharedConversationModerateConversation: {
          id: "thread.sharedConversation.moderate",
          defaultMessage: "Moderate conversation",
          description:
            "Button for shared links to moderate a conversation for legal, safety, or other reasons",
        },
        reportSharedConversation: {
          id: "thread.reportSharedConversation",
          defaultMessage: "Report content",
          description: "Report shared conversation footer link text",
        },
        termsOfUse: {
          id: "thread.termsOfUse",
          defaultMessage: "Terms of use",
          description: "Terms of use footer link text",
        },
        privacyPolicy: {
          id: "thread.privacyPolicy",
          defaultMessage: "Privacy policy",
          description: "Privacy policy footer link text",
        },
      });
      function t4(e) {
        var n = e.onClickReportSharedConversation;
        return (0, c.jsxs)("div", {
          className: "flex gap-3 justify-center text-gray-500",
          children: [
            (0, c.jsx)("button", {
              onClick: function () {
                n();
              },
              children: (0, c.jsx)(
                O.Z,
                (0, o._)({}, t3.reportSharedConversation)
              ),
            }),
            (0, c.jsx)("span", { children: "|" }),
            (0, c.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              rel: "noreferrer",
              children: (0, c.jsx)(O.Z, (0, o._)({}, t3.termsOfUse)),
            }),
            (0, c.jsx)("span", { children: "|" }),
            (0, c.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              rel: "noreferrer",
              children: (0, c.jsx)(O.Z, (0, o._)({}, t3.privacyPolicy)),
            }),
          ],
        });
      }
      var t5 = function (e) {
          var n,
            t,
            r,
            a,
            i,
            s,
            u,
            d,
            g,
            b,
            y,
            w,
            T,
            N,
            I,
            P,
            S,
            Z,
            R,
            A,
            D,
            E,
            H,
            V,
            W,
            G,
            Q,
            $,
            Y,
            X,
            K,
            ee,
            et = e.initialThreadData,
            er = e.clientThreadId,
            ea = e.showAccountPortalModal,
            ei = e.setShowAccountPortalModal,
            es = e.activeSidebar,
            el = e.setActiveSidebar,
            eu = e.activeRequests,
            ec = e.setActiveRequests,
            ed = e.handleResetThread,
            ef = e.isStaticSharedThread,
            eh = e.initiallyHighlightedMessageId,
            eg = e.continueConversationUrl,
            em = (0, B.Z)(),
            ep = (0, v.hz)(),
            ev = (0, e2.Fl)(),
            ex = ev.isPluginsAvailable,
            eb = ev.isCodeInterpreterAvailable,
            ey = (0, z.w$)(),
            ej = (0, m.WS)(),
            ew = ep.has(U.Pt) && ey,
            ek = (0, h.useContext)(_.QL).historyDisabled,
            eC = (0, f.useRouter)(),
            e_ =
              ef &&
              (null === (V = eC.query) || void 0 === V
                ? void 0
                : null === (W = V.shareParams) || void 0 === W
                ? void 0
                : W[1]) === "moderate",
            eM = (0, x.U0)(er),
            eT = (0, x.Kt)(er),
            eN = (0, x.oq)(er),
            eP = (0, l._)((0, h.useState)(!1), 2),
            eS = eP[0],
            eZ = eP[1],
            eR = (0, l._)((0, h.useState)(!1), 2),
            eA = eR[0],
            eD = eR[1],
            eF = (0, l._)((0, h.useState)(), 2),
            eE = eF[0],
            eB = eF[1],
            eq = (0, l._)((0, h.useState)(!1), 2),
            eU = eq[0],
            ez = eq[1],
            eH = (0, l._)((0, h.useState)(), 2),
            eV = eH[0],
            eW = eH[1],
            eG = (0, l._)((0, h.useState)(), 2),
            eQ = eG[0],
            e$ = eG[1],
            eJ = (0, l._)((0, h.useState)(), 2),
            eY = eJ[0],
            eX = eJ[1],
            eK = (0, h.useRef)(null),
            e0 = (0, v.nR)(),
            e1 = (0, eL.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            e3 = ep.has(U.FZ),
            e4 = (0, l._)((0, h.useState)(!1), 2),
            e6 = e4[0],
            e9 = e4[1],
            ne =
              ((t = (n = {
                exempt: !1,
                onRestrictedTermFound: (0, h.useCallback)(
                  function (e) {
                    e9(!0),
                      ej(p.s6.promptUsedRestrictedWords, {
                        threadId: x.tQ.getServerThreadId(er),
                        content: e,
                      });
                  },
                  [ej, er]
                ),
              }).exempt),
              (r = n.onRestrictedTermFound),
              (i = (a = (0, l._)((0, h.useState)(!1), 2))[0]),
              (s = a[1]),
              {
                hasRestrictedTerms: i,
                checkRestrictedTerms: (0, h.useCallback)(
                  function (e) {
                    var n;
                    return (tJ.some(function (t) {
                      var r = t.exec(e);
                      return r && (n = r[0]), r;
                    }),
                    !t && n)
                      ? (s(!0), null == r || r(n), !0)
                      : (s(!1), !1);
                  },
                  [t, r]
                ),
              }),
            nn = ne.hasRestrictedTerms,
            nt = ne.checkRestrictedTerms,
            nr = (0, l._)((0, h.useState)(!0), 2),
            na = nr[0],
            no = nr[1],
            ns = (0, l._)((0, h.useState)(!1), 2),
            nl = ns[0],
            nu = ns[1],
            nc = (0, t$.iu)(),
            nf = (0, ng.p0)(),
            nh = (0, t$.Gg)(nc, !0),
            nm =
              null !== (K = (0, t$.Bv)(et.lastModelUsed, er)) && void 0 !== K
                ? K
                : nh,
            np = (0, t$.B9)(),
            nx = void 0 !== nm ? np.get(nm) : void 0,
            nb = eo(),
            ny = (0, h.useCallback)(
              function () {
                nb(), ej(p.s6.newThread);
              },
              [ej, nb]
            ),
            nj = x.tQ.getTitle(er),
            nw = (0, l._)((0, h.useState)(), 2),
            nk = nw[0],
            nC = nw[1],
            n_ = (0, h.useCallback)(
              function (e, n) {
                var t = null != n ? n : "";
                ek ||
                  "" === t ||
                  q.ZP.generateTitle(t, e, nm)
                    .then(function (e) {
                      var r = e.title;
                      x.tQ.setTitle(t, r, x._L.Generated),
                        nb(),
                        ej(p.s6.renameThread, {
                          threadId: n,
                          content: r,
                          model: nm,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ek, ej, nm, nb]
            ),
            nM = (0, h.useCallback)(
              function (e, n, t) {
                var r = ep.has(U.uj);
                ek ||
                  !r ||
                  void 0 === t ||
                  e7.Cv.getIsIncompleteFromMessage(t) ||
                  e7.Cv.getWasInterruptedFromMessage(t) ||
                  q.ZP.generateSuggestions(e, n, nm)
                    .then(function (e) {
                      nC({ messageId: n, suggestions: e.suggestions });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ep, ek, nm]
            ),
            nT = (0, x.Uy)(er),
            nN =
              ((u =
                ex &&
                (null == nx
                  ? void 0
                  : null === (G = nx.enabledTools) || void 0 === G
                  ? void 0
                  : G.includes("tools3"))
                  ? nf.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (d = (0, v.hz)()),
              (g = (0, h.useId)()),
              (b = (0, m.WS)()),
              (y = (0, tG.Y8)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (w = (0, tG.Y8)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (T = (0, h.useContext)(_.QL).historyDisabled),
              (N = (0, h.useRef)(0)),
              (I = (0, h.useRef)({})),
              (P = (0, h.useCallback)(
                function (e, n, t, r) {
                  var a,
                    i,
                    s = r.eventSource,
                    l = function () {
                      setTimeout(function () {
                        k.removeAborterById(t),
                          ec(function (e) {
                            var n = new Set(e);
                            return n.delete(t), n;
                          }),
                          delete I.current[t],
                          x.tQ.releaseThread(er);
                      }, 0);
                    },
                    u = x.tQ.getTree(er),
                    c = t,
                    f = u.getParentId(c),
                    h = n === th.Os.Continue,
                    g = !0,
                    m = !1,
                    v = u.getMessage(c),
                    j = new Set(),
                    C = u.getIsBlockedFromNode(f),
                    _ = !1,
                    M = !1,
                    T = tV()(
                      function () {
                        C ||
                          _ ||
                          x.tQ.updateTree(er, function (e) {
                            e.updateNodeMessage(c, v);
                          });
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function N() {
                    return (N = (0, e5._)(function (e, n, t) {
                      var r,
                        a,
                        i,
                        s,
                        l,
                        c = arguments;
                      return (0, e8.Jh)(this, function (d) {
                        switch (d.label) {
                          case 0:
                            (r = c.length > 3 && void 0 !== c[3] && c[3]),
                              (d.label = 1);
                          case 1:
                            return (
                              d.trys.push([1, 3, , 4]),
                              [4, (0, tf._I)(t, !1, e, u.getMessageId(n))]
                            );
                          case 2:
                            return (
                              (i = (a = d.sent()).isBlocked),
                              (s = a.isFlagged),
                              (i || s) && (M = !0),
                              i
                                ? ((_ = !0),
                                  r || (C = !0),
                                  x.tQ.updateTree(er, function (e) {
                                    e.updateNode(n, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, eI._)((0, o._)({}, tf.sK), {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }),
                                      },
                                    });
                                  }),
                                  b(
                                    r
                                      ? p.s6.completionBlockedByModeration
                                      : p.s6.promptBlockedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : s
                                ? (x.tQ.updateTree(er, function (e) {
                                    e.updateNode(n, {
                                      metadata: { $set: tf.Mf },
                                    });
                                  }),
                                  b(
                                    r
                                      ? p.s6.completionFlaggedByModeration
                                      : p.s6.promptFlaggedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : r &&
                                  C &&
                                  x.tQ.updateTree(er, function (e) {
                                    e.updateNodeMessage(n, v);
                                  }),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (l = d.sent()),
                              (_ = !0),
                              x.tQ.updateTree(er, function (e) {
                                e.updateNode(n, {
                                  metadata: {
                                    $set: {
                                      err: "An error occured",
                                      errType: "danger",
                                      completionSampleFinishTime: Date.now(),
                                    },
                                  },
                                });
                              }),
                              b(p.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(l || ""),
                              }),
                              td().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, e5._)(function (r) {
                      var a, P, S, R, A, D, F, L, E, B, O, q, U, z, H;
                      return (0, e8.Jh)(this, function (V) {
                        switch (V.label) {
                          case 0:
                            if ("error" === r.type)
                              return (
                                console.error((a = r.error)),
                                (P =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                x.tQ.updateTree(er, function (e) {
                                  e.updateNode(c, {
                                    message: { $set: v },
                                    metadata: {
                                      $set: {
                                        err: P,
                                        errType: "danger",
                                        errCode: ((0, tW.T)(a) && a.code) || "",
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    },
                                  });
                                }),
                                l(),
                                (0, tW.T)(a) &&
                                  (null == a ? void 0 : a.code) === tG.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (y(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    w();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (
                              ("moderation" === r.type &&
                                ((S = r.isCompletion),
                                (R = r.messageId),
                                (A = r.conversationId),
                                (D = r.flagged),
                                ((F = r.blocked) || D) &&
                                  x.tQ.updateTree(er, function (e) {
                                    var n = e.messageIdToNodeId(R);
                                    e.updateNode(n, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, eI._)(
                                          (0, o._)({}, F ? tf.sK : tf.Mf),
                                          {
                                            completionSampleFinishTime:
                                              Date.now(),
                                          }
                                        ),
                                      },
                                    });
                                  }),
                                (D || F) &&
                                  b(
                                    S
                                      ? F
                                        ? p.s6.completionBlockedByModeration
                                        : p.s6.completionFlaggedByModeration
                                      : F
                                      ? p.s6.promptBlockedByModeration
                                      : p.s6.promptFlaggedByModeration,
                                    { threadId: A, id: R }
                                  )),
                              "message" === r.type)
                            ) {
                              if (
                                ((L = r.message),
                                (E = r.conversationId),
                                g && u.isFirstCompletion)
                              ) {
                                if (
                                  (null == L ? void 0 : L.author.role) ===
                                  th.uU.System
                                )
                                  return u.appendSystemMessageToRoot(L), [2];
                                if (
                                  (null == L ? void 0 : L.author.role) ===
                                  th.uU.User
                                )
                                  return [2];
                              }
                              g
                                ? ((O =
                                    (null ===
                                      (B = x.qN.getState().threads[er]) ||
                                    void 0 === B
                                      ? void 0
                                      : B.continuingFromSharedConversationId) !=
                                    null),
                                  x.tQ.removeContinuingFromSharedConversationId(
                                    er
                                  ),
                                  (g = !1),
                                  (m = u.isFirstCompletion || O),
                                  (null == L ? void 0 : L.id) && j.add(t),
                                  void 0 !== E &&
                                    ((i = E),
                                    (0, x.Zz)(er) &&
                                      x.tQ.setServerIdForNewThread(er, E)),
                                  x.tQ.updateTree(er, function (e) {
                                    e.updateNodeMessage(c, L);
                                  }),
                                  m && ny(E),
                                  h ||
                                    (function (e, n, t) {
                                      N.apply(this, arguments);
                                    })(E, f, u.getTextFromLastNTurns(f, 1), !1),
                                  b(p.s6.generateCompletion, {
                                    id: t,
                                    threadId: E,
                                    completionType: n,
                                    eventSource: s,
                                    model: e,
                                  }),
                                  k.addAborter(t, I.current[t]))
                                : h ||
                                  L.id === u.getMessageId(c) ||
                                  (j.add(L.id),
                                  T.flush(),
                                  x.tQ.updateTree(er, function (e) {
                                    e.addNode(L.id, L, c, th.Jq.Completion);
                                  }),
                                  (c = L.id),
                                  x.tQ.setThreadCurrentLeafId(er, c)),
                                (v = L);
                            }
                            if (
                              (T(),
                              "done" !== r.type ||
                                (C ||
                                  _ ||
                                  (T.flush(),
                                  M ||
                                    ((q = u.getMessageId(c)),
                                    m && n_(q, i),
                                    nM(i, q, v))),
                                x.tQ.updateTree(er, function (e) {
                                  e.updateNode(c, {
                                    metadata: {
                                      $set: (0, eI._)(
                                        (0, o._)({}, u.getMetadata(c)),
                                        {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }
                                      ),
                                    },
                                  });
                                }),
                                l(),
                                !d.has("tools3_dev") || !(U = (0, nd.wR)(v))))
                            )
                              return [3, 2];
                            return [4, (0, nd.qZ)(U)];
                          case 1:
                            (z = V.sent()),
                              (H = c),
                              x.tQ.updateTree(er, function (e) {
                                var n = !0,
                                  t = !1,
                                  r = void 0;
                                try {
                                  for (
                                    var a, i = z[Symbol.iterator]();
                                    !(n = (a = i.next()).done);
                                    n = !0
                                  ) {
                                    var o = a.value;
                                    e.addNode(o.id, o, H, th.Jq.Completion, {
                                      completionSampleFinishTime: Date.now(),
                                    }),
                                      (H = o.id);
                                  }
                                } catch (e) {
                                  (t = !0), (r = e);
                                } finally {
                                  try {
                                    n || null == i.return || i.return();
                                  } finally {
                                    if (t) throw r;
                                  }
                                }
                              }),
                              x.tQ.setThreadCurrentLeafId(er, H),
                              Z(e, th.Os.Next, H, {}, void 0, void 0),
                              (V.label = 2);
                          case 2:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return a.apply(this, arguments);
                    }
                  );
                },
                [b, ny, n_, ec, er]
              )),
              (Z = (0, h.useCallback)(
                ((S = (0, e5._)(function (e, n, t, r) {
                  var a,
                    i,
                    o,
                    s,
                    l,
                    c,
                    d,
                    f,
                    h,
                    m,
                    p,
                    v = arguments;
                  return (0, e8.Jh)(this, function (b) {
                    switch (b.label) {
                      case 0:
                        return (
                          (a = !(v.length > 4) || void 0 === v[4] || v[4]),
                          (i = v.length > 5 ? v[5] : void 0),
                          (o = x.tQ.getTree(er)),
                          x.tQ.retainThread(er),
                          (s = ""
                            .concat(e7.Vh)
                            .concat(g, "-")
                            .concat(N.current++)),
                          ec(function (e) {
                            var n = new Set(e);
                            return n.add(s), n;
                          }),
                          x.tQ.updateTree(er, function (e) {
                            e.addNode(s, "", t, th.Jq.Completion);
                          }),
                          a && x.tQ.setThreadCurrentLeafId(er, s),
                          (c = []),
                          (d = o.getNode(t)),
                          n === th.Os.Next || n === th.Os.Variant
                            ? ((l =
                                (null ===
                                  (f = (h = o.getNode(d.parentId)).message) ||
                                void 0 === f
                                  ? void 0
                                  : f.id) || h.id),
                              c.push(d.message))
                            : (l = d.message.id),
                          void 0 === (m = x.tQ.getServerThreadId(er)) &&
                            (0, x.Zz)(er) &&
                            x.tQ.updateInitialThreadDataForNewThread(er, e, u),
                          [
                            4,
                            q.ZP.publicApiCompletionStream(
                              {
                                model: e,
                                completionType: n,
                                threadId: m,
                                continueFromSharedConversationId: nT,
                                historyDisabled: T,
                                parentMessageId: l,
                                messages: c,
                                enabledPluginIds: u,
                                completionMetadata: i,
                              },
                              P(e, n, s, r)
                            ),
                          ]
                        );
                      case 1:
                        return (p = b.sent()), (I.current[s] = p), [2];
                    }
                  });
                })),
                function (e, n, t, r) {
                  return S.apply(this, arguments);
                }),
                [er, g, ec, nT, T, u, P]
              ))),
            nI = (0, h.useCallback)(
              function () {
                if (eN) {
                  var e = x.tQ.getTree(er).getBranchFromLeaf(eN);
                  e.forEach(function (e) {
                    k.abortAndRemoveById(e.id);
                  }),
                    ec(function (n) {
                      var t = new Set(n);
                      return (
                        e.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        t
                      );
                    });
                }
              },
              [eN, ec, er]
            ),
            nP = (0, h.useCallback)(
              ((R = (0, e5._)(function (e, n, t, r) {
                var a,
                  i,
                  o,
                  s,
                  l = arguments;
                return (0, e8.Jh)(this, function (u) {
                  return (
                    (a = !(l.length > 4) || void 0 === l[4] || l[4]),
                    (i = l.length > 5 ? l[5] : void 0),
                    (o = l.length > 6 ? l[6] : void 0),
                    r && nI(),
                    (s = x.tQ.getTree(er)),
                    (e !== th.Os.Continue && nt(s.getTextFromNode(n))) ||
                      nN(i ? nh : nm, e, n, t, a, o),
                    [2]
                  );
                });
              })),
              function (e, n, t, r) {
                return R.apply(this, arguments);
              }),
              [er, nt, nN, nh, nm, nI]
            ),
            nS = (0, h.useCallback)(
              function (e, n, t, r) {
                x.tQ.updateTree(er, function (t) {
                  t.addNode(e, r, n, th.Jq.Prompt);
                });
              },
              [er]
            ),
            nZ = (0, h.useCallback)(
              function (e, n, t) {
                var r = n.value,
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                nS(e, eN, th.Jq.Prompt, r),
                  nP(th.Os.Next, e, t, !0, void 0, void 0, a);
              },
              [eN, nS, nP]
            ),
            nR = (0, x.nh)(er, eN),
            nA = (0, h.useMemo)(
              function () {
                var e,
                  n,
                  t = nR.type === th.Jq.Prompt,
                  r =
                    (null === (e = nR.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (n = nR.metadata) || void 0 === n
                      ? void 0
                      : n.errCode) !== tf.Dd;
                return !!(t || r) && 0 === eu.size;
              },
              [eu.size, nR]
            ),
            nD = (0, tG.Y8)(function (e) {
              return e.isoDate;
            }),
            nF = (0, h.useMemo)(
              function () {
                var e,
                  n =
                    (null === (e = nR.metadata) || void 0 === e
                      ? void 0
                      : e.errCode) === tG.uU;
                return nA && n && null != nD && "" !== nD;
              },
              [
                null === (Q = nR.metadata) || void 0 === Q ? void 0 : Q.errCode,
                nA,
                nD,
              ]
            ),
            nL = (0, h.useCallback)(
              function (e, n) {
                var t,
                  r =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "none",
                  i = arguments.length > 4 ? arguments[4] : void 0,
                  o = x.tQ.getTree(er);
                (t = nA
                  ? o.getLastValidNode(e).id
                  : o.getParentPromptNode(e).id),
                  nP(th.Os.Variant, t, n, !1, r, i, { variantPurpose: a });
              },
              [nP, nA, er]
            ),
            nE = (0, h.useCallback)(
              function (e) {
                ej(p.s6.continueCompletion),
                  nP(th.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [ej, nP]
            ),
            nB = (0, h.useCallback)(
              function (e) {
                var n = eN,
                  t = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, o = e[Symbol.iterator]();
                    !(t = (i = o.next()).done);
                    t = !0
                  )
                    !(function () {
                      var e = i.value;
                      e.conversation_id &&
                        (0, x.Zz)(er) &&
                        x.tQ.setServerIdForNewThread(er, e.conversation_id),
                        x.tQ.updateTree(er, function (t) {
                          t.addNode(
                            e.message.id,
                            e.message,
                            n,
                            th.Jq.Completion
                          );
                        }),
                        (n = e.message.id);
                    })();
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                x.tQ.setThreadCurrentLeafId(er, n),
                  nP(th.Os.Next, n, {}, !0, void 0, void 0, void 0);
              },
              [eN, nP, er]
            ),
            nO = !!(
              eb &&
              (null == nx
                ? void 0
                : null === ($ = nx.enabledTools) || void 0 === $
                ? void 0
                : $.includes("tools2"))
            ),
            nq = (0, h.useCallback)(
              ((A = (0, e5._)(function (e, n) {
                var t, r;
                return (0, e8.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!nO) return [3, 2];
                      return (
                        n.preventDefault(),
                        n.stopPropagation(),
                        (t = n.currentTarget.href),
                        (r = x.tQ.getServerThreadId(er)),
                        [4, (0, tg.handleSandboxLinkClick)(ep, r)(e, t)]
                      );
                    case 1:
                      a.sent(), (a.label = 2);
                    case 2:
                      return [2];
                  }
                });
              })),
              function (e, n) {
                return A.apply(this, arguments);
              }),
              [ep, nO, er]
            ),
            nU = (0, h.useCallback)(
              function (e) {
                var n = x.tQ.getTree(er).getLeafFromNode(e);
                x.tQ.setThreadCurrentLeafId(er, n.id), ej(p.s6.changeNode);
              },
              [ej, er]
            ),
            nz = (0, h.useCallback)(
              function (e, n) {
                x.tQ.updateTree(er, function (t) {
                  t.updateNodeText(e, n);
                });
              },
              [er]
            ),
            nH = (0, h.useCallback)(
              function (e, n, t) {
                var r = x.tQ.getServerThreadId(er);
                if (
                  (ej(p.s6.thumbRating, {
                    id: n,
                    threadId: r,
                    rating: t,
                    model: nm,
                  }),
                  void 0 !== r &&
                    q.ZP.submitMessageFeedback({
                      message_id: n,
                      conversation_id: r,
                      rating: t,
                    }),
                  e$(e),
                  eX(n),
                  eW(t),
                  x.tQ.updateTree(er, function (n) {
                    var r = n.getMetadata(e);
                    n.updateNode(e, {
                      metadata: {
                        $set: (0, eI._)((0, o._)({}, r), { rating: t }),
                      },
                    });
                  }),
                  "thumbsDown" === t && ew)
                ) {
                  var a = x.tQ.getTree(er).getConversationTurns(e || "root");
                  tk(a[a.length - 1]) &&
                    nL(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison"
                    );
                }
              },
              [ej, er, nm, ew, nL]
            ),
            nV = (0, h.useCallback)(
              function (e, n) {
                if (eV && null != eQ && "" !== eQ && (e || n.length > 0)) {
                  var t = x.tQ.getServerThreadId(er);
                  ej(p.s6.reportResult, {
                    id: eY,
                    threadId: t,
                    content: e,
                    model: nm,
                    rating: eV,
                    tags: n,
                  }),
                    er &&
                      eY &&
                      q.ZP.submitMessageFeedback({
                        message_id: eY,
                        conversation_id: t,
                        rating: eV,
                        text: e,
                        tags: n,
                      });
                }
              },
              [eV, eQ, er, ej, eY, nm]
            ),
            nW = (0, h.useCallback)(
              function (e, n) {
                if (eS && null != eE && "" !== eE) {
                  var t = x.tQ.getServerThreadId(er);
                  ej(p.s6.reportResult, {
                    id: eY,
                    threadId: t,
                    content: e,
                    model: nm,
                    rating: eV,
                    tags: n,
                  }),
                    q.ZP.submitSharedConversationReportFeedback({
                      message_id: eE,
                      shared_conversation_id: t,
                      text: e,
                      tags: n,
                    }),
                    eD(!0);
                }
              },
              [eV, eS, eE, er, ej, eY, nm]
            ),
            nG = (0, h.useCallback)(
              ((D = (0, e5._)(function (e, n, t, r, a, i, o, s, l, u, c) {
                return (0, e8.Jh)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [
                        4,
                        q.ZP.submitMessageComparisonFeedback({
                          feedback_version: "comparison_feedback_modal:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: t,
                          conversation_id: x.tQ.getServerThreadId(er),
                          text: u,
                          tags: c.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: i,
                          compare_step_start_time: o,
                          new_completion_load_start_time: s,
                          new_completion_load_end_time: l,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return d.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, i, o, s, l, u, c) {
                return D.apply(this, arguments);
              }),
              [er]
            ),
            nQ = (0, h.useCallback)(
              ((E = (0, e5._)(function (e, n, t, r, a, i, o) {
                return (0, e8.Jh)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [
                        4,
                        q.ZP.submitMessageComparisonFeedback({
                          feedback_version: "inline_regen_feedback:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: "none",
                          conversation_id: x.tQ.getServerThreadId(er),
                          text: "",
                          tags: [],
                          completion_comparison_rating: t,
                          new_completion_placement: "not-applicable",
                          feedback_start_time: r,
                          compare_step_start_time: a,
                          new_completion_load_start_time: i,
                          new_completion_load_end_time: o,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return s.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, i, o) {
                return E.apply(this, arguments);
              }),
              [er]
            ),
            n$ = (0, h.useCallback)(
              function (e, n) {
                var t = x.tQ.getTree(er).getConversationTurns(e),
                  r =
                    null == t
                      ? void 0
                      : t[(null == t ? void 0 : t.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                nL(
                  e,
                  a
                    ? (0, eI._)((0, o._)({}, n), {
                        intent: "comparison_implicit",
                      })
                    : n,
                  !0,
                  a ? "comparison_implicit" : "none"
                );
              },
              [nL, er]
            ),
            nJ = (0, h.useCallback)(
              function (e) {
                x.tQ.updateTree(er, function (n) {
                  n.deleteNode(e);
                });
              },
              [er]
            ),
            nY = (0, h.useCallback)(
              function () {
                el(function (e) {
                  return "navigation" !== e && "navigation";
                });
              },
              [el]
            ),
            nX = (0, h.useCallback)(
              function () {
                el(function (e) {
                  return "debug" !== e && "debug";
                });
              },
              [el]
            ),
            nK = (0, h.useCallback)(
              function () {
                ei(!1);
              },
              [ei]
            ),
            n0 = to(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            n1 = n0.showAccountPaymentModal,
            n2 = n0.setShowAccountPaymentModal,
            n3 = (0, h.useCallback)(
              function () {
                n2(!1);
              },
              [n2]
            ),
            n4 = (0, h.useCallback)(
              function (e, n) {
                var t = x.tQ.getTree(er);
                if (t.isFirstCompletion && !ek) {
                  var r,
                    a = t.getParent(n);
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.errCode) !== tf.Dd &&
                    setTimeout(function () {
                      n_(a.message.id);
                    }, 500);
                }
                k.abortAndRemoveById(n),
                  eu.has(n) &&
                    (x.tQ.updateTree(er, function (e) {
                      e.updateNodeMessageMetadata(n, {
                        finish_details: { type: "interrupted" },
                      });
                    }),
                    ec(function (e) {
                      var t = new Set(e);
                      return t.delete(n), t;
                    }));
              },
              [n_, ek, eu, ec, er]
            ),
            n5 = (0, h.useCallback)(function () {
              nu(!0);
            }, []);
          (0, h.useEffect)(
            function () {
              var e = td().subscribe("AbortCompletion", n4),
                n = td().subscribe("UnrecoverableError", n5);
              return function () {
                td().unsubscribe(e), td().unsubscribe(n);
              };
            },
            [n4, n5]
          );
          var n8 = (0, x.Hk)(er),
            n7 = eM >= 2,
            n6 = (0, x.Zz)(er) && !n7,
            n9 = (0, h.useCallback)(function () {
              no(!0), en.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            te = (0, h.useCallback)(function () {
              e9(!1);
            }, []),
            tn = (0, x.lA)(er, eN),
            tr = (0, x.dz)(er, eN),
            ti = j(function (e) {
              return null != e.aborters[n8];
            }),
            tl = (0, h.useRef)(null),
            tc = (0, h.useMemo)(
              function () {
                return !ti && !tn && tr;
              },
              [tn, tr, ti]
            ),
            tm = (0, tQ.Z)(),
            tp = (0, x.XK)(er),
            tv = (0, C.tN)(function (e) {
              return e.sharingModalThreadId === tp;
            }),
            tx = (0, x.r7)(er);
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsxs)(tu(), {
                children: [
                  (0, c.jsx)("title", { children: nj }),
                  ef &&
                    (0, c.jsxs)(c.Fragment, {
                      children: [
                        (0, c.jsx)("meta", {
                          property: "og:site_name",
                          content: "ChatGPT",
                        }),
                        (0, c.jsx)(
                          "meta",
                          { name: "robots", content: "noindex,nofollow" },
                          "robots"
                        ),
                        (0, c.jsx)(
                          "meta",
                          {
                            property: "og:title",
                            content:
                              null != nj
                                ? nj
                                : "Shared Conversation on ChatGPT",
                          },
                          "og:title"
                        ),
                        (0, c.jsx)(
                          "meta",
                          {
                            property: "og:image",
                            content: "/images/chatgpt-share-og.png",
                          },
                          "og:image"
                        ),
                      ],
                    }),
                ],
              }),
              (0, c.jsx)(tI, {}),
              !na &&
                (0, c.jsx)(
                  eO.ZP,
                  {
                    isOpen: !0,
                    onModalClose: n9,
                    icon: ts.Z,
                    title: em.formatMessage(t3.doNotShareSensitive),
                    primaryButton: (0, c.jsx)(eO.mH, {
                      onClick: n9,
                      title: em.formatMessage(t3.acknowledge),
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              nn &&
                e6 &&
                (0, c.jsx)(
                  eO.ZP,
                  {
                    isOpen: !0,
                    onModalClose: te,
                    icon: L.U0j,
                    title: em.formatMessage(t3.contentPolicyViolation),
                    primaryButton: (0, c.jsx)(eO.mH, {
                      onClick: te,
                      title: em.formatMessage(t3.acknowledge),
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              tv &&
                null != tp &&
                (0, c.jsx)(tE.Z, {
                  serverThreadId: tp,
                  activeRequests: eu,
                  currentThreadModel: et.lastModelUsed,
                }),
              null != eV &&
                (0, c.jsx)(tC, {
                  ratingModalNodeId: eQ,
                  ratingModalOpen: eV,
                  onCloseRatingModal: function () {
                    return eW(void 0);
                  },
                  handleSubmitFeedback: nV,
                  onHandleChangeFeedbackComparisonRating: nG,
                  currentModelId: nm,
                  feedbackTextareaRef: eK,
                  clientThreadId: er,
                  activeRequests: eu,
                  onChangeItemInView: nU,
                  onRequestMoreCompletions: nL,
                  onUpdateNode: nz,
                  onChangeRating: nH,
                  onDeleteNode: nJ,
                  onRequestCompletion: nP,
                  onSandboxLinkClick: nq,
                }),
              eS &&
                (0, c.jsx)(tC, {
                  ratingModalNodeId: eE,
                  ratingModalOpen: "report",
                  onCloseRatingModal: function () {
                    return eZ(!1);
                  },
                  handleSubmitFeedback: nW,
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: nm,
                  feedbackTextareaRef: eK,
                  clientThreadId: er,
                  activeRequests: eu,
                  onChangeItemInView: nU,
                  onRequestMoreCompletions: nL,
                  onUpdateNode: nz,
                  onChangeRating: nH,
                  onDeleteNode: nJ,
                  onRequestCompletion: nP,
                  onSandboxLinkClick: nq,
                }),
              eA &&
                (0, c.jsx)(eO.ZP, {
                  onModalClose: function () {
                    return eD(!1);
                  },
                  isOpen: !0,
                  icon: ts.Z,
                  title: em.formatMessage(t3.reportModalThankYouTitle),
                  description: em.formatMessage(
                    t3.reportModalThankYouDescription
                  ),
                  primaryButton: (0, c.jsx)(eO.mH, {
                    onClick: function () {
                      return eD(!1);
                    },
                    title: em.formatMessage(t3.reportModalThankYouDismiss),
                  }),
                  type: "danger",
                }),
              eU &&
                (0, c.jsx)(tC, {
                  ratingModalNodeId: eN,
                  ratingModalOpen: "moderate",
                  onCloseRatingModal: function () {
                    return ez(!1);
                  },
                  handleSubmitFeedback: F(),
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: nm,
                  feedbackTextareaRef: eK,
                  clientThreadId: er,
                  activeRequests: eu,
                  onChangeItemInView: nU,
                  onRequestMoreCompletions: nL,
                  onUpdateNode: nz,
                  onChangeRating: nH,
                  onDeleteNode: nJ,
                  onRequestCompletion: nP,
                  onSandboxLinkClick: nq,
                }),
              (0, c.jsxs)("div", {
                className: "flex h-full max-w-full flex-1 flex-col",
                children: [
                  !ey &&
                    !ef &&
                    (0, c.jsx)(ta.Z, {
                      children: (0, c.jsx)(tt, {
                        clientThreadId: er,
                        onNewThread: ed,
                        onClickOpenSidebar: nY,
                        title:
                          null !== (ee = x.tQ.getTitle(er)) && void 0 !== ee
                            ? ee
                            : "New chat",
                      }),
                    }),
                  (0, c.jsxs)(t8, {
                    className: "flex-1",
                    children: [
                      (0, c.jsx)(tq, {
                        isStaticSharedThread: ef,
                        handleResetThread: ed,
                        activeSidebar: es,
                        toggleDebugSidebar: nX,
                      }),
                      (0, c.jsx)(t7, {
                        children:
                          !eT &&
                          (n6 || n7) &&
                          ((H = (0, c.jsx)(
                            tz.Z,
                            {
                              onChangeItemInView: nU,
                              onRequestMoreCompletions: nL,
                              onUpdateNode: nz,
                              onChangeRating: nH,
                              onDeleteNode: nJ,
                              onRequestCompletion: nP,
                              onSandboxLinkClick: nq,
                              onHandleChangeVariantFeedbackInlineComparisonRating:
                                nQ,
                              isNewThread: n6,
                              clientThreadId: er,
                              isStaticSharedThread: ef,
                              activeRequests: eu,
                              currentThreadModel: et.lastModelUsed,
                              initiallyHighlightedMessageId: eh,
                              inlineEmbeddedDisplay: !1,
                              promptTextareaRef: tl,
                            },
                            er
                          )),
                          ef
                            ? (0, c.jsx)("div", {
                                className:
                                  "h-full overflow-auto dark:bg-gray-800",
                                children: H,
                              })
                            : (0, c.jsx)(tK, { children: H })),
                      }),
                      (0, c.jsxs)(t6, {
                        children: [
                          ep.has("model_preview") &&
                            n6 &&
                            (null == nx
                              ? void 0
                              : nx.tags.includes(t$.S.GPT_4)) &&
                            (0, c.jsx)("div", {
                              className:
                                "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:m-auto lg:max-w-3xl",
                              children: tm.textareaDisclaimer,
                            }),
                          !nF &&
                            !ef &&
                            (0, c.jsx)(ta.Z, {
                              children: (0, c.jsx)(
                                tL.Z,
                                {
                                  clientThreadId: er,
                                  onRequestMoreCompletions: n$,
                                  onCreateNewCompletion: nZ,
                                  onAbortCompletion: n4,
                                  onContinueGenerating: nE,
                                  onFileUpload: nB,
                                  modelBackend: nm,
                                  canUpload: nO,
                                  isCompletionInProgress: eu.has(n8),
                                  className: (0, M.Z)(
                                    "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto",
                                    e3
                                      ? "max-w-[44rem]"
                                      : "lg:max-w-2xl xl:max-w-3xl"
                                  ),
                                  shouldRetry: nA,
                                  canContinue: tc,
                                  suggestions:
                                    void 0 !== nk &&
                                    (null == nk ? void 0 : nk.messageId) ===
                                      (null ===
                                        (Y = x.tQ
                                          .getTree(er)
                                          .getLastValidNode(eN)) || void 0 === Y
                                        ? void 0
                                        : null === (X = Y.message) ||
                                          void 0 === X
                                        ? void 0
                                        : X.id)
                                      ? null == nk
                                        ? void 0
                                        : nk.suggestions
                                      : void 0,
                                  disabled: !nc.size,
                                  canPause: ti,
                                  isInteractableSharedThread: tx,
                                  ref: tl,
                                },
                                er
                              ),
                            }),
                          ef &&
                            (0, c.jsx)(c.Fragment, {
                              children: (0, c.jsxs)("div", {
                                className:
                                  "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                                children: [
                                  (0, c.jsx)(J.z, {
                                    as: "link",
                                    to: eg,
                                    children: em.formatMessage(
                                      t3.sharedConversationContinueConversation
                                    ),
                                  }),
                                  e_ &&
                                    (0, c.jsx)(J.z, {
                                      onClick: function () {
                                        ez(!0);
                                      },
                                      children: em.formatMessage(
                                        t3.sharedConversationModerateConversation
                                      ),
                                    }),
                                ],
                              }),
                            }),
                          (0, c.jsx)("div", {
                            className:
                              "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                            children: ef
                              ? (0, c.jsx)(t4, {
                                  onClickReportSharedConversation: function () {
                                    eB(eN), eZ(!0);
                                  },
                                })
                              : e0
                              ? (0, c.jsx)("span", {
                                  children: (0, c.jsx)(
                                    O.Z,
                                    (0, eI._)(
                                      (0, o._)(
                                        {},
                                        t3.mayProduceInaccurateInformation
                                      ),
                                      {
                                        values: {
                                          link: function (e) {
                                            return (0, c.jsx)("a", {
                                              href: "https://www.xyhelper.com.cn",
                                              target: "_blank",
                                              rel: "noreferrer",
                                              className: "underline",
                                              children: e,
                                            });
                                          },
                                        },
                                      }
                                    )
                                  ),
                                })
                              : (0, c.jsx)("span", {
                                  children: (0, c.jsx)(
                                    O.Z,
                                    (0, eI._)(
                                      (0, o._)({}, t3.freeResearchPreview),
                                      {
                                        values: {
                                          link: function (e) {
                                            return (0, c.jsx)("a", {
                                              href: "https://www.xyhelper.com.cn",
                                              target: "_blank",
                                              rel: "noreferrer",
                                              className: "underline",
                                              children: e,
                                            });
                                          },
                                        },
                                      }
                                    )
                                  ),
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              ep.has("debug") &&
                "debug" === es &&
                (0, c.jsx)(ni, {
                  clientThreadId: er,
                  currentLeafId: eN,
                  isOpen: "debug" === es,
                  slideOver: !ey,
                  onClose: nX,
                }),
              ep.has("tools3_dev") && (0, c.jsx)(nv, { slideOver: !ey }),
              e1 && (0, c.jsx)(tF.Z, { isOpen: n1, onClose: n3 }),
              void 0 !== e0 &&
                e0 &&
                (0, c.jsx)(tD, { isOpen: ea, onClose: nK }),
              nl &&
                (0, c.jsx)(
                  eO.ZP,
                  {
                    onModalClose: F(),
                    isOpen: !0,
                    icon: ts.Z,
                    title: em.formatMessage(t3.somethingWentWrong),
                    description: em.formatMessage(t3.tryAgainLater),
                    primaryButton: (0, c.jsx)(eO.mH, {
                      onClick: function () {
                        ed(), nu(!1);
                      },
                      title: em.formatMessage(t3.resetThread),
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        t8 = g.Z.main(t0()),
        t7 = g.Z.div(t1()),
        t6 = g.Z.div(t2());
      function t9() {
        var e = (0, u._)(["overflow-hidden w-full h-full relative flex z-0"]);
        return (
          (t9 = function () {
            return e;
          }),
          e
        );
      }
      var re = g.Z.div(t9()),
        rn =
          ((a = function (e) {
            var n = e.clientThreadId,
              t = e.setClientThreadId,
              r = e.isStaticSharedThread,
              a = (0, s._)(e, [
                "clientThreadId",
                "setClientThreadId",
                "isStaticSharedThread",
              ]),
              i = (0, x.UL)(n),
              l = a.setShowAccountPortalModal,
              u = a.activeSidebar,
              g = a.setActiveSidebar,
              b = a.setActiveRequests,
              y = (0, x.XK)(n),
              j = (0, f.useRouter)(),
              w = (0, m.WS)(),
              M = (0, v.nR)(),
              T = (0, h.useContext)(_.QL).historyDisabled,
              N = (0, t$.Xy)(i.lastModelUsed, n),
              I = (0, d.NL)();
            (0, h.useEffect)(
              function () {
                return (
                  x.tQ.retainThread(n),
                  function () {
                    setTimeout(function () {
                      I.invalidateQueries(["conversation", n]);
                    }, 0),
                      x.tQ.releaseThread(n);
                  }
                );
              },
              [n, I]
            ),
              (0, h.useEffect)(
                function () {
                  C.vm.closeSharingModal();
                },
                [n, y]
              );
            var P = (0, h.useCallback)(
                function () {
                  g(function (e) {
                    return "navigation" !== e && "navigation";
                  });
                },
                [g]
              ),
              S = (0, h.useCallback)(
                function () {
                  w(p.s6.clickSidebarAccountPortalMenuItem), l(!0);
                },
                [w, l]
              ),
              Z = to(function (e) {
                return {
                  setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                  showAccountPaymentModal: e.showAccountPaymentModal,
                };
              }).setShowAccountPaymentModal,
              R = (0, h.useCallback)(
                function () {
                  Z(!0, function () {
                    w(p.s6.clickSidebarAccountPaymentMenuItem);
                  });
                },
                [w, Z]
              ),
              A = (0, h.useCallback)(
                function () {
                  t((0, x.OX)()),
                    N.tags.includes(t$.S.GPT_4)
                      ? j.replace("/", void 0, { shallow: !0 })
                      : j.replace("/?model=".concat(N.id));
                },
                [t, N.tags, N.id, j]
              );
            return (
              (0, h.useEffect)(
                function () {
                  return function () {
                    k.abortAllAndReset(), b(new Set());
                  };
                },
                [b, n]
              ),
              (0, c.jsxs)(re, {
                children: [
                  !r &&
                    (0, c.jsx)(ta.Z, {
                      children: (0, c.jsx)(tr, {
                        toggleNavigationSidebar: P,
                        handleAccountPayment: R,
                        handleClickCustomerPortal: S,
                        handleResetThread: A,
                        activeSidebar: u,
                        isAccountPaid: M,
                        children: (0, c.jsx)(ex, {
                          activeId: T ? void 0 : y,
                          onNewThread: A,
                          setActiveRequests: b,
                        }),
                      }),
                    }),
                  (0, c.jsx)("div", {
                    className:
                      "relative flex h-full max-w-full flex-1 overflow-hidden",
                    children: (0, c.jsx)(
                      t5,
                      (0, o._)(
                        {
                          initialThreadData: i,
                          clientThreadId: n,
                          handleResetThread: A,
                          isStaticSharedThread: r,
                        },
                        a
                      ),
                      n
                    ),
                  }),
                ],
              })
            );
          }),
          function (e) {
            var n = e.clientThreadId,
              t = e.isStaticSharedThread;
            (0, x.ax)(n, t);
            var r = (0, x.UL)(n),
              i = (0, l._)((0, h.useState)(!1), 2),
              s = i[0],
              u = i[1],
              d = (0, l._)((0, h.useState)(!1), 2),
              f = d[0],
              g = d[1],
              m = (0, l._)((0, h.useState)(new Set()), 2),
              p = m[0],
              v = m[1];
            return (
              (0, h.useEffect)(
                function () {
                  g(!1), k.reset(), v(new Set());
                },
                [r.threadId]
              ),
              (0, c.jsx)(
                a,
                (0, o._)({}, e, {
                  showAccountPortalModal: s,
                  setShowAccountPortalModal: u,
                  activeSidebar: f,
                  setActiveSidebar: g,
                  activeRequests: p,
                  setActiveRequests: v,
                })
              )
            );
          });
    },
    66850: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return tc;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        u = t(22830),
        c = t(4337),
        d = t(81949),
        f = t(35250),
        h = t(70079),
        g = t(1454),
        m = t(3001),
        p = t(1215),
        v = t(34303),
        x = t(64135),
        b = t(88038),
        y = t(75527),
        j = t(21437);
      function w() {
        var e = (0, c._)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      var k = v.Z.span(w()),
        C = t(88888),
        _ = t(38317),
        M = t(75318);
      function T() {
        var e = (0, c._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = (0, c._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = (0, c._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = (0, c._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = (0, c._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = (0, c._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = (0, c._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = (0, c._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = (0, c._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      var F = v.Z.div(T()),
        L = v.Z.h1(N()),
        E = v.Z.div(I()),
        B = v.Z.div(P()),
        O = v.Z.h2(S()),
        q = v.Z.ul(Z()),
        U = v.Z.li(R());
      v.Z.li(A());
      var z = v.Z.button(D());
      function H(e) {
        var n = e.text,
          t = e.onChangeCurrentPrompt,
          r = (0, h.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, f.jsxs)(z, { onClick: r, children: ['"', n, '" →'] });
      }
      function V(e) {
        var n = function (e) {
            var n;
            null == t ||
              null === (n = t.current) ||
              void 0 === n ||
              n.setInputValue(e);
          },
          t = e.promptTextareaRef,
          r = (0, x.nR)();
        return (0, f.jsxs)(F, {
          children: [
            (0, f.jsxs)(L, {
              children: ["ChatGPT", r && (0, f.jsx)(k, { children: "New" })],
            }),
            (0, f.jsxs)(E, {
              children: [
                (0, f.jsxs)(B, {
                  children: [
                    (0, f.jsxs)(O, {
                      children: [
                        (0, f.jsx)(_.ZP, { icon: g.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, f.jsxs)(q, {
                      children: [
                        (0, f.jsx)(H, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, f.jsx)(H, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, f.jsx)(H, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: n,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)(B, {
                  children: [
                    (0, f.jsxs)(O, {
                      children: [
                        (0, f.jsx)(_.ZP, { icon: M.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, f.jsxs)(q, {
                      children: [
                        (0, f.jsx)(U, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, f.jsx)(U, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, f.jsx)(U, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)(B, {
                  children: [
                    (0, f.jsxs)(O, {
                      children: [
                        (0, f.jsx)(_.ZP, { icon: g.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, f.jsxs)(q, {
                      children: [
                        (0, f.jsx)(U, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, f.jsx)(U, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, f.jsx)(U, {
                          children:
                            "Limited knowledge of world and events after 2021",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var W = t(19265),
        G = t(19841),
        Q = t(68555),
        $ = t(82841),
        J = t(36218),
        Y = t(75515),
        X = t(96237),
        K = t(39324),
        ee = t(71209),
        en = t(90209),
        et = t(68789),
        er = t(90860);
      function ea() {
        var e = (0, c._)([
          "absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]",
        ]);
        return (
          (ea = function () {
            return e;
          }),
          e
        );
      }
      function ei() {
        var e = (0, c._)([
          "flex flex-col rounded-lg border border-gray-100 bg-white text-left shadow-[0_1px_7px_0_rgba(0,0,0,0.03)] dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] mx-2 sm:mx-1 overflow-hidden",
        ]);
        return (
          (ei = function () {
            return e;
          }),
          e
        );
      }
      function eo() {
        var e = (0, c._)([
          "px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line",
        ]);
        return (
          (eo = function () {
            return e;
          }),
          e
        );
      }
      function es() {
        var e = (0, c._)(["block"]);
        return (
          (es = function () {
            return e;
          }),
          e
        );
      }
      function el() {
        var e = (0, c._)(["block text-xs text-gray-500"]);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function eu(e) {
        var n = e.items,
          t = e.value,
          r = e.onChange,
          a = (0, u._)(
            (0, h.useState)(function () {
              return n.reduce(function (e, n) {
                if (n.options.length > 0) {
                  if (
                    n.options.some(function (e) {
                      return e.value === t;
                    })
                  )
                    return (e[n.value] = t), e;
                  e[n.value] = n.options[0].value;
                }
                return e;
              }, {});
            }),
            2
          ),
          i = a[0],
          o = a[1],
          s = (0, h.useCallback)(
            function (e, a) {
              var s = t;
              void 0 !== a &&
                o(function (n) {
                  return (0, ee._)((0, K._)({}, n), (0, X._)({}, e, a));
                }),
                (s =
                  void 0 !== a
                    ? a
                    : (null == i ? void 0 : i[e]) !== void 0 &&
                      n.some(function (n) {
                        return (
                          n.value === e &&
                          n.options.some(function (n) {
                            return n.value === i[e];
                          })
                        );
                      })
                    ? i[e]
                    : e) !== t && r(s);
            },
            [n, i, r, t]
          ),
          l = (0, u._)((0, h.useState)(new Set()), 2),
          c = l[0],
          d = l[1],
          g = (0, h.useCallback)(function (e, n) {
            n
              ? d(function (n) {
                  var t = new Set(n);
                  return t.add(e), t;
                })
              : d(function (n) {
                  var t = new Set(n);
                  return t.delete(e), t;
                });
          }, []);
        return (0, f.jsx)("div", {
          className:
            "relative flex rounded-xl bg-gray-100 p-1 dark:bg-gray-900",
          children: (0, f.jsx)("ul", {
            className: "flex w-full list-none gap-1 sm:w-auto",
            children: n.map(function (e, r) {
              var a,
                o,
                l,
                u,
                d,
                h,
                m =
                  (null == i ? void 0 : i[e.value]) !== void 0
                    ? i[e.value]
                    : null === (o = e.options) || void 0 === o
                    ? void 0
                    : null === (l = o[0]) || void 0 === l
                    ? void 0
                    : l.value,
                p =
                  null !==
                    (u = e.options.find(function (e) {
                      return e.value === m;
                    })) && void 0 !== u
                    ? u
                    : e.options[0],
                v =
                  null !== (d = null == p ? void 0 : p.icon) && void 0 !== d
                    ? d
                    : null,
                x =
                  t === e.value ||
                  e.options.some(function (e) {
                    return e.value === t;
                  });
              return (0,
              f.jsx)(ed, { onToggleItemOpenChanged: g, item: e, isSelected: x, isOtherToggleDropdownOpen: c.size > 0 && !c.has(e.categoryId), currentValue: t, defaultOption: null == p ? void 0 : p.value, onChange: s, currentIcon: v, displayCurrentValue: x && e.showSelectedValueBelow && null !== (h = null == p ? void 0 : p.name) && void 0 !== h ? h : "", contentAlign: ((a = n.length), 0 === r ? "start" : r === a - 1 ? "end" : "center") }, r);
            }),
          }),
        });
      }
      function ec(e) {
        var n = e.item,
          t = e.isSelected,
          r = e.isOtherToggleDropdownOpen,
          a = e.isOpen,
          i = void 0 !== a && a,
          o = e.onChange,
          s = e.currentIcon,
          l = e.displayCurrentValue,
          u = n.options.length > 1,
          c = null != s ? s : n.icon;
        return (0, f.jsxs)("div", {
          className: (0, G.Z)(
            "group/button",
            "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5",
            t
              ? "border-black/10 bg-white shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-[#40414E]"
              : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100",
            i && "text-gray-800 dark:text-gray-100",
            r && t && "opacity-50"
          ),
          onClick: function () {
            n.disabled || o(n.value);
          },
          children: [
            (0, f.jsxs)("span", {
              className: (0, G.Z)(
                "relative max-[370px]:hidden",
                n.disabled && "group-hover/button:text-red-500"
              ),
              children: [
                null != c &&
                  (0, f.jsx)(_.ZP, {
                    icon: c,
                    className: (0, G.Z)(t && n.activeClass),
                  }),
                n.disabled && (0, f.jsx)(ev, {}),
              ],
            }),
            (0, f.jsx)("span", {
              className: "truncate text-sm font-medium",
              children: n.name,
            }),
            !n.disabled &&
              u &&
              (0, f.jsx)(_.ZP, {
                icon: i ? g.rH8 : g.bTu,
                strokeWidth: 2,
                className: "md:hidden",
              }),
            null != l &&
              "" !== l &&
              (0, f.jsx)("span", {
                className:
                  "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                children: l,
              }),
          ],
        });
      }
      function ed(e) {
        var n = e.item,
          t = e.isSelected,
          r = e.defaultOption,
          a = e.onChange,
          i = e.currentIcon,
          o = e.currentValue,
          s = e.displayCurrentValue,
          l = e.contentAlign,
          c = e.onToggleItemOpenChanged,
          d = e.isOtherToggleDropdownOpen,
          g = (0, u._)((0, h.useState)(void 0), 2),
          m = g[0],
          p = g[1],
          v = (0, h.useRef)(null),
          x = n.options.length > 1,
          b = !(void 0 === n.description && void 0 === n.disclaimer),
          y = (0, h.useCallback)(
            function (e) {
              p(e), c(n.categoryId, !!e);
            },
            [n.categoryId, c]
          );
        return (0, f.jsx)(et.fC, {
          open: m,
          modal: !1,
          children: (0, f.jsxs)("li", {
            className: "group/toggle w-full",
            onMouseEnter: function () {
              return y(!0);
            },
            onMouseLeave: function () {
              return y(void 0);
            },
            children: [
              (0, f.jsx)(et.xz, {
                ref: v,
                className: "w-full",
                children: (0, f.jsx)(ec, {
                  isOpen: !!m,
                  isOtherToggleDropdownOpen: d,
                  item: n,
                  isSelected: t,
                  onChange: a,
                  currentIcon: i,
                  displayCurrentValue: s,
                }),
              }),
              (0, f.jsx)(
                et.Uv,
                {
                  children: (0, f.jsx)(et.VY, {
                    className: (0, G.Z)(
                      "w-full min-w-[100vw] max-w-[100vw] select-none pt-4 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none",
                      "will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                    ),
                    align: l,
                    alignOffset: -6,
                    onCloseAutoFocus: function (e) {
                      m || e.preventDefault();
                    },
                    onEscapeKeyDown: function (e) {
                      var n;
                      e.preventDefault(),
                        null === (n = v.current) || void 0 === n || n.focus();
                    },
                    children: (0, f.jsxs)(ex, {
                      children: [
                        b && (0, f.jsx)(ef, { item: n }),
                        (x || !m) &&
                          (0, f.jsx)(eh, {
                            defaultOption: t ? o : r,
                            item: n,
                            currentValue: o,
                            onChange: function (e, n) {
                              a(e, n), y(void 0), (0, er.g)();
                            },
                            className: (0, G.Z)(
                              "group/options text-sm",
                              b && "border-t dark:border-gray-800"
                            ),
                          }),
                      ],
                    }),
                  }),
                },
                n.categoryId
              ),
            ],
          }),
        });
      }
      function ef(e) {
        var n = e.item;
        return (0, f.jsxs)(eb, {
          className: "text-sm sm:text-base",
          children: [
            void 0 !== n.description &&
              (0, f.jsx)(ey, { children: n.description }),
            void 0 !== n.disclaimer &&
              (0, f.jsx)(ej, { children: n.disclaimer }),
          ],
        });
      }
      function eh(e) {
        var n = e.item,
          t = e.className,
          r = e.onChange,
          a = e.currentValue,
          i = e.defaultOption;
        return (0, f.jsx)(et.Ee, {
          defaultValue: i,
          value: a,
          className: t,
          children: n.options.map(function (e, t) {
            return (0, f.jsx)(
              eg,
              {
                option: e,
                selected: a === e.value,
                active: i === e.value,
                activeClass: n.activeClass,
                iconClass: n.iconClass,
                showBorder: t !== n.options.length - 1,
                isDisabled: e.disabled,
                onChange: function () {
                  e.disabled || r(n.value, e.value);
                },
              },
              e.value
            );
          }),
        });
      }
      function eg(e) {
        var n,
          t = e.option,
          r = e.selected,
          a = e.active,
          i = e.activeClass,
          o = e.iconClass,
          s = e.isDisabled,
          l = e.onChange,
          u = e.showBorder,
          c = null !== (n = t.activeIcon) && void 0 !== n ? n : t.icon;
        return (0, f.jsx)(et.Rk, {
          asChild: !0,
          value: t.value,
          onClick: l,
          className: "select-none",
          children: (0, f.jsxs)("div", {
            className: (0, G.Z)(
              "group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium",
              {
                "hover:bg-gray-50 dark:hover:bg-white/5": !s,
                "bg-gray-50 group-hover/options:bg-transparent dark:bg-white/5":
                  a && !r,
                "text-gray-800 dark:text-gray-100": r || a,
                "cursor-pointer": !s,
                "border-b dark:border-gray-800": u,
              }
            ),
            children: [
              null != t.icon && null != c
                ? (0, f.jsx)(_.ZP, {
                    icon: r ? t.icon : c,
                    className: (0, G.Z)(
                      "max-[370px]:hidden",
                      !s && !r && o,
                      r || a ? i : "text-gray-500"
                    ),
                  })
                : null,
              (0, f.jsx)("span", {
                className: (0, G.Z)("truncate", {
                  "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100":
                    !s,
                  "text-gray-800 dark:text-gray-100": a && !s,
                }),
                children: t.name,
              }),
              t.tags.map(function (e) {
                return ep(e);
              }),
              (0, f.jsx)("span", {
                className: (0, G.Z)({
                  "absolute right-3 rounded-full p-1 text-blue-400": !0,
                  "opacity-0": !r && !s,
                  "group-hover/options:opacity-0": !r,
                  "text-red-500": s,
                }),
                children: (0, f.jsx)(_.ZP, {
                  icon: s ? en.Z : _.HQ,
                  className: "h-5 w-5",
                }),
              }),
            ],
          }),
        });
      }
      var em = new Set(["beta", "confidential", "alpha"]),
        ep = function (e) {
          return (
            em.has(e) &&
            (0, f.jsx)(
              "span",
              {
                className: (0, G.Z)(
                  "py-0.25 rounded px-1 text-sm capitalize",
                  "beta" === e && "bg-blue-200 text-blue-500",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "confidential" === e && "bg-red-200 text-red-800"
                ),
                children: e,
              },
              e
            )
          );
        },
        ev = v.Z.span(ea()),
        ex = v.Z.div(ei()),
        eb = v.Z.div(eo()),
        ey = v.Z.span(es()),
        ej = v.Z.span(el()),
        ew = t(5046),
        ek = t(41170),
        eC = t(32787),
        e_ = t(66523),
        eM = t(90076),
        eT =
          ((i = {}),
          (0, X._)(i, "gpt_3.5", {
            icon: _.jr,
            activeIcon: _.jr,
            activeClass: "text-brand-green",
            iconClass: "group-hover/option:text-brand-green",
            backgroundColor: "#19c37d",
            disclaimer: "Available to Free and Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, X._)(i, "gpt_4", {
            icon: _.Bj,
            activeIcon: _.MP,
            activeClass: "text-brand-purple",
            iconClass: "group-hover/option:text-brand-purple",
            backgroundColor: "#AB68FF",
            disclaimer: "Available exclusively to Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, X._)(i, "other", {
            icon: ek.Z,
            activeIcon: ek.Z,
            activeClass: "text-orange-500",
            showSelectedValueBelow: !0,
            disclaimer: "Experimental models",
          }),
          i),
        eN = {
          browsing_model: { icon: _.xx, activeIcon: _.jZ, name: "Browsing" },
          code_interpreter_model: {
            icon: _.dY,
            activeIcon: _.b3,
            name: "Code Interpreter",
          },
          plugins_model: { icon: _.oV, activeIcon: _.Z8, name: "Plugins" },
        };
      function eI() {
        var e = (0, eM.OX)(),
          n = (0, eM.B9)(),
          t = (0, eC.kP)().session,
          r = (0, ew.BT)(),
          a = (0, j.Fl)(),
          i = (0, e_.Z)().modelSwitcherDisclaimer,
          o = (0, x.hz)(),
          s = (null == t ? void 0 : t.user) != null && (0, eC.yl)(t.user),
          l = (0, eM.B8)(),
          u = l.enabledModelsInCategoriesById,
          c = l.enabledModelsNotInCategoriesById;
        return (0, h.useMemo)(
          function () {
            var t = [],
              l = !0,
              h = !1,
              g = void 0;
            try {
              for (
                var m, p = e[Symbol.iterator]();
                !(l = (m = p.next()).done);
                l = !0
              ) {
                var v = m.value;
                if (u.has(v.default_model)) {
                  var x = eT[v.category] || {},
                    y = r === v.default_model,
                    j = n.get(v.default_model),
                    w = y
                      ? []
                      : (function (e, n, t, r, a) {
                          var i = e.isBrowsingEnabled,
                            o = e.isPluginsEnabled,
                            s = e.isCodeInterpreterEnabled,
                            l = [];
                          if (
                            i &&
                            null != t.browsing_model &&
                            r.has(t.browsing_model)
                          ) {
                            var u = eN.browsing_model;
                            l.push(
                              eP(a.get(t.browsing_model), {
                                icon: u.icon,
                                name: n.has(b.oQ)
                                  ? (0, f.jsxs)("span", {
                                      children: [
                                        "Browse with",
                                        " ",
                                        (0, f.jsx)(_.ZP, {
                                          icon: _.jE,
                                          className: "-mt-[3px] inline-block",
                                        }),
                                        " ",
                                        "Bing",
                                      ],
                                    })
                                  : u.name,
                                disabled: n.has("browsing_disabled"),
                                activeIcon: u.activeIcon,
                              })
                            );
                          }
                          if (
                            s &&
                            null != t.code_interpreter_model &&
                            r.has(t.code_interpreter_model)
                          ) {
                            var c = eN.code_interpreter_model;
                            l.push(
                              eP(a.get(t.code_interpreter_model), {
                                icon: c.icon,
                                name: c.name,
                                activeIcon: c.activeIcon,
                              })
                            );
                          }
                          if (
                            o &&
                            null != t.plugins_model &&
                            r.has(t.plugins_model)
                          ) {
                            var d = eN.plugins_model;
                            l.push(
                              eP(a.get(t.plugins_model), {
                                icon: d.icon,
                                name: d.name,
                                disabled: n.has("plugins_disabled"),
                                activeIcon: d.activeIcon,
                              })
                            );
                          }
                          return l;
                        })(a, o, v, u, n);
                  t.push({
                    categoryId: v.category,
                    value: j.id,
                    name: v.human_category_name,
                    description: y ? i : j.description,
                    disclaimer: x.disclaimer,
                    activeClass: x.activeClass,
                    iconClass: x.iconClass,
                    icon: x.icon,
                    activeIcon: x.activeIcon,
                    options: [
                      eP(j, {
                        icon: x.icon,
                        activeIcon: x.activeIcon,
                        name: "Default",
                      }),
                    ].concat((0, d._)(w)),
                    disabled: y,
                    showSelectedValueBelow: !1,
                  });
                }
              }
            } catch (e) {
              (h = !0), (g = e);
            } finally {
              try {
                l || null == p.return || p.return();
              } finally {
                if (h) throw g;
              }
            }
            var k = Array.from(c).map(function (e) {
              return n.get(e);
            });
            if (k.length > 0 && s) {
              var C = k[0],
                M = eT.other;
              t.push({
                categoryId: "other",
                value: null == C ? void 0 : C.id,
                name: "Alpha",
                activeClass: M.activeClass,
                options: k.map(function (e) {
                  return eP(e);
                }),
                showSelectedValueBelow: !0,
                icon: M.icon,
                activeIcon: M.activeIcon,
              });
            }
            return t;
          },
          [c, s, e, u, r, n, a, o, i]
        );
      }
      function eP(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, K._)({ value: e.id, name: e.title, tags: e.tags }, n);
      }
      function eS(e) {
        var n = e.onModelChange,
          t = e.currentModel,
          r = (0, $.WS)(),
          a = (0, ew.BT)(),
          i = eI(),
          o = (0, h.useCallback)(
            function (e) {
              a !== e && (n(e), r(J.s6.toggleModel, { model: e }));
            },
            [a, r, n]
          );
        return (0, f.jsx)(eu, {
          value: null == t ? void 0 : t.id,
          onChange: o,
          items: i,
        });
      }
      var eZ = t(70216),
        eR = t(20485),
        eA = t(64664),
        eD = t(12285),
        eF = t(40638),
        eL = t(57526),
        eE = t(99581),
        eB = t(77442),
        eO = t(30892),
        eq = t.n(eO),
        eU = t(7361),
        ez = t.n(eU);
      function eH(e) {
        var n = e.values,
          t = e.className,
          r = Object.keys(n),
          a = Object.values(n);
        return (0, f.jsxs)("div", {
          className: (0, G.Z)("flex w-full items-stretch gap-2", t),
          children: [
            (0, f.jsx)("div", {
              className:
                "flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300",
              children: r.map(function (e, n) {
                return (0, f.jsx)("span", { children: eq()(e) }, n);
              }),
            }),
            (0, f.jsx)("div", {
              className: "my-1.5 flex flex-1 flex-col justify-between gap-2",
              children: a.map(function (e, n) {
                var t = (0, u._)(e, 2),
                  r = t[0],
                  a = t[1];
                return (0, f.jsx)(eV, { num: r, max: a }, n);
              }),
            }),
          ],
        });
      }
      function eV(e) {
        var n = e.num,
          t = e.max,
          r = (0, h.useMemo)(
            function () {
              var e = ez()(Array(t), !1);
              return ez()(e, !0, 0, n);
            },
            [t, n]
          );
        return (0, f.jsx)("div", {
          className: "flex w-full gap-1",
          children: r.map(function (e, n) {
            return (0,
            f.jsx)("div", { className: (0, G.Z)("h-2 w-full rounded-lg", e ? "bg-green-600" : "bg-gray-200 dark:bg-gray-600"), children: e }, n);
          }),
        });
      }
      function eW() {
        var e = (0, c._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      function eG() {
        var e = (0, c._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      function eQ() {
        var e = (0, c._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (eQ = function () {
            return e;
          }),
          e
        );
      }
      function e$() {
        var e = (0, c._)(["flex items-center gap-2 truncate"]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      function eJ() {
        var e = (0, c._)(["h-6 w-6 shrink-0"]);
        return (
          (eJ = function () {
            return e;
          }),
          e
        );
      }
      function eY() {
        var e = (0, c._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (eY = function () {
            return e;
          }),
          e
        );
      }
      function eX() {
        var e = (0, c._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (eX = function () {
            return e;
          }),
          e
        );
      }
      var eK = ["confidential", "alpha", "plus"];
      function e0(e) {
        var n = e.selectedOption,
          t = e.onChange,
          r = e.onAction,
          a = e.onOpen,
          i = e.onClose,
          o = e.dropdownRef,
          s = (0, eZ._)(e, [
            "selectedOption",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          l = (0, h.useCallback)(
            function (e) {
              "string" == typeof e ? null == r || r(e) : t(e);
            },
            [t, r]
          );
        return (0, f.jsx)(eD.R, {
          value: n.value,
          onChange: l,
          children: function (e) {
            var t = e.open;
            return (0, f.jsx)(
              e2,
              (0, K._)(
                {
                  ref: o,
                  selectedLabel: (0, f.jsxs)(f.Fragment, {
                    children: [
                      n.title,
                      n.tags.map(function (e) {
                        return e6(e);
                      }),
                      n.customTags,
                    ],
                  }),
                  open: t,
                  onOpen: a,
                  onClose: i,
                },
                s
              )
            );
          },
        });
      }
      function e1(e) {
        var n = e.selectedOptions,
          t = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.onOpen,
          o = e.onClose,
          s = e.dropdownRef,
          l = (0, eZ._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          u = (0, h.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var n = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == a || a(n);
              } else r(e);
            },
            [r, a]
          );
        return (0, f.jsx)(eD.R, {
          value: n.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: u,
          children: function (e) {
            var r = e.open;
            return (0, f.jsx)(
              e2,
              (0, K._)(
                {
                  ref: s,
                  selectedLabel: t || "".concat(n.length, " selected"),
                  open: r,
                  onOpen: i,
                  onClose: o,
                  multiple: !0,
                },
                l
              )
            );
          },
        });
      }
      var e2 = (0, h.forwardRef)(function (e, n) {
        var t = e.name,
          r = e.selectedLabel,
          a = e.open,
          i = e.options,
          o = e.actions,
          s = e.multiple,
          l = e.isLoading,
          u = e.loadingState,
          c = e.header,
          d = e.onOpen,
          m = e.onClose,
          p = e.theme,
          v = (0, h.useRef)(null),
          x = (0, h.useRef)(null),
          b = (0, eB.oc)();
        (0, h.useImperativeHandle)(
          n,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = v.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = v.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a]
        );
        var y = l
          ? u ||
            (0, f.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, f.jsx)(W.Z, {}),
            })
          : (0, f.jsxs)(f.Fragment, {
              children: [
                c,
                (0, f.jsxs)(eD.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, n) {
                      return (0, f.jsx)(
                        e3,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: p,
                          children: function (n) {
                            var t = n.selected,
                              r = n.active;
                            return (0, f.jsxs)(f.Fragment, {
                              children: [
                                (0, f.jsxs)(na, {
                                  children: [
                                    e.imageUrl &&
                                      (0, f.jsx)(ni, {
                                        children: (0, f.jsx)(Y.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, f.jsxs)("span", {
                                      className: (0, G.Z)(
                                        t && !s && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return e6(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                s && !e.disabled
                                  ? (0, f.jsx)(e5, { theme: p, selected: t })
                                  : t &&
                                    (0, f.jsx)(e4, {
                                      theme: p,
                                      icon: "mini" === p ? _.HQ : g.UgA,
                                    }),
                                e.disabled &&
                                  (0, f.jsx)(e4, {
                                    theme: p,
                                    icon: eL.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                r &&
                                  b &&
                                  (0, eE.createPortal)(
                                    (0, f.jsx)(e7, {
                                      option: e,
                                      dropdownRef: x,
                                    }),
                                    document.body
                                  ),
                              ],
                            });
                          },
                        },
                        n
                      );
                    }),
                    null == o
                      ? void 0
                      : o.map(function (e, n) {
                          return (0, f.jsx)(
                            e3,
                            {
                              value: e.id,
                              theme: p,
                              children: function () {
                                return (0, f.jsxs)(f.Fragment, {
                                  children: [
                                    (0, f.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, f.jsx)(e4, { theme: p, icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            n
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        f.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, f.jsxs)(eD.R.Button, { ref: v, onClick: a ? m : d, className: (0, G.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === p ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"), children: ["mini" !== p && (0, f.jsx)(eD.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: t }), (0, f.jsx)("span", { className: "inline-flex w-full truncate", children: (0, f.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, f.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, f.jsx)(_.ZP, { icon: g.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, f.jsx)(eF.u, { show: a, as: h.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, f.jsx)(ne, { ref: x, children: y }) })] });
      });
      function e3(e) {
        var n = e.value,
          t = e.disabled,
          r = e.children,
          a = e.theme;
        return (0, f.jsx)(eD.R.Option, {
          className: function (e) {
            var n = e.active;
            return (0, G.Z)(
              "mini" === a ? nt : nr,
              n && !t ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              t &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: n,
          children: r,
        });
      }
      function e4(e) {
        var n = e.icon,
          t = e.className,
          r = e.theme;
        return (0, f.jsx)("mini" === r ? no : ns, {
          children: (0, f.jsx)(_.ZP, {
            icon: n,
            className: (0, G.Z)("h-5 w-5", t),
            "aria-hidden": "true",
          }),
        });
      }
      function e5(e) {
        var n = e.selected,
          t = e.disabled;
        return "mini" === e.theme
          ? (0, f.jsxs)(no, {
              children: [
                (0, f.jsx)(_.ZP, {
                  icon: n ? _.HQ : _.i9,
                  className: "h-5 w-5 text-blue-600",
                  strokeWidth: n ? 2.5 : 2,
                }),
                !n &&
                  (0, f.jsx)(_.ZP, {
                    icon: _.nQ,
                    className: (0, G.Z)(
                      "absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity",
                      !t && "group-hover:opacity-100"
                    ),
                  }),
              ],
            })
          : (0, f.jsx)(ns, {
              children: (0, f.jsx)("div", {
                className: (0, G.Z)(
                  "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                  n
                    ? "border-transparent bg-green-600 text-white"
                    : "border-black/5 dark:border-white/20"
                ),
                "aria-hidden": "true",
                children: (0, f.jsx)(_.ZP, {
                  icon: g.UgA,
                  className: (0, G.Z)(
                    "h-3 w-3 transition-opacity",
                    n && "opacity-100",
                    !n && "opacity-0",
                    !n && !t && "group-hover:opacity-50"
                  ),
                  strokeWidth: n ? 2.5 : 2,
                }),
              }),
            });
      }
      function e8(e) {
        var n = e.showCheckbox,
          t = e.theme;
        return (0, f.jsxs)("div", {
          className: (0, G.Z)("mini" === t ? nt : nr, "cursor-auto"),
          children: [
            (0, f.jsxs)(na, {
              children: [
                (0, f.jsx)(ni, {
                  children: (0, f.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, f.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            n && (0, f.jsx)(e5, { theme: t, selected: !1, disabled: !0 }),
          ],
        });
      }
      function e7(e) {
        var n = e.option,
          t = e.dropdownRef,
          r = (0, u._)((0, h.useState)(), 2),
          a = r[0],
          i = r[1];
        (0, h.useEffect)(
          function () {
            var e = function () {
              if (t.current) {
                var e = t.current.getBoundingClientRect();
                i({ top: e.top, left: e.left - 260, minHeight: e.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [t]
        );
        var o = n.value.properties,
          s = (0, h.useMemo)(
            function () {
              return o
                ? (0, f.jsx)(eH, { values: o, className: "mt-auto" })
                : null;
            },
            [o]
          );
        return a
          ? (0, f.jsxs)(nn, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                n.disabled &&
                  (0, f.jsx)(_.ZP, {
                    icon: eL.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                n.imageUrl &&
                  (0, f.jsx)(Y.Z, { url: n.imageUrl, name: n.title, size: 70 }),
                (0, f.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    n.title,
                    " ",
                    n.tags.map(function (e) {
                      return e6(e);
                    }),
                    " ",
                    n.customTags,
                  ],
                }),
                (0, f.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: n.description,
                }),
                !n.disabled && s,
              ],
            })
          : null;
      }
      var e6 = function (e) {
          return (
            eK.includes(e) &&
            (0, f.jsx)(
              "span",
              {
                className: (0, G.Z)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "plus" === e && "bg-yellow-200 text-yellow-900"
                ),
                children: e,
              },
              e
            )
          );
        },
        e9 = v.Z.div(eW()),
        ne = (0, v.Z)(e9)(eG()),
        nn = (0, v.Z)(e9)(eQ()),
        nt =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        nr =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        na = v.Z.span(e$()),
        ni = v.Z.span(eJ()),
        no = v.Z.span(eY()),
        ns = v.Z.span(eX()),
        nl = t(97688),
        nu = t(86573),
        nc = t(85023),
        nd = t(697),
        nf = t(21722),
        nh = t(39889),
        ng = t(35448),
        nm = t(24274),
        np = t(10604),
        nv = t(55041),
        nx = t(5759),
        nb = t(17915),
        ny = t(38631);
      function nj() {
        var e = (0, c._)(["mt-4 flex flex-col gap-4"]);
        return (
          (nj = function () {
            return e;
          }),
          e
        );
      }
      function nw() {
        var e = (0, c._)(["text-sm text-red-500"]);
        return (
          (nw = function () {
            return e;
          }),
          e
        );
      }
      var nk = v.Z.div(nj()),
        nC = v.Z.div(nw()),
        n_ = t(49910);
      function nM(e) {
        var n = e.onClickInstall,
          t = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, u._)((0, h.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, u._)((0, h.useState)(), 2),
          l = s[0],
          c = s[1],
          d = (0, u._)((0, h.useState)(!1), 2),
          g = d[0],
          m = d[1],
          p = (0, h.useCallback)(function (e) {
            o(e);
          }, []),
          v = (0, h.useCallback)(function () {
            m(!0);
          }, []);
        return g && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, f.jsx)(nS, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: n,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, f.jsx)(nP, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: v,
              onClose: r,
            })
          : i
          ? (0, f.jsx)(nI, {
              loadManifestResult: i,
              onRefetch: p,
              onSubmitAuthInfo: c,
              onReadyToInstall: v,
              onInstallLocalhost: t,
              onClose: r,
            })
          : (0, f.jsx)(nT, { onFetch: p, onClose: r });
      }
      function nT(e) {
        var n = e.onFetch,
          t = e.onClose,
          r = (0, eC.kP)().session,
          a = (0, u._)((0, h.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, u._)((0, h.useState)("bearer"), 2),
          l = s[0],
          c = s[1],
          d = (0, u._)((0, h.useState)(), 2),
          m = d[0],
          p = d[1],
          v = (0, h.useRef)(null),
          x = (0, h.useRef)(null),
          b = (0, nb.sd)(),
          y = b.fetchManifestAndSpec,
          j = b.isLoading;
        (0, h.useEffect)(function () {
          var e;
          null === (e = v.current) || void 0 === e || e.focus();
        }, []);
        var w = (0, h.useCallback)(function () {
            o(function (e) {
              return !e;
            });
          }, []),
          k = (0, h.useCallback)(function (e) {
            c(e.target.value);
          }, []),
          C = (0, h.useCallback)(
            (0, nf._)(function () {
              var e, t, r;
              return (0, nh.Jh)(this, function (a) {
                return (r =
                  null === (e = v.current) || void 0 === e ? void 0 : e.value)
                  ? (y({
                      domain: r,
                      manifestAccessToken: i
                        ? {
                            authorization_type: l,
                            token:
                              (null === (t = x.current) || void 0 === t
                                ? void 0
                                : t.value) || "",
                          }
                        : void 0,
                      onSuccess: n,
                      onError: function (e) {
                        return p(
                          (null == e ? void 0 : e.message) ||
                            "Couldn't find manifest."
                        );
                      },
                    }),
                    [2])
                  : (p("Please provide a domain."), [2]);
              });
            }),
            [y, n, l, i]
          );
        return (0, f.jsx)(nv.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: "success",
          title: "Enter your website domain",
          primaryButton: (0, f.jsx)(nv.mH, {
            title: "Find manifest file",
            color: "primary",
            onClick: C,
            loading: j,
          }),
          secondaryButton: (0, f.jsx)(nv.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, f.jsxs)(nk, {
            children: [
              (0, f.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children:
                  "Visit our documentation to learn how to build a plugin.",
              }),
              (0, f.jsxs)(nx.Z, {
                icon: "\uD83D\uDEA8",
                children: [
                  "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ",
                  "plugin's",
                  " manifest, your plugin will be removed from the store, and you will need to",
                  " ",
                  (0, f.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                    children: "resubmit it for review",
                  }),
                  ".",
                ],
              }),
              (0, f.jsx)(np.Z, {
                ref: v,
                name: "url",
                displayName: "Domain",
                placeholder: "ex: openai.com or localhost:3000",
                onPressEnter: C,
                autoFocus: !0,
              }),
              (null == r ? void 0 : r.user) != null &&
                (0, eC.yl)(r.user) &&
                (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: w,
                      children: [
                        (0, f.jsx)("div", {
                          children: "My file requires authentication",
                        }),
                        (0, f.jsx)(_.ZP, { icon: i ? g.rH8 : g.bTu }),
                      ],
                    }),
                    i &&
                      (0, f.jsxs)(f.Fragment, {
                        children: [
                          (0, f.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, f.jsx)("div", {
                                children: "Authentication type",
                              }),
                              (0, f.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, f.jsx)(nN, {
                                    label: "Bearer",
                                    value: "bearer",
                                    checked: "bearer" === l,
                                    onChange: k,
                                  }),
                                  (0, f.jsx)(nN, {
                                    label: "Basic",
                                    value: "basic",
                                    checked: "basic" === l,
                                    onChange: k,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, f.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, f.jsx)("div", { children: "Access token" }),
                              (0, f.jsx)(np.Z, {
                                ref: x,
                                name: "manifestToken",
                                onPressEnter: C,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              m && (0, f.jsx)(nC, { children: m }),
            ],
          }),
        });
      }
      function nN(e) {
        var n = e.label,
          t = e.value,
          r = e.checked,
          a = e.onChange;
        return (0, f.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, f.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: t,
              checked: r,
              onChange: a,
              className: "text-green-600 focus:ring-green-600",
            }),
            n,
          ],
        });
      }
      function nI(e) {
        var n = e.loadManifestResult,
          t = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          o = e.onClose,
          s = n.domain,
          l = n.manifestAccessToken,
          c = n.scrapeManifestResponse,
          d = n.apiValidationInfo,
          g = c.plugin,
          m = c.manifest_validation_info,
          p = (0, u._)((0, h.useState)(), 2),
          v = p[0],
          x = p[1],
          b = (0, u._)((0, h.useState)(!1), 2),
          y = b[0],
          j = b[1],
          w = (0, h.useRef)(null),
          k = (0, h.useRef)(null),
          C = (0, h.useRef)(null),
          _ = (0, nb.sd)(),
          M = _.fetchManifestAndSpec,
          T = _.isLoading,
          N = (0, ng.NL)(),
          I = g && (0, nu.cf)(g),
          P = (null == g ? void 0 : g.manifest.auth.type) === "service_http",
          S = (null == g ? void 0 : g.manifest.auth.type) === "oauth",
          Z =
            (m.errors && m.errors.length > 0) ||
            ((null == d ? void 0 : d.errors) &&
              (null == d ? void 0 : d.errors.length) > 0),
          R = (0, h.useCallback)(
            (0, nf._)(function () {
              var e, n, u, c, d;
              return (0, nh.Jh)(this, function (f) {
                switch (f.label) {
                  case 0:
                    if (!Z) return [3, 1];
                    return (
                      M({
                        domain: s,
                        manifestAccessToken: l,
                        onSuccess: t,
                        onError: function (e) {
                          return x(
                            (null == e ? void 0 : e.message) ||
                              "Couldn't find manifest."
                          );
                        },
                      }),
                      [3, 15]
                    );
                  case 1:
                    if (!I) return [3, 2];
                    return (0, nb.GI)(g, N, ["installedAip"]), i(g), [3, 15];
                  case 2:
                    if (!P) return [3, 8];
                    if (
                      !(null === (e = w.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        x("Please provide your service access token."), [2]
                      );
                    f.label = 3;
                  case 3:
                    return (
                      f.trys.push([3, 5, 6, 7]),
                      j(!0),
                      [
                        4,
                        nm.ZP.setPluginServiceHttpToken({
                          id: g.id,
                          serviceAccessToken: w.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(f.sent().verification_tokens), [3, 7];
                  case 5:
                    return f.sent(), x("Error setting access token."), [3, 7];
                  case 6:
                    return j(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!S) return [3, 14];
                    if (
                      ((c =
                        null === (n = k.current) || void 0 === n
                          ? void 0
                          : n.value),
                      (d =
                        null === (u = C.current) || void 0 === u
                          ? void 0
                          : u.value),
                      !c || !d)
                    )
                      return x("Please provide your OAuth credentials."), [2];
                    f.label = 9;
                  case 9:
                    return (
                      f.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        nm.ZP.setPluginOAuthClientCredentials({
                          id: g.id,
                          clientId: k.current.value,
                          clientSecret: C.current.value,
                        }),
                      ]
                    );
                  case 10:
                    return r(f.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      f.sent(), x("Error setting OAuth credentials."), [3, 13]
                    );
                  case 12:
                    return j(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    g ? a(g) : o(), (f.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [P, S, g, s, l, Z, I, N, M, t, r, a, i, o]
          );
        return (0, f.jsx)(nv.ZP, {
          isOpen: !0,
          onModalClose: o,
          type: "success",
          title: "Found plugin",
          primaryButton: (0, f.jsx)(nv.mH, {
            title: Z
              ? "Refetch manifest"
              : I
              ? "Install localhost plugin"
              : "Next",
            color: "primary",
            onClick: R,
            loading: y || T,
          }),
          secondaryButton:
            (Z || P || S) &&
            (0, f.jsx)(nv.mH, {
              title: "Cancel",
              color: "neutral",
              onClick: o,
            }),
          children: (0, f.jsxs)(nk, {
            children: [
              (0, f.jsx)(n_.rC, { manifestValidationInfo: m }),
              d && (0, f.jsx)(n_.q6, { apiValidationInfo: d }),
              g && (0, f.jsx)(ny.Z, { plugin: g }),
              P &&
                !Z &&
                (0, f.jsxs)("div", {
                  children: [
                    (0, f.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your service access token:",
                    }),
                    (0, f.jsx)("div", {
                      className: "mt-2",
                      children: (0, f.jsx)(np.Z, {
                        ref: w,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: R,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              S &&
                !Z &&
                (0, f.jsxs)("div", {
                  children: [
                    (0, f.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your OAuth credentials:",
                    }),
                    (0, f.jsx)("div", {
                      className: "mt-2",
                      children: (0, f.jsx)(np.Z, {
                        ref: k,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: R,
                        autoFocus: !0,
                      }),
                    }),
                    (0, f.jsx)("div", {
                      className: "mt-2",
                      children: (0, f.jsx)(np.Z, {
                        ref: C,
                        type: "password",
                        name: "clientSecret",
                        placeholder: "Client secret",
                        autoComplete: "off",
                        onPressEnter: R,
                      }),
                    }),
                  ],
                }),
              v && (0, f.jsx)(nC, { children: v }),
            ],
          }),
        });
      }
      function nP(e) {
        var n = e.plugin,
          t = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          o = (0, u._)((0, h.useState)(), 2),
          s = o[0],
          l = o[1],
          c = (0, u._)((0, h.useState)(!1), 2),
          d = c[0],
          g = c[1],
          m = (0, h.useCallback)(
            (0, nf._)(function () {
              var e, i;
              return (0, nh.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, 3, 4]),
                      g(!0),
                      [
                        4,
                        nm.ZP.scrapePluginManifest({
                          domain: n.domain,
                          manifestAccessToken: t,
                        }),
                      ]
                    );
                  case 1:
                    if ((e = o.sent().plugin)) {
                      for (var s in ((i =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      r))
                        if (r[s] !== i[s])
                          return (
                            l(
                              'Please add the "'.concat(
                                s,
                                '" token to your manifest file.'
                              )
                            ),
                            [2]
                          );
                      a(e);
                    } else l("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return o.sent(), l("Error creating plugin."), [3, 4];
                  case 3:
                    return g(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [n, t, r, a]
          );
        return (0, f.jsx)(nv.ZP, {
          isOpen: !0,
          onModalClose: i,
          type: "success",
          title: "Add verification token",
          primaryButton: (0, f.jsx)(nv.mH, {
            title: "Verify tokens",
            color: "primary",
            onClick: m,
            loading: d,
          }),
          secondaryButton: (0, f.jsx)(nv.mH, {
            title: "I'll add the tokens later",
            color: "neutral",
            onClick: i,
          }),
          children: (0, f.jsxs)(nk, {
            children: [
              (0, f.jsx)(ny.Z, { plugin: n }),
              (0, f.jsx)("div", {
                className: "text-sm",
                children:
                  "Add the following verification tokens to your manifest file:",
              }),
              (0, f.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(r, null),
              }),
              s && (0, f.jsx)(nC, { children: s }),
            ],
          }),
        });
      }
      function nS(e) {
        var n = e.plugin,
          t = e.onClickInstall,
          r = e.onClose,
          a = (0, h.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, f.jsx)(nv.ZP, {
          isOpen: !0,
          onModalClose: r,
          type: "success",
          title: "Ready to install",
          primaryButton: (0, f.jsx)(nv.mH, {
            title: "Install for me",
            color: "primary",
            onClick: a,
          }),
          secondaryButton: (0, f.jsx)(nv.mH, {
            title: "Install later",
            color: "neutral",
            onClick: r,
          }),
          children: (0, f.jsx)(nk, {
            children: (0, f.jsxs)("div", {
              className: "text-sm",
              children: [
                "Your unverified plugin can now be installed by",
                " ",
                (0, f.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "up to 15 developers",
                }),
                ". Once ",
                "you're",
                " ready to make your plugin available to everyone, you can",
                " ",
                (0, f.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "submit your plugin for review",
                }),
                ".",
              ],
            }),
          }),
        });
      }
      function nZ(e) {
        var n = e.onConfirm,
          t = e.onClose;
        return (0, f.jsx)(nv.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, f.jsx)(nv.mH, {
            title: "Continue",
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, f.jsx)(nv.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, f.jsx)(nk, {
            children: (0, f.jsx)(nx.I, {
              children: (0, f.jsx)(nx.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function nR(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, u._)((0, h.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, u._)((0, h.useState)(n), 2),
          l = s[0],
          c = s[1],
          d = (0, h.useCallback)(function () {
            o(!0);
          }, []);
        return l
          ? i
            ? (0, f.jsx)(nD, { plugin: l, onInstall: t, onClose: r })
            : (0, f.jsx)(nZ, { onConfirm: d, onClose: r })
          : (0, f.jsx)(nA, { onLoad: c, onClose: r });
      }
      function nA(e) {
        var n = e.onLoad,
          t = e.onClose,
          r = (0, h.useRef)(null),
          a = (0, u._)((0, h.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, u._)((0, h.useState)(), 2),
          l = s[0],
          c = s[1];
        (0, h.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var d = (0, h.useCallback)(
          (0, nf._)(function () {
            var e, t, a;
            return (0, nh.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(t =
                      null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return c("Please provide a URL."), [2];
                  if ((0, nu.NB)(t))
                    return (
                      c(
                        'To add a localhost plugin, please go to "Develop your own plugin."'
                      ),
                      [2]
                    );
                  i.label = 1;
                case 1:
                  return (
                    i.trys.push([1, 3, 4, 5]),
                    o(!0),
                    [4, nm.ZP.getPluginByDomain({ domain: t })]
                  );
                case 2:
                  return (
                    (a = i.sent()) ? n(a) : c("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return i.sent(), c("Couldn't find plugin."), [3, 5];
                case 4:
                  return o(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [n, o, c]
        );
        return (0, f.jsx)(nv.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: "success",
          title: "Install an unverified plugin",
          primaryButton: (0, f.jsx)(nv.mH, {
            title: "Find plugin",
            color: "primary",
            onClick: d,
            loading: i,
          }),
          secondaryButton: (0, f.jsx)(nv.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, f.jsxs)(nk, {
            children: [
              (0, f.jsx)("div", {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, f.jsx)(np.Z, {
                ref: r,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: d,
              }),
              l && (0, f.jsx)(nC, { children: l }),
            ],
          }),
        });
      }
      function nD(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, u._)((0, h.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, u._)((0, h.useState)(!1), 2),
          l = s[0],
          c = s[1],
          d = (0, h.useRef)(null),
          g = (0, nb.U$)({
            onSuccess: function (e) {
              t(e), r();
            },
            onError: function (e) {
              o("Couldn't install plugin.");
            },
          }),
          m = n.manifest.name_for_human,
          p = "user_http" === n.manifest.auth.type,
          v = "oauth" === n.manifest.auth.type,
          x = (0, h.useCallback)(
            (0, nf._)(function () {
              var e, t;
              return (0, nh.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!v) return [3, 1];
                    return (
                      (e = (0, nb.nT)(n))
                        ? (window.location.href = e)
                        : o("Missing plugin configuration for ".concat(m, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!p) return [3, 7];
                    if (
                      !(null === (t = d.current) || void 0 === t
                        ? void 0
                        : t.value)
                    )
                      return o("Please provide your credentials."), [2];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, 5, 6]),
                      c(!0),
                      [
                        4,
                        nm.ZP.setPluginUserHttpToken({
                          id: n.id,
                          userAccessToken: d.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return r.sent(), g(n.id), [3, 6];
                  case 4:
                    return r.sent(), o("Couldn't install plugin."), [3, 6];
                  case 5:
                    return c(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      c(!0), g(n.id);
                    } catch (e) {
                      o("Couldn't install plugin.");
                    } finally {
                      c(!1);
                    }
                    r.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [n, m, v, p, g]
          );
        return (0, f.jsx)(nv.ZP, {
          isOpen: !0,
          onModalClose: r,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, f.jsx)(nv.mH, {
            title: v ? "Log in with ".concat(m) : "Install plugin",
            color: "primary",
            onClick: x,
            loading: l,
          }),
          secondaryButton: (0, f.jsx)(nv.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: r,
          }),
          children: (0, f.jsxs)(nk, {
            children: [
              (0, f.jsx)(ny.Z, { plugin: n }),
              p &&
                (0, f.jsxs)("div", {
                  children: [
                    (0, f.jsx)("div", {
                      className: "text-sm",
                      children:
                        n.manifest.auth.instructions ||
                        "Enter your HTTP access token below:",
                    }),
                    (0, f.jsx)("div", {
                      className: "mt-2",
                      children: (0, f.jsx)(np.Z, {
                        ref: d,
                        type: "password",
                        name: "token",
                        placeholder: "Enter your credentials",
                        autoComplete: "off",
                        onPressEnter: x,
                      }),
                    }),
                  ],
                }),
              v &&
                (0, f.jsxs)("div", {
                  children: [
                    "You will be redirected to",
                    " ",
                    (0, f.jsx)("span", {
                      className: "font-medium",
                      children: m,
                    }),
                    " to log in.",
                  ],
                }),
              i && (0, f.jsx)(nC, { children: i }),
            ],
          }),
        });
      }
      var nF = t(95552),
        nL = t.n(nF),
        nE = t(86433),
        nB = t(66958),
        nO = t(14158),
        nq = t(24396),
        nU = t(74437);
      function nz(e) {
        var n = e.onClose,
          t = (0, nE.S)().setupMfa;
        return (0, f.jsx)(nv.ZP, {
          isOpen: !0,
          onModalClose: n,
          type: "success",
          title: "Enable two-factor authentication",
          primaryButton: (0, f.jsx)(nv.mH, {
            title: "Enable two-factor authentication",
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, f.jsx)(nv.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, f.jsx)(nk, {
            children: (0, f.jsx)(nx.I, {
              children: (0, f.jsx)(nx.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
              }),
            }),
          }),
        });
      }
      function nH() {
        var e = (0, c._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (nH = function () {
            return e;
          }),
          e
        );
      }
      function nV() {
        var e = (0, c._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (nV = function () {
            return e;
          }),
          e
        );
      }
      var nW =
        ((o = {}),
        (0, X._)(o, eB._G.Mobile, 8),
        (0, X._)(o, eB._G.Small, 4),
        (0, X._)(o, eB._G.Medium, 4),
        (0, X._)(o, eB._G.Large, 6),
        (0, X._)(o, eB._G.XLarge, 8),
        o);
      ((r = s || (s = {}))[(r.All = 0)] = "All"),
        (r[(r.Installed = 1)] = "Installed"),
        ((a = l || (l = {})).New = "newly_added"),
        (a.Popular = "most_popular");
      var nG = [
        { id: l.Popular, title: "Popular" },
        { id: l.New, title: "New" },
        { id: s.All, title: "All" },
        { id: s.Installed, title: "Installed" },
      ];
      function nQ(e) {
        var n,
          t,
          r,
          a,
          i,
          o,
          c,
          g,
          m,
          p,
          v,
          b,
          y,
          w,
          k = e.onInstallWithAuthRequired,
          C = e.onClickInstallDeveloper,
          _ = e.onClickDevelop,
          M = e.onClickAbout,
          T = e.onClose,
          N = (0, eC.kP)().session,
          I = (0, nU.Z)(),
          P = I.installedPlugins,
          S = I.isLoading,
          Z =
            ((m = (0, eC.kP)().session),
            (p = (0, j.Fl)().isPluginsAvailable),
            (b = (v = (0, nq.a)(
              ["approvedAip"],
              function () {
                return nm.ZP.getPlugins({
                  offset: 0,
                  limit: 250,
                  statuses: ["approved"],
                  accessToken: null == m ? void 0 : m.accessToken,
                });
              },
              {
                enabled: p && (null == m ? void 0 : m.accessToken) != null,
                onError: function (e) {
                  console.error(e);
                },
              }
            )).data),
            (y = v.isLoading),
            (0, h.useMemo)(
              function () {
                var e = b
                  ? b.items.reduce(function (e, n) {
                      var t = !0,
                        r = !1,
                        a = void 0;
                      try {
                        for (
                          var i,
                            o,
                            s = (
                              null !== (i = n.categories) && void 0 !== i
                                ? i
                                : []
                            )[Symbol.iterator]();
                          !(t = (o = s.next()).done);
                          t = !0
                        ) {
                          var l = o.value;
                          null == e[l.id] &&
                            (e[l.id] = { id: l.id, title: l.title, items: [] }),
                            e[l.id].items.push(n);
                        }
                      } catch (e) {
                        (r = !0), (a = e);
                      } finally {
                        try {
                          t || null == s.return || s.return();
                        } finally {
                          if (r) throw a;
                        }
                      }
                      return e;
                    }, {})
                  : {};
                return {
                  approvedPlugins: b ? b.items : [],
                  approvedPluginsByCategory: e,
                  isLoading: y,
                };
              },
              [b, y]
            )),
          R = Z.approvedPlugins,
          A = Z.isLoading,
          D = Z.approvedPluginsByCategory,
          F = (0, h.useMemo)(
            function () {
              var e = [],
                n = !0,
                t = !1,
                r = void 0;
              try {
                for (
                  var a, i = nG[Symbol.iterator]();
                  !(n = (a = i.next()).done);
                  n = !0
                ) {
                  var o,
                    u = a.value;
                  Object.values(l).includes(u.id)
                    ? (null === (o = D[u.id]) || void 0 === o
                        ? void 0
                        : o.items.length) > 0 && e.push(u)
                    : u.id === s.Installed
                    ? P.length > 0 && e.push(u)
                    : e.push(u);
                }
              } catch (e) {
                (t = !0), (r = e);
              } finally {
                try {
                  n || null == i.return || i.return();
                } finally {
                  if (t) throw r;
                }
              }
              return e;
            },
            [P.length, D]
          ),
          L = (0, u._)((0, h.useState)(F[0].id), 2),
          E = L[0],
          B = L[1],
          O = (function (e, n) {
            for (
              var t = (0, d._)(e), r = nL()(n), a = t.length - 1;
              a > 0;
              a--
            ) {
              var i,
                o = Math.floor(r() * (a + 1));
              (i = [t[o], t[a]]), (t[a] = i[0]), (t[o] = i[1]);
            }
            var s = t.findIndex(function (e) {
              return "api.openai.com" === e.domain;
            });
            if (-1 !== s) {
              var l = t.splice(s, 1)[0];
              t.unshift(l);
            }
            return t;
          })(
            n$(
              (0, h.useMemo)(
                function () {
                  if (E === s.All) return R;
                  if (Object.values(l).includes(E)) {
                    var e, n;
                    return null !==
                      (n =
                        null === (e = D[E]) || void 0 === e
                          ? void 0
                          : e.items) && void 0 !== n
                      ? n
                      : [];
                  }
                  return [];
                },
                [R, E, D]
              )
            ),
            (null == N
              ? void 0
              : null === (w = N.user) || void 0 === w
              ? void 0
              : w.id) || ""
          ),
          q = n$(P),
          U = (0, x.hz)(),
          z = nW[(0, eB.dQ)()],
          H = [],
          V = !1;
        E === s.Installed ? ((H = q), (V = S)) : ((H = O), (V = A));
        var W =
            ((t = (n = { items: H, numItemsPerPage: z }).items),
            (r = n.numItemsPerPage),
            (i = (a = (0, u._)((0, h.useState)(0), 2))[0]),
            (o = a[1]),
            (c = Math.ceil(t.length / r)),
            (g = i * r),
            {
              page: i,
              numPages: c,
              pageItems: t.slice(g, g + r),
              goToPage: (0, h.useCallback)(function (e) {
                o(e);
              }, []),
            }),
          G = W.page,
          Q = W.numPages,
          $ = W.pageItems,
          J = W.goToPage;
        (0, h.useEffect)(
          function () {
            E === s.Installed && 0 === P.length && (B(F[0].id), J(0));
          },
          [E, P, J, F]
        ),
          (0, h.useEffect)(
            function () {
              A || B(F[0].id);
            },
            [A]
          );
        var Y = (0, u._)((0, h.useState)(!1), 2),
          X = Y[0],
          K = Y[1];
        return X
          ? (0, f.jsx)(nz, {
              onClose: function () {
                K(!1);
              },
            })
          : (0, f.jsx)(nv.ZP, {
              isOpen: !0,
              onModalClose: T,
              type: "success",
              title: "Plugin store",
              size: "custom",
              className:
                "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
              closeButton: (0, f.jsx)(nv.ol, { onClose: T }),
              children: (0, f.jsxs)(nk, {
                children: [
                  !V &&
                    F.length > 1 &&
                    (0, f.jsx)("div", {
                      className: "flex flex-wrap gap-3",
                      children: F.map(function (e) {
                        return (0, f.jsx)(
                          nJ,
                          {
                            selected: E === e.id,
                            onClick: function () {
                              B(e.id), J(0);
                            },
                            children: e.title,
                          },
                          e.id
                        );
                      }),
                    }),
                  (0, f.jsx)(nY, {
                    plugins: $,
                    numSkeletons: z,
                    isLoading: V,
                    onInstallWithAuthRequired: k,
                    onRequestMfa: function () {
                      return K(!0);
                    },
                  }),
                  (0, f.jsxs)("div", {
                    className:
                      "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                    children: [
                      (0, f.jsx)("div", {
                        className:
                          "flex flex-1 justify-start max-lg:justify-center",
                        children:
                          Q > 1 &&
                          (0, f.jsx)(n1, { page: G, numPages: Q, goToPage: J }),
                      }),
                      (0, f.jsxs)("div", {
                        className:
                          "flex flex-col items-center gap-2 sm:flex-row",
                        children: [
                          U.has("tools3_dev") &&
                            (0, f.jsxs)(f.Fragment, {
                              children: [
                                (0, f.jsx)(n2, {
                                  onClick: C,
                                  children: "Install an unverified plugin",
                                }),
                                (0, f.jsx)(n3, {}),
                                (0, f.jsx)(n2, {
                                  onClick: _,
                                  children: "Develop your own plugin",
                                }),
                                !1 && (0, f.jsx)(n3, {}),
                              ],
                            }),
                          !1 &&
                            (0, f.jsx)(n2, {
                              onClick: M,
                              children: "About plugins",
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
      function n$(e) {
        return (0, h.useMemo)(
          function () {
            return e.sort(function (e, n) {
              return e.manifest.name_for_human.localeCompare(
                n.manifest.name_for_human
              );
            });
          },
          [e]
        );
      }
      function nJ(e) {
        var n = e.selected,
          t = e.onClick,
          r = e.children;
        return (0, f.jsx)(nB.z, {
          color: n ? "light" : "neutral",
          className: (0, G.Z)(
            "focus:ring-0",
            n && "hover:bg-gray-200",
            !n && "text-black/50"
          ),
          onClick: t,
          children: r,
        });
      }
      function nY(e) {
        var n = e.plugins,
          t = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          o = r
            ? Array(t)
                .fill(0)
                .map(function (e, n) {
                  return (0, f.jsx)(nK, {}, n);
                })
            : n.map(function (e) {
                return (0,
                f.jsx)(nX, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: i }, e.id);
              });
        return (0, f.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: o,
        });
      }
      function nX(e) {
        var n,
          t = e.plugin,
          r = e.onInstallWithAuthRequired,
          a = e.onRequestMfa,
          i = (0, u._)((0, h.useState)(!1), 2),
          o = i[0],
          s = i[1],
          l = (0, u._)((0, h.useState)(!1), 2),
          c = l[0],
          d = l[1],
          m = (0, nb.U$)({
            onSuccess: function (e) {
              (0, nd.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                nl.m.danger(
                  "Error installing ".concat(t.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              s(!1);
            },
          }),
          p = (0, nb.qo)({
            onSuccess: function () {},
            onError: function (e) {
              console.error(e),
                nl.m.danger(
                  "Error uninstalling ".concat(t.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              d(!1);
            },
          }),
          v = (0, eC.kP)().session,
          x = (0, nE.S)().isUsernamePassword,
          b = (0, h.useCallback)(
            function () {
              var e,
                n = t.manifest.auth.type;
              if (
                !("none" === n || "service_http" === n) &&
                !(null == v
                  ? void 0
                  : null === (e = v.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                x
              ) {
                a();
                return;
              }
              if ("oauth" === n) {
                var i = (0, nb.nT)(t);
                i
                  ? (window.location.href = i)
                  : nl.m.danger(
                      "Missing plugin configuration for ".concat(
                        t.manifest.name_for_human,
                        "."
                      )
                    );
              } else "user_http" === n ? r(t) : (s(!0), m(t.id));
            },
            [t, m, r, a, x, v]
          ),
          y = (0, h.useCallback)(
            function () {
              d(!0), p(t.id);
            },
            [t, p]
          );
        return (
          (n =
            o || c
              ? (0, f.jsxs)(nB.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    o ? "Installing" : "Uninstalling",
                    (0, f.jsx)(W.Z, {}),
                  ],
                })
              : t.user_settings.is_installed
              ? (0, f.jsxs)(nB.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: y,
                  children: ["Uninstall", (0, f.jsx)(_.ZP, { icon: g.$Rx })],
                })
              : (0, f.jsxs)(nB.z, {
                  onClick: b,
                  children: ["Install", (0, f.jsx)(_.ZP, { icon: g.wzc })],
                })),
          (0, f.jsx)(n0, {
            logo: (0, f.jsx)(Y.Z, {
              url: t.manifest.logo_url,
              name: t.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: (0, nu.cf)(t)
              ? (0, f.jsx)(nO.Aj, {})
              : "approved" !== t.status
              ? (0, f.jsx)(nO.i$, {})
              : void 0,
            title: (0, f.jsx)("div", {
              className: "max-w-full truncate text-lg leading-6",
              children: t.manifest.name_for_human,
            }),
            button: n,
            description: t.manifest.description_for_human,
          })
        );
      }
      function nK() {
        return (0, f.jsx)(n0, {
          logo: (0, f.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, f.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, f.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, f.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, f.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, f.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, f.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
        });
      }
      function n0(e) {
        var n = e.logo,
          t = e.tag,
          r = e.title,
          a = e.button,
          i = e.description;
        return (0, f.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, f.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, f.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: n,
                }),
                (0, f.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    t
                      ? (0, f.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [t, r],
                        })
                      : r,
                    a,
                  ],
                }),
              ],
            }),
            (0, f.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: i,
            }),
          ],
        });
      }
      function n1(e) {
        for (
          var n = function (e) {
              u.push(
                (0, f.jsx)(
                  n2,
                  {
                    role: "button",
                    className: (0, G.Z)(
                      "flex h-5 w-5 items-center justify-center",
                      e === t &&
                        "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
                    ),
                    onClick: function () {
                      return a(e);
                    },
                    children: e + 1,
                  },
                  e
                )
              );
            },
            t = e.page,
            r = e.numPages,
            a = e.goToPage,
            i = t > 0,
            o = t < r - 1,
            s = (0, h.useCallback)(
              function () {
                a(Math.max(t - 1, 0));
              },
              [t, a]
            ),
            l = (0, h.useCallback)(
              function () {
                a(Math.min(t + 1, r - 1));
              },
              [t, r, a]
            ),
            u = [],
            c = 0;
          c < r;
          c++
        )
          n(c);
        return (0, f.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, f.jsxs)(n2, {
              role: "button",
              className: (0, G.Z)("flex items-center", !i && "opacity-50"),
              onClick: s,
              $disabled: !i,
              children: [(0, f.jsx)(_.ZP, { icon: g.YFh }), "Prev"],
            }),
            u,
            (0, f.jsxs)(n2, {
              role: "button",
              className: (0, G.Z)("flex items-center", !o && "opacity-50"),
              onClick: l,
              $disabled: !o,
              children: ["Next", (0, f.jsx)(_.ZP, { icon: g.Tfp })],
            }),
          ],
        });
      }
      var n2 = v.Z.button(nH(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        n3 = v.Z.div(nV());
      function n4(e) {
        var n = e.allowClose,
          t = e.onConfirm,
          r = e.onClose;
        return (0, f.jsx)(nv.ZP, {
          isOpen: !0,
          onModalClose: r,
          type: "success",
          title: "About plugins",
          primaryButton: (0, f.jsx)(nv.mH, {
            title: "OK",
            color: "primary",
            onClick: t,
          }),
          secondaryButton:
            n &&
            (0, f.jsx)(nv.mH, {
              title: "Cancel",
              color: "neutral",
              onClick: r,
            }),
          children: (0, f.jsx)(nk, {
            children: (0, f.jsxs)(nx.I, {
              children: [
                (0, f.jsx)(nx.Z, {
                  icon: "\uD83D\uDEA8",
                  children:
                    "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                }),
                (0, f.jsx)(nx.Z, {
                  icon: "\uD83C\uDF10",
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation.",
                }),
                (0, f.jsx)(nx.Z, {
                  icon: "\uD83E\uDDE0",
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var n5 = "oai/apps/hasSeenPluginsDisclaimer";
      function n8(e) {
        var n = e.onInstall,
          t = e.onClose,
          r = (0, u._)((0, h.useState)(!!nc.m.getItem(n5)), 2),
          a = !0,
          i = r[1],
          o = (0, u._)((0, h.useState)(!1), 2),
          s = o[0],
          l = o[1],
          c = (0, u._)((0, h.useState)(!1), 2),
          d = c[0],
          g = c[1],
          m = (0, u._)((0, h.useState)(), 2),
          p = m[0],
          v = m[1],
          x = (0, u._)((0, h.useState)(!1), 2),
          b = x[0],
          y = x[1],
          j = (0, h.useCallback)(function () {
            i(!0), l(!1), nc.m.setItem(n5, !0);
          }, []),
          w = (0, h.useCallback)(function (e) {
            v(e), g(!0);
          }, []),
          k = (0, h.useCallback)(function () {
            g(!0);
          }, []),
          C = (0, h.useCallback)(function () {
            y(!0);
          }, []),
          _ = (0, h.useCallback)(function () {
            l(!0);
          }, []),
          M = (0, h.useCallback)(
            function (e) {
              (0, nd.wu)(e.id), t(), n(e);
            },
            [n, t]
          ),
          T = (0, h.useCallback)(
            function () {
              v(void 0), g(!1), t();
            },
            [t]
          ),
          N = (0, h.useCallback)(
            function () {
              y(!1), t();
            },
            [t]
          );
        return !a || s
          ? (0, f.jsx)(n4, { allowClose: !a, onConfirm: j, onClose: t })
          : d
          ? (0, f.jsx)(nR, { plugin: p, onInstall: M, onClose: T })
          : b
          ? (0, f.jsx)(nM, {
              onClickInstall: w,
              onInstallLocalhost: M,
              onClose: N,
            })
          : (0, f.jsx)(nQ, {
              onInstallWithAuthRequired: w,
              onClickInstallDeveloper: k,
              onClickDevelop: C,
              onClickAbout: _,
              onClose: t,
            });
      }
      function n7() {
        var e = (0, c._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (n7 = function () {
            return e;
          }),
          e
        );
      }
      function n6(e) {
        var n,
          t = e.theme,
          r = void 0 === t ? "default" : t,
          a = (0, u._)((0, h.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, u._)((0, h.useState)(!1), 2),
          l = s[0],
          c = s[1],
          d = (0, Q.useRouter)(),
          m = (0, nU.Z)(),
          p = m.installedPlugins,
          v = m.isLoading,
          x = (0, nd.p0)(),
          b = (0, h.useRef)(null);
        (0, h.useEffect)(
          function () {
            if (!v) {
              var e = d.query,
                n = e.loginAip,
                t = e.loginSuccess,
                r = (0, eZ._)(e, ["loginAip", "loginSuccess"]);
              if (n) {
                var a,
                  i = p.find(function (e) {
                    return e.id === n;
                  });
                i && "true" === t
                  ? ((0, nd.wu)(d.query.loginAip),
                    null === (a = b.current) || void 0 === a || a.open())
                  : nl.m.warning(
                      "Couldn't log in with ".concat(
                        (null == i ? void 0 : i.manifest.name_for_human) ||
                          "plugin",
                        "."
                      )
                    ),
                  d.replace({ pathname: d.pathname, query: r });
              }
            }
          },
          [d, p, v]
        );
        var y = (0, h.useCallback)(function () {
            var e;
            null === (e = b.current) || void 0 === e || e.open();
          }, []),
          j = (0, h.useCallback)(function () {
            o(!1);
          }, []),
          w = (0, u._)((0, h.useState)(x), 2),
          k = w[0],
          C = w[1],
          _ = (0, h.useCallback)(
            function (e) {
              if (e.length > nd.hZ)
                c(!0),
                  setTimeout(function () {
                    c(!1);
                  }, 600);
              else {
                var n = e.filter(function (e) {
                    return !x.find(function (n) {
                      return n.id === e.id;
                    });
                  }),
                  t = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, o = nd.iO[Symbol.iterator]();
                    !(t = (i = o.next()).done);
                    t = !0
                  ) {
                    var s = (function () {
                      var e = i.value,
                        t = x.find(function (n) {
                          return e.includes(n.domain);
                        });
                      if (t) {
                        var r = e.find(function (e) {
                            return e !== t.domain;
                          }),
                          a = n.find(function (e) {
                            return e.domain === r;
                          });
                        if (a)
                          return (
                            nl.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, " while ")
                                .concat(
                                  t.manifest.name_for_human,
                                  " is enabled."
                                )
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, eR._)(s)) return s.v;
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                (0, nd.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [x]
          ),
          M = (0, h.useCallback)(function (e) {
            var n;
            null === (n = b.current) || void 0 === n || n.close(),
              "store" === e && o(!0);
          }, []),
          T = (0, h.useCallback)(
            function () {
              C(x),
                eA.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(x.length),
                });
            },
            [x]
          ),
          N = (0, h.useCallback)(
            function () {
              var e = k.filter(function (e) {
                  return !x.find(function (n) {
                    return n.id === e.id;
                  });
                }),
                n = x.filter(function (e) {
                  return !k.find(function (n) {
                    return n.id === e.id;
                  });
                }),
                t = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var i, o = n[Symbol.iterator]();
                  !(t = (i = o.next()).done);
                  t = !0
                ) {
                  var s = i.value;
                  eA.m.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: s.id,
                  });
                }
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (r) throw a;
                }
              }
              var l = !0,
                u = !1,
                c = void 0;
              try {
                for (
                  var d, f = e[Symbol.iterator]();
                  !(l = (d = f.next()).done);
                  l = !0
                ) {
                  var h = d.value;
                  eA.m.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: h.id,
                  });
                }
              } catch (e) {
                (u = !0), (c = e);
              } finally {
                try {
                  l || null == f.return || f.return();
                } finally {
                  if (u) throw c;
                }
              }
            },
            [x, k]
          ),
          I = p.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: (0, nu.cf)(e)
                ? (0, f.jsx)(nO.Aj, {})
                : "approved" !== e.status
                ? (0, f.jsx)(nO.i$, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          P = I.filter(function (e) {
            return x.find(function (n) {
              return n.id === e.value.id;
            });
          }),
          S = "".concat(0 === x.length ? "No" : x.length, " plugins enabled");
        if (x.length > 0 && x.length < 6) {
          var Z = x.map(function (e, n) {
            return (0,
            f.jsx)(Y.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, n);
          });
          S = (0, f.jsx)("div", { className: "flex gap-1", children: Z });
        }
        var R = [{ id: "store", label: "Plugin store", icon: g.Rgz }];
        p.length > nd.hZ &&
          (n = (0, f.jsxs)(n9, {
            className: (0, G.Z)(
              "transition-colors duration-300",
              l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: [x.length, "/", nd.hZ, " Enabled"],
          }));
        var A = (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(n9, { children: "Loading..." }),
            (0, f.jsx)(e8, { showCheckbox: !0, theme: r }),
            (0, f.jsx)(e8, { showCheckbox: !0, theme: r }),
            (0, f.jsx)(e8, { showCheckbox: !0, theme: r }),
            (0, f.jsx)(e8, { showCheckbox: !0, theme: r }),
            (0, f.jsx)(e8, { showCheckbox: !0, theme: r }),
          ],
        });
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(e1, {
              name: "Plugins",
              selectedOptions: P,
              selectedLabel: S,
              options: I,
              actions: R,
              onChange: _,
              onAction: M,
              onOpen: T,
              onClose: N,
              dropdownRef: b,
              isLoading: v,
              loadingState: A,
              header: n,
              theme: "mini" === r ? "mini" : "default",
            }),
            i && (0, f.jsx)(n8, { onInstall: y, onClose: j }),
          ],
        });
      }
      var n9 = v.Z.div(n7()),
        te = t(44878);
      function tn(e) {
        var n,
          t,
          r = e.currentModelId,
          a = (0, x.hz)(),
          i = (0, eM.fm)(),
          o = (0, eM.B9)(),
          s = void 0 !== r ? o.get(r) : void 0,
          l = (0, eM.B8)().enabledModelsById,
          u = (0, h.useMemo)(
            function () {
              return Array.from(l)
                .map(function (e) {
                  return o.get(e);
                })
                .filter(function (e) {
                  return void 0 !== e;
                });
            },
            [l, o]
          ),
          c = (0, j.Fl)(),
          d = c.isBetaFeaturesUiEnabled,
          g = c.isPluginsAvailable,
          m = c.isBrowsingAvailable,
          p = c.isCodeInterpreterAvailable;
        return d && a.has("new_model_switcher_20230512") && (g || m || p)
          ? s
            ? (0, f.jsxs)("div", {
                className:
                  "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
                children: [
                  (0, f.jsx)(eS, { currentModel: s, onModelChange: i }),
                  g &&
                    (null == s
                      ? void 0
                      : null === (t = s.enabledTools) || void 0 === t
                      ? void 0
                      : t.includes("tools3")) &&
                    (0, f.jsx)(n6, { theme: "mini" }),
                ],
              })
            : null
          : (0, f.jsxs)("div", {
              className: "flex items-center justify-center gap-2",
              children: [
                (0, f.jsx)(tt, {
                  onChangeModelQueryParam: i,
                  availableModels: u,
                  currentModelId: r,
                }),
                g &&
                  (null == s
                    ? void 0
                    : null === (n = s.enabledTools) || void 0 === n
                    ? void 0
                    : n.includes("tools3")) &&
                  (0, f.jsx)(n6, {}),
              ],
            });
      }
      function tt(e) {
        var n = e.onChangeModelQueryParam,
          t = e.availableModels,
          r = e.currentModelId,
          a = (0, ew.BT)(),
          i = (0, $.WS)(),
          o = (0, e_.Z)(),
          s = (0, h.useCallback)(
            function (e) {
              e.id !== a && (n(e.id), i(J.s6.toggleModel, { model: e.id }));
            },
            [a, i, n]
          ),
          l = "".concat(o.modelSwitcherDisclaimer),
          u = t.map(function (e) {
            return {
              value: e,
              title: e.title,
              description: e.id === a ? l : e.description,
              tags: e.tags,
              disabled: e.id === a,
            };
          }),
          c =
            u.find(function (e) {
              return e.value.id === r;
            }) || u[0];
        return void 0 === r
          ? null
          : (0, f.jsx)(e0, {
              name: "Model",
              selectedOption: c,
              options: u,
              onChange: s,
              theme: "default",
            });
      }
      var tr = function (e) {
        var n,
          t,
          r,
          a = e.currentModelConfig,
          i = e.clientThreadId,
          o = e.isStaticSharedThread,
          s = e.icon,
          l = (0, y.Ro)(i);
        void 0 === l && (l = a);
        var u = l.tags
            .filter(function (e) {
              return eK.includes(e);
            })
            .map(function (e) {
              return e6(e);
            }),
          c = (0, te.Z)();
        if (c.length > 0) {
          var d = c.map(function (e, n) {
            return (0,
            f.jsx)(Y.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, n);
          });
          r = (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", { children: "Enabled plugins:" }), d],
          });
        }
        var h = (0, Q.useRouter)(),
          g =
            o &&
            (null === (n = h.query) || void 0 === n
              ? void 0
              : null === (t = n.shareParams) || void 0 === t
              ? void 0
              : t[1]) === "moderate";
        return (0, f.jsxs)("div", {
          className: (0, G.Z)(
            "flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
            o ? "sticky top-0 z-50" : ""
          ),
          children: [
            o &&
              (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)("span", { children: "Shared Conversation" }),
                  (0, f.jsx)("span", { className: "px-1", children: "•" }),
                ],
              }),
            !o && void 0 !== s && (0, f.jsx)(_.ZP, { icon: s }),
            "Model: ",
            a.title,
            u,
            r
              ? (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsx)("span", { className: "px-1", children: "•" }),
                    r,
                  ],
                })
              : null,
            g &&
              (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)("span", { className: "px-1", children: "•" }),
                  (0, f.jsx)("strong", { children: "MODERATION VIEW" }),
                ],
              }),
          ],
        });
      };
      function ta() {
        var e = (0, c._)(["flex flex-col text-sm dark:bg-gray-800"]);
        return (
          (ta = function () {
            return e;
          }),
          e
        );
      }
      function ti() {
        var e = (0, c._)(["h-32 md:h-48 flex-shrink-0"]);
        return (
          (ti = function () {
            return e;
          }),
          e
        );
      }
      function to() {
        var e = (0, c._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (to = function () {
            return e;
          }),
          e
        );
      }
      function ts() {
        var e = (0, c._)([
          "px-2 relative w-full flex flex-col h-full py-2 md:py-6",
        ]);
        return (
          (ts = function () {
            return e;
          }),
          e
        );
      }
      function tl() {
        var e = (0, c._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (tl = function () {
            return e;
          }),
          e
        );
      }
      function tu(e) {
        var n = e.clientThreadId,
          t = (0, y.qA)(n),
          r = (0, y.je)(n),
          a = (0, y.qN)(function (e) {
            return y.iN.getThreadCreateTime(n, e);
          });
        return (0, f.jsxs)("div", {
          className:
            "pt-3 sm:pt-8 pb-8 sm:pb-10 mb-1 sm:mb-2 border-b border-gray-100",
          children: [
            (0, f.jsx)("h1", {
              className:
                "text-3xl max-w-md sm:text-4xl font-semibold leading-tight text-gray-700 dark:text-gray-100",
              children: t,
            }),
            (null != r || null != a) &&
              (0, f.jsxs)("div", {
                className: "pt-3 sm:pt-4 text-base text-gray-400",
                children: [
                  null != r && (0, f.jsx)("span", { children: r }),
                  null != r &&
                    null != a &&
                    (0, f.jsx)("span", { className: "px-2", children: "•" }),
                  null != a &&
                    (0, f.jsx)(m.Ji, {
                      value: a,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    }),
                ],
              }),
          ],
        });
      }
      function tc(e) {
        var n,
          t,
          r,
          a = e.onChangeItemInView,
          i = e.onRequestMoreCompletions,
          o = e.onUpdateNode,
          s = e.onChangeRating,
          l = e.onDeleteNode,
          c = e.onRequestCompletion,
          m = e.onSandboxLinkClick,
          v = e.onHandleChangeVariantFeedbackInlineComparisonRating,
          w = e.clientThreadId,
          M = e.conversationLeafId,
          T = e.isNewThread,
          N = e.activeRequests,
          I = e.currentThreadModel,
          P = e.isStaticSharedThread,
          S = e.inlineEmbeddedDisplay,
          Z = e.initiallyHighlightedMessageId,
          R = e.promptTextareaRef,
          A = (0, p.useScrollToBottom)(),
          D = (0, u._)((0, p.useSticky)(), 1)[0],
          F = (0, x.hz)(),
          L = (0, j.Fl)().isBetaFeaturesUiEnabled,
          E = (0, y.Kt)(w),
          B = (0, x.Xj)().isLoading,
          O = (0, eM.iu)(),
          q = (0, eM.ZL)(),
          U = (0, eM.Xy)(I, w),
          z = F.has("model_switcher") && O.size > 1,
          H = T && !B && z,
          G = (0, x.nR)(),
          Q = (0, u._)((0, h.useState)(!1), 2),
          $ = Q[0],
          J = Q[1],
          Y =
            ((n = U.id),
            (t = eI()),
            (0, h.useMemo)(
              function () {
                return (function (e, n) {
                  if (n)
                    for (var t = 0; t < e.length; t++) {
                      var r = e[t];
                      if (r.options.length > 0) {
                        var a,
                          i,
                          o = r.options.find(function (e) {
                            return e.value === n;
                          });
                        if (o)
                          return {
                            item: o,
                            categoryId: r.categoryId,
                            backgroundColor: eT[r.categoryId].backgroundColor,
                            icon:
                              null !==
                                (i =
                                  null !== (a = o.icon) && void 0 !== a
                                    ? a
                                    : r.icon) && void 0 !== i
                                ? i
                                : eT[r.categoryId].icon,
                          };
                      }
                    }
                })(t, n);
              },
              [t, n]
            )),
          X = (0, y.U0)(w, M);
        (0, h.useEffect)(
          function () {
            if (E) {
              var e = setTimeout(function () {
                J(!0);
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            }
            J(!1);
          },
          [E]
        );
        var K = F.has(b.FZ),
          ee =
            !L && U.tags.includes(eM.S.GPT_4)
              ? "black"
              : null !== (r = null == Y ? void 0 : Y.backgroundColor) &&
                void 0 !== r
              ? r
              : void 0,
          en = (0, d._)(Array(X).keys()).map(function (e) {
            return (0,
            f.jsx)(C.Z, { isFinalTurn: e === X - 1, turnIndex: e, clientThreadId: w, conversationLeafId: M, onChangeItemInView: a, onChangeRating: s, onRequestMoreCompletions: i, onDeleteNode: l, onRequestCompletion: c, onUpdateNode: o, onSandboxLinkClick: m, onHandleChangeVariantFeedbackInlineComparisonRating: v, activeRequests: N, currentModelId: U.id, isStaticSharedThread: P, showInlineEmbeddedDisplay: S, initiallyHighlightedMessageId: Z, avatarColor: ee }, e);
          });
        return (0, f.jsxs)(f.Fragment, {
          children: [
            H &&
              (0, f.jsxs)(tg, {
                children: [
                  (0, f.jsx)(tn, { currentModelId: U.id }),
                  (0, f.jsxs)(tm, {
                    children: [
                      "ChatGPT",
                      G && (0, f.jsx)(k, { children: "New" }),
                    ],
                  }),
                ],
              }),
            (0, f.jsxs)(td, {
              children: [
                T && !B && !q && !z && (0, f.jsx)(V, { promptTextareaRef: R }),
                $ && (0, f.jsx)(W.Z, { className: "mt-4 self-center" }),
                !T &&
                  (P || (!B && z)) &&
                  !S &&
                  (0, f.jsx)(tr, {
                    icon: L ? (null == Y ? void 0 : Y.icon) : void 0,
                    currentModelConfig: U,
                    clientThreadId: w,
                    isStaticSharedThread: P,
                  }),
                K
                  ? en.length > 0 &&
                    (0, f.jsx)("div", {
                      className: "flex flex-col items-center sm:px-4",
                      children: (0, f.jsxs)("div", {
                        className: "w-full max-w-[44rem] pt-4",
                        children: [
                          P && !S && (0, f.jsx)(tu, { clientThreadId: w }),
                          en,
                        ],
                      }),
                    })
                  : (0, f.jsxs)(f.Fragment, {
                      children: [
                        P &&
                          !S &&
                          (0, f.jsx)("div", {
                            className:
                              "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0, f.jsx)(tu, { clientThreadId: w }),
                          }),
                        en,
                      ],
                    }),
                !H && !S && (0, f.jsx)(tf, {}),
              ],
            }),
            !D &&
              !S &&
              (0, f.jsx)(th, {
                onClick: A,
                children: (0, f.jsx)(_.ZP, { icon: g.tv1, className: "m-1" }),
              }),
          ],
        });
      }
      var td = v.Z.div(ta()),
        tf = v.Z.div(ti()),
        th = v.Z.button(to()),
        tg = v.Z.div(ts()),
        tm = v.Z.h1(tl());
    },
    28869: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return U;
        },
      });
      var r = t(39324),
        a = t(71209),
        i = t(70216),
        o = t(35250),
        s = t(19841),
        l = t(86546),
        u = t(70079),
        c = t(45306),
        d = t(64135),
        f = t(22208),
        h = t(61110),
        g = t(55975),
        m = t(46050),
        p = t(29874),
        v = t(8449),
        x = t(15472);
      let b = {
          tokenize: function (e, n, t) {
            let r = this,
              a = this.events[this.events.length - 1],
              i =
                a && a[1].type === x.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              o = [];
            return function (n) {
              return (
                g.q.backslash,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function n(r) {
                  return r === g.q.backslash ||
                    (r === g.q.leftSquareBracket && o[0] === g.q.backslash)
                    ? (e.consume(r), o.push(r), n)
                    : (e.exit("mathFlowFenceSequence"),
                      o.length < 2 ? t(r) : (0, m.f)(e, s, x.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return n === g.q.eof || (0, p.Ch)(n)
                ? l(n)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(x.V.chunkString, {
                    contentType: v._.contentTypeString,
                  }),
                  (function n(r) {
                    return r === g.q.eof || (0, p.Ch)(r)
                      ? (e.exit(x.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === g.q.rightSquareBracket
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                e.exit("mathFlowFence"),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return t === g.q.eof
                        ? u(t)
                        : (0, p.Ch)(t)
                        ? e.attempt(
                            y,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              i ? (0, m.f)(e, n, x.V.linePrefix, i + 1) : n
                            ),
                            u
                          )(t)
                        : (e.enter("mathFlowValue"),
                          (function t(r) {
                            return r === g.q.eof || (0, p.Ch)(r)
                              ? (e.exit("mathFlowValue"), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function u(t) {
              return e.exit("mathFlow"), n(t);
            }
            function c(e, n, t) {
              let r = [];
              return (0, m.f)(
                e,
                function (n) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function n(i) {
                      return (i === g.q.backslash && 0 === r.length) ||
                        (i === g.q.rightSquareBracket && r[0] === g.q.backslash)
                        ? (e.consume(i), r.push(i), n)
                        : r < o
                        ? t(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, m.f)(e, a, x.V.whitespace)(i));
                    })(n)
                  );
                },
                x.V.linePrefix,
                v._.tabSize
              );
              function a(r) {
                return r === g.q.eof || (0, p.Ch)(r)
                  ? (e.exit("mathFlowFence"), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        y = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                e.enter(x.V.lineEnding), e.consume(n), e.exit(x.V.lineEnding), a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        j = {
          tokenize: function (e, n, t) {
            let r = this,
              a = r.events[r.events.length - 1],
              i =
                a && a[1].type === x.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              o = 0;
            return function (n) {
              return (
                g.q.dollarSign,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function n(r) {
                  return r === g.q.dollarSign
                    ? (e.consume(r), o++, n)
                    : (e.exit("mathFlowFenceSequence"),
                      o < 2 ? t(r) : (0, m.f)(e, s, x.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return n === g.q.eof || (0, p.Ch)(n)
                ? l(n)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(x.V.chunkString, {
                    contentType: v._.contentTypeString,
                  }),
                  (function n(r) {
                    return r === g.q.eof || (0, p.Ch)(r)
                      ? (e.exit(x.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === g.q.dollarSign
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                e.exit("mathFlowFence"),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return t === g.q.eof
                        ? u(t)
                        : (0, p.Ch)(t)
                        ? e.attempt(
                            w,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              i ? (0, m.f)(e, n, x.V.linePrefix, i + 1) : n
                            ),
                            u
                          )(t)
                        : (e.enter("mathFlowValue"),
                          (function t(r) {
                            return r === g.q.eof || (0, p.Ch)(r)
                              ? (e.exit("mathFlowValue"), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function u(t) {
              return e.exit("mathFlow"), n(t);
            }
            function c(e, n, t) {
              let r = 0;
              return (0, m.f)(
                e,
                function (n) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function n(i) {
                      return i === g.q.dollarSign
                        ? (e.consume(i), r++, n)
                        : r < o
                        ? t(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, m.f)(e, a, x.V.whitespace)(i));
                    })(n)
                  );
                },
                x.V.linePrefix,
                v._.tabSize
              );
              function a(r) {
                return r === g.q.eof || (0, p.Ch)(r)
                  ? (e.exit("mathFlowFence"), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        w = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                (0, p.Ch)(n),
                e.enter(x.V.lineEnding),
                e.consume(n),
                e.exit(x.V.lineEnding),
                a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        };
      function k(e) {
        let n,
          t,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === x.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (n = a; ++n < r; )
            if ("mathTextData" === e[n][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (n = a - 1, r++; ++n <= r; )
          void 0 === t
            ? n !== r && e[n][1].type !== x.V.lineEnding && (t = n)
            : (n === r || e[n][1].type === x.V.lineEnding) &&
              ((e[t][1].type = "mathTextData"),
              n !== t + 2 &&
                ((e[t][1].end = e[n - 1][1].end),
                e.splice(t + 2, n - t - 2),
                (r -= n - t - 2),
                (n = t + 2)),
              (t = void 0));
        return e;
      }
      function C(e) {
        return (
          e !== g.q.backslash ||
          this.events[this.events.length - 1][1].type === x.V.characterEscape
        );
      }
      function _(e) {
        let n,
          t,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === x.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (n = a; ++n < r; )
            if ("mathTextData" === e[n][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (n = a - 1, r++; ++n <= r; )
          void 0 === t
            ? n !== r && e[n][1].type !== x.V.lineEnding && (t = n)
            : (n === r || e[n][1].type === x.V.lineEnding) &&
              ((e[t][1].type = "mathTextData"),
              n !== t + 2 &&
                ((e[t][1].end = e[n - 1][1].end),
                e.splice(t + 2, n - t - 2),
                (r -= n - t - 2),
                (n = t + 2)),
              (t = void 0));
        return e;
      }
      function M(e) {
        return (
          e !== g.q.dollarSign ||
          this.events[this.events.length - 1][1].type === x.V.characterEscape
        );
      }
      function T(e) {
        let n,
          t,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === x.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (n = a; ++n < r; )
            if ("mathTextData" === e[n][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (n = a - 1, r++; ++n <= r; )
          void 0 === t
            ? n !== r && e[n][1].type !== x.V.lineEnding && (t = n)
            : (n === r || e[n][1].type === x.V.lineEnding) &&
              ((e[t][1].type = "mathTextData"),
              n !== t + 2 &&
                ((e[t][1].end = e[n - 1][1].end),
                e.splice(t + 2, n - t - 2),
                (r -= n - t - 2),
                (n = t + 2)),
              (t = void 0));
        return e;
      }
      function N(e) {
        return (
          e !== g.q.backslash ||
          this.events[this.events.length - 1][1].type === x.V.characterEscape
        );
      }
      var I = t(67726),
        P = t(9871),
        S = t(93362),
        Z = t(45369),
        R = t(42426),
        A = t(65028),
        D = t(88366),
        F = t(36716),
        L = t(2368),
        E = function (e) {
          return e.startsWith(f.SANDBOX_LINK_PREFIX) ? e : (0, P.A)(e);
        },
        B = [
          A.Z,
          [
            function () {
              let e = this.data();
              function n(n, t) {
                let r = e[n] ? e[n] : (e[n] = []);
                r.push(t);
              }
              n("micromarkExtensions", {
                flow: { [g.q.dollarSign]: j, [g.q.backslash]: b },
                text: {
                  [g.q.dollarSign]: {
                    tokenize: function (e, n, t) {
                      let r,
                        a,
                        i = 0;
                      return function (n) {
                        return (
                          e.enter("mathText"),
                          e.enter("mathTextSequence"),
                          (function n(r) {
                            return r === g.q.dollarSign
                              ? (e.consume(r), i++, n)
                              : i < 2
                              ? t(r)
                              : (e.exit("mathTextSequence"), o(r));
                          })(n)
                        );
                      };
                      function o(l) {
                        return l === g.q.eof
                          ? t(l)
                          : l === g.q.dollarSign
                          ? ((a = e.enter("mathTextSequence")),
                            (r = 0),
                            (function t(o) {
                              return o === g.q.dollarSign
                                ? (e.consume(o), r++, t)
                                : r === i
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  n(o))
                                : ((a.type = "mathTextData"), s(o));
                            })(l))
                          : l === g.q.space
                          ? (e.enter("space"), e.consume(l), e.exit("space"), o)
                          : (0, p.Ch)(l)
                          ? (e.enter(x.V.lineEnding),
                            e.consume(l),
                            e.exit(x.V.lineEnding),
                            o)
                          : (e.enter("mathTextData"), s(l));
                      }
                      function s(n) {
                        return n === g.q.eof ||
                          n === g.q.space ||
                          n === g.q.dollarSign ||
                          (0, p.Ch)(n)
                          ? (e.exit("mathTextData"), o(n))
                          : (e.consume(n), s);
                      }
                    },
                    resolve: _,
                    previous: M,
                  },
                  [g.q.backslash]: [
                    {
                      tokenize: function (e, n, t) {
                        let r;
                        let a = [],
                          i = [],
                          o = this;
                        return function (n) {
                          return (
                            g.q.backslash,
                            C.call(o, o.previous) && o.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function n(r) {
                              return (a.join(","),
                              (r === g.q.backslash && 0 === a.length) ||
                                (r === g.q.leftParenthesis && 1 === a.length))
                                ? (e.consume(r), a.push(r), n)
                                : a.length < 2
                                ? t(r)
                                : (e.exit("mathTextSequence"), s(r));
                            })(n)
                          );
                        };
                        function s(o) {
                          return o === g.q.eof
                            ? t(o)
                            : o === g.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function t(o) {
                                return (a.join(","),
                                (o === g.q.backslash && 0 === i.length) ||
                                  (o === g.q.rightParenthesis &&
                                    1 === i.length))
                                  ? (e.consume(o), i.push(o), t)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o))
                                  : ((r.type = "mathTextData"), l(o));
                              })(o))
                            : o === g.q.space
                            ? (e.enter("space"),
                              e.consume(o),
                              e.exit("space"),
                              s)
                            : (0, p.Ch)(o)
                            ? (e.enter(x.V.lineEnding),
                              e.consume(o),
                              e.exit(x.V.lineEnding),
                              s)
                            : (e.enter("mathTextData"), l(o));
                        }
                        function l(n) {
                          return n === g.q.eof ||
                            n === g.q.space ||
                            n === g.q.backslash ||
                            (0, p.Ch)(n)
                            ? (e.exit("mathTextData"), s(n))
                            : (e.consume(n), l);
                        }
                      },
                      resolve: k,
                      previous: C,
                    },
                    {
                      tokenize: function (e, n, t) {
                        let r;
                        let a = [],
                          i = [],
                          o = this;
                        return function (n) {
                          return (
                            g.q.backslash,
                            N.call(o, o.previous) && o.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function n(r) {
                              return (a.join(","),
                              (r === g.q.backslash && 0 === a.length) ||
                                (r === g.q.leftSquareBracket && 1 === a.length))
                                ? (e.consume(r), a.push(r), n)
                                : a.length < 2
                                ? t(r)
                                : (e.exit("mathTextSequence"), s(r));
                            })(n)
                          );
                        };
                        function s(o) {
                          return o === g.q.eof
                            ? t(o)
                            : o === g.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function t(o) {
                                return (a.join(","),
                                (o === g.q.backslash && 0 === i.length) ||
                                  (o === g.q.rightSquareBracket &&
                                    1 === i.length))
                                  ? (e.consume(o), i.push(o), t)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o))
                                  : ((r.type = "mathTextData"), l(o));
                              })(o))
                            : o === g.q.space
                            ? (e.enter("space"),
                              e.consume(o),
                              e.exit("space"),
                              s)
                            : (0, p.Ch)(o)
                            ? (e.enter(x.V.lineEnding),
                              e.consume(o),
                              e.exit(x.V.lineEnding),
                              s)
                            : (e.enter("mathTextData"), l(o));
                        }
                        function l(n) {
                          return n === g.q.eof ||
                            n === g.q.space ||
                            n === g.q.backslash ||
                            (0, p.Ch)(n)
                            ? (e.exit("mathTextData"), s(n))
                            : (e.consume(n), l);
                        }
                      },
                      resolve: T,
                      previous: N,
                    },
                  ],
                },
              }),
                n("fromMarkdownExtensions", (0, h.N)()),
                n("toMarkdownExtensions", (0, h.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        O = [
          [
            S.Z,
            {
              languages: { mathematica: I.Z },
              detect: !0,
              subset: [
                "arduino",
                "bash",
                "c",
                "cpp",
                "csharp",
                "css",
                "diff",
                "go",
                "graphql",
                "java",
                "javascript",
                "json",
                "kotlin",
                "latex",
                "less",
                "lua",
                "makefile",
                "makefile",
                "markdown",
                "matlab",
                "mathematica",
                "nginx",
                "objectivec",
                "perl",
                "pgsql",
                "php-template",
                "php",
                "plaintext",
                "python-repl",
                "python",
                "r",
                "ruby",
                "rust",
                "scss",
                "shell",
                "sql",
                "swift",
                "typescript",
                "vbnet",
                "wasm",
                "xml",
                "yaml",
              ],
              ignoreMissing: !0,
              aliases: { mathematica: "wolfram" },
            },
          ],
          Z.Z,
          [R.Z, { newlines: !0 }],
        ],
        q = {
          code: function (e) {
            var n = e.inline,
              t = e.node,
              s = e.className,
              l = e.children,
              u = (0, i._)(e, ["inline", "node", "className", "children"]);
            if (n) {
              var c = (0, D.B)(t),
                d = (0, F.T$)(c);
              return d
                ? (0, o.jsx)(F.s8, { displayInfo: d })
                : (0, o.jsx)(
                    "code",
                    (0, a._)((0, r._)({ className: s }, u), { children: l })
                  );
            }
            var f,
              h =
                null ===
                  (f =
                    null == s
                      ? void 0
                      : s.split(" ").filter(function (e) {
                          return e.startsWith("language-");
                        })) || void 0 === f
                  ? void 0
                  : f[0],
              g = h ? h.split("-")[1] : "";
            return (0, o.jsx)(L.Z, {
              language: g,
              className: s,
              content: (0, D.B)(t),
              children: l,
            });
          },
        };
      function U(e) {
        var n = e.size,
          t = e.children,
          h = e.className,
          g = e.onSandboxLinkClick,
          m = (0, l.F)().theme,
          p = (0, d.hz)().has("tools2"),
          v = (0, u.useMemo)(
            function () {
              return (0, a._)((0, r._)({}, q), {
                a: function (e) {
                  var n = e.node,
                    t = (0, i._)(e, ["node"]),
                    s = n.properties.href;
                  return g && p && s.startsWith(f.SANDBOX_LINK_PREFIX)
                    ? (0, o.jsx)("a", (0, a._)((0, r._)({}, t), { onClick: g }))
                    : (0, o.jsx)("a", (0, r._)({}, t));
                },
                img: function (e) {
                  var n = e.node,
                    t = (0, i._)(e, ["node"]),
                    a = n.properties.src;
                  return a.startsWith("sandbox:") || a.startsWith("attachment:")
                    ? null
                    : (0, o.jsx)("img", (0, r._)({}, t));
                },
              });
            },
            [g, p]
          );
        return (0, o.jsx)(c.D, {
          rehypePlugins: O,
          remarkPlugins: B,
          linkTarget: "_new",
          className: (0, s.Z)(
            h,
            "markdown prose w-full break-words dark:prose-invert",
            "dark" === m ? "dark" : "light",
            "small" === (void 0 === n ? "medium" : n) && "prose-xs"
          ),
          transformLinkUri: E,
          components: v,
          children: t,
        });
      }
    },
    99585: function (e, n, t) {
      "use strict";
      t.d(n, {
        Cf: function () {
          return ed;
        },
        ZP: function () {
          return ec;
        },
        xz: function () {
          return ef;
        },
      });
      var r,
        a = t(39324),
        i = t(70216),
        o = t(4337),
        s = t(35250),
        l = t(19841),
        u = t(68555),
        c = t(70079),
        d = t(34303),
        f = t(75179),
        h = t(64135),
        g = t(88038),
        m = t(75527),
        p = t(36716),
        v = t(59710),
        x = t(57311),
        b = t(66958),
        y = t(28869),
        j = t(22830),
        w = t(2827),
        k = t(82841),
        C = t(36218),
        _ = t(69403);
      function M() {
        var e = (0, o._)(["text-center mt-2 flex justify-center"]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      var T = d.Z.div(M());
      function N(e) {
        var n = e.initialText,
          t = e.role,
          r = e.clientThreadId,
          a = e.currentLeaf,
          i = e.onUpdateNode,
          o = e.onChangeItemInView,
          l = e.onExitEdit,
          u = e.onDeleteNode,
          d = e.onRequestCompletion,
          f = e.onCreateEditNode,
          h = e.disabled,
          g = (0, k.WS)(),
          p = (0, c.useId)(),
          v = "".concat(a, "-").concat(p),
          x = (0, j._)((0, c.useState)(n || ""), 2),
          y = x[0],
          M = x[1],
          N = (0, c.useRef)(null);
        (0, c.useEffect)(function () {
          f(a, v);
        }, []);
        var I = (0, c.useCallback)(function (e) {
            M(e.currentTarget.value);
          }, []),
          P = (0, c.useCallback)(
            function () {
              i(v, y), o(v), d(_.Os.Next, v, { eventSource: "mouse" }, !0), l();
            },
            [i, v, y, o, d, l]
          ),
          S = (0, c.useCallback)(
            function () {
              u(v),
                o(a),
                l(),
                g(
                  t === _.uU.User
                    ? C.s6.cancelEditPrompt
                    : C.s6.cancelEditCompletion,
                  { threadId: m.tQ.getServerThreadId(r) }
                );
            },
            [v, a, g, o, u, l, t, r]
          );
        return (
          (0, c.useEffect)(
            function () {
              var e = N.current,
                n = function (e) {
                  "Enter" === e.key && e.metaKey
                    ? P()
                    : "Escape" === e.key && S();
                };
              return (
                e && e.addEventListener("keydown", n),
                function () {
                  e && e.removeEventListener("keydown", n);
                }
              );
            },
            [S, P]
          ),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(w.ZP, {
                ref: N,
                value: y,
                onChange: I,
                className:
                  "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0",
              }),
              (0, s.jsxs)(T, {
                children: [
                  (0, s.jsx)(b.z, {
                    as: "button",
                    onClick: P,
                    className: "mr-2",
                    disabled: h,
                    children: "Save & Submit",
                  }),
                  (0, s.jsx)(b.z, {
                    as: "button",
                    color: "neutral",
                    onClick: S,
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var I = t(21722),
        P = t(39889),
        S = t(10642),
        Z = t(47635),
        R = t(32787),
        A = t(24274),
        D = t(75515),
        F = t(180);
      function L() {
        var e = (0, o._)(["text-xs text-black\n", ""]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = (0, o._)(["relative w-full overflow-hidden pt-[67%]"]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function B(e) {
        var n,
          t = e.title,
          r = e.url,
          a = e.imageUrl,
          i = e.logoUrl,
          o = e.className,
          u = e.mini,
          d = !!a,
          f = (0, k.WS)(),
          h = (0, c.useCallback)(
            function () {
              f(C.s6.carouselCardClick, { content: r });
            },
            [f, r]
          );
        try {
          n = Z.get(new URL(r).hostname);
        } catch (e) {
          return console.error("Invalid card url: ", e), null;
        }
        return (0, s.jsxs)(r ? "a" : "div", {
          className: (0, l.Z)(
            "flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]",
            o
          ),
          href: r,
          target: r ? "_blank" : "",
          onClick: h,
          children: [
            d &&
              (0, s.jsx)(q, {
                children: (0, s.jsx)("div", {
                  className: "absolute inset-0",
                  children: (0, s.jsx)("img", {
                    src: a,
                    alt: "image of ".concat(t),
                    className:
                      "h-full w-full border-b border-black/10 object-cover",
                  }),
                }),
              }),
            (0, s.jsxs)("div", {
              className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
              children: [
                (0, s.jsx)(O, {
                  $clamp: (void 0 !== u && u) || d,
                  children: t,
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    i
                      ? (0, s.jsx)(D.Z, { url: i, name: n, size: 13 })
                      : (0, s.jsx)(F.Z, { url: r, size: 13 }),
                    (0, s.jsx)("div", {
                      className:
                        "text-[10px] leading-3 text-gray-500 line-clamp-1",
                      children: n,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var O = d.Z.div(L(), function (e) {
          return e.$clamp && "line-clamp-2";
        }),
        q = d.Z.div(E()),
        U = t(96237),
        z = t(21260),
        H = t(52422),
        V = t(95182),
        W = t.n(V),
        G = t(1454),
        Q = t(77442),
        $ = t(38317);
      function J(e) {
        var n = e.disabled,
          t = e.onClick,
          r = e.left,
          a = e.children;
        return (0, s.jsx)("button", {
          disabled: n,
          onClick: t,
          "aria-disabled": n,
          className: (0, l.Z)(
            "flex h-6 w-[30px] items-center justify-center rounded-full",
            "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white",
            "transition-opacity disabled:opacity-20",
            "cursor-pointer disabled:cursor-auto",
            "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2",
            void 0 !== r && r
              ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full"
              : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full",
            n && "lg:hidden"
          ),
          children: a,
        });
      }
      var Y = t(70575),
        X = function (e) {
          var n = e.x,
            t = e.children,
            r = e.className;
          return (0, s.jsx)(Y.E.div, {
            className: (0, l.Z)(
              "mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]",
              r
            ),
            style: { x: n },
            children: t,
          });
        },
        K = { type: "spring", bounce: 0 },
        ee = (0, c.forwardRef)(function (e, n) {
          return (0,
          s.jsx)("div", { ref: n, className: (0, l.Z)("relative flex h-full w-full overflow-hidden", e.className), children: e.children });
        });
      ee.displayName = "CarouselContainer";
      var en =
        ((r = {}),
        (0, U._)(r, Q._G.Mobile, 1),
        (0, U._)(r, Q._G.Small, 2),
        (0, U._)(r, Q._G.Medium, 2),
        (0, U._)(r, Q._G.Large, 3),
        (0, U._)(r, Q._G.XLarge, 3),
        r);
      function et(e) {
        var n = e.children,
          t = e.loop,
          r = void 0 === t || t,
          a = e.className,
          i = (0, z.c)(0),
          o = (0, c.useRef)(null),
          u = (0, j._)((0, c.useState)(0), 2),
          d = u[0],
          f = u[1],
          h = en[(0, Q.dQ)()] || 1,
          g = c.Children.count(n) > h,
          m = c.Children.toArray(n),
          p = (0, c.useCallback)(
            function () {
              var e,
                n =
                  null === (e = o.current) || void 0 === e
                    ? void 0
                    : e.clientWidth;
              return n ? -Math.floor(d / h) * (n + 12) : 0;
            },
            [h, d]
          ),
          v = (0, c.useCallback)(
            function (e) {
              var n = h * e;
              r
                ? f(function (e) {
                    return ((e + n) % m.length) - 1;
                  })
                : f(function (e) {
                    return W()(e + n, 0, m.length - 1);
                  });
            },
            [m.length, r, h]
          ),
          x = (0, c.useCallback)(
            function () {
              v(1);
            },
            [v]
          ),
          b = (0, c.useCallback)(
            function () {
              v(-1);
            },
            [v]
          ),
          y = (0, j._)(
            (0, c.useMemo)(
              function () {
                if (r) return [!0, !0];
                var e = d < m.length - h;
                return [d > 0, e];
              },
              [m.length, d, r, h]
            ),
            2
          ),
          w = y[0],
          k = y[1];
        return (
          (0, c.useEffect)(
            function () {
              return (0, H.j)(i, p(), K).stop;
            },
            [p, d, i]
          ),
          (0, s.jsxs)("div", {
            className: (0, l.Z)(
              "relative h-full w-full",
              a,
              g && "mb-12 lg:mb-0"
            ),
            children: [
              (0, s.jsx)(ee, {
                ref: o,
                children: m.map(function (e, n) {
                  return (0, s.jsx)(X, { x: i, children: e }, n);
                }),
              }),
              g &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(J, {
                      onClick: b,
                      left: !0,
                      disabled: !w,
                      children: (0, s.jsx)($.ZP, { icon: G.YFh }),
                    }),
                    (0, s.jsx)(J, {
                      onClick: x,
                      disabled: !k,
                      children: (0, s.jsx)($.ZP, { icon: G.Tfp }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var er = t(44878),
        ea = new Set([
          "og:site_name",
          "og:title",
          "og:description",
          "og:image",
          "og:url",
        ]),
        ei = {
          "og:site_name": "metadataTitle",
          "og:title": "title",
          "og:description": "description",
          "og:image": "imageUrl",
          "og:url": "url",
        },
        eo =
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        es = c.memo(function (e) {
          var n,
            t,
            r = e.urls,
            a = (0, er.Z)(),
            i =
              ((n = (0, R.kP)().session),
              (t = (0, S.h)({
                queries: r.map(function (e) {
                  return {
                    queryKey: ["opengraph", e],
                    queryFn: (0, I._)(function () {
                      return (0, P.Jh)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, A.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, n.sent()];
                        }
                      });
                    }),
                    enabled: !!(e && (null == n ? void 0 : n.accessToken)),
                    retry: !1,
                  };
                }),
              })),
              (0, c.useMemo)(
                function () {
                  return t
                    .map(function (e, n) {
                      var t = e.data,
                        a = e.isError,
                        i = e.isLoading,
                        o = r[n];
                      if (a || i) return null;
                      var s = t.tags.reduce(function (e, n) {
                        return ea.has(n.type) && (e[ei[n.type]] = n.value), e;
                      }, {});
                      try {
                        var l,
                          u = o.split(/[#?]/)[0],
                          c =
                            null === (l = s.url) || void 0 === l
                              ? void 0
                              : l.endsWith("/login"),
                          d = s.url && "/" === new URL(s.url || "").pathname;
                        if (u !== s.url && (c || d)) return null;
                      } catch (e) {
                        return null;
                      }
                      return (s.url = o), s;
                    })
                    .filter(Boolean);
                },
                [t, r]
              )),
            o = (0, c.useMemo)(
              function () {
                return !i.some(function (e) {
                  return !!(null == e ? void 0 : e.imageUrl);
                });
              },
              [i]
            ),
            l = (0, c.useMemo)(
              function () {
                return a.reduce(function (e, n) {
                  return (e[Z.get(n.domain)] = n.manifest.logo_url), e;
                }, {});
              },
              [a]
            ),
            u = (0, c.useMemo)(
              function () {
                return i.map(function (e) {
                  var n, t;
                  if (!e) return null;
                  try {
                    n = Z.get(new URL(e.url).hostname);
                  } catch (e) {
                    return console.error("Invalid card url: ", e), null;
                  }
                  return (
                    n in l && (t = l[n]),
                    (0, s.jsx)(
                      B,
                      {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: t,
                        mini: o,
                      },
                      e.url
                    )
                  );
                });
              },
              [i, o, l]
            );
          return 0 === i.length
            ? null
            : (0, s.jsx)(et, { loop: !1, children: u });
        }),
        el = t(5046);
      function eu() {
        var e = (0, o._)([
          "\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n",
          "\n",
          "\n",
          "\n",
        ]);
        return (
          (eu = function () {
            return e;
          }),
          e
        );
      }
      var ec = c.memo(function (e) {
        var n,
          t = e.message,
          r = e.isEditing,
          o = e.format,
          l = e.isCompletionInProgress,
          u = e.className,
          c = e.onSandboxLinkClick,
          d = e.isCompletion,
          f = e.isResponseToPluginMessage,
          h = (0, i._)(e, [
            "message",
            "isEditing",
            "format",
            "isCompletionInProgress",
            "className",
            "onSandboxLinkClick",
            "isCompletion",
            "isResponseToPluginMessage",
          ]);
        return r
          ? (0, s.jsx)(
              N,
              (0, a._)(
                {
                  currentLeaf: t.nodeId,
                  initialText: x.Cv.getTextFromMessage(t.message),
                  role: t.message.author.role,
                },
                h
              )
            )
          : (0, s.jsx)(ed, {
              text: x.Cv.getTextFromMessage(t.message),
              errCode: t.errCode,
              err: t.err,
              flag: t.errType,
              isCompletionInProgress: l,
              format: o,
              className: u,
              citations:
                null === (n = t.message.metadata) || void 0 === n
                  ? void 0
                  : n.citations,
              isCompletion: d,
              onSandboxLinkClick: c,
              id: t.nodeId,
              onRequestMoreCompletions: h.onRequestMoreCompletions,
              clientThreadId: h.clientThreadId,
              showExtractedLinkCards: f,
            });
      });
      function ed(e) {
        var n,
          t,
          r,
          a = e.citations,
          i = e.className,
          o = e.err,
          u = e.errCode,
          d = e.flag,
          m = e.format,
          x = e.isCompletionInProgress,
          b = e.size,
          j = e.text,
          w = e.onSandboxLinkClick,
          k = e.isCompletion,
          C = e.id,
          _ = e.onRequestMoreCompletions,
          M = e.clientThreadId,
          T = e.showExtractedLinkCards,
          N = u === f.Dd,
          I = (0, h.hz)(),
          P =
            ((t = (n = { text: j, isCompletionInProgress: x }).text),
            (r = n.isCompletionInProgress),
            (0, c.useMemo)(
              function () {
                if (r) return [];
                var e = t.match(eo);
                return Array.from(new Set(e));
              },
              [r, t]
            )),
          S = (0, c.useMemo)(
            function () {
              switch (u) {
                case f.Dd:
                  return (0, s.jsx)(em, {
                    $flag: d,
                    children: (0, s.jsx)(eg, {}),
                  });
                case el.uU:
                  if (I.has("model_preview"))
                    return (0, s.jsx)(eh, {
                      id: C,
                      onRequestMoreCompletions: _,
                      flag: d,
                      clientThreadId: M,
                    });
                  return (0, s.jsx)(em, { $flag: d, children: o });
                case v.wp:
                  return (0, s.jsx)(em, {
                    $flag: d,
                    children:
                      "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT.",
                  });
                default:
                  return (0, s.jsx)(em, { $flag: d, children: o });
              }
            },
            [o, u, I, d, C, _, M]
          ),
          Z = (0, h.hz)().has(g.FZ);
        return (0, s.jsxs)("div", {
          className: (0, l.Z)(
            i,
            "flex flex-col items-start gap-4 whitespace-pre-wrap break-words",
            "danger" === d && "flex flex-row gap-2 text-red-500",
            "warning" === d && "text-orange-500",
            Z && "text-base"
          ),
          children: [
            (o && !j) || N || !m
              ? "danger" === d && N
                ? null
                : j
              : (0, s.jsx)(y.Z, {
                  size: void 0 === b ? "medium" : b,
                  className: (0, l.Z)(
                    "danger" !== d && x && "result-streaming",
                    "danger" === d && "text-red-500",
                    "warning" === d && "text-orange-500"
                  ),
                  onSandboxLinkClick: w,
                  children: "" === j ? "&#8203;" : (0, p.Qd)(j, a),
                }),
            k && T && P.length > 0 && (0, s.jsx)(es, { urls: P }),
            d && S,
          ],
        });
      }
      function ef(e) {
        var n = e && new Date(e),
          t = n && new Date(n);
        return t
          ? "after "
              .concat(t.getHours() % 12 || 12, ":")
              .concat(10 > t.getMinutes() ? "0" : "")
              .concat(t.getMinutes(), " ")
              .concat(t.getHours() >= 12 ? "PM" : "AM")
          : "later";
      }
      function eh(e) {
        var n = e.id,
          t = e.onRequestMoreCompletions,
          r = e.flag,
          a = e.clientThreadId,
          i = (0, u.useRouter)(),
          o = (0, el.Y8)(function (e) {
            return e.isoDate;
          }),
          l = ef(o),
          d = (0, c.useCallback)(
            function () {
              t(n, { eventSource: "mouse" }, !0, "none", !1);
            },
            [n, t]
          ),
          f = (0, c.useCallback)(
            function () {
              var e = void 0 !== a ? m.tQ.getServerThreadId(a) : void 0;
              void 0 === e
                ? i.replace("/", void 0, { shallow: !0 })
                : (0, el.m0)(e),
                t(n, { eventSource: "mouse" }, !0, "none", !0);
            },
            [n, t, i, a]
          ),
          h = o
            ? (0, s.jsxs)("span", {
                children: [
                  "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(
                    l,
                    "."
                  ),
                  " ",
                  (0, s.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more",
                  }),
                ],
              })
            : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
        return (0, s.jsx)(em, {
          $flag: !!o && r,
          children: (0, s.jsxs)("div", {
            className: "flex items-center gap-6",
            children: [
              h,
              !o &&
                (0, s.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: d,
                  children: "Try again",
                }),
              o &&
                (0, s.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: f,
                  children: "Use default model",
                }),
            ],
          }),
        });
      }
      function eg() {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            "This content may violate our",
            " ",
            (0, s.jsx)("a", {
              target: "_blank",
              href: "https://platform.openai.com/docs/usage-policies/content-policy",
              rel: "noreferrer",
              className: "bold underline",
              children: "content policy",
            }),
            ". If you believe this to be in error, please",
            " ",
            (0, s.jsx)("a", {
              target: "_blank",
              href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
              rel: "noreferrer",
              className: "bold underline",
              children: "submit your feedback",
            }),
            " ",
            "— your input will aid our research in this area.",
          ],
        });
      }
      var em = d.Z.div(
        eu(),
        function (e) {
          return "warning" === e.$flag && "border-orange-500 bg-orange-500/10";
        },
        function (e) {
          return "danger" === e.$flag && "border-red-500 bg-red-500/10";
        },
        function (e) {
          return !e.$flag && "border-green-500 bg-green-500/10";
        }
      );
    },
    5759: function (e, n, t) {
      "use strict";
      t.d(n, {
        I: function () {
          return g;
        },
        Z: function () {
          return c;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(34303);
      function o() {
        var e = (0, r._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r._)(["w-10 text-2xl text-center"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, r._)(["flex-1 leading-5"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, r._)(["flex gap-4 flex-col text-sm"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        var n = e.icon,
          t = e.children;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(f, { children: n }),
            (0, a.jsx)(h, { children: t }),
          ],
        });
      }
      var d = i.Z.div(o()),
        f = i.Z.div(s()),
        h = i.Z.div(l()),
        g = i.Z.div(u());
    },
    38631: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(35250),
        a = t(75515);
      function i(e) {
        var n = e.plugin,
          t = n.manifest.name_for_human;
        return (0, r.jsxs)("div", {
          className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
          children: [
            (0, r.jsx)(a.Z, {
              url: n.manifest.logo_url,
              name: t,
              size: 32,
              className: "flex-shrink-0",
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, r.jsx)("h2", {
                  className: "align-top text-base font-medium",
                  children: t,
                }),
                (0, r.jsx)("div", {
                  className: "text-sm",
                  children: n.manifest.description_for_human,
                }),
              ],
            }),
          ],
        });
      }
    },
    49910: function (e, n, t) {
      "use strict";
      t.d(n, {
        bf: function () {
          return f;
        },
        q6: function () {
          return d;
        },
        rC: function () {
          return c;
        },
      });
      var r = t(39324),
        a = t(70216),
        i = t(22830),
        o = t(35250),
        s = t(70079),
        l = t(1454),
        u = t(38317);
      function c(e) {
        var n = e.manifestValidationInfo,
          t = (0, a._)(e, ["manifestValidationInfo"]),
          i = n.manifest_dict,
          s = n.warnings,
          l = n.errors;
        return (0, o.jsx)(
          h,
          (0, r._)({ name: "manifest", content: i, warnings: s, errors: l }, t)
        );
      }
      function d(e) {
        var n = e.apiValidationInfo,
          t = (0, a._)(e, ["apiValidationInfo"]),
          i = n.openapi_spec_dict,
          s = n.warnings,
          l = n.errors;
        return (0, o.jsx)(
          h,
          (0, r._)(
            { name: "OpenAPI spec", content: i, warnings: s, errors: l },
            t
          )
        );
      }
      function f(e) {
        var n = e.apiValidationInfo,
          t = (0, a._)(e, ["apiValidationInfo"]),
          i = n.api_typescript;
        return i
          ? (0, o.jsx)(
              g,
              (0, r._)({ text: "Prompt for ChatGPT", content: i }, t)
            )
          : null;
      }
      function h(e) {
        var n = e.name,
          t = e.content,
          i = e.warnings,
          s = e.errors,
          c = (0, a._)(e, ["name", "content", "warnings", "errors"]),
          d = i && i.length > 0,
          f = s && s.length > 0,
          h = "Validated ".concat(n),
          m = (0, o.jsx)(u.ZP, { icon: l.UgA, className: "text-green-500" });
        return (
          f
            ? ((h = "Errors in ".concat(n)),
              (m = (0, o.jsx)(u.ZP, {
                icon: l.q5L,
                className: "text-red-500",
              })))
            : d &&
              ((h = "Warnings in ".concat(n)),
              (m = (0, o.jsx)(u.ZP, {
                icon: l.bcx,
                className: "text-yellow-500",
              }))),
          (0, o.jsx)(
            g,
            (0, r._)(
              { icon: m, text: h, content: t, warnings: i, errors: s },
              c
            )
          )
        );
      }
      function g(e) {
        var n = e.icon,
          t = e.text,
          r = e.content,
          a = e.warnings,
          c = e.errors,
          d = e.expanded,
          f = e.onChangeExpanded,
          h = (0, i._)((0, s.useState)(!1), 2),
          g = h[0],
          m = h[1],
          p = null != d ? d : g,
          v = (0, s.useCallback)(
            function () {
              f
                ? f(!p)
                : m(function (e) {
                    return !e;
                  });
            },
            [p, f]
          );
        return (0, o.jsxs)("div", {
          className: "flex flex-col gap-2 text-sm",
          children: [
            (0, o.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                n && (0, o.jsx)("div", { children: n }),
                (0, o.jsx)("div", { children: t }),
                (0, o.jsx)("div", {
                  role: "button",
                  className: "cursor-pointer text-gray-500 hover:text-gray-700",
                  onClick: v,
                  children: (0, o.jsx)(u.ZP, { icon: p ? l.rH8 : l.bTu }),
                }),
              ],
            }),
            p &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsxs)("div", {
                    className: "flex flex-col gap-2 font-semibold",
                    children: [
                      c &&
                        c.map(function (e, n) {
                          return (0,
                          o.jsx)("div", { className: "text-red-500", children: e }, n);
                        }),
                      a &&
                        a.map(function (e, n) {
                          return (0,
                          o.jsx)("div", { className: "text-yellow-500", children: e }, n);
                        }),
                    ],
                  }),
                  r &&
                    (0, o.jsx)("pre", {
                      className: "overflow-auto whitespace-pre-wrap text-xs",
                      children:
                        "string" == typeof r ? r : JSON.stringify(r, null, 2),
                    }),
                ],
              }),
          ],
        });
      }
    },
    17915: function (e, n, t) {
      "use strict";
      t.d(n, {
        GI: function () {
          return g;
        },
        U$: function () {
          return f;
        },
        aU: function () {
          return m;
        },
        nT: function () {
          return p;
        },
        qo: function () {
          return h;
        },
        sd: function () {
          return v;
        },
      });
      var r = t(21722),
        a = t(22830),
        i = t(81949),
        o = t(39889),
        s = t(35448),
        l = t(13451),
        u = t(70079),
        c = t(24274),
        d = t(86573);
      function f(e) {
        var n = e.onSuccess,
          t = e.onError,
          r = e.onSettled,
          a = (0, s.NL)(),
          i = (0, l.D)(c.ZP.updatePluginUserSettings.bind(c.ZP), {
            onSuccess: function (e) {
              g(e, a, ["installedAip"]), m(e, a, ["approvedAip"]), n(e);
            },
            onError: t,
            onSettled: r,
          }).mutate;
        return (0, u.useCallback)(
          function (e) {
            i({ pluginId: e, isInstalled: !0 });
          },
          [i]
        );
      }
      function h(e) {
        var n = e.onSuccess,
          t = e.onError,
          r = e.onSettled,
          a = (0, s.NL)(),
          o = (0, l.D)(c.ZP.updatePluginUserSettings.bind(c.ZP), {
            onSuccess: function (e) {
              (function (e, n, t) {
                n.setQueryData(t, function (n) {
                  var t = (0, i._)((null == n ? void 0 : n.items) || []),
                    r = t.findIndex(function (n) {
                      return n.id === e.id;
                    });
                  return (
                    -1 !== r && t.splice(r, 1), { count: t.length, items: t }
                  );
                });
              })(e, a, ["installedAip"]),
                m(e, a, ["approvedAip"]),
                n(e);
            },
            onError: t,
            onSettled: r,
          }).mutate;
        return (0, u.useCallback)(
          function (e) {
            o({ pluginId: e, isInstalled: !1 });
          },
          [o]
        );
      }
      function g(e, n, t) {
        n.setQueryData(t, function (n) {
          var t = (0, i._)((null == n ? void 0 : n.items) || []),
            r = t.findIndex(function (n) {
              return n.id === e.id;
            });
          return (
            -1 !== r ? (t[r] = e) : t.push(e), { count: t.length, items: t }
          );
        });
      }
      function m(e, n, t) {
        n.setQueryData(t, function (n) {
          var t = (0, i._)((null == n ? void 0 : n.items) || []),
            r = t.findIndex(function (n) {
              return n.id === e.id;
            });
          return -1 !== r && (t[r] = e), { count: t.length, items: t };
        });
      }
      function p(e) {
        var n = e.manifest.auth;
        if ("oauth" !== n.type || !e.oauth_client_id) return null;
        var t = new URLSearchParams({
          response_type: "code",
          client_id: e.oauth_client_id,
          redirect_uri: ""
            .concat(window.location.origin, "/aip/")
            .concat(e.id, "/oauth/callback"),
          scope: n.scope,
        });
        return (
          n.client_url.includes("slack.com") &&
            (t.delete("scope"), t.append("user_scope", n.scope)),
          "".concat(n.client_url, "?").concat(t)
        );
      }
      function v() {
        var e,
          n = (0, a._)((0, u.useState)(!1), 2),
          t = n[0],
          i = n[1];
        return {
          fetchManifestAndSpec: (0, u.useCallback)(
            ((e = (0, r._)(function (e) {
              var n, t, r, a, s, l, u, f, h;
              return (0, o.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    (n = e.domain),
                      (t = e.manifestAccessToken),
                      (r = e.onSuccess),
                      (a = e.onError),
                      (s = (0, d.NB)(n)),
                      (o.label = 1);
                  case 1:
                    if ((o.trys.push([1, 10, 11, 12]), i(!0), !(null != s)))
                      return [3, 3];
                    return [4, (0, d.Zb)(s)];
                  case 2:
                    if (void 0 === (l = o.sent())) return [2];
                    return (
                      r({
                        domain: s,
                        scrapeManifestResponse: {
                          plugin: l.plugin,
                          manifest_validation_info: l.manifest_validation_info,
                        },
                        apiValidationInfo: l.api_validation_info,
                      }),
                      [3, 9]
                    );
                  case 3:
                    return [
                      4,
                      c.ZP.scrapePluginManifest({
                        domain: n,
                        manifestAccessToken: t,
                      }),
                    ];
                  case 4:
                    if (!(u = o.sent()).plugin) return [3, 8];
                    o.label = 5;
                  case 5:
                    return (
                      o.trys.push([5, 7, , 8]),
                      [4, c.ZP.getPluginApi({ id: u.plugin.id })]
                    );
                  case 6:
                    return (f = o.sent().api_validation_info), [3, 8];
                  case 7:
                    return o.sent(), [3, 8];
                  case 8:
                    r({
                      domain: n,
                      scrapeManifestResponse: u,
                      apiValidationInfo: f,
                      manifestAccessToken: t,
                    }),
                      (o.label = 9);
                  case 9:
                    return [3, 12];
                  case 10:
                    return (h = o.sent()), a(null != s ? h : void 0), [3, 12];
                  case 11:
                    return i(!1), [7];
                  case 12:
                    return [2];
                }
              });
            })),
            function (n) {
              return e.apply(this, arguments);
            }),
            []
          ),
          isLoading: t,
        };
      }
    },
    86573: function (e, n, t) {
      "use strict";
      t.d(n, {
        NB: function () {
          return p;
        },
        Zb: function () {
          return v;
        },
        cf: function () {
          return m;
        },
        qZ: function () {
          return f;
        },
        wR: function () {
          return d;
        },
      });
      var r = t(21722),
        a = t(39324),
        i = t(39889),
        o = t(8844),
        s = t(22121),
        l = t(69403),
        u = t(24274),
        c = t(97688);
      function d(e) {
        var n,
          t,
          r,
          a =
            (null === (n = e.metadata) || void 0 === n
              ? void 0
              : null === (t = n.invoked_plugin) || void 0 === t
              ? void 0
              : t.http_api_call_data) ||
            (null === (r = e.metadata) || void 0 === r
              ? void 0
              : r.http_api_call_data);
        if (void 0 !== a) {
          if (e.author.role !== l.uU.Assistant) {
            console.error(
              "Refusing to make localhost plugin HTTP call from non-assistant message",
              e
            );
            return;
          }
          if (
            "object" != typeof a ||
            "string" != typeof a.namespace ||
            0 === a.namespace.length ||
            "string" != typeof a.function_name ||
            0 === a.function_name.length ||
            "string" != typeof a.parent_message_id ||
            0 === a.parent_message_id.length ||
            "string" != typeof a.url ||
            0 === a.url.length ||
            "string" != typeof a.method ||
            !["get", "post", "put", "delete", "patch"].includes(a.method) ||
            !Array.isArray(a.qs_params) ||
            a.qs_params.some(function (e) {
              return (
                !Array.isArray(e) ||
                2 !== e.length ||
                "string" != typeof e[0] ||
                "string" != typeof e[1]
              );
            }) ||
            "object" != typeof a.headers ||
            Object.keys(a.headers).some(function (e) {
              return "string" != typeof e;
            }) ||
            Object.values(a.headers).some(function (e) {
              return "string" != typeof e;
            }) ||
            !(
              null === a.body ||
              ("object" == typeof a.body &&
                Object.keys(a.body).every(function (e) {
                  return "string" == typeof e;
                }))
            ) ||
            "string" != typeof a.api_function_type ||
            !["kwargs", "chat"].includes(a.api_function_type)
          ) {
            console.error(
              "Refusing to make localhost plugin HTTP call with invalid metadata",
              e
            );
            return;
          }
          if (!/^https?:\/\/localhost:/.test(a.url)) {
            console.error(
              "Refusing to make localhost plugin HTTP call with non-localhost URL",
              e
            );
            return;
          }
          return a;
        }
      }
      function f(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, r._)(function (e) {
          var n;
          return (0, i.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  t.trys.push([0, 2, , 3]),
                  [
                    4,
                    (function (e) {
                      return g.apply(this, arguments);
                    })(e),
                  ]
                );
              case 1:
                return [2, t.sent()];
              case 2:
                return (
                  console.error(
                    "Error making localhost plugin HTTP call",
                    (n = t.sent())
                  ),
                  [
                    2,
                    [
                      {
                        id: (0, o.Z)(),
                        author: { role: l.uU.Tool, name: "plugin_service" },
                        content: {
                          content_type: "text",
                          parts: [
                            "Error making localhost plugin HTTP call: ".concat(
                              n
                            ),
                          ],
                        },
                        metadata: {
                          parent_message_id: e.parent_message_id,
                          is_complete: !0,
                        },
                        recipient: "all",
                      },
                    ],
                  ]
                );
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function g() {
        return (g = (0, r._)(function (e) {
          var n, t, r, s;
          function u(e) {
            return Object.keys(e).map(function (e) {
              return e.toLowerCase();
            });
          }
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                var c;
                if (
                  ((n = { "content-type": "application/json" }),
                  (c = [u(e.headers), u(n)].flat()),
                  new Set(c).size !== c.length)
                )
                  throw Error(
                    "Refusing to make localhost plugin HTTP call with duplicate header keys"
                  );
                return (
                  (t = e.url),
                  e.qs_params.length > 0 &&
                    (t = t + "?" + new URLSearchParams(e.qs_params)),
                  (r = void 0),
                  null !== e.body && (r = JSON.stringify(e.body)),
                  [
                    4,
                    fetch(t, {
                      method: e.method,
                      headers: (0, a._)({}, n, e.headers),
                      body: r,
                    }),
                  ]
                );
              case 1:
                return [4, i.sent().text()];
              case 2:
                if (((s = i.sent()), "chat" === e.api_function_type))
                  return [2, [JSON.parse(s)]];
                if ("kwargs" === e.api_function_type)
                  return [
                    2,
                    [
                      {
                        id: (0, o.Z)(),
                        author: {
                          role: l.uU.Tool,
                          name: ""
                            .concat(e.namespace, ".")
                            .concat(e.function_name),
                        },
                        content: { content_type: "text", parts: [s] },
                        metadata: {
                          parent_message_id: e.parent_message_id,
                          is_complete: !0,
                        },
                        recipient: "all",
                      },
                    ],
                  ];
                throw Error("Not implemented");
            }
          });
        })).apply(this, arguments);
      }
      function m(e) {
        return !!p(e.domain);
      }
      function p(e) {
        return /^localhost:\d+$/.test(e)
          ? "http://".concat(e)
          : /^https?:\/\/localhost:\d+$/.test(e)
          ? e
          : null;
      }
      function v(e) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = (0, r._)(function (e) {
          var n, t, r, a, o, l;
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  i.trys.push([0, 3, , 4]),
                  [4, fetch(e + "/.well-known/ai-plugin.json")]
                );
              case 1:
                return [4, i.sent().json()];
              case 2:
                return (t = i.sent()), [3, 4];
              case 3:
                return (
                  i.sent(),
                  c.m.danger(
                    "Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."
                  ),
                  [2]
                );
              case 4:
                if (
                  null ==
                  (r =
                    null == t
                      ? void 0
                      : null === (n = t.api) || void 0 === n
                      ? void 0
                      : n.url)
                )
                  return (
                    c.m.danger(
                      "Localhost manifest is missing OpenAPI spec URL."
                    ),
                    [2]
                  );
                if (
                  "pathname" ===
                  (a = (function (e) {
                    try {
                      return new URL(e), "full url";
                    } catch (n) {
                      if (e.startsWith("/")) return "pathname";
                      return "neither";
                    }
                  })(r))
                )
                  r = e + r;
                else if ("neither" === a)
                  return (
                    c.m.danger(
                      "Localhost manifest OpenAPI spec URL is not a valid URL or path."
                    ),
                    [2]
                  );
                i.label = 5;
              case 5:
                return i.trys.push([5, 8, , 9]), [4, fetch(r)];
              case 6:
                return [4, i.sent().text()];
              case 7:
                return (o = i.sent()), [3, 9];
              case 8:
                return (
                  i.sent(),
                  c.m.danger("Failed to fetch localhost OpenAPI spec."),
                  [2]
                );
              case 9:
                try {
                  l = s.ZP.parse(o);
                } catch (e) {}
                try {
                  l = JSON.parse(o);
                } catch (e) {}
                if (null == l)
                  return (
                    c.m.danger(
                      "Failed to parse localhost OpenAPI spec as JSON or YAML."
                    ),
                    [2]
                  );
                i.label = 10;
              case 10:
                return (
                  i.trys.push([10, 12, , 13]),
                  [
                    4,
                    u.ZP.createOrUpdateLocalhostPlugin({
                      localhost: e,
                      manifest: t,
                      openapiSpec: l,
                    }),
                  ]
                );
              case 11:
                return [2, i.sent()];
              case 12:
                return (
                  i.sent(),
                  c.m.danger(
                    "Failed to create or update localhost plugin at ".concat(e)
                  ),
                  [3, 13]
                );
              case 13:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
    },
    14158: function (e, n, t) {
      "use strict";
      t.d(n, {
        Aj: function () {
          return f;
        },
        i$: function () {
          return d;
        },
        nA: function () {
          return m;
        },
        uM: function () {
          return g;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(1454),
        o = t(34303),
        s = t(38317);
      function l() {
        var e = (0, r._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, r._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      var c = o.Z.div(l());
      function d() {
        return (0, a.jsx)(c, {
          children: (0, a.jsx)(s.ZP, {
            icon: i.OH,
            className: "h-3 w-3",
            strokeWidth: 2.5,
          }),
        });
      }
      function f() {
        return (0, a.jsx)(c, {
          children: (0, a.jsx)(s.ZP, { icon: i.V7f, className: "h-3 w-3" }),
        });
      }
      var h = o.Z.div(u());
      function g() {
        return (0, a.jsxs)(h, {
          children: [
            (0, a.jsx)(s.ZP, {
              icon: i.OH,
              className: "h-3 w-3",
              strokeWidth: 2.5,
            }),
            (0, a.jsx)("div", { children: "Unverified" }),
          ],
        });
      }
      function m() {
        return (0, a.jsxs)(h, {
          children: [
            (0, a.jsx)(s.ZP, { icon: i.V7f, className: "h-3 w-3" }),
            (0, a.jsx)("div", { children: "Localhost" }),
          ],
        });
      }
    },
    44878: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(70079),
        a = t(32983),
        i = t(74437);
      function o() {
        var e = (0, r.useContext)(a.AX),
          n = (0, i.Z)().installedPlugins;
        return (0, r.useMemo)(
          function () {
            return n.filter(function (n) {
              return e.has(n.id);
            });
          },
          [e, n]
        );
      }
    },
    697: function (e, n, t) {
      "use strict";
      t.d(n, {
        dT: function () {
          return h;
        },
        hZ: function () {
          return l;
        },
        iO: function () {
          return u;
        },
        p0: function () {
          return f;
        },
        wu: function () {
          return g;
        },
      });
      var r = t(81949),
        a = t(70079),
        i = t(81292),
        o = t(85023),
        s = t(74437),
        l = 3,
        u = [
          ["www.klarna.com", "server.shop.app"],
          ["apim.expedia.com", "kayak.com"],
          ["www.redfin.com", "plugins.zillow.com"],
          ["instacart.com", "api.tasty.co"],
        ],
        c = "oai/enabledPluginIds",
        d = (0, i.ZP)(function () {
          var e = Array.from(new Set(o.m.getItem(c)));
          return { enabledPluginIds: new Set(e.splice(0, l)) };
        });
      function f() {
        var e = (0, s.Z)().installedPlugins,
          n = d().enabledPluginIds;
        return (0, a.useMemo)(
          function () {
            return e.filter(function (e) {
              return n.has(e.id);
            });
          },
          [n, e]
        );
      }
      function h(e) {
        e.length > l ||
          d.setState(function () {
            return o.m.setItem(c, e), { enabledPluginIds: new Set(e) };
          });
      }
      function g(e) {
        d.setState(function (n) {
          if (n.enabledPluginIds.size >= l) return n;
          var t = (0, r._)(n.enabledPluginIds).concat([e]);
          return o.m.setItem(c, t), { enabledPluginIds: new Set(t) };
        });
      }
    },
    74437: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(24396),
        a = t(70079),
        i = t(32787),
        o = t(24274),
        s = t(21437);
      function l() {
        var e = (0, i.kP)().session,
          n = (0, s.Fl)().isPluginsAvailable,
          t = (0, r.a)(
            ["installedAip"],
            function () {
              return o.ZP.getPlugins({
                offset: 0,
                limit: 250,
                isInstalled: !0,
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled: n && !!(null == e ? void 0 : e.accessToken),
              onError: function (e) {
                console.error(e);
              },
            }
          ),
          l = t.data,
          u = t.isLoading;
        return (0, a.useMemo)(
          function () {
            return { installedPlugins: l ? l.items : [], isLoading: u };
          },
          [l, u]
        );
      }
    },
    5046: function (e, n, t) {
      "use strict";
      t.d(n, {
        BT: function () {
          return c;
        },
        R9: function () {
          return o;
        },
        Y8: function () {
          return d;
        },
        kc: function () {
          return l;
        },
        m0: function () {
          return u;
        },
        uU: function () {
          return s;
        },
      });
      var r = t(81949),
        a = t(81292),
        i = t(51132),
        o = "gpt-4",
        s = "model_cap_exceeded",
        l = (0, a.ZP)(function () {
          return { serverThreadIds: new Set() };
        });
      function u(e) {
        l.setState(function (n) {
          return {
            serverThreadIds: new Set((0, r._)(n.serverThreadIds).concat([e])),
          };
        });
      }
      function c() {
        var e = d(function (e) {
            return e.isoDate;
          }),
          n = d(function (e) {
            return e.clearCapTimeout;
          }),
          t = Date.now(),
          r = e && new Date(e).getTime();
        return e && r && r <= t ? (n(), null) : e ? o : null;
      }
      var d = (0, a.ZP)()(
        (0, i.tJ)(
          function (e) {
            return {
              isoDate: "",
              setCapTimeout: function (n) {
                e(function () {
                  return { isoDate: n };
                });
              },
              clearCapTimeout: function () {
                e(function () {
                  return { isoDate: "" };
                });
              },
            };
          },
          { name: "oai/apps/capExpiresAt" }
        )
      );
    },
    66523: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var r = t(24396),
        a = t(70079),
        i = t(32787),
        o = t(24274),
        s = t(64135),
        l = t(99585),
        u = t(5046),
        c = { textarea: "", "model-switcher": "" };
      function d() {
        var e = (0, i.kP)().session,
          n = (0, s.hz)(),
          t = (0, u.Y8)(function (e) {
            return e.isoDate;
          }),
          d = (0, l.xz)(t),
          f = (0, r.a)(
            ["modelMessageCap"],
            function () {
              return o.ZP.getModelMessageCap();
            },
            {
              enabled:
                (null == e ? void 0 : e.accessToken) != null &&
                n.has("model_preview"),
            }
          ).data;
        return (0, a.useMemo)(
          function () {
            var e = (null == f ? void 0 : f.message_cap) || 0,
              n = (null == f ? void 0 : f.message_cap_window) || 1,
              t = (function (e) {
                if (e < 60) return e < 2 ? "minute" : "".concat(e, " minutes");
                var n = Math.floor(e / 60);
                if (n < 24) return n < 2 ? "hour" : "".concat(n, " hours");
                var t = Math.floor(n / 24);
                if (t < 7) return t < 2 ? "day" : "".concat(t, " days");
              })(n),
              r = (null == f ? void 0 : f.message_disclaimer) || c;
            return t
              ? f && n && e
                ? {
                    textareaDisclaimer: r.textarea
                      .replaceAll("%FORMATTED_TIME%", d)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", t),
                    modelSwitcherDisclaimer: r["model-switcher"]
                      .replaceAll("%FORMATTED_TIME%", d)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", t),
                  }
                : {
                    textareaDisclaimer: c.textarea,
                    modelSwitcherDisclaimer: c["model-switcher"],
                  }
              : {
                  textareaDisclaimer: r.textarea,
                  modelSwitcherDisclaimer: r["model-switcher"],
                };
          },
          [f, d]
        );
      }
    },
    90076: function (e, n, t) {
      "use strict";
      t.d(n, {
        B8: function () {
          return Z;
        },
        B9: function () {
          return T;
        },
        Bv: function () {
          return P;
        },
        Gg: function () {
          return N;
        },
        H6: function () {
          return R;
        },
        OX: function () {
          return _;
        },
        S: function () {
          return a;
        },
        Xy: function () {
          return S;
        },
        ZL: function () {
          return C;
        },
        fm: function () {
          return I;
        },
        iu: function () {
          return M;
        },
        n2: function () {
          return w;
        },
      });
      var r,
        a,
        i = t(21722),
        o = t(39324),
        s = t(71209),
        l = t(81949),
        u = t(39889),
        c = t(24396),
        d = t(68555),
        f = t(70079),
        h = t(32787),
        g = t(24274),
        m = t(64135),
        p = t(75527),
        v = t(21437),
        x = t(32983),
        b = t(5046),
        y = "text-davinci-002-render";
      ((r = a || (a = {})).GPT_3_5 = "gpt3.5"),
        (r.GPT_4 = "gpt4"),
        (r.MOBILE = "mobile");
      var j = R({
          slug: y,
          max_tokens: 4097,
          title: "Default",
          description: "",
          tags: [a.GPT_3_5],
        }),
        w = new Set(["text-davinci-002-render-paid"]);
      function k(e) {
        var n = (0, f.useContext)(x.QL).historyDisabled,
          t = (0, h.kP)(),
          r = t.session,
          a = t.loading,
          o = null == r ? void 0 : r.accessToken;
        return (0, c.a)({
          queryKey: ["models", { isHistoryDisabled: !n }],
          queryFn: (0, i._)(function () {
            return (0, u.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, g.ZP.getModels(o, n)];
                case 1:
                  return [2, e.sent()];
              }
            });
          }),
          enabled: !a && null != o,
          select: e,
        });
      }
      function C() {
        return k().isLoading;
      }
      function _() {
        var e = k(function (e) {
          return e.categories;
        }).data;
        return null != e ? e : [];
      }
      function M() {
        var e = k(function (e) {
          return e.models;
        }).data;
        return (0, f.useMemo)(
          function () {
            return new Set(
              e
                ? e.map(function (e) {
                    return e.slug;
                  })
                : [y]
            );
          },
          [e]
        );
      }
      function T() {
        var e = k(function (e) {
          return e.models;
        }).data;
        return (0, f.useMemo)(
          function () {
            return new Map(
              e
                ? e.map(function (e) {
                    return [e.slug, R(e)];
                  })
                : [[y, j]]
            );
          },
          [e]
        );
      }
      function N(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = function (e) {
            var n,
              t,
              r = o.get(e);
            return (
              null !==
                (t =
                  null == r
                    ? void 0
                    : null === (n = r.tags) || void 0 === n
                    ? void 0
                    : n.includes(a.GPT_3_5)) &&
              void 0 !== t &&
              t
            );
          },
          r = (0, m.hz)(),
          i = (0, l._)(e),
          o = T();
        if (!n && r.has("priority_driven_models_list")) return i[0];
        var s = (0, l._)(i).find(function (e) {
          return t(e);
        });
        return null != s ? s : i[0];
      }
      function I() {
        var e = (0, d.useRouter)(),
          n = e.query;
        return (0, f.useCallback)(
          function (t) {
            e.replace(
              {
                pathname: e.basePath,
                query: (0, s._)((0, o._)({}, n), {
                  model: encodeURIComponent(t),
                }),
              },
              void 0,
              { shallow: !0 }
            );
          },
          [n, e]
        );
      }
      function P(e, n) {
        var t,
          r = decodeURIComponent(
            null !== (t = (0, d.useRouter)().query.model) && void 0 !== t
              ? t
              : ""
          ),
          a = (0, p.XK)(n),
          i = Z().enabledModelsById,
          o = (0, v.Fl)().isBetaFeaturesUiEnabled,
          s = (0, b.kc)().serverThreadIds,
          l = M(),
          u = o ? i : l,
          c = N(u);
        return (0, f.useMemo)(
          function () {
            if (0 !== u.size) {
              var n = void 0 !== a && s.has(a);
              return !n && null != e && l.has(e)
                ? null != e
                  ? e
                  : void 0
                : !n && r && u.has(r)
                ? null != r
                  ? r
                  : void 0
                : null != c
                ? c
                : void 0;
            }
          },
          [l, c, e, r, u, a, s]
        );
      }
      function S(e, n) {
        var t = P(e, n),
          r = T();
        return (0, f.useMemo)(
          function () {
            var e;
            return null == t
              ? j
              : null !== (e = r.get(t)) && void 0 !== e
              ? e
              : j;
          },
          [t, r]
        );
      }
      function Z() {
        var e = _(),
          n = M(),
          t = T(),
          r = (0, v.Fl)();
        return (0, f.useMemo)(
          function () {
            var i,
              o = e.reduce(
                function (e, a) {
                  var i,
                    o,
                    s,
                    l,
                    u,
                    c,
                    d = e.enabledModelsInCategoriesById,
                    f = e.availableModelsInCategoriesById,
                    h = n.has(a.default_model) ? a.default_model : null;
                  null != h && (f.add(h), d.add(h));
                  var g = n.has(
                    null !== (i = a.browsing_model) && void 0 !== i ? i : ""
                  )
                    ? t.get(
                        null !== (o = a.browsing_model) && void 0 !== o ? o : ""
                      )
                    : null;
                  g && (f.add(g.id), r.isBrowsingEnabled && d.add(g.id));
                  var m = n.has(
                    null !== (s = a.code_interpreter_model) && void 0 !== s
                      ? s
                      : ""
                  )
                    ? t.get(
                        null !== (l = a.code_interpreter_model) && void 0 !== l
                          ? l
                          : ""
                      )
                    : null;
                  m && (f.add(m.id), r.isCodeInterpreterEnabled && d.add(m.id));
                  var p = n.has(
                    null !== (u = a.plugins_model) && void 0 !== u ? u : ""
                  )
                    ? t.get(
                        null !== (c = a.plugins_model) && void 0 !== c ? c : ""
                      )
                    : null;
                  return (
                    p && (f.add(p.id), r.isPluginsEnabled && d.add(p.id)), e
                  );
                },
                {
                  enabledModelsInCategoriesById: new Set(),
                  availableModelsInCategoriesById: new Set(),
                }
              ),
              s = o.enabledModelsInCategoriesById,
              u = o.availableModelsInCategoriesById,
              c = new Set(
                Array.from(n).filter(function (e) {
                  return !u.has(e);
                })
              ),
              d = new Set(
                Array.from(c).filter(function (e) {
                  var n;
                  return !(null === (n = t.get(e)));
                })
              );
            return {
              enabledModelsInCategoriesById: s,
              availableModelsInCategoriesById: u,
              enabledModelsNotInCategoriesById: d,
              enabledModelsById: new Set((0, l._)(s).concat((0, l._)(d))),
            };
          },
          [e, n, r, t]
        );
      }
      function R(e) {
        return {
          id: e.slug,
          maxTokens: e.max_tokens,
          title: e.title,
          description: e.description,
          tags: e.tags,
          enabledTools: e.enabled_tools,
          properties: e.qualitative_properties,
        };
      }
    },
    75527: function (e, n, t) {
      "use strict";
      t.d(n, {
        tQ: function () {
          return S;
        },
        iN: function () {
          return P;
        },
        _L: function () {
          return a;
        },
        OX: function () {
          return C;
        },
        Zz: function () {
          return _;
        },
        ax: function () {
          return Z;
        },
        r7: function () {
          return J;
        },
        XK: function () {
          return R;
        },
        je: function () {
          return V;
        },
        Uy: function () {
          return H;
        },
        GD: function () {
          return O;
        },
        U0: function () {
          return B;
        },
        oq: function () {
          return L;
        },
        Hk: function () {
          return q;
        },
        UL: function () {
          return A;
        },
        Kt: function () {
          return D;
        },
        Ro: function () {
          return E;
        },
        GR: function () {
          return F;
        },
        qA: function () {
          return U;
        },
        XL: function () {
          return z;
        },
        u9: function () {
          return $;
        },
        nh: function () {
          return W;
        },
        lA: function () {
          return G;
        },
        dz: function () {
          return Q;
        },
        qN: function () {
          return T;
        },
      });
      var r,
        a,
        i = t(39324),
        o = t(71209),
        s = t(24396),
        l = t(61888),
        u = t(68555),
        c = t(70079),
        d = t(81292),
        f = t(58392),
        h = t(32787),
        g = t(70216);
      t(59710);
      var m = t(57311),
        p = t(75179);
      t(44675).env.INTERNAL_API_URL;
      var v = t(69403),
        x = t(97688),
        b = t(90076),
        y = t(24274),
        j = t(32983),
        w = "NEW:",
        k = 0;
      function C() {
        return "".concat(w).concat(k++);
      }
      function _(e) {
        return e.startsWith(w);
      }
      ((r = a || (a = {})).NewChat = "NewChat"),
        (r.Server = "Server"),
        (r.User = "User"),
        (r.Generated = "Generated"),
        (r.Unknown = "Unknown");
      var M = {},
        T = (0, d.ZP)(
          (0, f.n)(function () {
            return {
              threads: {},
              clientNewThreadIdToServerIdMapping: {},
              threadRetainCounts: {},
            };
          })
        ),
        N = T.getState,
        I = T.setState,
        P = {
          resolveThreadId: function (e) {
            var n,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : N();
            return null !== (n = t.clientNewThreadIdToServerIdMapping[e]) &&
              void 0 !== n
              ? n
              : e;
          },
          getThreadCustomTitle: function (e) {
            var n,
              t,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : N(),
              a = P.resolveThreadId(e, r);
            return null !==
              (t =
                null === (n = r.threads[a]) || void 0 === n
                  ? void 0
                  : n.title) && void 0 !== t
              ? t
              : void 0;
          },
          getThreadDataTitle: function (e) {
            var n,
              t,
              r,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : N(),
              i = P.resolveThreadId(e, a);
            return null !==
              (r =
                null === (n = a.threads[i]) || void 0 === n
                  ? void 0
                  : null === (t = n.initialThreadData) || void 0 === t
                  ? void 0
                  : t.title) && void 0 !== r
              ? r
              : void 0;
          },
          getThreadTitleSource: function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : N(),
              t = P.resolveThreadId(e, n);
            return null != n.threads[t] ? n.threads[t].titleSource : a.Unknown;
          },
          getThreadCreateTime: function (e) {
            var n,
              t,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : N(),
              a = P.resolveThreadId(e, r);
            return null === (n = r.threads[a]) || void 0 === n
              ? void 0
              : null === (t = n.initialThreadData) || void 0 === t
              ? void 0
              : t.createTime;
          },
        },
        S = {
          getOrInitThread: function (e) {
            var n = S.resolveThreadId(e);
            return null != N().threads[n]
              ? N().threads[n]
              : (S.resetThread(e), N().threads[e]);
          },
          getServerThreadId: function (e) {
            return _(e) ? N().clientNewThreadIdToServerIdMapping[e] : e;
          },
          setServerIdForNewThread: function (e, n) {
            void 0 === N().clientNewThreadIdToServerIdMapping[e] &&
              I(function (t) {
                (t.threads[n] = t.threads[e]),
                  delete t.threads[e],
                  (t.clientNewThreadIdToServerIdMapping[e] = n);
              });
          },
          initThreadFromServerData: function (e, n) {
            var t,
              r,
              s,
              l,
              u,
              c,
              d,
              f,
              h,
              v,
              x =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              y =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : void 0,
              j = S.resolveThreadId(e);
            if (null != N().threads[j] || x) {
              var w =
                ((r =
                  null ===
                    (t = Object.values(n.mapping).find(function (e) {
                      return null === e.parent;
                    })) || void 0 === t
                    ? void 0
                    : t.id),
                (s = new Set()),
                (l = new Set()),
                (n.moderation_results || []).forEach(function (e) {
                  e.blocked
                    ? l.add(e.message_id)
                    : e.flagged && s.add(e.message_id);
                }),
                {
                  rootId: r,
                  mapping: Object.keys(n.mapping).reduce(function (e, t) {
                    var r,
                      a = n.mapping[t],
                      u = a.parent,
                      c = a.children,
                      d = (0, g._)(a, ["parent", "children"]),
                      f = n.mapping[t].message || m.Cv.createRootMessage();
                    return (
                      l.has(f.id) ? (r = p.sK) : s.has(f.id) && (r = p.Mf),
                      (e[t] = (0, i._)(
                        (0, o._)((0, i._)({}, d), {
                          message: f,
                          children: c || [],
                          parentId: u || "",
                          type: m.uV[f.author.role],
                        }),
                        r && { metadata: r }
                      )),
                      e
                    );
                  }, {}),
                  initialCurrentLeafId: n.current_node,
                  authorName: n.author_name,
                });
              if (
                (null === (u = N().threads[j]) || void 0 === u
                  ? void 0
                  : u.isLoading) !== !1
              ) {
                var k =
                    null !== (c = w.mapping) && void 0 !== c
                      ? c
                      : m.Cv.createTree(),
                  C = {
                    thread: k,
                    initialCurrentLeafId:
                      null !==
                        (f =
                          null !== (d = w.initialCurrentLeafId) && void 0 !== d
                            ? d
                            : w.rootId) && void 0 !== f
                        ? f
                        : "root",
                    threadId: j,
                    title: null !== (h = n.title) && void 0 !== h ? h : null,
                    lastModelUsed: (function e(n, t) {
                      var r,
                        a,
                        i = n[t];
                      return (
                        null == i
                          ? void 0
                          : null === (r = i.message) || void 0 === r
                          ? void 0
                          : null === (a = r.metadata) || void 0 === a
                          ? void 0
                          : a.model_slug
                      )
                        ? i.message.metadata.model_slug
                        : (null == i ? void 0 : i.parentId)
                        ? e(n, i.parentId)
                        : null;
                    })(w.mapping, w.initialCurrentLeafId),
                    pluginIds:
                      null !== (v = n.plugin_ids) && void 0 !== v ? v : [],
                    authorName: w.authorName,
                    model:
                      "model" in n && null != n.model
                        ? (0, b.H6)(n.model)
                        : void 0,
                    createTime:
                      "create_time" in n
                        ? new Date(1e3 * n.create_time)
                        : void 0,
                  },
                  _ = new m.Cv(k),
                  M = C.initialCurrentLeafId;
                I(function (e) {
                  var n;
                  e.threads[j] = (0, o._)(
                    (0, i._)(
                      {},
                      null !== (n = e.threads[j]) && void 0 !== n ? n : {}
                    ),
                    {
                      initialThreadData: C,
                      title: C.title,
                      titleSource: a.Server,
                      tree: _,
                      currentLeafId: M,
                      isLoading: !1,
                      continuingFromSharedConversationId: y,
                    }
                  );
                }),
                  S.recomputeConversationTurns(
                    j,
                    N().threads[j].currentLeafId,
                    []
                  );
              }
            }
          },
          resetThread: function (e) {
            var n = {
              thread: m.Cv.createTree(),
              initialCurrentLeafId: "root",
              threadId: null,
              title: null,
              lastModelUsed: null,
              pluginIds: [],
              authorName: void 0,
            };
            S.deleteThread(e),
              I(function (t) {
                t.threads[e] = {
                  initialThreadData: n,
                  tree: new m.Cv(n.thread),
                  title: n.title,
                  titleSource: a.NewChat,
                  currentLeafId: n.initialCurrentLeafId,
                  conversationTurns: [],
                  isLoading: !_(e),
                };
              });
          },
          updateInitialThreadDataForNewThread: function (e, n, t) {
            I(function (r) {
              (r.threads[e].initialThreadData.lastModelUsed = n),
                (r.threads[e].initialThreadData.pluginIds = t);
            });
          },
          getThreadCurrentLeafId: function (e) {
            var n,
              t,
              r = S.resolveThreadId(e);
            return null !==
              (t =
                null === (n = N().threads[r]) || void 0 === n
                  ? void 0
                  : n.currentLeafId) && void 0 !== t
              ? t
              : "root";
          },
          setThreadCurrentLeafId: function (e, n) {
            var t,
              r,
              a = S.resolveThreadId(e);
            if (null != N().threads[a]) {
              I(function (e) {
                e.threads[a].currentLeafId = n;
              });
              var i = N();
              S.recomputeConversationTurns(
                a,
                n,
                null !==
                  (r =
                    null === (t = i.threads[a]) || void 0 === t
                      ? void 0
                      : t.conversationTurns) && void 0 !== r
                  ? r
                  : []
              );
            }
          },
          setTitle: function (e, n, t) {
            var r = S.resolveThreadId(e);
            null != N().threads[r] &&
              I(function (e) {
                (e.threads[r].title = n), (e.threads[r].titleSource = t);
              });
          },
          getTitle: function (e) {
            var n;
            return null !== (n = P.getThreadCustomTitle(e)) && void 0 !== n
              ? n
              : P.getThreadDataTitle(e);
          },
          getTitleAndSource: function (e) {
            var n;
            return {
              title:
                null !== (n = P.getThreadCustomTitle(e)) && void 0 !== n
                  ? n
                  : P.getThreadDataTitle(e),
              titleSource: P.getThreadTitleSource(e),
            };
          },
          updateTree: function (e, n) {
            var t,
              r,
              a,
              i,
              o = S.resolveThreadId(e);
            if (!(null != N().threads[o])) {
              console.warn("Thread does not exist, cannot update tree: ", o);
              return;
            }
            n(S.getTree(e));
            var s = N(),
              l =
                null !==
                  (a =
                    null === (t = s.threads[o]) || void 0 === t
                      ? void 0
                      : t.currentLeafId) && void 0 !== a
                  ? a
                  : "root",
              u =
                null !==
                  (i =
                    null === (r = s.threads[o]) || void 0 === r
                      ? void 0
                      : r.conversationTurns) && void 0 !== i
                  ? i
                  : [];
            S.recomputeConversationTurns(o, l, u);
          },
          getTree: function (e) {
            var n,
              t,
              r = S.resolveThreadId(e);
            return null !==
              (t =
                null === (n = N().threads[r]) || void 0 === n
                  ? void 0
                  : n.tree) && void 0 !== t
              ? t
              : new m.Cv();
          },
          resolveThreadId: function (e) {
            return P.resolveThreadId(e);
          },
          recomputeConversationTurns: function (e, n, t) {
            var r = S.resolveThreadId(e);
            I(function (e) {
              e.threads[r] &&
                (e.threads[r].conversationTurns =
                  S.computeThreadConversationTurns(r, n, t));
            });
          },
          computeThreadConversationTurns: function (e, n, t) {
            var r = S.resolveThreadId(e);
            return S.getTree(r)
              .getConversationTurns(n)
              .map(function (e, n) {
                var r = null == t ? void 0 : t[n];
                return (0, l.isEqual)(r, e) ? r : e;
              });
          },
          getThreadConversationTurns: function (e, n, t) {
            var r,
              a,
              i,
              o,
              s = S.resolveThreadId(e),
              l =
                null !==
                  (i =
                    null === (r = N().threads[s]) || void 0 === r
                      ? void 0
                      : r.currentLeafId) && void 0 !== i
                  ? i
                  : "root";
            return null != n && n !== l
              ? S.computeThreadConversationTurns(s, n, null != t ? t : [])
              : null !==
                  (o =
                    null === (a = N().threads[s]) || void 0 === a
                      ? void 0
                      : a.conversationTurns) && void 0 !== o
              ? o
              : [];
          },
          getThreadModel: function (e) {
            var n,
              t = S.resolveThreadId(e);
            return null === (n = N().threads[t]) || void 0 === n
              ? void 0
              : n.initialThreadData.model;
          },
          removeContinuingFromSharedConversationId: function (e) {
            var n = S.resolveThreadId(e);
            I(function (e) {
              var t;
              (null === (t = e.threads[n]) || void 0 === t
                ? void 0
                : t.continuingFromSharedConversationId) != null &&
                delete e.threads[n].continuingFromSharedConversationId;
            });
          },
          deleteThread: function (e) {
            I(function (n) {
              delete n.threads[e],
                delete n.clientNewThreadIdToServerIdMapping[e];
            });
          },
          retainThread: function (e) {
            I(function (n) {
              var t;
              n.threadRetainCounts[e] =
                (null !== (t = n.threadRetainCounts[e]) && void 0 !== t
                  ? t
                  : 0) + 1;
            }),
              clearTimeout(M[e]);
          },
          releaseThread: function (e) {
            null != N().threads[e] &&
              (I(function (n) {
                var t;
                n.threadRetainCounts[e] = Math.max(
                  (null !== (t = n.threadRetainCounts[e]) && void 0 !== t
                    ? t
                    : 0) - 1,
                  0
                );
              }),
              N().threadRetainCounts[e] > 0 ||
                (clearTimeout(M[e]),
                (M[e] = setTimeout(function () {
                  null == N().threads[e] ||
                    N().threadRetainCounts[e] > 0 ||
                    S.deleteThread(e);
                }, 3e4))));
          },
        },
        Z = function (e, n) {
          var t = (0, u.useRouter)(),
            r = (0, h.kP)().session,
            a = (0, c.useContext)(j.QL).historyDisabled;
          (0, s.a)(
            ["conversation", e],
            function () {
              return y.ZP.getConversation(
                e,
                null == r ? void 0 : r.accessToken
              );
            },
            {
              enabled:
                !_(e) &&
                (null == r ? void 0 : r.accessToken) !== void 0 &&
                !a &&
                !n,
              onError: function () {
                t.replace("/"),
                  x.m.danger("Unable to load conversation ".concat(e));
              },
              onSuccess: function (n) {
                n && S.initThreadFromServerData(e, n);
              },
            }
          ),
            (0, c.useEffect)(
              function () {
                S.getOrInitThread(e);
              },
              [e, t]
            );
        },
        R = function (e) {
          return T(function (n) {
            return _(e) ? n.clientNewThreadIdToServerIdMapping[e] : e;
          });
        },
        A = function (e) {
          return T(function (n) {
            var t,
              r,
              a = S.resolveThreadId(e);
            return null !==
              (r =
                null === (t = n.threads[a]) || void 0 === t
                  ? void 0
                  : t.initialThreadData) && void 0 !== r
              ? r
              : Object.freeze({
                  thread: m.Cv.createTree(),
                  threadId: null,
                  initialCurrentLeafId: "root",
                  title: null,
                  lastModelUsed: null,
                });
          });
        },
        D = function (e) {
          return T(function (n) {
            var t,
              r,
              a = S.resolveThreadId(e);
            return (
              null !==
                (r =
                  null === (t = n.threads[a]) || void 0 === t
                    ? void 0
                    : t.isLoading) &&
              void 0 !== r &&
              r
            );
          });
        },
        F = function (e) {
          var n = T(function (n) {
            var t,
              r,
              a = S.resolveThreadId(e);
            return null === (t = n.threads[a]) || void 0 === t
              ? void 0
              : null === (r = t.initialThreadData) || void 0 === r
              ? void 0
              : r.pluginIds;
          });
          return (0, c.useMemo)(
            function () {
              return new Set(null != n ? n : []);
            },
            [n]
          );
        },
        L = function (e) {
          return T(function () {
            return S.getThreadCurrentLeafId(e);
          });
        },
        E = function (e) {
          return T(function () {
            return S.getThreadModel(e);
          });
        },
        B = function (e, n) {
          var t = (0, c.useRef)([]);
          return T(function () {
            var r,
              a = S.getThreadConversationTurns(e, n, t.current);
            return (
              (t.current = a),
              null !== (r = null == a ? void 0 : a.length) && void 0 !== r
                ? r
                : 0
            );
          });
        },
        O = function (e, n, t) {
          var r = (0, c.useRef)([]);
          return T(function () {
            var a = S.getThreadConversationTurns(e, t, r.current);
            return (r.current = a), a[n];
          });
        },
        q = function (e) {
          var n = L(e);
          return (0, c.useMemo)(
            function () {
              var t,
                r,
                a = S.getThreadConversationTurns(e, n, []),
                i =
                  null !== (t = null == a ? void 0 : a.length) && void 0 !== t
                    ? t
                    : 0,
                o =
                  null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r
                    ? r
                    : null;
              return 0 === i ? n : m.Cv.getRequestIdFromConversationTurn(o);
            },
            [n, e]
          );
        },
        U = function (e) {
          return T(function () {
            return S.getTitle(e);
          });
        },
        z = function (e) {
          return T(function () {
            return S.getTitleAndSource(e);
          });
        },
        H = function (e) {
          return T(function () {
            var n,
              t = S.resolveThreadId(e);
            return null === (n = N().threads[t]) || void 0 === n
              ? void 0
              : n.continuingFromSharedConversationId;
          });
        },
        V = function (e) {
          return T(function () {
            var n,
              t,
              r = S.resolveThreadId(e);
            return null === (n = N().threads[r]) || void 0 === n
              ? void 0
              : null === (t = n.initialThreadData) || void 0 === t
              ? void 0
              : t.authorName;
          });
        },
        W = function (e, n) {
          return T(function () {
            return S.getTree(e).getNode(n);
          });
        },
        G = function (e, n) {
          return T(function () {
            var t, r;
            return (
              null !==
                (r =
                  null === (t = S.getTree(e)) || void 0 === t
                    ? void 0
                    : t.getHasErrorFromNode(n)) &&
              void 0 !== r &&
              r
            );
          });
        },
        Q = function (e, n) {
          return T(function () {
            var t, r;
            return (
              null !==
                (r =
                  null === (t = S.getTree(e)) || void 0 === t
                    ? void 0
                    : t.isMessageIncomplete(n)) &&
              void 0 !== r &&
              r
            );
          });
        },
        $ = function (e, n) {
          return T(function () {
            var t = S.getTree(e);
            return null == t
              ? []
              : t
                  .getBranchFromLeaf(n)
                  .filter(function (e) {
                    return e.type !== v.Jq.Root;
                  })
                  .map(function (e) {
                    return e.message;
                  });
          });
        },
        J = function (e) {
          return T(function () {
            var n,
              t = S.resolveThreadId(e);
            return (
              (null === (n = N().threads[t]) || void 0 === n
                ? void 0
                : n.continuingFromSharedConversationId) != null
            );
          });
        };
    },
    32689: function (e, n, t) {
      "use strict";
      t.d(n, {
        tN: function () {
          return o;
        },
        vm: function () {
          return s;
        },
      });
      var r = t(39324),
        a = t(81292),
        i = { isNavigationCollapsed: !1, sharingModalThreadId: void 0 },
        o = (0, a.ZP)()(function () {
          return (0, r._)({}, i);
        }),
        s = {
          toggleNavigation: function () {
            o.setState(function (e) {
              return (
                console.log("state", e),
                { isNavigationCollapsed: !e.isNavigationCollapsed }
              );
            });
          },
          openSharingModal: function (e) {
            o.setState({ sharingModalThreadId: e });
          },
          closeSharingModal: function () {
            o.setState({ sharingModalThreadId: void 0 });
          },
        };
    },
    21437: function (e, n, t) {
      "use strict";
      t.d(n, {
        Fl: function () {
          return k;
        },
        N2: function () {
          return w;
        },
        tr: function () {
          return a;
        },
      });
      var r,
        a,
        i,
        o = t(96237),
        s = t(39324),
        l = t(71209),
        u = t(22830),
        c = t(35448),
        d = t(24396),
        f = t(70079),
        h = t(81292),
        g = t(32787),
        m = t(24274),
        p = t(64135),
        v = {
          isBetaFeaturesUiEnabled: !1,
          isBrowsingAvailable: !1,
          isBrowsingEnabled: !1,
          isPluginsAvailable: !1,
          isPluginsEnabled: !1,
          isCodeInterpreterAvailable: !1,
          isCodeInterpreterEnabled: !1,
          isLegacyToolsUser: !1,
          isNewToolsUser: !1,
        };
      ((r = a || (a = {})).BROWSING = "browsing"),
        (r.CODE_INTERPRETER = "code_interpreter"),
        (r.PLUGINS = "plugins");
      var x =
          ((i = {}),
          (0, o._)(i, a.BROWSING, "isBrowsingEnabled"),
          (0, o._)(i, a.CODE_INTERPRETER, "isCodeInterpreterEnabled"),
          (0, o._)(i, a.PLUGINS, "isPluginsEnabled"),
          i),
        b = (0, h.ZP)()(function () {
          return v;
        }),
        y = {
          updateUserSettings: function (e) {
            b.setState(function (n) {
              return (0, s._)({}, n, e);
            });
          },
          updateUserSettingsFromFeatures: function (e) {
            b.setState(function (n) {
              return (0, s._)({}, n, y.getUserSettingsFromFeatures(e));
            });
          },
          getUserSettingsFromFeatures: function (e) {
            return Object.entries(e).reduce(function (e, n) {
              var t = (0, u._)(n, 2),
                r = t[0],
                a = t[1],
                i = x[r];
              return i ? (0, l._)((0, s._)({}, e), (0, o._)({}, i, a)) : e;
            }, {});
          },
        },
        j = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return ["userSettings", e];
        };
      function w() {
        var e = (0, g.kP)().session,
          n = (0, c.NL)();
        return function () {
          return n.invalidateQueries({
            queryKey: j(null == e ? void 0 : e.accessToken),
          });
        };
      }
      function k() {
        var e = (0, g.kP)().session,
          n = (0, p.hz)(),
          t = n.has("beta_features");
        return (
          (0, d.a)(
            j(null == e ? void 0 : e.accessToken),
            function () {
              return m.ZP.getUserSettingBetaFeatures(e.accessToken).then(
                function (e) {
                  return null != e && y.updateUserSettingsFromFeatures(e), e;
                }
              );
            },
            { enabled: t && (null == e ? void 0 : e.accessToken) != null }
          ),
          (0, f.useEffect)(
            function () {
              y.updateUserSettings({
                isBetaFeaturesUiEnabled: t,
                isBrowsingAvailable:
                  n.has("browsing_available") || n.has("tools"),
                isCodeInterpreterAvailable: n.has("tools2"),
                isPluginsAvailable:
                  n.has("plugins_available") || n.has("tools3"),
                isLegacyToolsUser:
                  (n.has("tools") && n.has("browsing_available")) ||
                  (n.has("tools3") && n.has("plugins_available")),
                isNewToolsUser:
                  (n.has("browsing_available") && !n.has("tools")) ||
                  (n.has("plugins_available") && !n.has("tools3")),
              });
            },
            [n, t]
          ),
          b(function (e) {
            return e;
          })
        );
      }
    },
    36716: function (e, n, t) {
      "use strict";
      t.d(n, {
        Op: function () {
          return h;
        },
        Qd: function () {
          return c;
        },
        T$: function () {
          return d;
        },
        s8: function () {
          return f;
        },
      });
      var r = t(35250),
        a = t(1454),
        i = t(180),
        o = t(38317),
        s = t(57924),
        l = "&#8203;",
        u = "oaicite:";
      function c(e, n) {
        if (!n) return e;
        for (var t = [], r = 1, a = {}, i = 0; i < n.length; i++) {
          var o = n[i],
            s = o.metadata,
            c = o.invalid_reason;
          if (s) {
            var d = s.url;
            null == a[d] && ((a[d] = r), r++), t.push(a[d]);
          } else null != c && (t.push(r), r++);
        }
        for (var f = n.length - 1; f >= 0; f--) {
          var h = n[f],
            g = h.start_ix,
            m = h.end_ix,
            p = h.metadata,
            v = h.invalid_reason,
            x = { number: t[f] };
          p ? (x.metadata = p) : null != v && (x.invalid_reason = v);
          var b = !1;
          if (f > 0) {
            var y,
              j,
              w = n[f - 1];
            (null === (y = w.metadata) || void 0 === y ? void 0 : y.url) ===
              (null === (j = h.metadata) || void 0 === j ? void 0 : j.url) &&
              0 === e.slice(w.end_ix, h.start_ix).trim().length &&
              ((e = e.slice(0, w.end_ix) + e.slice(h.end_ix)), (b = !0));
          }
          b ||
            (e =
              e.slice(0, g) +
              ""
                .concat(l, "`")
                .concat(u)
                .concat(JSON.stringify(x), "`")
                .concat(l) +
              e.slice(m));
        }
        return e;
      }
      function d(e) {
        if (!e.startsWith(u)) return null;
        try {
          return JSON.parse(e.slice(u.length));
        } catch (e) {
          return { number: -1 };
        }
      }
      function f(e) {
        var n,
          t = e.displayInfo;
        return (0, r.jsx)(s.u, {
          label: (0, r.jsx)(h, {
            pageInfo: t.metadata,
            invalidReason: t.invalid_reason,
          }),
          side: "top",
          sideOffset: 4,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: (0, r.jsx)("a", {
            href: null === (n = t.metadata) || void 0 === n ? void 0 : n.url,
            target: "_blank",
            rel: "noreferrer",
            className: "px-0.5 text-green-600 !no-underline",
            children: (0, r.jsx)("sup", { children: t.number }),
          }),
        });
      }
      function h(e) {
        var n = e.pageInfo,
          t = e.invalidReason;
        return (0, r.jsx)("a", {
          href: null == n ? void 0 : n.url,
          target: "_blank",
          rel: "noreferrer",
          className: "text-xs !no-underline",
          children: n
            ? (0, r.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex shrink-0 items-center justify-center",
                    children: (0, r.jsx)(i.Z, {
                      url: n.url,
                      className: "my-0",
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "max-w-xs truncate",
                    children: n.title,
                  }),
                  (0, r.jsx)("div", {
                    className: "shrink-0",
                    children: (0, r.jsx)(o.ZP, { icon: a.AlO, size: "xsmall" }),
                  }),
                ],
              })
            : (0, r.jsx)("div", {
                className: "text-red-500",
                children: null != t ? t : "Invalid citation",
              }),
        });
      }
    },
    77442: function (e, n, t) {
      "use strict";
      t.d(n, {
        _G: function () {
          return a;
        },
        dQ: function () {
          return g;
        },
        oc: function () {
          return d;
        },
        w$: function () {
          return f;
        },
        x_: function () {
          return h;
        },
      });
      var r,
        a,
        i,
        o = t(96237),
        s = t(22830),
        l = t(70079);
      ((r = a || (a = {})).Mobile = "mobile"),
        (r.Small = "small"),
        (r.Medium = "medium"),
        (r.Large = "large"),
        (r.XLarge = "xlarge");
      var u =
        ((i = {}),
        (0, o._)(i, a.Small, 640),
        (0, o._)(i, a.Medium, 768),
        (0, o._)(i, a.Large, 1024),
        (0, o._)(i, a.XLarge, 1280),
        i);
      function c(e) {
        var n = function () {
            i(t(e));
          },
          t = function (e) {
            return window.matchMedia(e).matches;
          },
          r = (0, s._)((0, l.useState)(t(e)), 2),
          a = r[0],
          i = r[1];
        return (
          (0, l.useEffect)(
            function () {
              var t = window.matchMedia(e);
              return (
                n(),
                t.addListener
                  ? t.addListener(n)
                  : t.addEventListener("change", n),
                function () {
                  t.removeListener
                    ? t.removeListener(n)
                    : t.removeEventListener("change", n);
                }
              );
            },
            [e]
          ),
          a
        );
      }
      function d() {
        return c("(min-width: ".concat(u[a.Small], "px)"));
      }
      function f() {
        return c("(min-width: ".concat(u[a.Medium], "px)"));
      }
      function h() {
        return c("(min-width: ".concat(u[a.Large], "px)"));
      }
      function g() {
        var e = d(),
          n = f(),
          t = h();
        return c("(min-width: ".concat(u[a.XLarge], "px)"))
          ? a.XLarge
          : t
          ? a.Large
          : n
          ? a.Medium
          : e
          ? a.Small
          : a.Mobile;
      }
    },
    57311: function (e, n, t) {
      "use strict";
      t.d(n, {
        Cv: function () {
          return M;
        },
        Vh: function () {
          return y;
        },
        uV: function () {
          return w;
        },
      });
      var r,
        a,
        i = t(51217),
        o = t(53596),
        s = t(54084),
        l = t(49406),
        u = t(31819),
        c = t(96237),
        d = t(39324),
        f = t(70216),
        h = t(81949),
        g = t(74050),
        m = t(84251),
        p = t.n(m),
        v = t(8844),
        x = t(75179),
        b = t(69403),
        y = "request-",
        j =
          ((r = {}),
          (0, c._)(r, b.Jq.Root, b.uU.Unknown),
          (0, c._)(r, b.Jq.Prompt, b.uU.User),
          (0, c._)(r, b.Jq.Completion, b.uU.Assistant),
          (0, c._)(r, b.Jq.System, b.uU.System),
          r),
        w =
          ((a = {}),
          (0, c._)(a, b.uU.Unknown, b.Jq.Root),
          (0, c._)(a, b.uU.System, b.Jq.System),
          (0, c._)(a, b.uU.User, b.Jq.Prompt),
          (0, c._)(a, b.uU.Assistant, b.Jq.Completion),
          (0, c._)(a, b.uU.Critic, b.Jq.Completion),
          (0, c._)(a, b.uU.Tool, b.Jq.Completion),
          a);
      function k(e) {
        var n = (0, v.Z)();
        return "".concat(e).concat(n.substring(e.length));
      }
      var C = new WeakMap(),
        _ = new WeakMap(),
        M = (function () {
          function e(n) {
            (0, i._)(this, e),
              (0, s._)(this, C, { writable: !0, value: void 0 }),
              (0, s._)(this, _, { writable: !0, value: void 0 }),
              (0, l._)(this, C, n || e.createTree());
            var t = Object.values((0, o._)(this, C)).find(function (e) {
              return e.type === b.Jq.Root;
            });
            (0, l._)(this, _, (null == t ? void 0 : t.id) || "root");
          }
          var n = e.prototype;
          return (
            (n.getNode = function (e) {
              return (0, o._)(this, C)[e];
            }),
            (n.getMessage = function (e) {
              return (0, o._)(this, C)[e].message;
            }),
            (n.getMessageId = function (e) {
              try {
                return (0, o._)(this, C)[e].message.id;
              } catch (n) {
                throw (
                  (console.error(
                    "Tree: Unable to getMessageId for node ".concat(e)
                  ),
                  n)
                );
              }
            }),
            (n.getMetadata = function (e) {
              return (0, o._)(this, C)[e].metadata;
            }),
            (n.getLeafFromNode = function (e) {
              for (var n = (0, o._)(this, C)[e]; ; ) {
                if (0 === n.children.length) return n;
                n = (0, o._)(this, C)[n.children.values().next().value];
              }
            }),
            (n.getParent = function (e) {
              var n = (0, o._)(this, C)[e].parentId;
              return (0, o._)(this, C)[n];
            }),
            (n.getParentId = function (e) {
              var n;
              return (
                (null === (n = this.getParent(e)) || void 0 === n
                  ? void 0
                  : n.id) || "root"
              );
            }),
            (n.getNodeByMessageId = function (e) {
              var n = !0,
                t = !1,
                r = void 0;
              try {
                for (
                  var a,
                    i = Object.values((0, o._)(this, C))[Symbol.iterator]();
                  !(n = (a = i.next()).done);
                  n = !0
                ) {
                  var s = a.value;
                  if (s.message.id === e) return s;
                }
              } catch (e) {
                (t = !0), (r = e);
              } finally {
                try {
                  n || null == i.return || i.return();
                } finally {
                  if (t) throw r;
                }
              }
            }),
            (n.getBranchFromLeaf = function (e) {
              for (
                var n,
                  t = [],
                  r =
                    null !== (n = (0, o._)(this, C)[e]) && void 0 !== n
                      ? n
                      : this.getNodeByMessageId(e);
                null != r;

              ) {
                if (t.includes(r)) {
                  console.error("Infinite loop detected in getBranchFromLeaf.");
                  break;
                }
                if ((t.push(r), "root" === r.type)) break;
                r = (0, o._)(this, C)[r.parentId];
              }
              return t.reverse();
            }),
            (n.getChildrenFromNode = function (e) {
              var n = this,
                t = (0, o._)(this, C)[e];
              return t
                ? Array.from(t.children).map(function (e) {
                    return (0, o._)(n, C)[e];
                  })
                : [];
            }),
            (n.getFirstPrompt = function () {
              for (var e, n, t = this.getNode((0, o._)(this, _)); ; ) {
                if (!t) return;
                if (
                  t.type === b.Jq.Prompt ||
                  (t.type === b.Jq.System &&
                    (null === (e = t.message.metadata) || void 0 === e
                      ? void 0
                      : e.upload_filename))
                )
                  return t;
                t = (0, o._)(this, C)[
                  null === (n = t.children) || void 0 === n ? void 0 : n[0]
                ];
              }
            }),
            (n.isMessageIncomplete = function (n) {
              var t = this.getMessage(n);
              return e.getIsIncompleteFromMessage(t);
            }),
            (n.addNodeToEnd = function (e, n) {
              if (!(0, o._)(this, C)[e]) return (0, c._)({}, n.id, n);
              (0, l._)(
                this,
                C,
                p()(
                  (0, o._)(this, C),
                  (0, c._)({ $merge: (0, c._)({}, n.id, n) }, e, {
                    children: {
                      $apply: function (e) {
                        return Array.from(new Set((0, h._)(e).concat([n.id])));
                      },
                    },
                  })
                )
              );
            }),
            (n.appendSystemMessageToRoot = function (e) {
              var n,
                t,
                r =
                  null === (n = this.getFirstPrompt()) || void 0 === n
                    ? void 0
                    : n.parentId;
              if (r) {
                var a = this.getNode(r),
                  i = this.getNode(a.children[0]),
                  s = {
                    id: e.id,
                    children: a.children,
                    parentId: a.id,
                    message: e,
                  };
                (0, l._)(
                  this,
                  C,
                  p()(
                    (0, o._)(this, C),
                    ((t = { $merge: (0, c._)({}, s.id, s) }),
                    (0, c._)(t, a.id, { children: { $set: [s.id] } }),
                    (0, c._)(t, i.id, { parentId: { $set: s.id } }),
                    t)
                  )
                );
              }
            }),
            (n.addNode = function (e, n, t, r, a) {
              var i =
                  "string" == typeof n
                    ? {
                        id: k("aaa2"),
                        author: { role: j[r] },
                        content: { content_type: "text", parts: [n] },
                      }
                    : n,
                o = (0, d._)(
                  { id: e, children: [], parentId: t, type: r, message: i },
                  a ? { metadata: a } : {}
                );
              this.addNodeToEnd(t, o);
            }),
            (n.updateNode = function (e, n) {
              (0, l._)(this, C, p()((0, o._)(this, C), (0, c._)({}, e, n)));
            }),
            (n.updateNodeMessage = function (e, n) {
              (0, l._)(
                this,
                C,
                p()(
                  (0, o._)(this, C),
                  (0, c._)({}, e, { message: { $set: n } })
                )
              );
            }),
            (n.updateNodeMessageMetadata = function (e, n) {
              (0, l._)(
                this,
                C,
                p()(
                  (0, o._)(this, C),
                  (0, c._)({}, e, { message: { metadata: { $merge: n } } })
                )
              );
            }),
            (n.updateNodeText = function (e, n) {
              (0, l._)(
                this,
                C,
                p()(
                  (0, o._)(this, C),
                  (0, c._)({}, e, {
                    message: { content: { parts: { $set: [n] } } },
                  })
                )
              );
            }),
            (n.deleteNode = function (e) {
              var n = (0, o._)(this, C),
                t = n[e],
                r = (0, f._)(n, [e].map(g._)),
                a = t.parentId;
              (0, l._)(
                this,
                C,
                p()(
                  r,
                  (0, c._)({}, a, {
                    children: {
                      $apply: function (n) {
                        return n.filter(function (n) {
                          return n !== e;
                        });
                      },
                    },
                  })
                )
              );
            }),
            (n.getTextFromNode = function (n) {
              return e.getTextFromMessage(this.getMessage(n));
            }),
            (n.getHasErrorFromNode = function (e) {
              var n,
                t,
                r = this.getNode(e);
              return (
                r &&
                ((null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errType) === "danger" ||
                  (null === (t = r.metadata) || void 0 === t
                    ? void 0
                    : t.errType) === "warning")
              );
            }),
            (n.getIsBlockedFromNode = function (e) {
              var n,
                t,
                r = this.getNode(e);
              return (
                r &&
                (null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errCode) === x.Dd &&
                (null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errType) === "danger"
              );
            }),
            (n.getTextFromThread = function (n) {
              return this.getBranchFromLeaf(n)
                .filter(function (e) {
                  return e.type !== b.Jq.Root && e.type !== b.Jq.System;
                })
                .map(function (n) {
                  return e.getTextFromMessage(n.message);
                })
                .join("\n\n");
            }),
            (n.shouldFilterNode = function (e) {
              var n = e.message,
                t = n.content.content_type,
                r = e.message.author.role === b.uU.System,
                a = e.message.author.role === b.uU.Tool,
                i = void 0 !== n.recipient && "all" !== n.recipient;
              return (
                r ||
                i ||
                (a &&
                  !(
                    "code" === t ||
                    "execution_output" === t ||
                    "system_error" === t
                  ))
              );
            }),
            (n.getTextFromTurnsById = function (e) {
              var n = this;
              return e
                .map(function (e) {
                  return n.getNode(e);
                })
                .filter(function (e) {
                  return !n.shouldFilterNode(e);
                })
                .map(function (e) {
                  return n.getTextFromNode(e.id);
                })
                .join("\n\n");
            }),
            (n.getTextFromLastNTurns = function (n, t) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return this.getConversationTurns(n, this.shouldFilterNode)
                .slice(-t)
                .map(function (n) {
                  var t = n.messages
                    .map(function (n) {
                      return e.getTextFromMessage(n.message);
                    })
                    .filter(function (e) {
                      return "" !== e;
                    })
                    .join("\n");
                  return r ? "[".concat(n.role, "]\n").concat(t) : t;
                })
                .join("\n");
            }),
            (n.getConversationTurns = function (e, n) {
              var t = this,
                r = [];
              return (
                this.getBranchFromLeaf(e).forEach(function (e) {
                  var a = e.id,
                    i = e.parentId,
                    s = e.message,
                    l = e.metadata;
                  if (null == n || !n(e)) {
                    var u = r[r.length - 1];
                    (null == u ? void 0 : u.role) === s.author.role ||
                    s.author.role === b.uU.Tool
                      ? r[r.length - 1].messages.push(
                          (0, d._)({ nodeId: a, parentId: i, message: s }, l)
                        )
                      : r.push({
                          role: s.author.role,
                          messages: [
                            (0, d._)({ nodeId: a, parentId: i, message: s }, l),
                          ],
                          variantIds: i
                            ? Array.from((0, o._)(t, C)[i].children)
                            : [a],
                        });
                  }
                }),
                r
              );
            }),
            (n.getLastValidNode = function (e) {
              for (
                var n, t = this.getNode(e);
                t &&
                t &&
                (null === (n = t.metadata) || void 0 === n ? void 0 : n.err);

              )
                t = this.getNode(t.parentId);
              return t;
            }),
            (n.getParentPromptNode = function (e) {
              for (
                var n, t = this.getNode(e);
                t &&
                t &&
                (null === (n = t.message) || void 0 === n
                  ? void 0
                  : n.author.role) !== b.uU.User;

              )
                t = this.getNode(t.parentId);
              return t;
            }),
            (n.messageIdToNodeId = function (e) {
              if (null != (0, o._)(this, C)[e]) return e;
              var n = !0,
                t = !1,
                r = void 0;
              try {
                for (
                  var a,
                    i = Object.values((0, o._)(this, C))[Symbol.iterator]();
                  !(n = (a = i.next()).done);
                  n = !0
                ) {
                  var s,
                    l = a.value;
                  if (
                    (null === (s = l.message) || void 0 === s
                      ? void 0
                      : s.id) === e
                  )
                    return l.id;
                }
              } catch (e) {
                (t = !0), (r = e);
              } finally {
                try {
                  n || null == i.return || i.return();
                } finally {
                  if (t) throw r;
                }
              }
              return e;
            }),
            (n.unstable_getMapping = function () {
              return (0, o._)(this, C);
            }),
            (e.createTree = function () {
              return {
                root: {
                  id: "root",
                  children: [],
                  parentId: "",
                  type: b.Jq.Root,
                  message: e.createRootMessage(),
                },
              };
            }),
            (e.createRootMessage = function () {
              return {
                id: k("aaa1"),
                author: { role: j[b.Jq.Root] },
                content: { content_type: "text", parts: [] },
              };
            }),
            (e.getIsMessageFinished = function (e) {
              var n;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : n.finish_details) != null
              );
            }),
            (e.getIsStopFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === "stop"
              );
            }),
            (e.getIsIncompleteFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === "max_tokens"
              );
            }),
            (e.getWasInterruptedFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === "interrupted"
              );
            }),
            (e.getIsContinuedFromMessage = function (e) {
              var n;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : n.message_type) === "continue"
              );
            }),
            (e.getModelFromMessage = function (e) {
              var n;
              return null === (n = e.metadata) || void 0 === n
                ? void 0
                : n.model_slug;
            }),
            (e.getTextFromMessage = function (e) {
              switch (e.content.content_type) {
                case "text":
                  return e.content.parts.join("");
                case "tether_browsing_code":
                case "code":
                case "execution_output":
                case "system_error":
                  return e.content.text;
                case "system_message":
                  var n = e.content.text,
                    t = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var i,
                        o = Object.values(e.content.tools_section)[
                          Symbol.iterator
                        ]();
                      !(t = (i = o.next()).done);
                      t = !0
                    ) {
                      var s = i.value;
                      n += "\n\n".concat(s);
                    }
                  } catch (e) {
                    (r = !0), (a = e);
                  } finally {
                    try {
                      t || null == o.return || o.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                  return n;
                default:
                  return "";
              }
            }),
            (e.getRequestIdFromConversationTurn = function (e) {
              for (var n = e.messages.length - 1; n >= 0; n--) {
                var t = e.messages[n];
                if (t.nodeId.startsWith(y)) return t.nodeId;
              }
              return e.messages[0].nodeId;
            }),
            (e.getRecipientFromMessage = function (e) {
              return e.recipient || "";
            }),
            (0, u._)(e, [
              {
                key: "isFirstCompletion",
                get: function () {
                  var e = this.getFirstPrompt();
                  if (e) {
                    var n = (0, o._)(this, C)[e.children[0]];
                    if (n && 0 === n.children.length) return !0;
                  }
                  return !1;
                },
              },
            ]),
            e
          );
        })();
    },
    86526: function (e, n, t) {
      "use strict";
      var r = t(70079);
      n.Z = function () {
        var e = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          (0, r.useCallback)(function () {
            return e.current;
          }, [])
        );
      };
    },
    86433: function (e, n, t) {
      "use strict";
      t.d(n, {
        S: function () {
          return f;
        },
      });
      var r = t(21722),
        a = t(39324),
        i = t(22830),
        o = t(39889),
        s = t(14412),
        l = t(68555),
        u = t(70079),
        c = t(32787),
        d = t(24274);
      function f() {
        var e,
          n,
          t = (0, l.useRouter)(),
          f = (0, c.kP)().session,
          h =
            (null == f
              ? void 0
              : null === (e = f.user) || void 0 === e
              ? void 0
              : e.idp) === "auth0",
          g = !!(null == f
            ? void 0
            : null === (n = f.user) || void 0 === n
            ? void 0
            : n.mfa),
          m = (0, i._)((0, u.useState)(!1), 2),
          p = m[0],
          v = m[1],
          x = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, o.Jh)(this, function (n) {
                if (
                  ((e = new URL(t.asPath, window.location.origin).toString()),
                  !h)
                )
                  throw Error("Only username/password users can enable MFA");
                if (!f) throw Error("No session found, cannot enable MFA");
                if ("mocked" === f.authProvider)
                  throw Error(
                    "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
                  );
                return (
                  (0, s.signIn)(
                    f.authProvider,
                    { callbackUrl: e },
                    (0, a._)(
                      { prompt: "login" },
                      f.authProvider === c.Ho.OpenAI
                        ? {
                            login_hint: (0, c.W_)({
                              oai_enforce_mfa: !0,
                              idp: "openai",
                            }),
                          }
                        : { oai_enforce_mfa: "true" }
                    )
                  ),
                  [2]
                );
              });
            }),
            [t.asPath, f, h]
          ),
          b = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, o.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!h)
                      throw Error(
                        "Only username/password users can disable MFA"
                      );
                    if (!f) throw Error("No session found, cannot enable MFA");
                    if ("mocked" === f.authProvider)
                      throw Error(
                        "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
                      );
                    return v(!0), [4, d.ZP.deleteMfa()];
                  case 1:
                    return (
                      n.sent(),
                      [
                        4,
                        (0, s.signOut)({
                          redirect: !1,
                          callbackUrl: "/auth/login?next=".concat(
                            encodeURIComponent(t.asPath)
                          ),
                        }),
                      ]
                    );
                  case 2:
                    return (e = n.sent()), v(!1), t.push(e.url), [2];
                }
              });
            }),
            [h, t, f]
          );
        return {
          setupMfa: x,
          isUsernamePassword: h,
          isLoggedInWithMfa: g,
          removeMfa: b,
          isLoading: p,
        };
      }
    },
    19051: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(70079);
      function a() {
        var e = (0, r.useRef)([]),
          n = (0, r.useRef)(function (n, t) {
            var r = setTimeout(n, t);
            return e.current.push(r), r;
          });
        return (
          (0, r.useEffect)(function () {
            var n = e.current;
            return function () {
              n.forEach(function (e) {
                clearTimeout(e);
              });
            };
          }, []),
          n.current
        );
      }
    },
    75179: function (e, n, t) {
      "use strict";
      t.d(n, {
        Dd: function () {
          return o;
        },
        Mf: function () {
          return s;
        },
        _I: function () {
          return u;
        },
        sK: function () {
          return l;
        },
      });
      var r = t(95182),
        a = t.n(r),
        i = t(24274),
        o = "content_policy",
        s = { errType: "warning", errCode: o },
        l = {
          err: "Contents may violate our content policy",
          errType: "danger",
          errCode: o,
        };
      function u(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = a()(e.length, 0, 4e3),
          s = a()(e.length - o, 0, e.length - 1),
          l = n ? e.substring(s, e.length) : e;
        return !1 && l
          ? i.ZP.runModerationApi(l, t, r)
              .then(function (e) {
                return { isBlocked: !!e.blocked, isFlagged: !!e.flagged };
              })
              .catch(function (e) {
                return (
                  console.error(e), { isBlocked: !1, isFlagged: !1, error: e }
                );
              })
          : Promise.resolve({ isBlocked: !1, isFlagged: !1 });
      }
    },
    41402: function () {},
  },
]);
