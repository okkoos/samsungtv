function GtLoUr1(pl_url, l) {
    var ldir = _0x8d61[680];
    if (l[_0x8d61[56]](_0x8d61[113]) > 0) {
        if (API[_0x8d61[249]] == 0 || API[_0x8d61[249]] == 1) {
            ldir = _0x8d61[3];
        } else {
            l = (pl_url) ? _0x8d61[681] : _0x8d61[682];
        };
    };
    return ldir + l;
};

function GtLoUr2(ne, ifo, pl_url) {
    var l = _0x8d61[3];
    if (pl_url) {
        l = (Xl_Ur[_0x8d61[56]](_0x8d61[683]) > 0) ? _0x8d61[684] : _0x8d61[32];
    } else {
        if (API[_0x8d61[249]] == 0 || API[_0x8d61[249]] == 1) {
            if (Ya_Au && !isNaN(ifo) && ifo > 0 && ifo < 3000) {
                l = Yiiuro[ifo];
            };
            if (Ya_Au && ne && (!l || isNaN(ifo) || ifo < 1 || ifo > 2999)) {
                l = Yino[ne[_0x8d61[94]]()[_0x8d61[93]](/\_/g, _0x8d61[90])];
            };
            if (!l || !Ya_Au) {
                l = (ne && ifo) ? _0x8d61[680] + ne + _0x8d61[685] : _0x8d61[24];
            };
        } else {
            l = _0x8d61[24];
        };
    };
    return l;
};

function SotChs() {
    if (A_CH[_0x8d61[85]] == 0) {
        A_CH = CH;
    };
    if (!SoT && Pr_ST == 0) {
        SoT = 1;
        var tarr = [];
        for (var i = 0; i < CH[_0x8d61[85]]; i++) {
            tarr[_0x8d61[88]](CH[i][0]);
        };
        tarr[_0x8d61[686]]();
        CH = [];
        for (var i = 0; i < tarr[_0x8d61[85]]; i++) {
            for (var j = 0; j < A_CH[_0x8d61[85]]; j++) {
                if (A_CH[j][0] == tarr[i]) {
                    CH[_0x8d61[88]](A_CH[j]);
                    break;
                };
            };
        };
    } else {
        SoT = _0x8d61[3];
        CH = A_CH;
    };
};

function Se_Cay() {
    GetIdn(_0x8d61[142]);
    if (A_CH[_0x8d61[85]] == CH[_0x8d61[85]]) {
        SvPvPl();
    };
    Cat_id = CAT[10 * SelBx[_0x8d61[423]] + SelBx[_0x8d61[407]]][0];
    Reset = 1;
    ReSP();
    if (Cat_id == _0x8d61[4]) {
        SotChs();
    } else {
        SoT = 1;
        CH = [];
        for (var i = 0; i < A_CH[_0x8d61[85]]; i++) {
            if (A_CH[i][4] == Cat_id) {
                CH[_0x8d61[88]](A_CH[i]);
            };
        };
    }; if (CH[_0x8d61[85]] == 0) {
        var channel = [_0x8d61[687], _0x8d61[323], _0x8d61[3], _0x8d61[687], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3]];
        CH[_0x8d61[88]](channel);
    };
    CotPg();
    GetIdb(_0x8d61[169]);
    MaMe();
    if (Cat_id == _0x8d61[4] && SoT && A_CH[_0x8d61[85]] > 1) {
        StsShw(_0x8d61[688]);
    };
};

function SrAChs() {
    Reset = 1;
    ReSP();
    SotChs();
    CotPg();
    MaMe();
    StsShw(_0x8d61[688]);
};

function CotPg() {
    if (CH[_0x8d61[85]] > 0) {
        Lt_P_Ch = (CH[_0x8d61[85]] % 10 == 0) ? 10 : CH[_0x8d61[85]] % 10;
        Ch_On_Pg = Math[_0x8d61[689]](CH[_0x8d61[85]] / 10);
    };
};

function LoadExtScript(url) {};

function W_err() {
    widgetAPI[_0x8d61[65]]();
    var s = document[_0x8d61[68]](_0x8d61[67]);
    s[_0x8d61[69]] = _0x8d61[690] + ServerErr + _0x8d61[256];
    document[_0x8d61[72]][_0x8d61[71]](s);
    GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[153];
    GetIdb(_0x8d61[692]);
};
var SelBx = {
    sel_ed: 0,
    pr_sel_ed: 0,
    ur_sel_ed: 0,
    t_le: _0x8d61[3],
    sel_pg: 0,
    sel_lt: [],
    pr_sel_pg: 0,
    pages: 0,
    la_pg_cor: 0
};
SelBx[_0x8d61[693]] = function (t_le, sel_lt, m) {
    alert(_0x8d61[694] + t_le + _0x8d61[695] + sel_lt);
    try {
        SeFoc(4);
        if (t_le == _0x8d61[405] || t_le == _0x8d61[696] || t_le == _0x8d61[406]) {
            GetIdn(_0x8d61[169]);
        };
        if (this[_0x8d61[404]] != t_le) {
            this[_0x8d61[407]] = 0;
            this[_0x8d61[423]] = 0;
        };
        if (t_le == _0x8d61[697]) {
            this[_0x8d61[407]] = this[_0x8d61[355]];
            this[_0x8d61[423]] = 0;
        } else {
            if (t_le == _0x8d61[405] && m == 1) {
                if (Xl_Ur != API[_0x8d61[107]] && API[_0x8d61[107]][_0x8d61[56]](_0x8d61[177]) < 0) {
                    sel_lt[_0x8d61[88]]([sel_lt[_0x8d61[85]], _0x8d61[698], ST_Ur]);
                };
                sel_lt[_0x8d61[88]]([sel_lt[_0x8d61[85]], _0x8d61[699], _0x8d61[3]]);
            } else {
                if (t_le == _0x8d61[700]) {
                    GetIdn(_0x8d61[305]);
                };
            };
        };
        this[_0x8d61[404]] = t_le;
        this[_0x8d61[422]] = this[_0x8d61[407]];
        this[_0x8d61[424]] = this[_0x8d61[423]];
        this[_0x8d61[701]] = (sel_lt[_0x8d61[85]] % 10 == 0) ? 10 : sel_lt[_0x8d61[85]] % 10;
        this[_0x8d61[702]] = Math[_0x8d61[689]](sel_lt[_0x8d61[85]] / 10);
        this[_0x8d61[703]] = sel_lt;
        SelBx[_0x8d61[704]]();
    } catch (e) {};
};
SelBx[_0x8d61[704]] = function () {
    var item_on_page = 10,
        t = 48,
        l = 550;
    this[_0x8d61[423]] = (this[_0x8d61[423]] > this[_0x8d61[702]] - 1) ? 0 : (this[_0x8d61[423]] < 0) ? this[_0x8d61[702]] - 1 : this[_0x8d61[423]];
    if (this[_0x8d61[423]] == this[_0x8d61[702]] - 1) {
        item_on_page = this[_0x8d61[701]];
        if (this[_0x8d61[407]] > this[_0x8d61[701]] - 1 || this[_0x8d61[407]] < 0) {
            this[_0x8d61[407]] = this[_0x8d61[701]] - 1;
        };
    };
    var h = 66 + 34 * item_on_page,
        html = _0x8d61[705] + this[_0x8d61[404]] + _0x8d61[706];
    for (var i = 0; i < item_on_page; i++) {
        var array_index = 10 * this[_0x8d61[423]] + i,
            st = _0x8d61[707] + i + _0x8d61[181],
            nn = (i < 9) ? this[_0x8d61[423]].toString() : Number(this[_0x8d61[423]].toString() + _0x8d61[4]),
            num = (this[_0x8d61[423]] > 0) ? nn + (1 + i) + _0x8d61[708] : (1 + i) + _0x8d61[708];
        html += _0x8d61[709] + st + _0x8d61[710] + num + this[_0x8d61[703]][array_index][1] + _0x8d61[711];
    };
    html += _0x8d61[712];
    if (this[_0x8d61[404]] == _0x8d61[697]) {
        t = 150;
        l = 320;
    } else {
        if (this[_0x8d61[404]] == _0x8d61[700]) {
            t = 48;
            l = 90;
        };
    };
    StSyeBx(t, l, 320, h + 15);
    GetId(_0x8d61[713])[_0x8d61[69]] = html;
    SetIds(_0x8d61[714] + this[_0x8d61[407]], _0x8d61[715]);
    GetId(_0x8d61[716])[_0x8d61[99]][_0x8d61[167]] = 36 + 34 * this[_0x8d61[407]] + _0x8d61[243];
    GetIdb(_0x8d61[142]);
};
SelBx[_0x8d61[717]] = function () {
    SetIds(_0x8d61[714] + this[_0x8d61[407]], _0x8d61[718]);
    this[_0x8d61[407]]++;
    if (this[_0x8d61[407]] >= 10 || (this[_0x8d61[407]] == this[_0x8d61[701]] && this[_0x8d61[423]] == this[_0x8d61[702]] - 1)) {
        this[_0x8d61[407]] = 0;
    };
    if (this[_0x8d61[702]] > 1 && this[_0x8d61[407]] == 0) {
        this[_0x8d61[423]]++;
        SelBx[_0x8d61[704]]();
    } else {
        GetId(_0x8d61[716])[_0x8d61[99]][_0x8d61[167]] = 36 + 34 * this[_0x8d61[407]] + _0x8d61[243];
        SetIds(_0x8d61[714] + this[_0x8d61[407]], _0x8d61[715]);
    };
};
SelBx[_0x8d61[719]] = function () {
    SetIds(_0x8d61[714] + this[_0x8d61[407]], _0x8d61[718]);
    this[_0x8d61[407]]--;
    if (this[_0x8d61[407]] < 0 && this[_0x8d61[702]] == 1) {
        this[_0x8d61[407]] = this[_0x8d61[701]] - 1;
    };
    if (this[_0x8d61[407]] < 0 && this[_0x8d61[702]] > 1) {
        if (this[_0x8d61[423]] > 0) {
            this[_0x8d61[407]] = 9;
        };
        this[_0x8d61[423]]--;
        SelBx[_0x8d61[704]]();
    } else {
        GetId(_0x8d61[716])[_0x8d61[99]][_0x8d61[167]] = 36 + 34 * this[_0x8d61[407]] + _0x8d61[243];
        SetIds(_0x8d61[714] + this[_0x8d61[407]], _0x8d61[715]);
    };
};
SelBx[_0x8d61[720]] = function () {
    if (this[_0x8d61[702]] > 1) {
        this[_0x8d61[423]]++;
        SelBx[_0x8d61[704]]();
    };
};
SelBx[_0x8d61[721]] = function () {
    if (this[_0x8d61[702]] > 1) {
        this[_0x8d61[423]]--;
        SelBx[_0x8d61[704]]();
    };
};
SelBx[_0x8d61[722]] = function () {
    Sh_St = this[_0x8d61[703]][10 * this[_0x8d61[423]] + this[_0x8d61[407]]][1];
    GetIdn(_0x8d61[142]);
    if (API[_0x8d61[723]] == 1) {
        GetIdb(_0x8d61[305]);
        SpKb();
        Kb[_0x8d61[724]] = Sh_St;
        Kb[_0x8d61[725]] = Kb[_0x8d61[724]][_0x8d61[85]];
        GetId(S_Id)[_0x8d61[244]] = Kb[_0x8d61[724]];
        Kb[_0x8d61[726]] = Kb[_0x8d61[725]] - 1;
        Kb[_0x8d61[727]] = 0;
        SeKbCr(0);
        SeFoc(5);
    } else {
        StImE();
    };
};
SelBx[_0x8d61[728]] = function () {
    GetIdn(_0x8d61[142]);
    GetIdb(_0x8d61[169]);
    OnCoFl(Xl_Ur);
};
SelBx[_0x8d61[729]] = function () {
    F_Sel = 10 * this[_0x8d61[423]] + this[_0x8d61[407]];
    if (FV[F_Sel][1] == _0x8d61[699]) {
        Hi_Na_Ar[_0x8d61[88]](Ach(0));
    } else {
        var id = FV[F_Sel][0];
        T_F_Nu = F_Nu;
        F_Nu = 1 + parseInt(id);
        T_F_Na = F_Na;
        F_Na = FV[F_Sel][1];
        var url = FV[F_Sel][2];
        if (url != Xl_Ur) {
            if (Fav && !Red) {
                Reset = 1;
                OnCoFl(url);
            } else {
                SvFav(url);
            }; if (Fav && Red) {
                F_Nu = T_F_Nu;
                F_Na = T_F_Na;
                OnCoFl(Xl_Ur);
            };
        };
    };
    GetIdn(_0x8d61[142]);
    GetIdb(_0x8d61[169]);
    if (FV[FV[_0x8d61[85]] - 1][2] == _0x8d61[3]) {
        FV[_0x8d61[397]]();
    };
    if (FV[FV[_0x8d61[85]] - 1][2] == ST_Ur) {
        FV[_0x8d61[397]]();
    };
    SeFoc(0);
};
SelBx[_0x8d61[730]] = function () {
    GetIdn(_0x8d61[142]);
    SeFoc(3);
};

function LdShw() {
    if (Ti_L_Sh < 0) {
        GetIdb(_0x8d61[731]);
        clearTimeout(Ti_L_Sh);
        Ti_L_Sh = setTimeout(_0x8d61[732], 60000);
        LdStp();
    };
};

function LdHie() {
    clearTimeout(Ti_L_Sh);
    Ti_L_Sh = -1;
    GetIdn(_0x8d61[731]);
};

function LdStp() {
    if (L_Sh_I < 10) {
        GetId(_0x8d61[733])[_0x8d61[80]] = _0x8d61[734] + L_Sh_I + _0x8d61[685];
    } else {
        GetId(_0x8d61[733])[_0x8d61[80]] = _0x8d61[735] + L_Sh_I + _0x8d61[685];
    };
    L_Sh_I++;
    if (L_Sh_I > 12) {
        L_Sh_I = 1;
    };
    if (Ti_L_Sh > -1) {
        setTimeout(_0x8d61[736], 250);
    };
};

function PrShw(d) {
    if (FoC != 0) {
        var w = 0;
        if (S_E) {
            w = 10;
        };
        clearTimeout(Ti_Nu);
        GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[167]] = _0x8d61[737];
        if (Pr_ST == 3 || Pr_ST == 4) {
            Ya_EI_Ar = [];
            E_T2 = 0;
            E_T1 = 0;
            GetIdn(_0x8d61[738]);
            GetId(_0x8d61[546])[_0x8d61[99]][_0x8d61[241]] = w * 1.5 + 135 + _0x8d61[243];
            GetId(_0x8d61[739])[_0x8d61[99]][_0x8d61[241]] = 472 - 2.6 * w + _0x8d61[243];
            GetIdb(_0x8d61[740]);
            if (Pr_ST == 4) {
                GetId(_0x8d61[741])[_0x8d61[244]] = _0x8d61[742];
                GetId(_0x8d61[740])[_0x8d61[99]][_0x8d61[98]] = 48 - 1.9 * w + _0x8d61[243];
            } else {
                GetId(_0x8d61[741])[_0x8d61[244]] = _0x8d61[743];
                GetId(_0x8d61[740])[_0x8d61[99]][_0x8d61[98]] = 40 - 2 * w + _0x8d61[243];
            };
            GetIdb(_0x8d61[536]);
        } else {
            if (Pr_ST == 2) {
                GetIdn(_0x8d61[744]);
                if (P_T == 1) {
                    GetId(_0x8d61[745])[_0x8d61[99]][_0x8d61[98]] = 140 - 2 * w + _0x8d61[243];
                } else {
                    GetId(_0x8d61[745])[_0x8d61[99]][_0x8d61[98]] = 190 - 2 * w + _0x8d61[243];
                };
                GetId(_0x8d61[546])[_0x8d61[99]][_0x8d61[241]] = 1.3 * w + 115 + _0x8d61[243];
                GetId(_0x8d61[739])[_0x8d61[99]][_0x8d61[241]] = 515 - 2.2 * w + _0x8d61[243];
                GetIdb(_0x8d61[745]);
                if (P_T == 1) {
                    UpPrIBr();
                    if (Ya_EI_Ar[_0x8d61[85]] > 0 && Ya_PI == P_Ch_Ar_I) {
                        GetIdb(_0x8d61[746]);
                        setTimeout(_0x8d61[747], 100);
                    } else {
                        UpChIn();
                    };
                };
            } else {
                UpNuBrL();
                GetIdn(_0x8d61[748]);
            };
        }; if (API[_0x8d61[749]] == _0x8d61[268]) {
            GetIdb(_0x8d61[750]);
        } else {
            GetIdn(_0x8d61[750]);
        };
        GetId(_0x8d61[102])[_0x8d61[99]][_0x8d61[167]] = _0x8d61[252];
        GetIdb(_0x8d61[751]);
        clearTimeout(Ti_In);
        d = (d) ? d : 6000;
        if (Pr_ST != 4 && Pr_ST != 1 && !Pr_Au && d != 0) {
            TiIbr(_0x8d61[752], d);
        };
        if (!Pr_Jp && Pr_ST != 4 && (Pr_Me || Pr_Me_Si || Pr_Me_Au || Pr_Me_3D)) {
            setTimeout(_0x8d61[753], 200);
        };
    };
};

function TiIbr(f, t) {
    clearTimeout(Ti_In);
    Ti_In = setTimeout(f, t);
};

function SeSsT() {
    var h = GetId(_0x8d61[746])[_0x8d61[311]];
    GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[167]] = h + 80 + _0x8d61[243];
};

function PrHie() {
    clearTimeout(Ti_In);
    if (Pr_STi > 0 && !Pr_Jp) {
        if (!Pr_Jp) {
            StsShw(_0x8d61[754], 6000);
        } else {
            StsShw(_0x8d61[755]);
        };
    } else {
        if (!Se_Z) {
            StsHie();
        };
    };
    GetIdn(_0x8d61[756]);
    GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[167]] = _0x8d61[757];
    GtNxEgIfo(0);
    if ((FoC != 0 && API[_0x8d61[758]] == _0x8d61[226]) || P_T == 0) {
        GetIdn(_0x8d61[102]);
    };
};

function StsShw(s, d, b) {
    if (FoC == 0) {
        GetIdn(_0x8d61[147]);
    };
    if (b) {
        GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[153];
    } else {
        GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[152];
    };
    GetIdn(_0x8d61[242]);
    GetId(_0x8d61[691])[_0x8d61[69]] = s;
    GetIdb(_0x8d61[691]);
    clearTimeout(Ti_Sus);
    var t = (d) ? d : 3000;
    if (d != 0) {
        Ti_Sus = setTimeout(_0x8d61[759], t);
    };
};

function UpNuBrL() {
    if (API[_0x8d61[249]] == 1 || API[_0x8d61[249]] == 3) {
        var wl = 66;
    } else {
        wl = 46;
    };
    var l_o = (Ach(2)) ? GtLoUr1(Ach(5), Ach(2)) : GtLoUr2(Ach(0), Ach(3), Ach(5));
    if (!l_o) {
        wl = 0;
        GetIdn(_0x8d61[760]);
    } else {
        GetId(_0x8d61[760])[_0x8d61[80]] = l_o;
        GetId(_0x8d61[760])[_0x8d61[99]][_0x8d61[241]] = wl + _0x8d61[243];
        GetIdb(_0x8d61[760]);
    };
    StSyeChBx(5, 5, 76 + wl, 54);
};

function NuBrShw(num, t) {
    if (FoC == 0) {
        GetIdn(_0x8d61[760]);
        StSyeChBx(10, 10, 90, 66);
    } else {
        if (t == 0) {
            GetIdn(_0x8d61[760]);
            StSyeChBx(5, 5, 76, 54);
        };
    };
    GetId(_0x8d61[157])[_0x8d61[244]] = num;
    GetIdb(_0x8d61[147]);
    clearTimeout(Ti_Nu);
    if (GetId(_0x8d61[762])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[763]) {
        Ti_Nu = setTimeout(_0x8d61[764], 3000);
    };
};

function StsHie() {
    GetIdn(_0x8d61[691]);
    GetIdb(_0x8d61[242]);
    Se_Z = _0x8d61[3];
    S_Ret = _0x8d61[3];
};

function SwMeT() {
    if (M_TV == 0) {
        ReVK();
        pluginAPI.ShowTools(1);
        if (S_C || Pr_ST == 0) {
            M_TV = 1;
        };
    } else {
        ReVK();
        pluginAPI.ShowTools(0);
        M_TV = 0;
    };
};

function SmtEt() {
    if (Pr_ST == 0) {
        if (S_Ret) {
            widgetAPI[_0x8d61[765]]();
        };
        S_Ret = 1;
        StsShw(_0x8d61[766], 5000);
    } else {
        if (FoC == 5) {
            clearTimeout(Kb[_0x8d61[767]]);
            MaMe();
        } else {
            RnMeu();
        };
    };
};

function SeFoc(foc) {
    alert(_0x8d61[768] + foc);
    clearTimeout(Load_timer);
    FoC = foc;
    switch (foc) {
    case 0:
        GetId(_0x8d61[770])[_0x8d61[769]]();
        if (!S_C) {
            pluginAPI[_0x8d61[120]](75);
        };
        break;;
    case 1:
        GetId(_0x8d61[771])[_0x8d61[769]]();
        break;;
    case 2:
        GetId(_0x8d61[772])[_0x8d61[769]]();
        if (!S_C) {
            pluginAPI[_0x8d61[119]](75);
        };
        break;;
    case 3:
        GetId(_0x8d61[773])[_0x8d61[769]]();
        if (!S_C) {
            pluginAPI[_0x8d61[119]](75);
        };
        break;;
    case 4:
        GetId(_0x8d61[774])[_0x8d61[769]]();
        break;;
    case 5:
        GetId(_0x8d61[775])[_0x8d61[769]]();
        break;;
    default:
        alert(_0x8d61[776]);
        break;;
    };
};

function ChlSer() {
    clearTimeout(Load_timer);
    if (Nu_En > CH[_0x8d61[85]]) {
        if (FoC == 0 || GetId(_0x8d61[762])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[763]) {
            GetIdn(_0x8d61[147]);
        };
        if (FoC != 0) {
            UpNuBrL();
        };
        GetId(_0x8d61[157])[_0x8d61[244]] = ChArI + 1;
        StsShw(_0x8d61[777]);
    } else {
        if (Nu_En > 0) {
            if (Pr_ST != 0 && Nu_En - 1 == P_Ch_Ar_I && Xl_Ur == P_Xl_Ur && Ach(1)[_0x8d61[56]](_0x8d61[778]) < 0 && Ach(12)[_0x8d61[56]](_0x8d61[778]) < 0) {
                if (FoC == 0 || GetId(_0x8d61[762])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[763]) {
                    GetIdn(_0x8d61[147]);
                };
                if (FoC != 0) {
                    UpNuBrL();
                    StsShw(_0x8d61[779]);
                } else {
                    G_St = 0;
                    SetSP();
                    GetIdn(_0x8d61[338]);
                    StsHie();
                    if (Pr_ST == 2) {
                        SeFoc(2);
                    } else {
                        SeFoc(3);
                    };
                    UpNuBrL();
                    PrShw(3000);
                    if (Pr_Au) {
                        pluginAPI[_0x8d61[780]](120);
                    };
                };
            } else {
                if (FoC == 1) {
                    RnMeu();
                } else {
                    ChArI = Nu_En - 1;
                    Sel_P = Math[_0x8d61[537]](ChArI / 10);
                    Sel_Ch = ChArI - Sel_P * 10;
                    PlSelCh();
                };
            };
        };
    };
    Nu_En = _0x8d61[3];
};

function K10KDn(keyCode) {
    var nr = _0x8d61[3];
    switch (keyCode) {
    case 101:
        nr = _0x8d61[482];
        break;;
    case 98:
        nr = _0x8d61[479];
        break;;
    case 6:
        nr = _0x8d61[470];
        break;;
    case 8:
        nr = _0x8d61[471];
        break;;
    case 9:
        nr = _0x8d61[473];
        break;;
    case 10:
        nr = _0x8d61[475];
        break;;
    case 12:
        nr = _0x8d61[477];
        break;;
    case 13:
        nr = _0x8d61[481];
        break;;
    case 14:
        nr = _0x8d61[781];
        break;;
    case 17:
        nr = _0x8d61[4];
        break;;
    default:
        alert(_0x8d61[782]);
        break;;
    };
    if (Nu_En < 999) {
        Nu_En = Nu_En + nr;
    };
    if (Nu_En) {
        if (P_T == 0 && Pr_ST != 0) {
            window[_0x8d61[388]][_0x8d61[220]](Nu_En);
        } else {
            NuBrShw(Nu_En, 0);
        };
        LoadTimer(_0x8d61[783], 2000);
    };
};

function DrTF(Cd) {
    if (!Cd) {
        var Cd = event[_0x8d61[784]];
        if ((Ach(1)[_0x8d61[56]](_0x8d61[778]) > 0 || Ach(5)[_0x8d61[56]](_0x8d61[778]) > 0 || Ach(12)[_0x8d61[56]](_0x8d61[778]) > 0) && Cd != 261 && Cd != 147 && Cd != 88) {
            TrsKyCo(Cd);
            if (Cd != 45) {
                return;
            };
        };
    } else {
        Cd = parseInt(Cd);
    };
    return Cd;
};

function RenKD(Cd) {
    alert(_0x8d61[785] + Cd);
    K_Do = 1;
    switch (FoC) {
    case 0:
        MaMeKDn(Cd);
        break;;
    case 1:
        LdgKDn(Cd);
        break;;
    case 2:
        LvPrKDn(Cd);
        break;;
    case 3:
        VdPrKDn(Cd);
        break;;
    default:
        alert(_0x8d61[776]);
        break;;
    };
};

function MaMeKDn(Cd) {
    if (FoC != 0) {
        return;
    };
    Cd = DrTF(Cd);
    if (event) {
        event[_0x8d61[786]]();
    };
    K10KDn(Cd);
    switch (Cd) {
    case 261:
        ;
    case 147:
        widgetAPI[_0x8d61[765]]();
        break;;
    case 1252:
        break;;
    case 35:
        ;
    case 650:
        if (Pr_ST == 0) {
            SrAChs();
        } else {
            StsShw(_0x8d61[787]);
        };
        break;;
    case 222:
        if (G_D || Red) {
            return;
        };
        if (Xl_Ur != _0x8d61[347]) {
            OpPlL(_0x8d61[347]);
        } else {
            OpPvPl();
        };
        break;;
    case 1086:
        ;
    case 84:
        if (Red) {
            return;
        };
        if (!G_D && Xl_Ur != API[_0x8d61[107]]) {
            Reset = 1;
            Pr_Pl_Ar = [];
            if (Pr_ST == 0) {
                Pr_Pl = _0x8d61[3];
            };
            OnCoFl(API[_0x8d61[107]]);
        } else {
            OpPvPl();
        };
        break;;
    case 256:
        ;
    case 1057:
        ;
    case 651:
        if (Red) {
            return;
        };
        if (P_Ch_Ar_I != ChArI) {
            G_St = 0;
        };
        if (G_D) {
            OpPvPl();
        } else {
            if (Ya_m && G_St == 0 && Ya_PI_Ar[_0x8d61[85]] > 0) {
                G_D = 1;
                Pr_Pl = 1;
                RdPlAr(Xl_Ur, Ya_PI_Ar);
            } else {
                if (Pr_ST == 2 && G_St == 1) {
                    G_St = 0;
                    SetSP();
                    GetIdn(_0x8d61[338]);
                    StsHie();
                    SeFoc(2);
                    PrShw(3000);
                } else {
                    StsShw(_0x8d61[788]);
                };
            };
        };
        break;;
    case 31:
        if (Red || Xl_Ur == _0x8d61[109] || Xl_Ur == _0x8d61[108]) {
            return;
        };
        if (INFO) {
            SetIWi();
        } else {
            SetIWiW();
        };
        UpChIn();
        break;;
    case 75:
        if (G_D || Red) {
            return;
        };
        StSpFrr();
        break;;
    case 1118:
        ;
    case 613:
        ;
    case 262:
        SwMeT();
        break;;
    case 78:
        ;
    case 259:
        if (G_D || Red) {
            return;
        };
        PlPvCh();
        break;;
    case 45:
        SmtEt();
        break;;
    case 88:
        if (Red) {
            ChSvS();
            Red = _0x8d61[3];
            MaMe();
        } else {
            if (!G_D && Pr_ST != 0 && Xl_Ur == P_Xl_Ur && Cat_id == P_Cat_id) {
                G_St = 0;
                SetSP();
                GetIdn(_0x8d61[338]);
                StsHie();
                if (Pr_ST == 2) {
                    SeFoc(2);
                } else {
                    SeFoc(3);
                };
                UpNuBrL();
                PrShw(3000);
                if (Pr_Au) {
                    pluginAPI[_0x8d61[780]](120);
                };
            } else {
                OpPvPl();
            };
        };
        break;;
    case 106:
        ;
    case 29461:
        SelNxCh();
        break;;
    case 105:
        ;
    case 29460:
        SelPvCh();
        break;;
    case 4:
        SelPvPg();
        break;;
    case 5:
        SelNxPg();
        break;;
    case 612:
        ;
    case 309:
        ;
    case 29443:
        if (G_D) {
            return;
        };
        if (Red) {
            RdFrStS();
        } else {
            if (Nu_En) {
                ChlSer();
            } else {
                if (Pr_ST != 0 && P_Ch_Ar_I == ChArI && Xl_Ur == P_Xl_Ur && Ach(1)[_0x8d61[56]](_0x8d61[778]) < 0 && Ach(12)[_0x8d61[56]](_0x8d61[778]) < 0) {
                    G_St = 0;
                    GetIdn(_0x8d61[338]);
                    StsHie();
                    if (Pr_ST == 2) {
                        SeFoc(2);
                    } else {
                        SeFoc(3);
                    };
                    UpNuBrL();
                    PrShw(3000);
                } else {
                    PlSelCh();
                };
            };
        };
        break;;
    case 108:
        if (G_D) {
            return;
        };
        if (Red) {
            OnCoFl(Xl_Ur);
        } else {
            if (!Fav && CAT[_0x8d61[85]] > 1) {
                SelBx[_0x8d61[693]](_0x8d61[696], CAT);
            } else {
                if (Xl_Ur[_0x8d61[56]](_0x8d61[204]) > 0) {
                    DlHiy(Xl_Ur);
                } else {
                    if (Pr_ST == 0) {
                        SrAChs();
                    } else {
                        StsShw(_0x8d61[787]);
                    };
                };
            };
        };
        break;;
    case 20:
        if (G_D) {
            return;
        };
        if (Red) {
            MvCh(1);
        } else {
            if (!Sv_F) {
                StsShw(_0x8d61[789]);
            } else {
                if (!Fav && Xl_Ur[_0x8d61[56]](_0x8d61[395]) < 0 && Ach(5) != _0x8d61[109] && Xl_Ur != _0x8d61[207]) {
                    if ((Xl_Ur == _0x8d61[195] || (!Ach(5) && Xl_Ur != _0x8d61[195])) && FV[_0x8d61[85]] == 1) {
                        SvFav(FV[0][2]);
                    } else {
                        SelBx[_0x8d61[693]](_0x8d61[405], FV, 1);
                    };
                } else {
                    StsShw(_0x8d61[787]);
                };
            };
        };
        break;;
    case 21:
        if (G_D) {
            return;
        };
        if (Red) {
            MvCh(-1);
        } else {
            if (Xl_Ur[_0x8d61[56]](_0x8d61[395]) < 0 || Xl_Ur == _0x8d61[108]) {
                if (FV[_0x8d61[85]] == 1 && !Fav) {
                    OnCoFl(FV[0][2]);
                } else {
                    Fav = 1;
                    SelBx[_0x8d61[693]](_0x8d61[405], FV);
                };
            } else {
                StsShw(_0x8d61[266]);
            };
        };
        break;;
    case 22:
        if (G_D) {
            return;
        };
        if (Red) {
            if (Xl_Ur == _0x8d61[109]) {
                StShFr();
            } else {
                if (Xl_Ur == API[_0x8d61[107]] && ST_Ur) {
                    SelBx[_0x8d61[693]](_0x8d61[406], [
                        [1, _0x8d61[790]],
                        [2, _0x8d61[791]]
                    ]);
                } else {
                    if (Fav && FV[_0x8d61[85]] > 1) {
                        SelBx[_0x8d61[693]](_0x8d61[405], FV);
                    };
                };
            };
        } else {
            if (Xl_Ur != _0x8d61[108] && (Fav || (Xl_Ur == API[_0x8d61[107]] && ST_Ur) || Xl_Ur == _0x8d61[195] || Xl_Ur == _0x8d61[109])) {
                Red = 1;
                MaMe();
            } else {
                if (Pr_Pl_Ar[_0x8d61[85]] > Nu_Pg && Nu_Pg > 1) {
                    OpPvPl(Pr_Pl_Ar[_0x8d61[85]] - Nu_Pg);
                };
            };
        };
        break;;
    case 72:
        if (G_D || Red) {
            return;
        };
        if (Ya_m) {
            Ya_Td++;
            YaGtUr(GtYaI());
        } else {
            LisNxPg();
        };
        break;;
    case 74:
        if (G_D || Red) {
            return;
        };
        if (Pr_TTi > 0) {
            if (Pr_ST == 4) {
                PrRee();
            } else {
                PrPae();
            };
        } else {
            if (Ya_m) {
                Ya_Fs++;
                YaGtUr(GtYaI());
            } else {
                if (Xl_Ur == _0x8d61[195]) {
                    YaBeIfo();
                };
            };
        };
        break;;
    case 69:
        if (G_D || Red) {
            return;
        };
        if (Ya_m) {
            Ya_Td--;
            YaGtUr(GtYaI());
        } else {
            LisPvPg();
        };
        break;;
    case 68:
        ;
    case 1078:
        if (Red) {
            return;
        };
        LoSc(_0x8d61[283], 29);
        break;;
    case 65:
        ;
    case 1080:
        if (Red) {
            return;
        };
        LoSc(_0x8d61[283], -29);
        break;;
    case 71:
        if (G_D || Red) {
            return;
        };
        if (Pr_ST == 4) {
            PrRee();
        } else {
            if (Ya_m) {
                if (!Ya_AD) {
                    Ya_AD = 1;
                } else {
                    Ya_AD = _0x8d61[3];
                };
                YaGtUr(GtYaI());
            } else {
                if (Pr_ST == 0) {
                    PlSelCh();
                } else {
                    if (Pr_TTi > 0) {
                        if (Pr_Pm == 0) {
                            Pr_Pm = 1;
                            HStr[_0x8d61[216]] = _0x8d61[217];
                            StsShw(_0x8d61[792]);
                        } else {
                            if (Pr_Pm == 1) {
                                Pr_Pm = 2;
                                HStr[_0x8d61[216]] = _0x8d61[218];
                                StsShw(_0x8d61[793]);
                            } else {
                                if (Pr_Pm == 2) {
                                    Pr_Pm = 0;
                                    HStr[_0x8d61[216]] = _0x8d61[219];
                                    StsShw(_0x8d61[794]);
                                };
                            };
                        };
                        RsHp();
                    };
                };
            };
        };
        break;;
    case 70:
        if (G_D || Red) {
            return;
        };
        if (Pr_ST != 0) {
            StSlSh();
            PrStpV();
        } else {
            if (S_r_h) {
                StShFr();
            } else {
                if (GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[763]) {
                    if (Ach(5)) {
                        var url = Ach(5);
                    } else {
                        url = Ach(1);
                    };
                    var urlArr = SplStg(url);
                    for (var i = 0; i < urlArr[_0x8d61[85]]; i++) {
                        if (i > 0) {
                            url += _0x8d61[795] + urlArr[i];
                        } else {
                            url = urlArr[i];
                        };
                    };
                    StsShw(_0x8d61[403] + url, 60000, 1);
                } else {
                    StsHie();
                };
            };
        };
        break;;
    case 1249:
        ;
    case 192:
        if (GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[763]) {
            StsShw(_0x8d61[796] + IDT, 60000, 1);
        } else {
            StsHie();
        };
        break;;
    case 1236:
        ;
    case 1089:
        ;
    case 652:
        if (G_D || Red) {
            return;
        };
        if (P_T == 1) {
            PrSfNxAuSm();
        } else {
            StsShw(_0x8d61[797]);
        };
        break;;
    default:
        alert(_0x8d61[782]);
        break;;
    };
};

function LdgKDn(Cd) {
    Cd = DrTF(Cd);
    if (event) {
        event[_0x8d61[786]]();
    };
    K10KDn(Cd);
    switch (Cd) {
    case 261:
        ;
    case 147:
        widgetAPI[_0x8d61[765]]();
        break;;
    case 29460:
        ;
    case 105:
        ;
    case 68:
        ;
    case 1078:
        if (Pr_ST == 1) {
            PlNxCh();
        };
        break;;
    case 29461:
        ;
    case 106:
        ;
    case 65:
        ;
    case 1080:
        if (Pr_ST == 1) {
            SelPvCh();
            PlSelCh();
        };
        break;;
    case 78:
        ;
    case 259:
        if (Pr_ST == 1) {
            PlPvCh();
        };
        break;;
    case 45:
        if (Pr_ST == 1) {
            RnMeu();
        } else {
            if (Ach(12) == _0x8d61[568] && Tsnake) {
                clearTimeout(URLtoXML[_0x8d61[798]]);
                clearInterval(URLtoXML[_0x8d61[799]]);
                if (URLtoXML[_0x8d61[800]] != null) {
                    URLtoXML[_0x8d61[800]][_0x8d61[280]]();
                    URLtoXML[_0x8d61[800]][_0x8d61[584]]();
                    URLtoXML[_0x8d61[800]] = null;
                };
            } else {
                SpGlRt();
            }; if (CH[_0x8d61[85]] == 0) {
                OpPvPl();
            } else {
                MaMe();
            };
        };
        break;;
    case 84:
        ;
    case 88:
        ;
    case 70:
        if (Pr_ST == 1) {
            RnMeu();
        };
        break;;
    default:
        alert(_0x8d61[782]);
        break;;
    };
};

function SeBxKDn() {
    var Cd = event[_0x8d61[784]];
    event[_0x8d61[786]]();
    switch (Cd) {
    case 261:
        ;
    case 147:
        widgetAPI[_0x8d61[765]]();
        break;;
    case 29461:
        SelBx.SelNxIm();
        break;;
    case 29460:
        SelBx.SelPvIm();
        break;;
    case 29443:
        if (SelBx[_0x8d61[404]] == _0x8d61[697]) {
            SelBx.SelSie();
        } else {
            if (SelBx[_0x8d61[404]] == _0x8d61[405]) {
                SelBx.SelFv();
            } else {
                if (SelBx[_0x8d61[404]] == _0x8d61[406]) {
                    SelBx.SelTye();
                } else {
                    if (SelBx[_0x8d61[404]] == _0x8d61[700]) {
                        SelBx.SelHtSr();
                    } else {
                        Se_Cay();
                    };
                };
            };
        };
        break;;
    case 4:
        SelBx.SelPvPg();
        break;;
    case 5:
        SelBx.SelNxPg();
        break;;
    case 22:
        if (SelBx[_0x8d61[404]] == _0x8d61[406]) {
            return SelBx.SelTye();
        };;
    case 21:
        ;
    case 20:
        if (SelBx[_0x8d61[404]] == _0x8d61[405]) {
            return SelBx.SelFv();
        };;
    case 108:
        if (SelBx[_0x8d61[404]] == _0x8d61[696]) {
            return Se_Cay();
        };;
    case 45:
        ;
    case 88:
        if (Xl_Ur[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[177]) != Xl_Ur[_0x8d61[85]] - 7 && Xl_Ur[_0x8d61[85]] > 7) {
            Fav = _0x8d61[3];
        };
        GetIdn(_0x8d61[142]);
        if (SelBx[_0x8d61[404]] == _0x8d61[700]) {
            if (API[_0x8d61[723]] == 1) {
                GetIdb(_0x8d61[305]);
                SeFoc(5);
            } else {
                StImE();
            };
            return;
        };
        GetIdb(_0x8d61[169]);
        if (SelBx[_0x8d61[404]] == _0x8d61[697]) {
            SeFoc(3);
        } else {
            SeFoc(0);
            if (FV[FV[_0x8d61[85]] - 1][2] == _0x8d61[3]) {
                FV[_0x8d61[397]]();
            };
            if (FV[FV[_0x8d61[85]] - 1][2] == ST_Ur) {
                FV[_0x8d61[397]]();
            };
        };
        break;;
    default:
        alert(_0x8d61[782]);
        break;;
    };
};

function LvPrKDn(Cd) {
    Cd = DrTF(Cd);
    if (event) {
        event[_0x8d61[786]]();
    };
    K10KDn(Cd);
    switch (Cd) {
    case 261:
        ;
    case 147:
        widgetAPI[_0x8d61[765]]();
        break;;
    case 1057:
        ;
    case 256:
        ;
    case 651:
        if (Ya_m && G_St == 0 && Ya_PI_Ar[_0x8d61[85]] > 0) {
            G_D = 1;
            RdPlAr(Xl_Ur, Ya_PI_Ar);
        } else {
            if (Ya_m) {
                MaMe();
            } else {
                StsShw(_0x8d61[801]);
            };
        };
        break;;
    case 75:
        break;;
    case 1118:
        ;
    case 613:
        ;
    case 262:
        SwMeT();
        break;;
    case 20:
        if (H_t == 0 || H_t == 1) {
            ReVK();
            pluginAPI.ShowTools(0);
        } else {
            PrSfNxAuSm();
        };
        break;;
    case 21:
        if (Pr_Si == 5 && PrGtRsn()[_0x8d61[48]](_0x8d61[87])[0] > 0) {
            if (Se_Z) {
                StsHie();
            } else {
                Se_Z = 1;
                StsShw(_0x8d61[802], 10000);
            };
        } else {
            ReVK();
            pluginAPI.ShowTools(1);
        };
        break;;
    case 78:
        ;
    case 259:
        PlPvCh();
        break;;
    case 22:
        ;
    case 653:
        ;
    case 1249:
        ;
    case 1083:
        if (P_T == 1) {
            if (GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[803]) {
                if (Pr_Si >= 5) {
                    PrStSie(0, 1);
                } else {
                    PrStSie(Pr_Si + 1, 1);
                };
            } else {
                PrStSie(Pr_Si, 1);
            };
            Se_Z = _0x8d61[3];
        } else {
            StsShw(_0x8d61[797]);
        };
        break;;
    case 1219:
        if (P_T == 1) {
            if (Pr_3D >= 2) {
                Chg3DMe(0);
            } else {
                Chg3DMe(Pr_3D + 1);
            };
        } else {
            StsShw(_0x8d61[797]);
        };
        break;;
    case 29460:
        ;
    case 105:
        ;
    case 68:
        ;
    case 1078:
        if (Se_Z) {
            if (Pr_Ph < 150) {
                Pr_Ph++;
                PrStSie(Pr_Si, 1);
            };
        } else {
            PlNxCh();
        };
        break;;
    case 29461:
        ;
    case 106:
        ;
    case 65:
        ;
    case 1080:
        if (Se_Z) {
            if (Pr_Ph > 50) {
                Pr_Ph--;
                PrStSie(Pr_Si, 1);
            };
        } else {
            SelPvCh();
            PlSelCh();
        };
        break;;
    case 5:
        if (Se_Z) {
            if (Pr_Pw < 150) {
                Pr_Pw++;
                PrStSie(Pr_Si, 1);
            };
        } else {
            if (GetId(_0x8d61[762])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[803]) {
                PrHie();
            } else {
                PrShw(60000);
            };
        };
        break;;
    case 4:
        if (Se_Z) {
            if (Pr_Pw > 50) {
                Pr_Pw--;
                PrStSie(Pr_Si, 1);
            };
        } else {
            if (GetId(_0x8d61[762])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[803]) {
                PrHie();
            } else {
                PrShw(60000);
            };
        };
        break;;
    case 31:
        ;
    case 29443:
        if (Nu_En) {
            ChlSer();
        } else {
            if (GetId(_0x8d61[762])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[803]) {
                PrHie();
            } else {
                PrShw(60000);
            };
        };
        break;;
    case 612:
        ;
    case 309:
        ;
    case 70:
        ;
    case 45:
        if (P_T == 0) {
            StFPr();
        } else {
            RnMeu();
        };
        break;;
    case 88:
        ;
    case 1086:
        ;
    case 84:
        if (P_T == 0) {
            StFPr();
        } else {
            MaMe();
        };
        break;;
    case 71:
        if (Foto) {
            if (In_SSh < 0) {
                In_SSh = setInterval(_0x8d61[804], 8000);
                StsShw(_0x8d61[805]);
            } else {
                StSlSh();
                StsShw(_0x8d61[806]);
            };
        } else {
            if (P_T == 1) {
                PrStt();
            } else {
                StFPr();
            };
        };
        break;;
    case 72:
        if (P_T == 1 && Ya_m) {
            GtNxEgIfo(1);
        } else {
            PlNxCh();
        };
        break;;
    case 74:
        if (P_T == 1 && Ya_m) {
            GtNxEgIfo(0);
        } else {
            if (P_T == 1 && Foto && In_SSh > -1) {
                StSlSh();
                StsShw(_0x8d61[806]);
            } else {
                StsShw(_0x8d61[797]);
            };
        };
        break;;
    case 69:
        if (P_T == 1 && Ya_m) {
            GtNxEgIfo(-1);
        } else {
            SelPvCh();
            PlSelCh();
        };
        break;;
    case 192:
        if (GetId(_0x8d61[807])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[803]) {
            GetIdn(_0x8d61[807]);
        } else {
            GetIdb(_0x8d61[807]);
        };
        break;;
    case 655:
        ;
    case 1089:
        ;
    case 652:
        if (P_T == 1) {
            PrSfNxAuSm();
        } else {
            StsShw(_0x8d61[797]);
        };
        break;;
    default:
        alert(_0x8d61[782]);
        break;;
    };
};

function VdPrKDn(Cd) {
    Cd = DrTF(Cd);
    if (event) {
        event[_0x8d61[786]]();
    };
    switch (Cd) {
    case 261:
        ;
    case 147:
        widgetAPI[_0x8d61[765]]();
        break;;
    case 17:
        PrPtJp(0);
        break;;
    case 101:
        PrPtJp(1);
        break;;
    case 98:
        PrPtJp(2);
        break;;
    case 6:
        PrPtJp(3);
        break;;
    case 8:
        PrPtJp(4);
        break;;
    case 9:
        PrPtJp(5);
        break;;
    case 10:
        PrPtJp(6);
        break;;
    case 12:
        PrPtJp(7);
        break;;
    case 13:
        PrPtJp(8);
        break;;
    case 14:
        PrPtJp(9);
        break;;
    case 78:
        ;
    case 259:
        PlPvCh();
        break;;
    case 105:
        ;
    case 68:
        ;
    case 1078:
        PlNxCh();
        break;;
    case 106:
        ;
    case 65:
        ;
    case 1080:
        SelPvCh();
        PlSelCh();
        break;;
    case 75:
        break;;
    case 31:
        if (GetId(_0x8d61[762])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[803]) {
            PrHie();
        } else {
            PrShw(60000);
        };
        break;;
    case 1118:
        ;
    case 613:
        ;
    case 262:
        SwMeT();
        break;;
    case 29460:
        if (Se_Z) {
            if (Pr_Ph > 50) {
                Pr_Ph++;
                PrStSie(Pr_Si, 1);
            };
        } else {
            PrTiJp(2);
        };
        break;;
    case 29461:
        if (Se_Z) {
            if (Pr_Ph > 50) {
                Pr_Ph--;
                PrStSie(Pr_Si, 1);
            };
        } else {
            PrTiJp(-2);
        };
        break;;
    case 4:
        if (Se_Z) {
            if (Pr_Pw > 50) {
                Pr_Pw--;
                PrStSie(Pr_Si, 1);
            };
        } else {
            PrTiJp(-0.5);
        };
        break;;
    case 5:
        if (Se_Z) {
            if (Pr_Pw < 150) {
                Pr_Pw++;
                PrStSie(Pr_Si, 1);
            };
        } else {
            PrTiJp(0.5);
        };
        break;;
    case 22:
        ;
    case 653:
        ;
    case 1249:
        ;
    case 1083:
        if (P_T == 1) {
            if (GetId(_0x8d61[691])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[803]) {
                if (Pr_Si >= 5) {
                    PrStSie(0, 1);
                } else {
                    PrStSie(Pr_Si + 1, 1);
                };
            } else {
                PrStSie(Pr_Si, 1);
            };
            Se_Z = _0x8d61[3];
        } else {
            StsShw(_0x8d61[797]);
        };
        break;;
    case 29443:
        if (Pr_STi != 0) {
            PrSvTi();
        } else {
            if (Pr_ST == 4) {
                PrRee();
            } else {
                PrPae();
            };
        };
        break;;
    case 88:
        ;
    case 1086:
        ;
    case 84:
        MaMe();
        break;;
    case 612:
        ;
    case 309:
        ;
    case 70:
        ;
    case 45:
        RnMeu();
        break;;
    case 108:
        if (St_U_Ar[_0x8d61[85]] > 1) {
            SelBx[_0x8d61[693]](_0x8d61[697], St_U_Ar);
            LoadTimer(_0x8d61[808], 20000);
        } else {
            StsShw(_0x8d61[797]);
        };
        break;;
    case 20:
        if (H_t == 0 || H_t == 1) {
            ReVK();
            pluginAPI.ShowTools(0);
        } else {
            PrSfNxAuSm();
        };
        break;;
    case 21:
        if (Pr_Si == 5 && PrGtRsn()[_0x8d61[48]](_0x8d61[87])[0] > 0) {
            if (Se_Z) {
                StsHie();
            } else {
                Se_Z = 1;
                StsShw(_0x8d61[809], 10000);
            };
        } else {
            ReVK();
            pluginAPI.ShowTools(1);
        };
        break;;
    case 1219:
        if (Pr_3D >= 2) {
            Chg3DMe(0);
        } else {
            Chg3DMe(Pr_3D + 1);
        };
        break;;
    case 72:
        PrTiJp(1 / 6);
        break;;
    case 74:
        if (Pr_ST == 4) {
            PrRee();
        } else {
            PrPae();
        };
        break;;
    case 69:
        PrTiJp(-1 / 6);
        break;;
    case 192:
        if (GetId(_0x8d61[807])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[803]) {
            GetIdn(_0x8d61[807]);
        } else {
            GetIdb(_0x8d61[807]);
        };
        break;;
    case 71:
        if (Pr_ST == 4) {
            PrRee();
        } else {
            if (Pr_Pm == 0) {
                Pr_Pm = 1;
                StsShw(_0x8d61[792]);
            } else {
                if (Pr_Pm == 1) {
                    Pr_Pm = 2;
                    StsShw(_0x8d61[793]);
                } else {
                    if (Pr_Pm == 2) {
                        Pr_Pm = 0;
                        StsShw(_0x8d61[810]);
                    };
                };
            };
        };
        break;;
    case 655:
        ;
    case 1089:
        ;
    case 652:
        PrSfNxAuSm();
        break;;
    default:
        alert(_0x8d61[782]);
        break;;
    };
};

function PrIit() {
    if (!S_C) {
        P_Sf = GetId(_0x8d61[811]);
    };
    if (P_Sf != null) {
        Pr_Sf = 1;
        return 1;
    };
    P_Pr = GetId(_0x8d61[812]);
    if (P_Pr != null) {
        P_Pr[_0x8d61[813]] = _0x8d61[814];
        P_Pr[_0x8d61[815]] = _0x8d61[816];
        P_Pr[_0x8d61[817]] = _0x8d61[818];
        P_Pr[_0x8d61[819]] = _0x8d61[820];
        P_Pr[_0x8d61[821]] = _0x8d61[822];
        P_Pr[_0x8d61[823]] = _0x8d61[824];
        P_Pr[_0x8d61[825]] = _0x8d61[826];
        P_Pr[_0x8d61[827]] = _0x8d61[828];
        P_Pr[_0x8d61[829]] = _0x8d61[830];
        return 1;
    };
    return _0x8d61[3];
};

function Chg3DMe(mode) {
    Pr_3D = 0;
};

function PrOnCoFd() {
    PrEr(9);
};

function PrOnNkDd() {
    PrEr(8);
};

function PrOnSmNtFd() {
    PrEr(7);
};

function PrOnRrEr(Err) {
    PrEr(Err);
};

function PrEr(err) {
    alert(_0x8d61[831] + err);
    if (Pr_ST != 0) {
        var eerr = (err == 1) ? _0x8d61[832] : (err == 2) ? _0x8d61[833] : (err == 3) ? _0x8d61[834] : (err == 4) ? _0x8d61[835] : (err == 5) ? _0x8d61[836] : (err == 6) ? _0x8d61[837] : (err == 7) ? _0x8d61[838] : (err == 8) ? _0x8d61[839] : (err == 9) ? _0x8d61[840] : _0x8d61[3];
        if (err > 0 && err < 7 && Pr_Ser < 5) {
            Pr_Ser++;
            if (err < 3) {
                PrStt();
            };
        } else {
            if (eerr) {
                StsShw(eerr[_0x8d61[93]](_0x8d61[90], _0x8d61[841]));
                setTimeout(_0x8d61[842], 2000);
                TrsSta(eerr);
            };
        };
    };
};

function PrOnSmIoRy() {
    if (Pr_ST != 0) {
        PrGtRsn();
    };
};

function PrOnBufSt() {
    if (Pr_ST != 0) {
        if (!Pr_Jp && !Foto) {
            StsShw(_0x8d61[843]);
        };
    };
};

function PrOnBufPs(percent) {
    if (Pr_ST != 0) {
        if (!Pr_Jp && !Foto) {
            StsShw(_0x8d61[844] + percent + _0x8d61[547], 5000);
        };
    };
};

function PrGtTlTie() {
    try {
        if (Pr_Vo) {
            total_time = parseInt((Pr_Sf) ? P_Sf.Execute(_0x8d61[845]) : P_Pr.GetDuration());
        } else {
            total_time = 0;
        }; if (!total_time || total_time > 99999998) {
            total_time = 0;
        };
    } catch (e) {
        return 0;
    };
    return total_time;
};

function PrOnBufCoe() {
    alert(_0x8d61[846]);
    if (Pr_ST != 0) {
        clearTimeout(Ti_Pr);
        if (!Pr_Jp && !Foto) {
            StsShw(_0x8d61[847], 1000);
        };
        if (Pr_ST == 1) {
            clearTimeout(Load_timer);
            LdHie();
            Pr_TTi = PrGtTlTie();
            if (Pr_TTi > 0 && Pr_Ur[_0x8d61[56]](_0x8d61[848]) < 0) {
                Pr_ST = 3;
                SeFoc(3);
                if (Pr_Au) {
                    Pr_H_Ur = _0x8d61[849];
                } else {
                    Pr_H_Ur = _0x8d61[30];
                };
            } else {
                Pr_ST = 2;
                Pr_TTi = 0;
                SeFoc(2);
                if (Foto) {
                    Pr_H_Ur = _0x8d61[850];
                } else {
                    Pr_H_Ur = _0x8d61[26];
                };
            };
            setTimeout(_0x8d61[851], 1500);
            if (Pr_STi > 0) {
                LoadTimer(_0x8d61[852], 1200);
            } else {
                if (Sv_F) {
                    setTimeout(_0x8d61[853], 4000);
                };
                if (!Foto && !Pr_Au) {
                    LoadTimer(_0x8d61[854], 1500);
                };
            }; if (!Foto) {
                PrGtAuNu();
            };
            if (St_U_Ar[_0x8d61[85]] > 1) {
                Pr_Me += _0x8d61[855];
            };
            if (Pr_Au) {
                pluginAPI[_0x8d61[780]](120);
            } else {
                pluginAPI[_0x8d61[227]]();
            };
        };
        if (Pr_Jp) {
            setTimeout(_0x8d61[856], 500);
            Pr_STi = 0;
        };
    };
};

function TiPr(func, time) {
    clearTimeout(Ti_Pr);
    Ti_Pr = setTimeout(func, time);
};

function PrSeBuf() {};

function RnMeu() {
    StSlSh();
    PrStpV();
    MaMe();
};

function PrStpV() {
    PrStp();
    if (Up_Ssn_If) {
        clearTimeout(Ti_Ses);
        Ti_Ses = setTimeout(_0x8d61[857], 1800000);
    };
    Pr_Ser = 0;
    Pr_Vo = 1;
    Pr_STi = 0;
    Pr_3D = 0;
    Pr_Me_3D = _0x8d61[3];
    Pr_Me_Si = _0x8d61[3];
    Pr_Me_Au = _0x8d61[3];
    SelBx[_0x8d61[355]] = 0;
    Ya_EI_Ar = [];
    E_T2 = 0;
    E_T1 = 0;
    pluginAPI[_0x8d61[780]]();
};

function PrStp() {
    clearTimeout(Ti_Pr);
    clearTimeout(Load_timer);
    if (Pr_ST != 0) {
        PrSvUr();
        Pr_ST = 0;
        if (Pr_Sf) {
            P_Sf.Execute(_0x8d61[858]);
            P_Sf.Execute(_0x8d61[859]);
            P_Sf.Close();
        } else {
            if (P_Pr != null) {
                P_Pr.Stop();
                P_Pr.ClearScreen();
            };
        };
        Pr_Me = _0x8d61[3];
        Pr_Tnu = 0;
        Pr_TTi = 0;
        Pr_CTi = 0;
        Pr_Jp = _0x8d61[3];
        Pr_Lp = _0x8d61[3];
        Pr_H_Ur = _0x8d61[3];
        GetIdn(_0x8d61[536]);
    };
};

function PrPy(url, t) {
    alert(_0x8d61[860] + url);
    if (Up_Ssn_If) {
        clearTimeout(Ti_Ses);
        Ti_Ses = setTimeout(_0x8d61[861], 14400000);
    };
    Pr_Au = _0x8d61[3];
    GetId(_0x8d61[862])[_0x8d61[244]] = 0 + _0x8d61[863] + 0;
    if (Au_Ty[_0x8d61[333]](url) != null) {
        Pr_Au = 1;
    };
    if (url[_0x8d61[178]](_0x8d61[864]) == url[_0x8d61[85]] - 7 && url[_0x8d61[85]] > 7) {
        url = url[_0x8d61[93]](_0x8d61[864], _0x8d61[3]);
        Pr_Vo = _0x8d61[3];
    };
    if (url[_0x8d61[178]](_0x8d61[865]) == url[_0x8d61[85]] - 16 && url[_0x8d61[85]] > 16) {
        url = url[_0x8d61[93]](_0x8d61[865], _0x8d61[3]);
        Pr_Pm = 0;
    } else {
        if (url[_0x8d61[178]](_0x8d61[866]) == url[_0x8d61[85]] - 13 && url[_0x8d61[85]] > 13) {
            url = url[_0x8d61[93]](_0x8d61[866], _0x8d61[3]);
            Pr_Pm = 1;
        } else {
            if (url[_0x8d61[178]](_0x8d61[867]) == url[_0x8d61[85]] - 10 && url[_0x8d61[85]] > 10) {
                url = url[_0x8d61[93]](_0x8d61[867], _0x8d61[3]);
                Pr_Pm = 0;
            } else {
                if (url[_0x8d61[178]](_0x8d61[868]) == url[_0x8d61[85]] - 7 && url[_0x8d61[85]] > 7) {
                    url = url[_0x8d61[93]](_0x8d61[868], _0x8d61[3]);
                    Pr_Pm = 2;
                };
            };
        };
    }; if (url[_0x8d61[56]](_0x8d61[869]) > 0 && url[_0x8d61[56]](_0x8d61[870]) < 0) {
        if (url[_0x8d61[178]](_0x8d61[871]) != url[_0x8d61[85]] - 4 && url[_0x8d61[85]] > 4) {
            Pr_Vo = _0x8d61[3];
        };
        url += _0x8d61[870];
    };
    if (Ach(1)[_0x8d61[56]](_0x8d61[334]) > 0 && Pr_ST != 0) {
        if (Pr_TTi > 0) {
            SeFoc(3);
        } else {
            SeFoc(2);
        };
        PrShw(3000);
        return;
    };
    url = url[_0x8d61[93]](_0x8d61[871], _0x8d61[3])[_0x8d61[93]](_0x8d61[340], _0x8d61[3])[_0x8d61[93]](_0x8d61[334], _0x8d61[3]);
    alert(_0x8d61[872] + url);
    Pr_Ur = url;
    PrStt(t);
};

function PrStt(t) {
    if (!t) {
        t = 0;
    };
    alert(_0x8d61[873] + t);
    var r = _0x8d61[3],
        ezs = _0x8d61[3];
    if (!Pr_Au && Pr_3D == 0 && !Foto) {
        if (Ach(6)) {
            var ar = Ach(6)[_0x8d61[48]](_0x8d61[87]);
            if (!isNaN(Number(ar[0])) && ar[0] > -1 && ar[0] < 7) {
                ezs = ar[0];
            };
            if (ezs && ar[_0x8d61[85]] == 3 && !isNaN(parseInt(ar[1])) && !isNaN(parseInt(ar[2]))) {
                Pr_Pw = parseInt(ar[1]);
                Pr_Ph = parseInt(ar[2]);
                Pr_Pw = (Pr_Pw > 150) ? 150 : (Pr_Pw < 50) ? 50 : Pr_Pw;
                Pr_Ph = (Pr_Ph > 150) ? 150 : (Pr_Ph < 50) ? 50 : Pr_Ph;
                r = 1;
            };
        };
        Pr_Si = Number((ezs) ? ezs : (API[_0x8d61[874]]) ? API[_0x8d61[874]] : Pr_Si);
    } else {
        Pr_Si = 0;
    }; if (!r) {
        Pr_Pw = Number(API.Pw);
        Pr_Ph = Number(API.Ph);
    };
    PrStp();
    Pr_ST = 1;
    if (Ach(1)[_0x8d61[56]](_0x8d61[334]) < 0) {
        SeFoc(1);
    };
    if (!Foto) {
        PrShw(_0x8d61[4]);
        LdShw();
    };
    if (Pr_Sf) {
        P_Sf.Open(_0x8d61[875], _0x8d61[876], _0x8d61[875]);
        P_Sf.Execute(_0x8d61[877], Pr_Ur);
        P_Sf[_0x8d61[878]] = _0x8d61[879];
        if (Pr_3D > 0) {
            P_Sf.Execute(_0x8d61[880], _0x8d61[479], _0x8d61[470], Pr_3D);
        } else {
            if (Pr_Au) {
                P_Sf.Execute(_0x8d61[880], _0x8d61[473], _0x8d61[4], _0x8d61[4]);
            };
        };
    };
    PrSeBuf();
    if (Pr_Sf) {
        P_Sf.Execute(_0x8d61[881], 0, 0, 960, 540);
        P_Sf.Execute(_0x8d61[882], 0, 0, 0, 0);
        P_Sf.Execute(_0x8d61[883], t);
    } else {
        if (P_Pr != null) {
            P_Pr.SetDisplayArea(0, 0, 960, 540);
            P_Pr.SetCropArea(0, 0, 0, 0);
            P_Pr.Play(Pr_Ur);
        };
    };
};

function PrSvUr() {};

function PrGtSvTi() {};

function PrSvTi() {};

function PrGtRsn() {
    var res = GetId(_0x8d61[862])[_0x8d61[244]][_0x8d61[48]](_0x8d61[863]);
    var w = res[0],
        h = res[1];
    if (!Pr_Au && Pr_ST != 0 && (w < 128 || h < 128)) {
        try {
            if (Pr_Sf) {
                res = P_Sf.Execute(_0x8d61[884])[_0x8d61[48]](_0x8d61[87]);
                if (res && res[_0x8d61[85]] == 2) {
                    w = res[0];
                    h = res[1];
                };
            } else {
                h = P_Pr.GetVideoHeight();
                w = P_Pr.GetVideoWidth();
            };
        } catch (e) {
            w = 0;
            h = 0;
        };
        if (w == 5) {
            h = 432;
            w = 540;
        } else {
            if (w == 4) {
                h = 270;
                w = 480;
            } else {
                if (w == 3) {
                    h = 288;
                    w = 384;
                } else {
                    if (w < 128 || w > 7680 || !w) {
                        h = 0;
                        w = 0;
                    };
                };
            };
        };
        GetId(_0x8d61[862])[_0x8d61[244]] = w + _0x8d61[863] + h;
        GetIdb(_0x8d61[885]);
    };
    return w + _0x8d61[87] + h;
};

function PrStSie(mode, show) {
    if (Pr_ST != 0 && Pr_ST != 4) {
        var res = PrGtRsn();
        res = res[_0x8d61[48]](_0x8d61[87]);
        var w = Number(res[0]);
        var h = Number(res[1]);
        Pr_Si = Number(mode);
        if (Pr_Si == 5) {
            CH[ChArI][6] = Pr_Si + _0x8d61[87] + Pr_Pw + _0x8d61[87] + Pr_Ph;
        } else {
            CH[ChArI][6] = Pr_Si.toString();
        };
        Pr_Me_Si = _0x8d61[3];
        var s = _0x8d61[3],
            dx = 0,
            dy = 0,
            dw = 960,
            dh = 540,
            cx = 0,
            cy = 0,
            cw = w,
            ch = h;
        switch (mode) {
        case 0:
            if (w / h < 1.79 || w == 0) {
                s = _0x8d61[886];
            } else {
                s = _0x8d61[887];
                dh = 960 * h / w;
                dy = (540 - dh) / 2;
            };
            break;;
        case 1:
            if (w == 0) {
                s = _0x8d61[888];
                dx = 30;
                dw = 900;
            } else {
                s = _0x8d61[889];
                cy = 0.0625 * h;
                cw = w;
                ch = 0.875 * h;
            };
            break;;
        case 2:
            if (w == 0) {
                s = _0x8d61[890];
                dx = 60;
                dw = 840;
            } else {
                if (w / h < 1.35) {
                    s = _0x8d61[891];
                    cy = 0.115 * h;
                    cw = w;
                    ch = 0.77 * h;
                } else {
                    return PrStSie(5, show);
                };
            };
            break;;
        case 3:
            if (w == 0) {
                s = _0x8d61[892];
                dx = 90;
                dw = 780;
            } else {
                if (w / h < 1.35) {
                    s = _0x8d61[893];
                    dx = 60;
                    dw = 840;
                    cy = 0.0625 * h;
                    cw = w;
                    ch = 0.875 * h;
                } else {
                    return PrStSie(5, show);
                };
            };
            break;;
        case 4:
            if (w / h < 1.35 || w == 0) {
                s = _0x8d61[894];
                dx = 120;
                dw = 720;
            } else {
                return PrStSie(5, show);
            };
            break;;
        case 5:
            if (w == 0) {
                s = _0x8d61[895];
                dy = 30;
                dh = 480;
            } else {
                if (Pr_Pw <= 100) {
                    dw = 9.6 * Pr_Pw;
                    dx = (960 - dw) / 2;
                } else {
                    cw = w * (2 - Pr_Pw / 100);
                    cx = w * (Pr_Pw / 200 - 0.5);
                }; if (Pr_Ph <= 100) {
                    dh = 5.4 * Pr_Ph;
                    dy = (540 - dh) / 2;
                } else {
                    ch = h * (2 - Pr_Ph / 100);
                    cy = h * (Pr_Ph / 200 - 0.5);
                };
                s = _0x8d61[896];
            };
            break;;
        case 6:
            if (w == 0) {
                return PrStSie(0, show);
            } else {
                if (w / h < 1.35) {
                    return PrStSie(Number(API[_0x8d61[897]]), show);
                } else {
                    if (w / h < 1.79) {
                        return PrStSie(Number(API[_0x8d61[898]]), show);
                    } else {
                        return PrStSie(Number(API[_0x8d61[899]]), show);
                    };
                };
            };
            break;;
        case 7:
            if (w / h >= 1.79) {
                s = _0x8d61[900];
                dh = 960 * h / (w * 0.85);
                if (540 >= dh) {
                    dy = (540 - dh) / 2;
                } else {
                    cy = (dh - 540) / 2;
                    ch = 540;
                    dh = 540;
                };
                cx = 0.075 * w;
                cw = 0.85 * w;
            } else {
                s = _0x8d61[901];
                cx = 0.0625 * w;
                cy = 0.0625 * h;
                cw = 0.875 * w;
                ch = 0.875 * h;
            };
            break;;
        case 8:
            if (w / h >= 1.79) {
                s = _0x8d61[902];
                dh = 960 * h / (w * 0.75);
                if (540 >= dh) {
                    dy = (540 - dh) / 2;
                } else {
                    cy = (dh - 540) / 2;
                    ch = 540;
                    dh = 540;
                };
                cx = 0.125 * w;
                cw = 0.75 * w;
            } else {
                s = _0x8d61[903];
                cx = 0.125 * w;
                cy = 0.125 * h;
                cw = 0.75 * w;
                ch = 0.75 * h;
            };
            break;;
        default:
            alert(_0x8d61[904]);
            s = _0x8d61[905];
            break;;
        };
        if (s) {
            Pr_Me_Si = _0x8d61[906] + s + _0x8d61[907];
            if (mode == 5 && s == _0x8d61[896]) {
                if (Se_Z) {
                    s += _0x8d61[908] + Pr_Pw + _0x8d61[909] + Pr_Ph + _0x8d61[547];
                } else {
                    s = _0x8d61[910];
                };
            };
            if (!Foto && show > 0) {
                if (Se_Z) {
                    StsShw(s, 6000);
                } else {
                    StsShw(s);
                };
            };
        };
        if (Pr_Sf) {
            P_Sf.Execute(_0x8d61[881], dx, dy, dw, dh);
            P_Sf.Execute(_0x8d61[882], cx, cy, cw, ch);
        } else {
            if (P_Pr != null) {
                P_Pr.SetDisplayArea(dx, dy, dw, dh);
                P_Pr.SetCropArea(cx, cy, cw, ch);
            };
        };
    };
};

function PrJpFw(m, message) {
    if (Pr_ST == 3) {
        StsShw(message, 2000);
        Pr_Jp = 1;
        if (Pr_Sf) {
            P_Sf.Execute(_0x8d61[911], m);
        } else {
            P_Pr.JumpForward(m);
        };
    };
};

function PrJpBw(m, message) {
    if (Pr_ST == 3) {
        if (m > 3) {
            StsShw(message, 2000);
        };
        Pr_Jp = 1;
        if (Pr_Sf) {
            if (Pr_Ur[_0x8d61[85]] > 4 && Pr_Ur[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[912]) == Pr_Ur[_0x8d61[85]] - 4) {
                var t = (Pr_CTi / 1000) - m;
                PrStt(t);
            } else {
                P_Sf.Execute(_0x8d61[913], m);
            };
        } else {
            P_Pr.JumpBackward(m);
        };
    };
};

function PrTiJp(m) {
    PrRee();
    if (Pr_ST == 3 && !Pr_Jp) {
        var cur_min = Pr_CTi / 60000 * -1;
        var end_min = (Pr_TTi - Pr_CTi) / 60000;
        var message = m + _0x8d61[914];
        if (Math[_0x8d61[915]](m) < 1) {
            message = parseInt(60 * m) + _0x8d61[916];
        };
        if (m >= 0) {
            message = _0x8d61[917] + message;
            if (m < end_min) {
                PrJpFw(m * 60, message);
            } else {
                Pr_TTi = Pr_CTi;
                PrTtTi();
            };
        } else {
            if (m > cur_min) {
                PrJpBw(m * 60 * -1, message);
            } else {
                Pr_TTi = Pr_CTi;
                PrTtTi();
            };
        };
    };
};

function PrPtJp(p) {
    PrRee();
    if (Pr_ST == 3 && !Pr_Jp) {
        var message = p * 10 + _0x8d61[547];
        var jump_to_min = (Pr_TTi * p / 10 - Pr_CTi) / 1000;
        if (jump_to_min > 0) {
            PrJpFw(jump_to_min, message);
        } else {
            if (jump_to_min < 0) {
                PrJpBw(jump_to_min * -1, message);
            };
        };
    };
};

function PrRee() {
    if (Pr_ST == 4 && !Pr_Jp) {
        if (Pr_Au) {
            pluginAPI[_0x8d61[780]](120);
        } else {
            pluginAPI[_0x8d61[227]]();
        }; if (Pr_Sf) {
            P_Sf.Execute(_0x8d61[918]);
        } else {
            P_Pr.Resume();
        };
        Pr_ST = 3;
        if (Pr_Ur[_0x8d61[56]](_0x8d61[360]) >= 0 && Pr_Lp) {
            setTimeout(_0x8d61[919], 100);
        };
        PrHie();
        StsShw(_0x8d61[920]);
        Pr_STi = 0;
        clearTimeout(Ti_Pr);
        Pr_Lp = _0x8d61[3];
    };
};

function PrPae() {
    if (Pr_ST == 3) {
        Pr_ST = 4;
        if (Pr_Sf) {
            P_Sf.Execute(_0x8d61[921]);
        } else {
            P_Pr.Pause();
        };
        PrShw(0);
        StsShw(_0x8d61[922], _0x8d61[4]);
        TiPr(_0x8d61[923], 30000);
        pluginAPI[_0x8d61[780]](120);
    };
};

function PrOnCtPyTi(time) {
    if (Pr_Vo && Pr_ST == 3) {
        Pr_CTi = Number(time);
        TiIfo(Pr_CTi, Pr_TTi);
        PrTtTi();
    };
};

function PrTtTi() {
    if (Pr_TTi <= Pr_CTi) {
        if (Pr_Pm == 2) {
            PrStt();
        } else {
            if (Pr_Pm == 1 && CH[_0x8d61[85]] > 0) {
                PlNxCh();
            } else {
                RnMeu();
            };
        };
    } else {
        if (Pr_TTi <= 0) {
            RnMeu();
            StsShw(_0x8d61[924]);
        };
    };
};

function PrSfOnEv(type, p) {
    switch (type) {
    case 1:
        PrOnCoFd();
        break;;
    case 3:
        PrOnSmNtFd();
        break;;
    case 4:
        PrOnNkDd();
        break;;
    case 6:
        PrOnRrEr(p);;
    case 9:
        PrOnSmIoRy();
        break;;
    case 11:
        PrOnBufSt();
        break;;
    case 13:
        PrOnBufPs(p);
        break;;
    case 12:
        PrOnBufCoe();
        break;;
    case 14:
        PrOnCtPyTi(p);
        break;;
    };
};

function PrSfNxAuSm() {
    if (Pr_ST != 0) {
        if (!Pr_Sf) {
            StsShw(_0x8d61[925]);
        } else {
            if (Pr_Tnu < 2) {
                StsShw(_0x8d61[926]);
            } else {
                var num = P_Sf.Execute(_0x8d61[927], 1);
                if (num >= 0) {
                    num++;
                    if (num > (Pr_Tnu - 1)) {
                        num = 0;
                    };
                    PrSfSeAuSm(num, 1);
                };
            };
        };
    };
};
LangCodes = {
    6384738: _0x8d61[928],
    6386285: _0x8d61[929],
    6388325: _0x8d61[930],
    6448492: _0x8d61[931],
    6452588: _0x8d61[932],
    6514793: _0x8d61[933],
    6647399: _0x8d61[934],
    6713957: _0x8d61[935],
    6776178: _0x8d61[936],
    6911073: _0x8d61[937],
    6975598: _0x8d61[938],
    7037306: _0x8d61[939],
    7040882: _0x8d61[940],
    7368562: _0x8d61[941],
    7501171: _0x8d61[553],
    7564399: _0x8d61[942],
    7564406: _0x8d61[943],
    7565409: _0x8d61[944],
    7565673: _0x8d61[928],
    7565936: _0x8d61[945],
    7567205: _0x8d61[946],
    7632242: _0x8d61[947],
    7695218: _0x8d61[948],
    7699042: _0x8d61[949],
    8026747: _0x8d61[948]
};

function PrSfSeAuSm(num, show) {
    if (Pr_Tnu > num) {
        CH[ChArI][7] = (num + 1).toString();
        P_Sf.Execute(_0x8d61[950], 1, num);
        var ifo = P_Sf.Execute(_0x8d61[951], 1, num);
        var lang = LangCodes[ifo];
        lang = (lang != null) ? lang : _0x8d61[952];
        if (show > 0) {
            StsShw(lang + _0x8d61[953] + (num + 1));
        };
        Pr_Me_Au = _0x8d61[954] + lang + _0x8d61[955] + (num + 1) + _0x8d61[956];
    } else {
        if (show > 0) {
            StsShw(_0x8d61[957]);
            Pr_Me_Au = _0x8d61[3];
        };
    };
};

function PrGtAuNu() {
    if (Pr_Sf) {
        try {
            Pr_Tnu = parseInt(P_Sf.Execute(_0x8d61[958], 1));
        } catch (e) {
            Pr_Tnu = 0;
        };
        if (!isNaN(Pr_Tnu) && Pr_Tnu > 1 && Pr_Tnu < 10) {
            if (Ach(7) && Ach(7) <= Pr_Tnu) {
                PrSfSeAuSm((parseInt(Ach(7)) - 1), 0);
            } else {
                for (var i = 0; i < Pr_Tnu; i++) {
                    var ifo = P_Sf.Execute(_0x8d61[951], 1, i);
                    if (LangCodes[ifo] != null && LangCodes[ifo] == API[_0x8d61[959]]) {
                        PrSfSeAuSm(i, 0);
                        break;
                    };
                };
                if (H_t == 2) {
                    Pr_Me += _0x8d61[960];
                } else {
                    Pr_Me += _0x8d61[961];
                };
            };
        };
    };
};
var SaveVal;

function HelpSet() {
    ScRl = 0;
    Ya_m = _0x8d61[3];
    Ya_EI_Ar = [];
    LdHie();
    StsHie();
    StScNa();
    HStr = {
        "exit": _0x8d61[3],
        "tools": _0x8d61[3],
        "move": _0x8d61[962],
        "enter": _0x8d61[963],
        "blue": _0x8d61[964],
        "yellow": _0x8d61[965],
        "green": _0x8d61[966],
        "red": _0x8d61[967],
        "play": _0x8d61[3],
        "info": _0x8d61[3],
        "guide": _0x8d61[3],
        "back": _0x8d61[233]
    };
    if ((S_r_h && API[_0x8d61[723]] == 1) || Xl_Ur == _0x8d61[109] || X_X_X) {
        if (X_X_X || S_r_h) {
            TxPhP(_0x8d61[968]);
        };
        if (S_r_h && Xl_Ur != _0x8d61[207]) {
            HStr[_0x8d61[182]] = _0x8d61[969];
        };
        SeFoc(5);
        S_Ar = [];
    } else {
        if (S_r_h && API[_0x8d61[723]] == 2) {
            GetIdn(_0x8d61[305]);
            if (S_C) {
                TxPhP(_0x8d61[970]);
            } else {
                GetIdn(_0x8d61[971]);
            };
        };
    };
    RsHp();
    if (INFO || Fi_St) {
        SetIWi();
    };
    GetId(_0x8d61[283])[_0x8d61[69]] = _0x8d61[3];
    GetId(_0x8d61[170])[_0x8d61[69]] = _0x8d61[3];
    GetId(_0x8d61[170])[_0x8d61[99]][_0x8d61[167]] = _0x8d61[250];
    GetIdn(_0x8d61[972]);
    GetIdb(_0x8d61[973]);
};

function DiRSP() {
    WrFl(Fv_Ch, _0x8d61[3] + Dss + STr + _0x8d61[122]);
    STr++;
    DiRSP();
};

function StShFr() {
    SaveVal = function () {
        if (S_r_h && API[_0x8d61[723]] == 2) {
            var res = lrdPr(GetId(_0x8d61[4])[_0x8d61[974]]);
            SeFoc(0);
        } else {
            if (X_X_X) {
                res = Kb[_0x8d61[724]];
                Kb[_0x8d61[724]] = _0x8d61[3];
            } else {
                res = lrdPr(GetId(_0x8d61[4])[_0x8d61[244]]);
            };
            GetIdn(_0x8d61[975]);
        }; if (!res) {
            MaMe();
        } else {
            if (Xl_Ur == _0x8d61[109]) {
                var l_o = lrdPr(GetId(_0x8d61[482])[_0x8d61[244]]);
                FvCtAd(res, l_o);
            } else {
                if (X_X_X && API[_0x8d61[230]] != res) {
                    Pr_Pl_Ar[_0x8d61[397]]();
                    MaMe();
                    StsShw(_0x8d61[976]);
                } else {
                    if (S_r_h || X_X_X) {
                        if (Xl_Ur == _0x8d61[108]) {
                            setTimeout(_0x8d61[977], 1000);
                        } else {
                            HStr = {
                                "exit": _0x8d61[172],
                                "tools": _0x8d61[3],
                                "move": _0x8d61[3],
                                "enter": _0x8d61[3],
                                "blue": _0x8d61[3],
                                "yellow": _0x8d61[3],
                                "green": _0x8d61[3],
                                "red": _0x8d61[3],
                                "play": _0x8d61[3],
                                "info": _0x8d61[3],
                                "guide": _0x8d61[3],
                                "back": _0x8d61[3]
                            };
                            RsHp();
                            if (Ach(5)[_0x8d61[56]](_0x8d61[349]) == 0) {
                                setTimeout(_0x8d61[978], 500);
                            } else {
                                setTimeout(_0x8d61[979], 500);
                            };
                        }; if (S_r_h && !X_X_X) {
                            if (Xl_Ur != _0x8d61[207]) {
                                var ne = Ach(0);
                                CH[ChArI][0] = res;
                                SvHiy(_0x8d61[207]);
                                CH[ChArI][0] = ne;
                            };
                            Sh_St = res;
                            StsShw(_0x8d61[980], 0);
                        } else {
                            X_Co = API[_0x8d61[230]];
                            API[_0x8d61[230]] = _0x8d61[4];
                            StsShw(_0x8d61[981]);
                        };
                    };
                };
            };
        };
    };
    HelpSet();
    GetIdn(_0x8d61[301]);
    var form = _0x8d61[3];
    if (X_X_X) {
        form += _0x8d61[982] + _0x8d61[983];
        StSyeWi(_0x8d61[169], 48, 500, 440, 148, 0);
        StSyeWi(_0x8d61[975], 202, 500, 440, 290, 0);
        Kb[_0x8d61[78]] = _0x8d61[984];
    } else {
        if (S_r_h) {
            if (Xl_Ur == _0x8d61[207]) {
                Sh_St = Ach(0);
            };
            var e2 = _0x8d61[985];
            if (Ach(13) && Ach(13) != _0x8d61[318]) {
                e2 = Ach(13);
            };
            if (API[_0x8d61[723]] == 1) {
                var e3 = _0x8d61[986] + Sh_St;
            } else {
                e3 = _0x8d61[987];
            };
            form += _0x8d61[988] + e2 + _0x8d61[286] + _0x8d61[989] + e3 + _0x8d61[990];
            if (API[_0x8d61[723]] == 1) {
                var t = 48,
                    l = 500;
                StSyeWi(_0x8d61[975], 202, 500, 440, 290, 0);
                Kb[_0x8d61[78]] = _0x8d61[3];
                Kb[_0x8d61[991]] = API[_0x8d61[992]];
                if (Ach(5)[_0x8d61[56]](_0x8d61[349]) == 0) {
                    Kb[_0x8d61[991]] = _0x8d61[993];
                };
            } else {
                l = 480;
                t = 82;
                if (!S_C) {
                    t = 100;
                };
            };
            StSyeWi(_0x8d61[169], t, l, 440, 148, 0);
        } else {
            if (Xl_Ur == _0x8d61[109]) {
                GetIdn(_0x8d61[305]);
                GetId(_0x8d61[242])[_0x8d61[69]] = _0x8d61[994];
                form += _0x8d61[995] + _0x8d61[996];
                form += _0x8d61[997] + _0x8d61[998];
                StSyeWi(_0x8d61[169], 48, 495, 440, 290, 0);
                StSyeWi(_0x8d61[975], 48, 25, 440, 290, 0);
                S_Ar = [0];
                Kb[_0x8d61[78]] = _0x8d61[3];
                Kb[_0x8d61[991]] = API[_0x8d61[992]];
            };
        };
    };
    GetId(_0x8d61[170])[_0x8d61[69]] = form;
    if (API[_0x8d61[723]] == 1 || Xl_Ur == _0x8d61[109] || X_X_X) {
        Kb[_0x8d61[999]] = 3;
        Kb[_0x8d61[1000]] = 2;
        if (Xl_Ur == _0x8d61[109]) {
            SeStg(0, _0x8d61[3], 1);
            SeStg(1, _0x8d61[681], 1);
            SeSty(0, 2);
            Kb[_0x8d61[999]] = 7;
        };
        S_Id = 0;
        S_M_Id = S_Ar[_0x8d61[85]];
        Kb[_0x8d61[1001]] = 1;
        StartKeyboard();
    } else {
        StImE();
    };
};

function SrRjDr(url, str) {
    var r_t = _0x8d61[504];
    if (str) {
        r_t = _0x8d61[571];
    } else {
        var str = null;
    };
    ExtScriptUrl = url;
    Init_ext_js_step++;
    xhrAbort();
    ServerErr = _0x8d61[1002];
    LoadTimer(_0x8d61[1003], 15000);
    xhr = new XMLHttpRequest();
    if (xhr[_0x8d61[574]]) {
        xhr[_0x8d61[574]](_0x8d61[575]);
    };
    xhr[_0x8d61[499]] = function () {
        if (xhr[_0x8d61[500]] == 4) {
            clearTimeout(Load_timer);
            if (xhr[_0x8d61[501]] == 200) {
                if (xhr[_0x8d61[502]]) {
                    if (xhr[_0x8d61[502]][_0x8d61[637]](0) != _0x8d61[1004] && xhr[_0x8d61[502]][_0x8d61[637]](0) != _0x8d61[471] && xhr[_0x8d61[502]][_0x8d61[637]](0) != _0x8d61[473]) {
                        ServerErr = _0x8d61[3];
                        var s = document[_0x8d61[68]](_0x8d61[75]);
                        s[_0x8d61[76]] = _0x8d61[77];
                        s[_0x8d61[78]] = _0x8d61[79];
                        s[_0x8d61[69]] = xhr[_0x8d61[502]];
                        GetTn(_0x8d61[1005])[0][_0x8d61[71]](s);
                    } else {
                        ServerErr = xhr[_0x8d61[502]];
                    };
                } else {
                    ServerErr = _0x8d61[1006];
                };
            } else {
                if (xhr[_0x8d61[501]] != 0) {
                    ServerErr = _0x8d61[1007] + xhr[_0x8d61[501]] + _0x8d61[434];
                };
            };
            complete();
        };
    };
    xhr[_0x8d61[505]](r_t, ExtScriptUrl, true);
    if (r_t == _0x8d61[571]) {
        xhr[_0x8d61[578]](_0x8d61[579], _0x8d61[580]);
        xhr[_0x8d61[578]](_0x8d61[581], str[_0x8d61[85]]);
        xhr[_0x8d61[578]](_0x8d61[582], _0x8d61[583]);
    };
    xhr[_0x8d61[506]](str);
};

function StImE() {
    API[_0x8d61[723]] = 1;
    StShFr();
};

function FvCtAd(ne, l_o) {
    MaMe();
};

function RdFrStS() {
    MaMe();
};

function StKdw() {
    var tar = [],
        param_step = 0,
        st_up = 36,
        st_dw = 36,
        GetParamStep = function () {
            var str = GetId(S_Id)[_0x8d61[244]];
            for (var i = 0; i < tar[_0x8d61[85]]; i++) {
                if (str == tar[i]) {
                    return i;
                };
            };
        };
    if (S_Id > S_Ar[_0x8d61[85]]) {
        switch (S_Id) {
        case 4:
            tar = [_0x8d61[550], _0x8d61[1008], _0x8d61[1009]];
            break;;
        case 5:
            tar = [_0x8d61[1010], _0x8d61[1011]];
            break;;
        case 6:
            tar = [_0x8d61[1012], _0x8d61[1013], _0x8d61[1014], _0x8d61[1015], _0x8d61[1016], _0x8d61[1017], _0x8d61[1018], _0x8d61[1019], _0x8d61[1020], _0x8d61[1021], _0x8d61[1022], _0x8d61[559], _0x8d61[4], _0x8d61[1023], _0x8d61[1024], _0x8d61[1025], _0x8d61[1026], _0x8d61[1027], _0x8d61[1028], _0x8d61[1029], _0x8d61[1030], _0x8d61[1031], _0x8d61[1032], _0x8d61[1033], _0x8d61[1034]];
            break;;
        case 7:
            tar = [_0x8d61[1012], _0x8d61[1013], _0x8d61[1014], _0x8d61[1015], _0x8d61[1016], _0x8d61[1017], _0x8d61[1018], _0x8d61[1019], _0x8d61[1020], _0x8d61[1021], _0x8d61[1022], _0x8d61[559], _0x8d61[4], _0x8d61[1023], _0x8d61[1024], _0x8d61[1025], _0x8d61[1026], _0x8d61[1027], _0x8d61[1028], _0x8d61[1029], _0x8d61[1030], _0x8d61[1031], _0x8d61[1032], _0x8d61[1033], _0x8d61[1034]];
            break;;
        case 8:
            tar = [_0x8d61[1035], _0x8d61[1036], _0x8d61[1037], _0x8d61[1038], _0x8d61[1039], _0x8d61[896], _0x8d61[552], _0x8d61[1040]];
            break;;
        case 9:
            for (var i = 0; i < 101; i++) {
                tar[i] = (i + 50).toString();
            };
            break;;
        case 10:
            for (var i = 0; i < 101; i++) {
                tar[i] = (i + 50).toString();
            };
            st_up = 36;
            st_dw = 72;
            break;;
        case 11:
            tar = [_0x8d61[1039], _0x8d61[1041], _0x8d61[1042], _0x8d61[1036], _0x8d61[896]];
            st_up = 72;
            st_dw = 36;
            break;;
        case 12:
            tar = [_0x8d61[1035], _0x8d61[1043], _0x8d61[1044], _0x8d61[1036], _0x8d61[896]];
            break;;
        case 13:
            tar = [_0x8d61[887], _0x8d61[1045], _0x8d61[1046]];
            break;;
        case 14:
            tar = [_0x8d61[1047], _0x8d61[1048], _0x8d61[1049], _0x8d61[1050], _0x8d61[1051], _0x8d61[552]];
            break;;
        case 15:
            tar = [_0x8d61[553], _0x8d61[948], _0x8d61[934], _0x8d61[935], _0x8d61[937], _0x8d61[936]];
            break;;
        case 16:
            tar = [_0x8d61[1052], _0x8d61[554], _0x8d61[1053], _0x8d61[1054], _0x8d61[1055]];
            break;;
        case 17:
            tar = [_0x8d61[1056], _0x8d61[1057], _0x8d61[1058]];
            break;;
        case 18:
            tar = [_0x8d61[1059], _0x8d61[1060]];
            break;;
        case 19:
            tar = [_0x8d61[268], _0x8d61[226]];
            break;;
        case 20:
            tar = [_0x8d61[268], _0x8d61[226]];
            break;;
        case 21:
            tar = [_0x8d61[268], _0x8d61[226]];
            break;;
        case 22:
            tar = [_0x8d61[268], _0x8d61[226]];
            break;;
        case 23:
            tar = [_0x8d61[268], _0x8d61[226]];
            st_dw = 36;
            break;;
        case 24:
            tar = [_0x8d61[550], _0x8d61[1008]];
            break;;
        case 25:
            tar = [_0x8d61[482], _0x8d61[479]];
            st_up = 36;
            st_dw = 72;
            break;;
        case 26:
            tar = [_0x8d61[268], _0x8d61[226]];
            st_up = 72;
            st_dw = 36;
            break;;
        case 27:
            tar = [_0x8d61[268], _0x8d61[226]];
            st_up = 36;
            break;;
        };
    };
    var keyCode = event[_0x8d61[784]];
    event[_0x8d61[786]]();
    switch (keyCode) {
    case 101:
        EntKbSrNuKy(1);
        break;;
    case 98:
        EntKbSrNuKy(2);
        break;;
    case 6:
        EntKbSrNuKy(3);
        break;;
    case 8:
        EntKbSrNuKy(4);
        break;;
    case 9:
        EntKbSrNuKy(5);
        break;;
    case 10:
        EntKbSrNuKy(6);
        break;;
    case 12:
        EntKbSrNuKy(7);
        break;;
    case 13:
        EntKbSrNuKy(8);
        break;;
    case 14:
        EntKbSrNuKy(9);
        break;;
    case 17:
        EntKbSrNuKy(_0x8d61[4]);
        break;;
    case 261:
        ;
    case 147:
        widgetAPI[_0x8d61[765]]();
        break;;
    case 259:
        DeKbSr();
        break;;
    case 650:
        if (S_Id < S_Ar[_0x8d61[85]] + 1) {
            if (Kb[_0x8d61[78]] != _0x8d61[984] && Kb[_0x8d61[991]] == _0x8d61[993]) {
                StKb(_0x8d61[993], _0x8d61[984]);
            } else {
                if (Kb[_0x8d61[991]] == _0x8d61[993]) {
                    StKb(API[_0x8d61[992]], _0x8d61[3]);
                } else {
                    StKb(_0x8d61[993], _0x8d61[3]);
                };
            };
        };
        break;;
    case 29443:
        if (S_Id < S_Ar[_0x8d61[85]] + 1 && Kb[_0x8d61[999]] < 8 && Kb[_0x8d61[1000]] > -1) {
            EntKbSr();
        } else {
            SpKb();
            SaveVal();
        };
        break;;
    case 108:
        if (S_Id < S_Ar[_0x8d61[85]] + 1) {
            Kb[_0x8d61[724]] = _0x8d61[3];
            Kb[_0x8d61[725]] = 0;
            Kb[_0x8d61[727]] = 0;
        };
        break;;
    case 22:
        SpKb();
        SaveVal();
        break;;
    case 72:
        if (S_Id < S_Ar[_0x8d61[85]] + 1 && Kb[_0x8d61[724]][_0x8d61[85]] > Kb[_0x8d61[725]]) {
            Kb[_0x8d61[725]]++;
        } else {
            if (S_Id > S_Ar[_0x8d61[85]]) {
                param_step = GetParamStep();
                if (param_step < tar[_0x8d61[85]] - 1) {
                    param_step++;
                } else {
                    param_step = 0;
                };
                GetId(S_Id)[_0x8d61[244]] = tar[param_step];
            };
        };
        break;;
    case 69:
        if (S_Id < S_Ar[_0x8d61[85]] + 1 && Kb[_0x8d61[725]] > 0) {
            Kb[_0x8d61[725]]--;
        } else {
            if (S_Id > S_Ar[_0x8d61[85]]) {
                param_step = GetParamStep();
                if (param_step > 0) {
                    param_step--;
                } else {
                    param_step = tar[_0x8d61[85]] - 1;
                };
                GetId(S_Id)[_0x8d61[244]] = tar[param_step];
            };
        };
        break;;
    case 4:
        if (S_Id < S_Ar[_0x8d61[85]] + 1) {
            if (Kb[_0x8d61[999]] > 0) {
                Kb[_0x8d61[999]]--;
            } else {
                Kb[_0x8d61[999]] = 7;
            }; if (Kb[_0x8d61[999]] == 7 && !S_r_h && !X_X_X && Kb[_0x8d61[767]] == -1) {
                GetId(_0x8d61[184])[_0x8d61[244]] = _0x8d61[1061];
                GetId(_0x8d61[1062])[_0x8d61[244]] = _0x8d61[963];
                GetIdb(_0x8d61[1063]);
                StartKeyboard();
                SeSty(S_Id, 2);
            } else {
                SeKbKy();
            };
        } else {
            param_step = GetParamStep();
            if (param_step > 0) {
                param_step--;
            } else {
                param_step = tar[_0x8d61[85]] - 1;
            };
            GetId(S_Id)[_0x8d61[244]] = tar[param_step];
        };
        break;;
    case 5:
        if (S_Id < S_Ar[_0x8d61[85]] + 1) {
            if (Kb[_0x8d61[999]] < 8) {
                if (Kb[_0x8d61[999]] < 7 || S_Ar[_0x8d61[85]] > 0) {
                    Kb[_0x8d61[999]]++;
                } else {
                    if (S_r_h || X_X_X) {
                        Kb[_0x8d61[999]] = 0;
                    };
                };
                SeKbKy();
                if (Kb[_0x8d61[999]] == 8 && !S_r_h && !X_X_X) {
                    GetId(_0x8d61[184])[_0x8d61[244]] = _0x8d61[1064];
                    GetId(_0x8d61[1062])[_0x8d61[244]] = _0x8d61[1061];
                    GetIdn(_0x8d61[1063]);
                    SpKb();
                    SeSty(S_Id, 3);
                };
            };
        } else {
            param_step = GetParamStep();
            if (param_step < tar[_0x8d61[85]] - 1) {
                param_step++;
            } else {
                param_step = 0;
            };
            GetId(S_Id)[_0x8d61[244]] = tar[param_step];
        };
        break;;
    case 29460:
        if (Kb[_0x8d61[999]] < 8 && S_Id < S_Ar[_0x8d61[85]] + 1) {
            if (Kb[_0x8d61[1000]] > 0) {
                Kb[_0x8d61[1000]]--;
            } else {
                Kb[_0x8d61[1000]] = 4;
            };
            SeKbKy();
        } else {
            if (S_Id > 0) {
                SeSty(S_Id, 1);
                S_Id--;
                Kb[_0x8d61[724]] = GetId(S_Id)[_0x8d61[244]];
                if (S_Id < S_Ar[_0x8d61[85]] + 1) {
                    if (S_Id == S_Ar[_0x8d61[85]]) {
                        GetIdn(_0x8d61[1065]);
                        GetId(_0x8d61[162])[_0x8d61[69]] = _0x8d61[1066];
                        GetIdb(_0x8d61[975]);
                    };
                };
                if (S_Id < S_Ar[_0x8d61[85]]) {
                    LoSc(_0x8d61[170], S_Ar[S_Id]);
                } else {
                    LoSc(_0x8d61[170], st_up);
                }; if (Kb[_0x8d61[767]] == -1) {
                    SeSty(S_Id, 3);
                } else {
                    SeSty(S_Id, 2);
                };
            };
        };
        break;;
    case 20:
        ;
    case 68:
        ;
    case 1080:
        if (S_Id > 0) {
            SeSty(S_Id, 1);
            SpKb();
            S_Id--;
            if (S_Id < S_Ar[_0x8d61[85]] + 1) {
                if (S_Id == S_Ar[_0x8d61[85]]) {
                    GetIdn(_0x8d61[1065]);
                    GetId(_0x8d61[162])[_0x8d61[69]] = _0x8d61[1066];
                    GetId(_0x8d61[184])[_0x8d61[244]] = _0x8d61[964];
                    GetId(_0x8d61[1062])[_0x8d61[244]] = _0x8d61[963];
                    GetIdb(_0x8d61[1063]);
                };
                StartKeyboard();
            };
            if (S_Id < S_Ar[_0x8d61[85]]) {
                LoSc(_0x8d61[170], S_Ar[S_Id]);
            } else {
                LoSc(_0x8d61[170], st_up);
            }; if (Kb[_0x8d61[767]] == -1) {
                SeSty(S_Id, 3);
            } else {
                SeSty(S_Id, 2);
            };
        };
        break;;
    case 29461:
        if (Kb[_0x8d61[999]] < 8 && S_Id < S_Ar[_0x8d61[85]] + 1) {
            Kb[_0x8d61[1000]]++;
            if (Kb[_0x8d61[1000]] >= 5) {
                Kb[_0x8d61[1000]] = 0;
            };
            SeKbKy();
        } else {
            if (S_Id < S_M_Id) {
                SeSty(S_Id, 1);
                S_Id++;
                Kb[_0x8d61[724]] = GetId(S_Id)[_0x8d61[244]];
                if (S_Id == S_Ar[_0x8d61[85]] + 1) {
                    GetIdn(_0x8d61[1067]);
                    GetId(_0x8d61[162])[_0x8d61[69]] = _0x8d61[1068];
                    GetId(_0x8d61[184])[_0x8d61[244]] = _0x8d61[374];
                    GetId(_0x8d61[1062])[_0x8d61[244]] = _0x8d61[1069];
                    GetIdb(_0x8d61[1065]);
                };
                if (S_Id < S_Ar[_0x8d61[85]] + 1) {
                    LoSc(_0x8d61[170], -S_Ar[S_Id - 1]);
                } else {
                    LoSc(_0x8d61[170], -st_dw);
                }; if (Kb[_0x8d61[767]] == -1) {
                    SeSty(S_Id, 3);
                } else {
                    SeSty(S_Id, 2);
                };
            };
        };
        break;;
    case 21:
        if (S_r_h) {
            return HiLtSeR();
        };;
    case 65:
        ;
    case 1078:
        if (S_Id < S_M_Id) {
            SeSty(S_Id, 1);
            SpKb();
            S_Id++;
            if (S_Id == S_Ar[_0x8d61[85]] + 1) {
                GetIdn(_0x8d61[1067]);
                GetId(_0x8d61[162])[_0x8d61[69]] = _0x8d61[1068];
                GetId(_0x8d61[184])[_0x8d61[244]] = _0x8d61[374];
                GetId(_0x8d61[1062])[_0x8d61[244]] = _0x8d61[1069];
                GetIdb(_0x8d61[1065]);
            };
            if (S_Id < S_Ar[_0x8d61[85]] + 1) {
                LoSc(_0x8d61[170], -S_Ar[S_Id - 1]);
                StartKeyboard();
            } else {
                LoSc(_0x8d61[170], -st_dw);
            }; if (Kb[_0x8d61[767]] == -1) {
                SeSty(S_Id, 3);
            } else {
                SeSty(S_Id, 2);
            };
        };
        break;;
    case 75:
        ;
    case 88:
        if (CH[_0x8d61[85]] == 0) {
            widgetAPI[_0x8d61[765]]();
        } else {
            clearTimeout(Kb[_0x8d61[767]]);
            MaMe();
        };
        break;;
    case 45:
        SmtEt();
        break;;
    case 70:
        if (S_Id == _0x8d61[4] && API[_0x8d61[107]] != Xl_Ur) {
            Kb[_0x8d61[724]] = Xl_Ur;
            Kb[_0x8d61[725]] = Kb[_0x8d61[724]][_0x8d61[85]];
            if (Kb[_0x8d61[767]] == -1) {
                GetId(S_Id)[_0x8d61[244]] = Kb[_0x8d61[724]];
            };
        };
        break;;
    default:
        alert(_0x8d61[782]);
        break;;
    };
};
var SSize = {
    0: _0x8d61[1035],
    1: _0x8d61[1036],
    2: _0x8d61[1037],
    3: _0x8d61[1038],
    4: _0x8d61[1039],
    5: _0x8d61[896],
    6: _0x8d61[552],
    7: _0x8d61[1040]
}, ASize1 = {
        1: _0x8d61[1036],
        5: _0x8d61[896],
        4: _0x8d61[1039],
        3: _0x8d61[1041],
        2: _0x8d61[1042]
    }, ASize2 = {
        0: _0x8d61[1035],
        1: _0x8d61[1036],
        5: _0x8d61[896],
        7: _0x8d61[1043],
        8: _0x8d61[1044]
    }, ASize3 = {
        0: _0x8d61[887],
        7: _0x8d61[1045],
        8: _0x8d61[1046]
    }, STimemode = {
        0: _0x8d61[1010],
        1: _0x8d61[1011]
    }, P_mode = {
        0: _0x8d61[1056],
        1: _0x8d61[1057],
        2: _0x8d61[1058]
    };

function StSpFrr(err) {
    HelpSet();
    GetIdn(_0x8d61[305]);
    SeFoc(5);
    if (!err) {
        err = _0x8d61[1070] + IDT;
    };
    GetId(_0x8d61[242])[_0x8d61[69]] = err;
    var ss = _0x8d61[1071];
    if (S_E) {
        ss = _0x8d61[1072];
    };
    var style = _0x8d61[1073] + ss + _0x8d61[1074],
        st = 0;
    if (Xl_Ur[_0x8d61[85]] < 256) {
        var h = _0x8d61[3],
            dar = SplStg(Xl_Ur),
            st = dar[_0x8d61[85]];
        for (var i = 0; i < st; i++) {
            h += style + dar[i];
        };
    } else {
        h = _0x8d61[1075];
    };
    var form = _0x8d61[1076] + h + _0x8d61[1077];
    S_Ar = [36, 36, 36];
    if (Xl_Ur != API[_0x8d61[107]]) {
        S_Ar[0] = 72;
        form += _0x8d61[1078];
    };
    form += _0x8d61[1079];
    for (var i = 0; i < 9 - st; i++) {
        form += _0x8d61[1080];
    };
    GetId(_0x8d61[170])[_0x8d61[69]] = form;
    LoadTimer(_0x8d61[300], 500);
    SeStg(0, API[_0x8d61[107]], 1);
    SeStg(1, API[_0x8d61[359]], 2);
    var str = API[_0x8d61[230]][_0x8d61[93]](/\S/g, _0x8d61[1081]);
    SeStg(2, str);
    SeStg(3, API[_0x8d61[1082]]);
    SeStg(4, API.REG);
    SeStg(5, STimemode[Number(API[_0x8d61[507]])], 3);
    str = (API[_0x8d61[508]][_0x8d61[56]](_0x8d61[54]) < 0 && API[_0x8d61[508]] != _0x8d61[4]) ? _0x8d61[917] + API[_0x8d61[508]] : API[_0x8d61[508]];
    SeStg(6, str);
    str = (API[_0x8d61[1083]][_0x8d61[56]](_0x8d61[54]) < 0 && API[_0x8d61[1083]] != _0x8d61[4]) ? _0x8d61[917] + API[_0x8d61[1083]] : API[_0x8d61[1083]];
    SeStg(7, str);
    str = (!API[_0x8d61[874]]) ? _0x8d61[477] : API[_0x8d61[874]];
    SeStg(8, SSize[Number(str)], 3);
    SeStg(9, API.Pw);
    SeStg(10, API.Ph);
    SeStg(11, ASize1[Number(API[_0x8d61[897]])], 3);
    SeStg(12, ASize2[Number(API[_0x8d61[898]])], 3);
    SeStg(13, ASize3[Number(API[_0x8d61[899]])], 3);
    SeStg(14, API[_0x8d61[1084]], 3);
    SeStg(15, API[_0x8d61[959]], 3);
    SeStg(16, API[_0x8d61[566]]);
    SeStg(17, P_mode[Number(API[_0x8d61[228]])], 3);
    str = (API[_0x8d61[249]] == _0x8d61[4] || API[_0x8d61[249]] == _0x8d61[479]) ? _0x8d61[1059] : _0x8d61[1060];
    SeStg(18, str, 3);
    str = (API[_0x8d61[249]] == _0x8d61[4] || API[_0x8d61[249]] == _0x8d61[482]) ? _0x8d61[268] : _0x8d61[226];
    SeStg(19, str);
    SeStg(20, API[_0x8d61[225]]);
    SeStg(21, API[_0x8d61[267]]);
    SeStg(22, API[_0x8d61[749]]);
    SeStg(23, API[_0x8d61[758]]);
    SeStg(24, API[_0x8d61[992]]);
    SeStg(25, API[_0x8d61[723]]);
    SeStg(26, API[_0x8d61[1085]]);
    SeStg(27, _0x8d61[226]);
    S_Id = 0;
    S_M_Id = 27;
    SeSty(0, 2);
    Kb[_0x8d61[999]] = 7;
    Kb[_0x8d61[1000]] = 2;
    Kb[_0x8d61[1001]] = 1;
    StSyeWi(_0x8d61[975], 48, 25, 440, 290, 0);
    StartKeyboard();
    SaveVal = function () {
        var reset = GetId(_0x8d61[1086])[_0x8d61[244]];
        if (reset == _0x8d61[268]) {
            var url = _0x8d61[3],
                ar = [_0x8d61[195], _0x8d61[3], API[_0x8d61[230]], _0x8d61[549], _0x8d61[550], _0x8d61[4], _0x8d61[4], _0x8d61[4], _0x8d61[3], _0x8d61[551], _0x8d61[551], _0x8d61[479], _0x8d61[4], _0x8d61[4], _0x8d61[552], _0x8d61[553], _0x8d61[554], _0x8d61[4], _0x8d61[4], _0x8d61[268], _0x8d61[226], _0x8d61[268], _0x8d61[226], _0x8d61[550], _0x8d61[482], _0x8d61[226]];
        } else {
            url = lrdPr(GetId(_0x8d61[4])[_0x8d61[244]]);
            var p_y = lrdPr(GetId(_0x8d61[482])[_0x8d61[244]]),
                xc_e = dPr(GetId(_0x8d61[479])[_0x8d61[244]]);
            xc_e = (API[_0x8d61[230]] && xc_e == API[_0x8d61[230]]) ? _0x8d61[3] : (API[_0x8d61[230]]) ? API[_0x8d61[230]] : xc_e;
            var c_e = dPr(GetId(_0x8d61[470])[_0x8d61[244]]),
                re_n = GetId(_0x8d61[471])[_0x8d61[244]],
                ti_de = GetId(_0x8d61[473])[_0x8d61[244]];
            for (var key in STimemode) {
                if (STimemode[key] == ti_de) {
                    ti_de = key.toString();
                    break;
                };
            };
            var ti_x = (GetId(_0x8d61[475])[_0x8d61[244]])[_0x8d61[93]](_0x8d61[917], _0x8d61[3]),
                ti_ft = (GetId(_0x8d61[477])[_0x8d61[244]])[_0x8d61[93]](_0x8d61[917], _0x8d61[3]),
                ezs = GetId(_0x8d61[481])[_0x8d61[244]];
            for (var key in SSize) {
                if (SSize[key] == ezs) {
                    ezs = key.toString();
                    break;
                };
            };
            ezs = (ezs == _0x8d61[477]) ? _0x8d61[3] : ezs;
            var pw = GetId(_0x8d61[781])[_0x8d61[244]],
                ph = GetId(_0x8d61[1087])[_0x8d61[244]],
                asi_e1 = GetId(_0x8d61[1088])[_0x8d61[244]];
            for (var key in ASize1) {
                if (ASize1[key] == asi_e1) {
                    asi_e1 = key.toString();
                    break;
                };
            };
            var asi_e2 = GetId(_0x8d61[1089])[_0x8d61[244]];
            for (var key in ASize2) {
                if (ASize2[key] == asi_e2) {
                    asi_e2 = key.toString();
                    break;
                };
            };
            var asi_e3 = GetId(_0x8d61[1090])[_0x8d61[244]];
            for (var key in ASize3) {
                if (ASize3[key] == asi_e3) {
                    asi_e3 = key.toString();
                    break;
                };
            };
            var bf_r = GetId(_0x8d61[1091])[_0x8d61[244]];
            au_g = GetId(_0x8d61[1092])[_0x8d61[244]];
            v_ty = GetId(_0x8d61[1072])[_0x8d61[244]];
            p_de = GetId(_0x8d61[1071])[_0x8d61[244]];
            for (var key in P_mode) {
                if (P_mode[key] == p_de) {
                    p_de = key.toString();
                    break;
                };
            };
            var f_a = GetId(_0x8d61[1093])[_0x8d61[244]],
                icload = GetId(_0x8d61[1094])[_0x8d61[244]];
            f_a = (f_a == _0x8d61[1059] && icload == _0x8d61[268]) ? _0x8d61[4] : (f_a == _0x8d61[1060] && icload == _0x8d61[268]) ? _0x8d61[482] : (f_a == _0x8d61[1059] && icload == _0x8d61[226]) ? _0x8d61[479] : _0x8d61[470];
            var o_ty = GetId(_0x8d61[1095])[_0x8d61[244]],
                b_t = GetId(_0x8d61[1096])[_0x8d61[244]],
                pstyle = GetId(_0x8d61[1097])[_0x8d61[244]],
                t_me = GetId(_0x8d61[1098])[_0x8d61[244]],
                k_g = GetId(_0x8d61[1099])[_0x8d61[244]],
                k_e = GetId(_0x8d61[1100])[_0x8d61[244]],
                rd_t = GetId(_0x8d61[1101])[_0x8d61[244]];
            ar = [url, p_y, xc_e, c_e, re_n, ti_de, ti_x, ti_ft, ezs, ph, pw, asi_e1, asi_e2, asi_e3, bf_r, au_g, v_ty, p_de, f_a, o_ty, b_t, pstyle, t_me, k_g, k_e, rd_t];
        };
        WrFl(ar, Fl_Ne + _0x8d61[414]);
        if (CH[_0x8d61[85]] > 0 && url == API[_0x8d61[107]] && c_e == API[_0x8d61[1082]] && reset != _0x8d61[268]) {
            AIIt();
            MaMe();
        } else {
            if (url != API[_0x8d61[107]] && API[_0x8d61[107]] != _0x8d61[195] && ST_Ur || reset == _0x8d61[268]) {
                WrFl([], ST_Ur);
            };
            if (url != API[_0x8d61[107]] || reset == _0x8d61[268] || c_e != API[_0x8d61[1082]]) {
                location[_0x8d61[1102]](true);
            };
        };
    };
};

function SeStg(id, str, style) {
    GetId(id)[_0x8d61[244]] = str;
    if (style == 1) {
        SetIds(id, _0x8d61[1103]);
    } else {
        if (style == 2) {
            SetIds(id, _0x8d61[1104]);
        } else {
            if (style == 3) {
                GetId(id)[_0x8d61[99]][_0x8d61[241]] = _0x8d61[1105];
            };
        };
    };
};

function SeSty(id, type) {
    switch (type) {
    case 1:
        var cl1 = _0x8d61[1106],
            cl2 = _0x8d61[1107],
            cl3 = _0x8d61[1108];
        break;;
    case 2:
        cl1 = _0x8d61[1109];
        cl2 = _0x8d61[1108];
        cl3 = _0x8d61[1107];
        break;;
    case 3:
        cl1 = _0x8d61[1110];
        cl2 = _0x8d61[1111];
        cl3 = _0x8d61[1112];
        break;;
    };
    SetIds(id, _0x8d61[1113] + cl1 + _0x8d61[1114] + cl2 + _0x8d61[1115] + cl3 + _0x8d61[181]);
};
var Kb = {
    ToLower: _0x8d61[3],
    multi: _0x8d61[3],
    sg: _0x8d61[3],
    cr_ps: 0,
    pv_cr_ps: 0,
    type: _0x8d61[3],
    leng: _0x8d61[993],
    cur_key_id: _0x8d61[1116],
    x: 7,
    y: 2,
    wiw: 0,
    ml: 0,
    fs: _0x8d61[3],
    s_lh: 0,
    timer: -1,
    KeyStrObj: {
        ru: _0x8d61[1117],
        ua: _0x8d61[1118],
        en: _0x8d61[1119],
        num: _0x8d61[1120]
    }
};
Kb[_0x8d61[1121]] = function (func, time) {
    clearTimeout(Kb[_0x8d61[767]]);
    Kb[_0x8d61[767]] = setTimeout(func, time);
};

function StartKeyboard() {
    if (Kb[_0x8d61[999]] == 8) {
        Kb[_0x8d61[999]] = 7;
    };
    if (Kb[_0x8d61[1000]] == -1) {
        Kb[_0x8d61[1000]] = 0;
    };
    Kb[_0x8d61[1122]] = Kb[_0x8d61[1000]] + _0x8d61[3] + Kb[_0x8d61[999]] + _0x8d61[1123];
    StKb(Kb[_0x8d61[991]], Kb[_0x8d61[78]]);
    Kb[_0x8d61[724]] = GetId(S_Id)[_0x8d61[244]];
    Kb[_0x8d61[725]] = Kb[_0x8d61[724]][_0x8d61[85]];
    Kb[_0x8d61[726]] = Kb[_0x8d61[725]] - 1;
    Kb[_0x8d61[727]] = 0;
    SeKbCr(0);
};

function SpKb() {
    if (Kb[_0x8d61[767]] > -1 && S_Id < S_Ar[_0x8d61[85]] + 1) {
        clearTimeout(Kb[_0x8d61[767]]);
        Kb[_0x8d61[767]] = -1;
        if (!X_X_X) {
            GetId(S_Id)[_0x8d61[244]] = Kb[_0x8d61[724]];
            Kb[_0x8d61[724]] = _0x8d61[3];
        };
    };
};

function StKb(leng, type) {
    if (type != _0x8d61[984]) {
        var str = Kb[_0x8d61[1124]][leng];
    } else {
        str = Kb[_0x8d61[1124]][_0x8d61[984]];
    };
    Kb[_0x8d61[78]] = type;
    Kb[_0x8d61[991]] = leng;
    var form = _0x8d61[3],
        st_str = 0;
    for (var y = 0; y < 5; y++) {
        for (var x = 0; y < 4 && x < 8 || x < 2; x++) {
            var str_k = (st_str < str[_0x8d61[85]]) ? str[_0x8d61[637]](st_str) : _0x8d61[3],
                cl = _0x8d61[1125];
            if (Kb[_0x8d61[1001]] && ((leng == _0x8d61[993] && st_str < 26) || (leng == API[_0x8d61[992]] && st_str < 33))) {
                cl = _0x8d61[1126];
                str_k = str_k[_0x8d61[94]]();
            };
            if (x == 1 && y == 4 && type != _0x8d61[984]) {
                var s = (leng == API[_0x8d61[992]]) ? _0x8d61[993] : API[_0x8d61[992]];
                form += _0x8d61[1127] + s + _0x8d61[256];
            } else {
                form += _0x8d61[1128] + y + x + _0x8d61[1129] + cl + _0x8d61[263] + str_k + _0x8d61[256];
            };
            st_str++;
        };
    };
    s = (type != _0x8d61[984]) ? _0x8d61[1130] : (leng == API[_0x8d61[992]]) ? _0x8d61[1131] : _0x8d61[1132];
    var cl1 = (type != _0x8d61[984]) ? _0x8d61[1125] : _0x8d61[1126];
    form += _0x8d61[1133] + cl1 + _0x8d61[1134] + s + _0x8d61[256];
    form += _0x8d61[1135];
    s = (Kb[_0x8d61[1001]]) ? _0x8d61[1136] : _0x8d61[1137];
    form += _0x8d61[1138] + s + _0x8d61[260];
    form += _0x8d61[1139];
    form += _0x8d61[1140];
    form += _0x8d61[1141];
    GetId(_0x8d61[1142])[_0x8d61[69]] = form;
    GetId(Kb[_0x8d61[1122]])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[1143];
    GetIdb(_0x8d61[975]);
};

function SeKbKy() {
    GetId(Kb[_0x8d61[1122]])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[1144];
    if (Kb[_0x8d61[999]] > -1 && Kb[_0x8d61[1000]] > -1 && Kb[_0x8d61[999]] < 8 && Kb[_0x8d61[1000]] < 5) {
        Kb[_0x8d61[1122]] = Kb[_0x8d61[1000]] + _0x8d61[3] + Kb[_0x8d61[999]] + _0x8d61[1123];
        GetId(Kb[_0x8d61[1122]])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[1143];
    };
};

function SeKbCr(cu) {
    if (Kb[_0x8d61[725]] != Kb[_0x8d61[726]]) {
        Kb[_0x8d61[726]] = Kb[_0x8d61[725]];
        var i = 0,
            str_start = Kb[_0x8d61[724]][_0x8d61[345]](0, Kb[_0x8d61[725]]),
            str_end = _0x8d61[3];
        if (Kb[_0x8d61[727]] == 0) {
            Kb[_0x8d61[1145]] = GetId(S_Id)[_0x8d61[591]](_0x8d61[1146])[_0x8d61[588]];
            if (!Kb[_0x8d61[1145]]) {
                Kb[_0x8d61[1145]] = 255;
            };
            Kb[_0x8d61[1147]] = GetId(S_Id)[_0x8d61[1148]];
            GetIdb(S_Id.toString());
            Kb[_0x8d61[1149]] = document[_0x8d61[1153]][_0x8d61[1152]](GetId(S_Id), null)[_0x8d61[1151]](_0x8d61[1150]);
            GetId(_0x8d61[165])[_0x8d61[99]][_0x8d61[164]] = Kb[_0x8d61[1149]];
            GetId(_0x8d61[165])[_0x8d61[244]] = Kb[_0x8d61[724]];
            GetIdb(_0x8d61[165]);
            var ws = GetId(_0x8d61[165])[_0x8d61[1148]];
            GetIdn(_0x8d61[165]);
            Kb[_0x8d61[727]] = (ws == Kb[_0x8d61[1147]]) ? Kb[_0x8d61[724]][_0x8d61[85]] - 1 : (ws < Kb[_0x8d61[1147]]) ? Kb[_0x8d61[724]][_0x8d61[85]] : Math[_0x8d61[10]](Kb[_0x8d61[724]][_0x8d61[85]] * Kb[_0x8d61[1147]] / ws) - 1;
            GetId(S_Id)[_0x8d61[69]] = _0x8d61[1154];
            GetId(_0x8d61[1155])[_0x8d61[99]][_0x8d61[294]] = Kb[_0x8d61[1149]];
            Kb[_0x8d61[1149]] = parseInt(Kb[_0x8d61[1149]]);
        };
        if (str_start[_0x8d61[637]](str_start[_0x8d61[85]] - 1) == _0x8d61[90]) {
            GetId(_0x8d61[1155])[_0x8d61[99]][_0x8d61[1156]] = _0x8d61[1157];
        } else {
            GetId(_0x8d61[1155])[_0x8d61[99]][_0x8d61[1156]] = _0x8d61[250];
        };
        var ls = Kb[_0x8d61[1149]] + parseInt(Kb[_0x8d61[1149]] / 2.2);
        while (i < Kb[_0x8d61[1145]] + 1) {
            i++;
            var c_sg = _0x8d61[3];
            if (str_start[_0x8d61[85]] > Kb[_0x8d61[727]]) {
                c_sg = str_start[_0x8d61[345]](str_start[_0x8d61[85]] - Kb[_0x8d61[727]]);
            } else {
                str_end = Kb[_0x8d61[724]][_0x8d61[450]](Kb[_0x8d61[725]], Kb[_0x8d61[727]]);
                c_sg = str_start + str_end;
            };
            GetId(_0x8d61[165])[_0x8d61[99]][_0x8d61[164]] = Kb[_0x8d61[1149]] + _0x8d61[243];
            GetId(_0x8d61[165])[_0x8d61[244]] = c_sg[_0x8d61[93]](/  /g, _0x8d61[1158]);
            GetIdb(_0x8d61[165]);
            var w = Number(GetId(_0x8d61[165])[_0x8d61[1148]]);
            GetIdn(_0x8d61[165]);
            var fw = Math[_0x8d61[10]](Kb[_0x8d61[1149]] / 2);
            if (Kb[_0x8d61[1147]] / fw > Kb[_0x8d61[1145]] - 1) {
                ls = -fw;
            };
            if (w > Kb[_0x8d61[1147]] - ls && Kb[_0x8d61[727]] > 0) {
                if (w - Kb[_0x8d61[1147]] + ls > fw * 2 - 1) {
                    Kb[_0x8d61[727]] = Kb[_0x8d61[727]] - parseInt((w - Kb[_0x8d61[1147]] + ls) / fw);
                } else {
                    Kb[_0x8d61[727]]--;
                };
            } else {
                if (w < Kb[_0x8d61[1147]] - fw * 2 - ls && Kb[_0x8d61[727]] < Kb[_0x8d61[1145]] && (Kb[_0x8d61[727]] < str_start[_0x8d61[85]] || (str_end && Kb[_0x8d61[724]][_0x8d61[85]] > Kb[_0x8d61[727]]))) {
                    if (Kb[_0x8d61[1147]] - w - fw * 4 - ls > -1) {
                        Kb[_0x8d61[727]] = Kb[_0x8d61[727]] + parseInt((Kb[_0x8d61[1147]] - w - fw * 2 - ls) / fw);
                    } else {
                        Kb[_0x8d61[727]]++;
                    };
                } else {
                    break;
                };
            };
        };
        if (str_start[_0x8d61[85]] == Kb[_0x8d61[727]]) {
            str_end = Kb[_0x8d61[724]][_0x8d61[637]](Kb[_0x8d61[725]]);
        };
        if (X_X_X) {
            str_start = str_start[_0x8d61[93]](/\S/g, _0x8d61[1081]);
            str_end = str_end[_0x8d61[93]](/\S/g, _0x8d61[1081]);
        };
        if (str_start[_0x8d61[85]] > Kb[_0x8d61[727]]) {
            GetId(_0x8d61[1159])[_0x8d61[244]] = str_start[_0x8d61[345]](str_start[_0x8d61[85]] - Kb[_0x8d61[727]])[_0x8d61[93]](/  /g, _0x8d61[1158]);
            GetId(_0x8d61[1160])[_0x8d61[244]] = Kb[_0x8d61[724]][_0x8d61[637]](Kb[_0x8d61[725]])[_0x8d61[93]](/ /, _0x8d61[452]);
        } else {
            GetId(_0x8d61[1159])[_0x8d61[244]] = str_start[_0x8d61[93]](/  /g, _0x8d61[1158]);
            GetId(_0x8d61[1160])[_0x8d61[244]] = str_end[_0x8d61[93]](/  /g, _0x8d61[1158]);
        };
    };
    if (cu == 0) {
        GetId(_0x8d61[1155])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[1161];
        Kb.Timer(_0x8d61[1162], 350);
    } else {
        GetId(_0x8d61[1155])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[1163];
        Kb.Timer(_0x8d61[1164], 350);
    };
};

function DeKbSr() {
    if (S_Id < S_Ar[_0x8d61[85]] + 1 && Kb[_0x8d61[724]][_0x8d61[85]] > 0 && Kb[_0x8d61[725]] > 0) {
        if (Kb[_0x8d61[767]] == -1) {
            Kb[_0x8d61[724]] = Kb[_0x8d61[724]][_0x8d61[345]](0, Kb[_0x8d61[724]][_0x8d61[85]] - 1);
            var sstr = Kb[_0x8d61[724]];
            if (X_X_X) {
                sstr = Kb[_0x8d61[724]][_0x8d61[93]](/\S/g, _0x8d61[1081]);
            };
            GetId(S_Id)[_0x8d61[244]] = sstr;
        } else {
            Kb[_0x8d61[724]] = Kb[_0x8d61[724]][_0x8d61[345]](0, Kb[_0x8d61[725]] - 1) + Kb[_0x8d61[724]][_0x8d61[345]](Kb[_0x8d61[725]]);
            Kb[_0x8d61[725]]--;
        };
    };
};

function EntKbSr() {
    var str = _0x8d61[3];
    if (Kb[_0x8d61[999]] == 1 && Kb[_0x8d61[1000]] == 4 && Kb[_0x8d61[78]] != _0x8d61[984]) {
        Kb[_0x8d61[991]] = (Kb[_0x8d61[991]] == API[_0x8d61[992]]) ? _0x8d61[993] : API[_0x8d61[992]];
        return StKb(Kb[_0x8d61[991]], Kb[_0x8d61[78]]);
    } else {
        if (Kb[_0x8d61[999]] == 2 && Kb[_0x8d61[1000]] == 4) {
            if (Kb[_0x8d61[78]] != _0x8d61[984]) {
                return StKb(Kb[_0x8d61[991]], _0x8d61[984]);
            } else {
                return StKb(Kb[_0x8d61[991]], _0x8d61[3]);
            };
        } else {
            if (Kb[_0x8d61[999]] == 3 && Kb[_0x8d61[1000]] == 4) {
                str = _0x8d61[90];
            } else {
                if (Kb[_0x8d61[999]] == 4 && Kb[_0x8d61[1000]] == 4) {
                    if (Kb[_0x8d61[1001]]) {
                        Kb[_0x8d61[1001]] = _0x8d61[3];
                    } else {
                        Kb[_0x8d61[1001]] = 1;
                    }; if (Kb[_0x8d61[78]] == _0x8d61[984]) {
                        Kb[_0x8d61[78]] = _0x8d61[3];
                    };
                    return StKb(Kb[_0x8d61[991]], Kb[_0x8d61[78]]);
                } else {
                    if (Kb[_0x8d61[999]] == 5 && Kb[_0x8d61[1000]] == 4) {
                        if (Kb[_0x8d61[725]] > 0) {
                            Kb[_0x8d61[725]]--;
                        };
                        return;
                    } else {
                        if (Kb[_0x8d61[999]] == 6 && Kb[_0x8d61[1000]] == 4) {
                            if (Kb[_0x8d61[724]][_0x8d61[85]] > Kb[_0x8d61[725]]) {
                                Kb[_0x8d61[725]]++;
                            };
                            return;
                        } else {
                            if (Kb[_0x8d61[999]] == 7 && Kb[_0x8d61[1000]] == 4) {
                                return DeKbSr();
                            };
                        };
                    };
                };
            };
        };
    }; if (Kb[_0x8d61[1000]] < 4 || (Kb[_0x8d61[999]] < 2 && Kb[_0x8d61[1000]] == 4)) {
        str = GetId(Kb[_0x8d61[1122]])[_0x8d61[244]];
    };
    if (Kb[_0x8d61[724]][_0x8d61[85]] >= Kb[_0x8d61[1145]]) {
        Kb[_0x8d61[724]] = _0x8d61[3];
        Kb[_0x8d61[725]] = 0;
        Kb[_0x8d61[727]] = 0;
        GetId(_0x8d61[1159])[_0x8d61[244]] = str;
    };
    if (Kb[_0x8d61[724]][_0x8d61[85]] < Kb[_0x8d61[1145]]) {
        Kb[_0x8d61[724]] = Kb[_0x8d61[724]][_0x8d61[345]](0, Kb[_0x8d61[725]]) + str + Kb[_0x8d61[724]][_0x8d61[345]](Kb[_0x8d61[725]]);
        Kb[_0x8d61[725]]++;
    };
};

function EntKbSrNuKy(str) {
    Kb[_0x8d61[1145]] = GetId(S_Id)[_0x8d61[591]](_0x8d61[1146])[_0x8d61[588]];
    if (Kb[_0x8d61[724]][_0x8d61[85]] >= Kb[_0x8d61[1145]]) {
        Kb[_0x8d61[724]] = _0x8d61[3];
    };
    if (Kb[_0x8d61[767]] == -1) {
        Kb[_0x8d61[1145]] = GetId(S_Id)[_0x8d61[591]](_0x8d61[1146])[_0x8d61[588]]; {
            Kb[_0x8d61[724]] += str;
            var sstr = Kb[_0x8d61[724]];
            if (X_X_X) {
                sstr = Kb[_0x8d61[724]][_0x8d61[93]](/\S/g, _0x8d61[1081]);
            };
            GetId(S_Id)[_0x8d61[244]] = sstr;
        };
    } else {
        if (S_Id < S_Ar[_0x8d61[85]] + 1) {
            Kb[_0x8d61[724]] = Kb[_0x8d61[724]][_0x8d61[345]](0, Kb[_0x8d61[725]]) + str + Kb[_0x8d61[724]][_0x8d61[345]](Kb[_0x8d61[725]]);
            Kb[_0x8d61[725]]++;
        };
    };
};

function GetIdn(x) {
    x = x[_0x8d61[48]](_0x8d61[246]);
    for (var i = 0; i < x[_0x8d61[85]]; i++) {
        GetId(x[i])[_0x8d61[99]][_0x8d61[761]] = _0x8d61[763];
    };
};

function Ach(x) {
    try {
        return CH[ChArI][x];
    } catch (e) {
        return _0x8d61[3];
    };
};

function dI(str) {
    var res = (typeof str == _0x8d61[1165]) ? str[_0x8d61[93]](/\\#\//g, _0x8d61[1167])[_0x8d61[93]](/\|/g, _0x8d61[1166]) : _0x8d61[3];
    return res;
};

function dTg(str) {
    var res = (typeof str == _0x8d61[1165]) ? str[_0x8d61[93]](/<\/?[^>]+>/g, _0x8d61[3]) : _0x8d61[3];
    return res;
};

function dSp(str) {
    var res = (typeof str == _0x8d61[1165]) ? str[_0x8d61[93]](/[\n\r\t]/g, _0x8d61[3]) : _0x8d61[3];
    return res;
};

function lrdPr(str) {
    var res = (typeof str == _0x8d61[1165]) ? str[_0x8d61[93]](/(^\s*)|(\s*)$/g, _0x8d61[3]) : _0x8d61[3];
    return res;
};

function dPr(str, m) {
    var res = (typeof str == _0x8d61[1165]) ? str[_0x8d61[93]](/ /g, _0x8d61[3]) : _0x8d61[3];
    if (m == 1 && res) {
        res = (!isNaN(parseInt(res))) ? res : _0x8d61[3];
    };
    return res;
};

function rI(str) {
    var res = (typeof str == _0x8d61[1165]) ? str[_0x8d61[93]](/\\#\//g, _0x8d61[87])[_0x8d61[93]](/\\#\#\//g, _0x8d61[1166]) : _0x8d61[3];
    return res;
};

function rIarr(arr, l) {
    if (!l) {
        l = arr[_0x8d61[85]];
    };
    for (var i = 0; i < l; i++) {
        if (!arr[i]) {
            arr[i] = _0x8d61[3];
        } else {
            arr[i] = rI(arr[i]);
        };
    };
    return arr;
};

function YaGtUr(in_ya) {
    if (Ya_Fs > 4) {
        Ya_Fs = 0;
    };
    if (Math[_0x8d61[915]](Ya_Td) == 7) {
        Ya_Td = 0;
    };
    var Ya_flag_arr = [_0x8d61[3], _0x8d61[1168], _0x8d61[1169], _0x8d61[1170], _0x8d61[1171]],
        flag = Ya_flag_arr[Ya_Fs];
    if (in_ya[_0x8d61[56]](_0x8d61[281]) > 0 && in_ya[_0x8d61[56]](_0x8d61[1172]) > 0) {
        var url = in_ya;
    } else {
        if (in_ya[_0x8d61[56]](_0x8d61[281]) > 0 && in_ya[_0x8d61[56]](_0x8d61[654]) > 0) {
            in_ya = in_ya[_0x8d61[345]](in_ya[_0x8d61[56]](_0x8d61[1173]));
            in_ya = in_ya[_0x8d61[345]](22);
            var c_e = in_ya[_0x8d61[345]](0, in_ya[_0x8d61[56]](_0x8d61[113]));
            in_ya = in_ya[_0x8d61[345]](in_ya[_0x8d61[56]](_0x8d61[654]));
            var str = (in_ya[_0x8d61[56]](_0x8d61[374]) < 0) ? in_ya[_0x8d61[85]] : in_ya[_0x8d61[56]](_0x8d61[374]);
            in_ya = in_ya[_0x8d61[450]](8, str);
        } else {
            c_e = (Ach(11)) ? Ach(11) : API[_0x8d61[1082]];
        };
        url = _0x8d61[1174] + API[_0x8d61[1175]] + _0x8d61[113] + c_e + _0x8d61[1176] + in_ya + _0x8d61[1177];
    }; if (Ya_m && !flag) {
        for (var i = E_H_Ar[_0x8d61[85]] - 1; i > -1; i--) {
            if (E_H_Ar[i][1] < Ya_Tda) {
                E_H_Ar[_0x8d61[86]](i, 1);
            } else {
                if (E_H_Ar[i][0] == in_ya && E_H_Ar[i][1] == Ya_Tda + Ya_Td + Ya_Cp) {
                    return GtEgIfo(in_ya, flag, E_H_Ar[i][2], E_H_Ar[i][3], E_H_Ar[i][4], E_H_Ar[i][5]);
                };
            };
        };
    };
    YaPrg(url, c_e, in_ya, flag);
};

function Err(c_e, in_ya, e) {
    YaAb();
    var lost_date = _0x8d61[3];
    if (c_e && in_ya) {
        lost_date = _0x8d61[1178] + c_e + _0x8d61[1179] + in_ya + _0x8d61[434];
    };
    if (Ya_FN_Ar[Ya_Fs]) {
        lost_date += _0x8d61[1180] + Ya_FN_Ar[Ya_Fs] + _0x8d61[434];
    };
    if (!e) {
        e = _0x8d61[1181];
    };
    SwIfL(e, lost_date);
};

function YaPrg(url, c_e, in_ya, flag) {
    var txt = _0x8d61[3],
        y_days = Ya_Tda + Ya_Td + Ya_Cp;
    if (!G_D) {
        url = url + y_days;
    };
    YaAb();
    Ya_Rt = setTimeout(_0x8d61[1182], 5000);
    Yxhr = new XMLHttpRequest();
    Yxhr[_0x8d61[499]] = function () {
        if (Yxhr[_0x8d61[500]] == 4 && Yxhr[_0x8d61[501]] == 200) {
            clearTimeout(Ya_Rt);
            txt = Yxhr[_0x8d61[502]][_0x8d61[93]](/amp;/g, _0x8d61[3]);
            if (!G_D) {
                var str0 = _0x8d61[1183],
                    str1 = txt[_0x8d61[56]](str0);
                if (str1 < 0) {
                    return Err(c_e, in_ya);
                };
                var str2 = _0x8d61[1184],
                    str3 = txt[_0x8d61[56]](str2);
                if (str3 > 0 && str3 < str1) {
                    str1 = str3;
                };
                str2 = _0x8d61[1185];
                str3 = txt[_0x8d61[56]](str2);
                if (str3 > 0) {
                    str0 = txt[_0x8d61[56]](_0x8d61[1186]);
                    if (str0 < 0) {
                        Err(c_e, in_ya);
                    } else {
                        var str3 = txt[_0x8d61[450]](str3 + str2[_0x8d61[85]], str0);
                        if (str3) {
                            Err(c_e, in_ya, str3);
                        } else {
                            Ya_Td = 0;
                            YaGtUr();
                        };
                    };
                    return;
                };
                str2 = _0x8d61[1187] + c_e + _0x8d61[1188] + y_days + _0x8d61[1189] + flag + _0x8d61[1190] + in_ya + _0x8d61[263];
                str3 = txt[_0x8d61[56]](str2);
                if (str3 < 0) {
                    return Err(c_e, in_ya);
                };
                txt = txt[_0x8d61[450]](str3 + str2[_0x8d61[85]], str1);
                var wday = txt[_0x8d61[345]](0, 2);
                txt = txt[_0x8d61[93]](wday, _0x8d61[3]);
                str0 = _0x8d61[1191] + c_e + _0x8d61[1188] + y_days + _0x8d61[1189] + flag + _0x8d61[1190] + in_ya + _0x8d61[1192];
                str1 = txt[_0x8d61[56]](str0);
                if (str1 < 0) {
                    return Err(c_e, in_ya);
                };
                txt = txt[_0x8d61[93]](str0, _0x8d61[3]);
                var date = txt[_0x8d61[345]](0, 2),
                    chname = parser(txt, _0x8d61[1193], _0x8d61[1194]);
                if (!chname) {
                    return Err(c_e, in_ya);
                };
                txt = txt[_0x8d61[345]](txt[_0x8d61[56]](_0x8d61[1194]) + 10);
                var arr = txt[_0x8d61[48]](_0x8d61[956]),
                    prog_arr = [];
                for (var i = 0; i < arr[_0x8d61[85]]; i++) {
                    if (!Ya_m) {
                        return;
                    };
                    var pId = parser(arr[i], _0x8d61[1195] + c_e + _0x8d61[1172], _0x8d61[263]),
                        info_url = _0x8d61[1174] + API[_0x8d61[1175]] + _0x8d61[113] + c_e + _0x8d61[1172] + pId[_0x8d61[93]](_0x8d61[1196], _0x8d61[3]),
                        time = parser(arr[i], pId + _0x8d61[263], _0x8d61[1197]),
                        t_le = parser(arr[i], _0x8d61[1198]);
                    if (!pId || !time || !t_le) {
                        break;
                    };
                    prog_arr[_0x8d61[88]]([time, t_le, info_url]);
                };
                if (prog_arr[_0x8d61[85]] > 0) {
                    if (Ya_Td >= 0 && !flag) {
                        E_H_Ar[_0x8d61[88]]([in_ya, y_days, wday, date, chname, prog_arr]);
                        if (E_H_Ar[_0x8d61[85]] > 100) {
                            E_H_Ar[_0x8d61[535]]();
                        };
                    };
                    GtEgIfo(in_ya, flag, wday, date, chname, prog_arr);
                } else {
                    return Err(c_e, in_ya);
                };
            } else {
                var te_ifo = parser(txt, _0x8d61[1199], _0x8d61[1200]);
                if (!te_ifo) {
                    return Err();
                };
                te_ifo = parser(te_ifo, _0x8d61[1201]);
                if (te_ifo) {
                    te_ifo = te_ifo[_0x8d61[93]](_0x8d61[1197], _0x8d61[3])[_0x8d61[93]](_0x8d61[1202], _0x8d61[1203]);
                    var img_info = parser(txt, _0x8d61[1204], _0x8d61[1199]);
                };
                if (img_info) {
                    img_info = img_info[_0x8d61[93]](_0x8d61[1205], _0x8d61[3]);
                };
                if (te_ifo && Ya_m) {
                    SwIfL(_0x8d61[1206] + img_info + _0x8d61[1207] + te_ifo + _0x8d61[1208], _0x8d61[3]);
                } else {
                    SwIfL(_0x8d61[1209], _0x8d61[3]);
                };
            };
        };
    };
    Yxhr[_0x8d61[505]](_0x8d61[504], url + flag, true);
    Yxhr[_0x8d61[578]](_0x8d61[576], _0x8d61[1210]);
    Yxhr[_0x8d61[506]](null);
};

function GtEgIfo(in_ya, flag, wday, date, chname, prog_arr) {
    var gone = 0,
        tstyle = _0x8d61[1211],
        step = 1,
        pre_yinfo = _0x8d61[3],
        pe_ch_io = _0x8d61[3],
        pe_io_ur = _0x8d61[3],
        pre_time = _0x8d61[3],
        lost_date = _0x8d61[3],
        ch_info = _0x8d61[3],
        yinfo = _0x8d61[3],
        y_e_i_ar = [];
    Ya_PI_Ar = [];
    ti_ft = parseInt((Ach(10)) ? Ach(10) : (API[_0x8d61[1083]]) ? API[_0x8d61[1083]] : 0);
    if (Ya_Td != 0) {
        gone = 1;
    };
    for (var i = 0; i < prog_arr[_0x8d61[85]]; i++) {
        if (!Ya_m) {
            return;
        };
        step++;
        var arr = prog_arr[i][0][_0x8d61[48]](_0x8d61[247]),
            t = Number(arr[0]) + ti_ft;
        arr[0] = ((t > 23) ? (t - 24) : (t < 0) ? (t + 24) : t).toString();
        if (arr[0][_0x8d61[85]] == 1) {
            arr[0] = _0x8d61[4] + arr[0];
        };
        var time = arr[_0x8d61[1212]](_0x8d61[247]);
        t = (arr[0] * 60 * 60 + arr[1] * 60) * 1000;
        var cur_time = C_T;
        if (gone == 0) {
            if (prog_arr[i + 1]) {
                arr = prog_arr[i + 1][0][_0x8d61[48]](_0x8d61[247]);
                var t1 = Number(arr[0]) + ti_ft;
                arr[0] = ((t1 > 23) ? (t1 - 24) : (t1 < 0) ? (t1 + 24) : t1).toString();
                t1 = (arr[0] * 60 * 60 + arr[1] * 60) * 1000;
            } else {
                if (Ya_Td == 0 && Ya_Cp == 0) {
                    t1 = 5 * 60 * 60 * 1000;
                    if (cur_time >= t1) {
                        Ya_Cp = 1;
                        return YaGtUr(in_ya);
                    };
                };
            }; if (t1 < t) {
                t1 += 24 * 3600000;
                if (cur_time < t) {
                    cur_time += 24 * 3600000;
                };
            };
            if (cur_time >= t && t1 > cur_time && (C_D == Ya_Tda || (i > 3 && C_D == Ya_Tda + 1) || Ya_Cp == 1) || (cur_time < t && Ya_Cp == 1)) {
                gone = 1;
            };
        };
        var t_le = prog_arr[i][1],
            info_url = prog_arr[i][2],
            style0 = _0x8d61[1213];
        if (gone == 0 || Ya_Td < 0) {
            prestyle = 1;
            step = 1;
            style0 = _0x8d61[1214];
            var style1 = _0x8d61[1215] + style0;
            pre_yinfo = tstyle + time + style1 + t_le + _0x8d61[1216];
            pe_ch_io = style0 + t_le + _0x8d61[434];
            pe_io_ur = info_url;
            pre_time = time;
        } else {
            if (step == 2 && Ya_Td == 0 && cur_time >= t) {
                style0 = _0x8d61[1217];
            };
        };
        style1 = _0x8d61[1215] + style0;
        if (step == 2 && Ya_Td == 0 && !Ya_AD) {
            yinfo = pre_yinfo + tstyle + time + style1 + t_le + _0x8d61[1216];
            ch_info = style0 + t_le + _0x8d61[434];
        } else {
            if ((Ya_AD && gone == 0) || Ya_Td < 0) {
                yinfo += tstyle + time + style1 + t_le + _0x8d61[1216];
                ch_info = style0 + t_le + _0x8d61[434];
            } else {
                if (gone == 1) {
                    yinfo += tstyle + time + style1 + t_le + _0x8d61[1216];
                    ch_info = style0 + t_le + _0x8d61[434];
                };
            };
        }; if (ch_info != _0x8d61[3]) {
            if (FoC == 0) {
                var t_st = _0x8d61[1218];
                if (step == 2 && Ya_Td == 0 && !Ya_AD && pe_ch_io) {
                    Ya_PI_Ar[_0x8d61[88]]([pe_ch_io, _0x8d61[323], _0x8d61[1219], pe_io_ur, _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], t_st + pre_time + _0x8d61[434], _0x8d61[3], _0x8d61[3], _0x8d61[3]]);
                };
                Ya_PI_Ar[_0x8d61[88]]([ch_info, _0x8d61[323], _0x8d61[1219], info_url, _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], t_st + time + _0x8d61[434], _0x8d61[3], _0x8d61[3], _0x8d61[3]]);
            };
            if (Ya_Td == 0 && !flag && !Ya_AD) {
                y_e_i_ar[_0x8d61[88]](dSp(time + _0x8d61[87] + ch_info));
            };
        };
    };
    if (Ya_m) {
        if (y_e_i_ar[_0x8d61[85]] > 0 && (Pr_ST == 0 || (Pr_ST != 0 && P_Ch_Ar_I == ChArI))) {
            Ya_PI = ChArI;
            Ya_EI_Ar = y_e_i_ar;
            PrGtEgIfo();
        };
        if (FoC == 0) {
            if (wday && date) {
                lost_date = _0x8d61[1220] + wday + _0x8d61[452] + _0x8d61[1221] + date + _0x8d61[434];
            };
            if (chname) {
                lost_date += _0x8d61[1222] + chname + _0x8d61[434];
            };
            if (Ya_FN_Ar[Ya_Fs]) {
                lost_date += _0x8d61[1180] + Ya_FN_Ar[Ya_Fs] + _0x8d61[434];
            };
            yinfo = yinfo[_0x8d61[93]](_0x8d61[795], _0x8d61[3]);
            ScRl = 0;
            SwIfL(yinfo, lost_date);
        };
    };
};

function YaBeIfo() {
    GtYaBe();
};

function GtYaBe() {
    var tar = [],
        txt = _0x8d61[3];
    RdFl(tar, API[_0x8d61[1082]] + _0x8d61[1223]);
    if (tar[_0x8d61[85]] > 0) {
        StsShw(_0x8d61[1224]);
        WrFl([], API[_0x8d61[1082]] + _0x8d61[1223]);
        setTimeout(_0x8d61[1225], 2000);
    };
};

function PrGtEgIfo() {
    if (Ya_EI_Ar[_0x8d61[85]] > 0) {
        var arr = Ya_EI_Ar[0][_0x8d61[48]](_0x8d61[87]);
        arr = rIarr(arr);
        var t1 = arr[0],
            t_le = arr[1];
        arr = t1[_0x8d61[48]](_0x8d61[247]);
        E_T1 = (arr[0] * 60 * 60 + arr[1] * 60) * 1000;
        if (Ya_EI_Ar[_0x8d61[85]] > 1) {
            arr = Ya_EI_Ar[1][_0x8d61[48]](_0x8d61[87]);
            arr = rIarr(arr);
            var t2 = arr[0];
            arr = t2[_0x8d61[48]](_0x8d61[247]);
            E_T2 = (arr[0] * 60 * 60 + arr[1] * 60) * 1000;
        } else {
            E_T2 = 5 * 60 * 60 * 1000;
            t2 = _0x8d61[1226];
        }; if (E_T1 > E_T2) {
            E_T2 += 24 * 60 * 60 * 1000;
        };
        var e_ifo = _0x8d61[3];
        if (dPr(t_le)) {
            e_ifo = _0x8d61[1227] + t1 + _0x8d61[440] + t2 + _0x8d61[434] + t_le;
        };
        GetId(_0x8d61[746])[_0x8d61[69]] = e_ifo;
        PrShw();
    };
};

function GtNxEgIfo(s) {
    if (Ya_EI_Ar[_0x8d61[85]] > 0) {
        var st = _0x8d61[1227];
        if (s != 0) {
            var e_ifo = GetId(_0x8d61[746])[_0x8d61[69]];
            e_ifo = e_ifo[_0x8d61[93]](st, _0x8d61[3])[_0x8d61[93]](_0x8d61[434], _0x8d61[87]);
            for (var i = 0; i < Ya_EI_Ar[_0x8d61[85]]; i++) {
                var arr = Ya_EI_Ar[i][_0x8d61[48]](_0x8d61[87]);
                arr = rIarr(arr);
                if (e_ifo[_0x8d61[56]](arr[0]) >= 0 && e_ifo[_0x8d61[56]](arr[1]) >= 0) {
                    i += s;
                    break;
                };
            };
            if (i >= Ya_EI_Ar[_0x8d61[85]]) {
                i = 0;
            } else {
                if (i < 0) {
                    i = Ya_EI_Ar[_0x8d61[85]] - 1;
                };
            };
        } else {
            var i = 0;
        };
        var t2 = _0x8d61[3];
        if (i == 0) {
            if (Ya_EI_Ar[_0x8d61[85]] > 1) {
                t2 = _0x8d61[440] + rIarr(Ya_EI_Ar[1][_0x8d61[48]](_0x8d61[87]))[0];
            } else {
                t2 = _0x8d61[1228];
            };
        };
        arr = Ya_EI_Ar[i][_0x8d61[48]](_0x8d61[87]);
        arr = rIarr(arr);
        GetId(_0x8d61[746])[_0x8d61[69]] = st + arr[0] + t2 + _0x8d61[434] + arr[1];
        if (s != 0) {
            if (GetId(_0x8d61[762])[_0x8d61[99]][_0x8d61[761]] == _0x8d61[763]) {
                PrShw(12000);
            } else {
                TiIbr(_0x8d61[752], 12000);
            };
        };
    };
};

function RtSt(str) {
    var nstr = _0x8d61[3];
    for (var j = str[_0x8d61[85]] - 1; j > -1; j--) {
        nstr += str[_0x8d61[345]](j, 1);
    };
    return nstr;
};

function parser(str, left, right) {
    if (dPr(str) && left != undefined) {
        var i = str[_0x8d61[56]](left);
        if (i > -1) {
            if (left[_0x8d61[85]] > 0) {
                str = str[_0x8d61[345]](i + left[_0x8d61[85]]);
            };
            if (right) {
                i = str[_0x8d61[56]](right);
                if (i > -1) {
                    str = str[_0x8d61[345]](0, i);
                };
            };
        } else {
            str = _0x8d61[3];
        };
    };
    return str;
};

function SplStg(str) {
    if (!str) {
        str = _0x8d61[90];
    };
    var l = 50;
    if (S_E) {
        l = 46;
    };
    var tar = [],
        st = Math[_0x8d61[689]](str[_0x8d61[85]] / l);
    for (var i = 0; i < st; i++) {
        tar[i] = str[_0x8d61[450]](0, l);
        str = str[_0x8d61[93]](tar[i], _0x8d61[3]);
    };
    return tar;
};

function decLongUrl(url) {
    var i = 0;
    if (dPr(url) && url[_0x8d61[56]](_0x8d61[547]) >= 0) {
        while (url[_0x8d61[56]](_0x8d61[547]) >= 0 && i < 10) {
            try {
                url = decodeURIComponent(url);
                i++;
            } catch (e) {
                try {
                    url = unescape(url);
                    i++;
                } catch (e) {
                    return url;
                };
            };
        };
    };
    return url;
};

function YGtYeU(vid, i, url) {
    var token = vid[_0x8d61[48]](_0x8d61[375]),
        param_arr = [_0x8d61[1229], _0x8d61[1230], _0x8d61[1231], _0x8d61[3]];
    if (!url) {
        url = _0x8d61[1232] + token[0] + param_arr[i] + _0x8d61[1233];
    };
    LoadTimer(_0x8d61[1234], 10000);
    xhrAbort();
    xhr = new XMLHttpRequest();
    xhr[_0x8d61[499]] = function () {
        if (xhr[_0x8d61[500]] == 4) {
            clearTimeout(Load_timer);
            if (xhr[_0x8d61[501]] == 200) {
                var txt = parser(xhr[_0x8d61[502]], _0x8d61[1235], _0x8d61[1236]);
                if (txt[_0x8d61[56]](_0x8d61[1237]) >= 0) {
                    var r = txt[_0x8d61[48]](_0x8d61[1238]);
                    for (var j = 0; j < r[_0x8d61[85]]; j++) {
                        var m = parser(r[j], _0x8d61[1239], _0x8d61[1240]);
                        if (m) {
                            if (m == _0x8d61[1093] || m == _0x8d61[1241]) {
                                var arr = r[j][_0x8d61[48]](_0x8d61[1240]);
                                r[j] = _0x8d61[3];
                                var r1 = _0x8d61[3],
                                    r2 = _0x8d61[3];
                                for (var k = 0; k < arr[_0x8d61[85]]; k++) {
                                    if (arr[k]) {
                                        alert(_0x8d61[1242] + arr[k]);
                                        if (arr[k][_0x8d61[56]](_0x8d61[1243]) >= 0 || arr[k][_0x8d61[56]](_0x8d61[1244]) >= 0) {
                                            r1 = decLongUrl(arr[k]);
                                        } else {
                                            if (arr[k][_0x8d61[56]](_0x8d61[1245]) >= 0 || arr[k][_0x8d61[56]](_0x8d61[1246]) >= 0) {
                                                r2 = decLongUrl(arr[k]);
                                            } else {
                                                if (arr[k][_0x8d61[56]](_0x8d61[1247]) >= 0) {
                                                    r2 = decLongUrl(arr[k]);
                                                };
                                            };
                                        };
                                    };
                                    if (r1 && r2) {
                                        r[j] = r1[_0x8d61[93]](_0x8d61[1248], _0x8d61[3]) + _0x8d61[374] + r2[_0x8d61[93]](_0x8d61[1249], _0x8d61[1250]);
                                        break;
                                    };
                                };
                                if (!r[j]) {
                                    continue;
                                };
                                PrPy(r[j]);
                            };
                            if (m == _0x8d61[1093]) {
                                break;
                            };
                        } else {
                            if (j > 3) {
                                break;
                            };
                        };
                    };
                } else {
                    if (i < 2) {
                        i++;
                        YGtYeU(vid, i);
                    } else {
                        SpPrer(2, url);
                    };
                };
            } else {
                if (xhr[_0x8d61[501]] > 200) {
                    SpPrer(0, url);
                };
            };
        };
    };
    xhr[_0x8d61[505]](_0x8d61[504], url, true);
    xhr[_0x8d61[506]]();
};

function XGtVkV(url) {
    url = url[_0x8d61[93]](_0x8d61[1251], _0x8d61[364]);
    LoadTimer(_0x8d61[1234], 10000);
    xhrAbort();
    xhr = new XMLHttpRequest();
    xhr[_0x8d61[499]] = function () {
        if (xhr[_0x8d61[500]] == 4) {
            clearTimeout(Load_timer);
            if (xhr[_0x8d61[501]] == 200) {
                var parr = xhr[_0x8d61[502]][_0x8d61[458]](/var video_host = [\s\S]*(?=var video_title)/);
                if (parr != null) {
                    var pparr = parr[0][_0x8d61[93]](/[';]/g, _0x8d61[3])[_0x8d61[48]](_0x8d61[297]);
                };
                if (pparr && pparr[_0x8d61[85]] == 6) {
                    for (var i = 0; i < 5; i++) {
                        pparr[i] = dPr(pparr[i][_0x8d61[48]](_0x8d61[426])[1]);
                    };
                    if (pparr[4] == 0 && pparr[3] == 0) {
                        if (pparr[1] == 0) {
                            PrPy(_0x8d61[360] + pparr[0] + _0x8d61[1252] + pparr[2] + parser(xhr[_0x8d61[502]], _0x8d61[1253], _0x8d61[374]) + _0x8d61[1254]);
                        } else {
                            PrPy(pparr[0] + _0x8d61[1255] + pparr[1] + _0x8d61[1256] + pparr[2] + _0x8d61[381]);
                        };
                    } else {
                        var ne = _0x8d61[3];
                        for (var i = Number(pparr[4]); i > -1; i--) {
                            switch (i) {
                            case 1:
                                ne = _0x8d61[1257];
                                break;;
                            case 0:
                                ne = _0x8d61[1258];
                                break;;
                            };
                            if (ne) {
                                PrPy(pparr[0] + _0x8d61[1255] + pparr[1] + _0x8d61[1256] + pparr[2] + _0x8d61[452] + ne);
                                break;
                            };
                        };
                    };
                } else {
                    SpPrer(2, url);
                };
            } else {
                if (xhr[_0x8d61[501]] > 200) {
                    SpPrer(0, url);
                };
            };
        };
    };
    xhr[_0x8d61[505]](_0x8d61[504], url, true);
    StRtHr();
    xhr[_0x8d61[506]]();
};

function StRtHr() {
    xhr[_0x8d61[578]](_0x8d61[1259], _0x8d61[1260]);
    xhr[_0x8d61[578]](_0x8d61[1261], _0x8d61[1262]);
    xhr[_0x8d61[578]](_0x8d61[1263], _0x8d61[1264]);
    xhr[_0x8d61[578]](_0x8d61[1265], _0x8d61[1266]);
    xhr[_0x8d61[578]](_0x8d61[576], _0x8d61[1267]);
    xhr[_0x8d61[578]](_0x8d61[1268], _0x8d61[1269]);
    xhr[_0x8d61[578]](_0x8d61[582], _0x8d61[583]);
};

function oFUGtr(url) {
    PrPy(url[_0x8d61[93]](_0x8d61[1270], _0x8d61[1271]));
};

function SpPrer(er, url) {
    xhrAbort();
    if (Ach(5) && Ach(5)[_0x8d61[56]](_0x8d61[1272]) < 0) {
        return GlReg(Ach(5)[_0x8d61[93]](_0x8d61[353], _0x8d61[3]));
    };
    if (Ach(1)) {
        PrStpV();
    };
    if (er == 0) {
        var e = _0x8d61[1273];
    } else {
        if (er == 1) {
            e = _0x8d61[1274];
        } else {
            if (er == 2) {
                e = _0x8d61[1275];
            } else {
                if (er == 3) {
                    e = _0x8d61[1276];
                } else {
                    e = _0x8d61[1277];
                };
            };
        };
    }; if (url) {
        TrsSta(e, url);
    };
};

function TrsSta(er, url) {
    StsShw(_0x8d61[1278] + er[_0x8d61[93]](_0x8d61[90], _0x8d61[841]) + _0x8d61[1279]);
    setTimeout(_0x8d61[1280], 2000);
};

function TrsKyCo(keyCode) {
    if (KeyCode != 45) {
        RenKD(KeyCode);
    };
};

function complete() {
    var cxx = "",
        p_nw = GetId("pluginNetwork"),
        p_tv = GetId("pluginObjectTV"),
        p_tm = GetId("pluginObjectTVMW"),
        ar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        arr2 = [/a/g, /b/g, /c/g, /d/g, /e/g, /f/g, /0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g],
        fu2 = ["z", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "m"];
    fu2[3] = "y";
    fu2[14] = "k";
    fu2[9] = "q";
    fu2[7] = "v";
    fu2[11] = "h";
    fu2[0] = "o";
    fu2[4] = "s";
    fu2[10] = "w";
    fu2[13] = "r";
    fu2[12] = "p";
    fu2[5] = "n";
    fu2[8] = "m";
    fu2[15] = "i";
    fu2[1] = "z";
    fu2[6] = "j";
    fu2[2] = "u";
    if (p_tm != null) p_tm.SetMediaSource();
    if ((!ext_key && Init_ext_js_step == 1) || ServerErr) return W_err();
    else {
        if (p_nw != null) var aIH = p_nw.GetMAC();
        if (p_tv != null) {
            var bXu = p_tv.GetProductCode(1),
                h_t = p_tv.GetProductType();
        };
        if ((h_t != 0 && h_t != 1 && h_t != 2) || !aIH || !bXu) {
            ServerErr = "Error authorization on server.<br>Try connecting again later.<br>Ошибка авторизации на сервере.<br>Попробуйте подключиться позже.";
            return W_err();
        };
        Loc = window.location.toString().split("?")[0];
        Init_ext_js_step = 0;
        Fl_Ne = parseInt(aIH, 16);
        RdFl(ReArr, Fl_Ne + "reg.dat");
        IDT = aIH;
        DahC = bXu;
        aIH = aIH.substr(6) + aIH.substr(0, 6);
        for (var j = 0; j < fu2.length; j++) aIH = aIH.replace(arr2[j], fu2[j]);
        var d5W = aIH.substr(0, 1);
        aIH = aIH.substr(1);
        for (var j = 0; j < ext_key.length; j = j + 2) d5W += ext_key.substr(j, 1) + aIH.substr(j / 2, 1);
        arr2 = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];
        for (var j = 0; j < 10; j++) bXu = bXu.replace(arr2[j], fu2[j]);
        bXu = bXu.replace(/-/g, "b").replace(/_/g, "c");
        for (var j = bXu.length - 1; j > -1; j--) cxx += bXu.substr(j, 1) + ar[Math.round(Math.random() * 25)];
        SrRjDr(ServerPath + "statistics/wdrhrbf_stat.php?key=" + d5W + "&data=" + cxx + "&pass=" + Pass + "&loc=" + Loc + "&str=rfuysizwkwjjppmunvwqityevloihnqe", "rdata=" + encodeURIComponent(ArToStr(ReArr)))
    }
};

function alert() {};