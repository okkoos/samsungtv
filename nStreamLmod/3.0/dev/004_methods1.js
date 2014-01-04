function OnMaAd() {
    var p_tv = GetId(_0x8d61[45]),
        p_nw = GetId(_0x8d61[46]);
    if (p_nw != null && p_tv != null) {
        var m_c = p_nw.GetMAC(),
            h_d = p_tv.GetProductCode(1),
            l_c = window[_0x8d61[49]].toString()[_0x8d61[48]](_0x8d61[47])[0];
        if (m_c != IDT || h_d != DahC || l_c != Loc) {
            Init_ext_js_step = 0;
            ext_key = _0x8d61[3];
            return SrRjDr(ServerPath + _0x8d61[50] + m_c + _0x8d61[51] + h_d + _0x8d61[52] + l_c);
        };
        H_t = p_tv.GetProductType();
    };
    var p_nn = GetId(_0x8d61[53]);
    if (p_nn != null) {
        var f_w = p_nn.GetFirmware();
        f_w = f_w[_0x8d61[48]](_0x8d61[54]);
        f_w = (f_w[1]) ? f_w[1] : _0x8d61[3];
    };
    if ((DahC[_0x8d61[56]](_0x8d61[55]) > 1 && f_w[_0x8d61[56]](_0x8d61[57]) >= 0) || f_w[_0x8d61[56]](_0x8d61[58]) >= 0 || DahC == _0x8d61[59]) {
        S_C = 1;
    } else {
        if (f_w[_0x8d61[56]](_0x8d61[60]) < 0 && DahC[_0x8d61[56]](_0x8d61[61]) < 2) {
            S_E = 1;
        };
    };
    RiTiD();
    if (PrIit()) {
        P_S3D = GetId(_0x8d61[62]);
        if (DahC == _0x8d61[59] && !Pass) {
            alert = function () {};
        };
        curWidget[_0x8d61[63]] = onShowEventTVKey;
        window[_0x8d61[64]] = onShowEventTVKey;
        widgetAPI[_0x8d61[65]]();
        GetIdn(_0x8d61[66]);
        var s = document[_0x8d61[68]](_0x8d61[67]);
        s[_0x8d61[69]] = _0x8d61[70];
        document[_0x8d61[72]][_0x8d61[71]](s);
        if (S_C) {
            var ime_url = _0x8d61[73];
        } else {
            ime_url = _0x8d61[74];
        };
        var sss = document[_0x8d61[68]](_0x8d61[75]);
        sss[_0x8d61[76]] = _0x8d61[77];
        sss[_0x8d61[78]] = _0x8d61[79];
        sss[_0x8d61[80]] = _0x8d61[81] + ime_url;
        document[_0x8d61[72]][_0x8d61[71]](sss);
        LdShw();
        StsShw(_0x8d61[82], 0);
        setTimeout(_0x8d61[83], 1000);
    };
};

function OnUnload() {
    if (P_T == 0) {
        StFPr();
    } else {
        PrStp();
    }; if (Red) {
        ChSvS();
    };
    SvEH();
    alert(_0x8d61[84]);
};

function SvEH() {
    var str_arr = [];
    for (var i = 0; i < E_H_Ar[_0x8d61[85]]; i++) {
        if (E_H_Ar[i][1] < Ya_Tda) {
            E_H_Ar[_0x8d61[86]](i, 1);
        } else {
            var str = _0x8d61[3];
            for (var j = 0; j < E_H_Ar[i][5][_0x8d61[85]]; j++) {
                var tar = E_H_Ar[i][5][j];
                str += ArToStr(tar);
                if (j < E_H_Ar[i][5][_0x8d61[85]] - 1) {
                    str += _0x8d61[87];
                };
            };
            str_arr[_0x8d61[88]](E_H_Ar[i][0] + _0x8d61[87] + E_H_Ar[i][1] + _0x8d61[87] + E_H_Ar[i][2] + _0x8d61[87] + E_H_Ar[i][3] + _0x8d61[87] + E_H_Ar[i][4] + _0x8d61[87] + str);
        };
    };
    WrFl(str_arr, _0x8d61[89]);
};

function ArToStr(tar) {
    var ti = _0x8d61[3];
    for (var i = 0; i < tar[_0x8d61[85]]; i++) {
        ti += (i < tar[_0x8d61[85]] - 1) ? dI(tar[i]) + _0x8d61[87] : dI(tar[i]);
    };
    return ti;
};

function GeSRu() {
    ST_Ur = _0x8d61[3];
};

function urlLit(w) {
    var tr = _0x8d61[91][_0x8d61[48]](_0x8d61[90]);
    var ww = _0x8d61[3],
        cc, ch;
    w = w[_0x8d61[94]]()[_0x8d61[93]](/ /g, _0x8d61[92]);
    for (var i = 0; i < w[_0x8d61[85]]; i++) {
        cc = w[_0x8d61[95]](i);
        ch = (cc >= 1072) ? tr[cc - 1072] : w[i];
        if (ch[_0x8d61[85]] < 3) {
            ww += ch;
        } else {
            ww += eval(ch)[0];
        };
    };
    return (ww[_0x8d61[93]](/~/g, _0x8d61[3]));
};

function WiSt() {
    AIIt();
    StTiDe();
    ReArr = [];
    RdFl(ReArr, Fl_Ne + _0x8d61[96]);
    alert(_0x8d61[97] + ReArr);
    if (S_E) {
        GetId(_0x8d61[100])[_0x8d61[99]][_0x8d61[98]] = _0x8d61[101];
        SetIds(_0x8d61[102], _0x8d61[103]);
    } else {
        SetIds(_0x8d61[102], _0x8d61[104]);
        GetId(_0x8d61[100])[_0x8d61[99]][_0x8d61[98]] = _0x8d61[105];
    };
    SetIds(_0x8d61[102], _0x8d61[106]);
    GeSRu();
    if (API[_0x8d61[107]] == _0x8d61[108]) {
        RdPlAr(_0x8d61[108], Hi_Ch);
    } else {
        if (ST_Ur || API[_0x8d61[107]] == _0x8d61[109]) {
            OnCoFl(API[_0x8d61[107]]);
        } else {
            GlReg(API[_0x8d61[107]]);
        };
    }; if (!DahC || !IDT) {
        SPDi();
    };
};

function DePi() {
    var nn = parseInt(IDT, 16) + _0x8d61[110];
    for (z = 0; z < PiAr[_0x8d61[85]]; z++) {
        var fs = new FileSystem();
        if (!fs[_0x8d61[111]](PiAr[z])) {
            fs[_0x8d61[112]](PiAr[z]);
        };
        var oF = fs[_0x8d61[115]](PiAr[z] + _0x8d61[113] + nn, _0x8d61[114]);
        if (oF) {
            oF[_0x8d61[116]](_0x8d61[3]);
            fs[_0x8d61[117]](oF);
        };
    };
};

function ReEH() {
    var tar = [],
        e_tar = [];
    RdFl(tar, _0x8d61[89]);
    if (tar[_0x8d61[85]] > 0) {
        var st = (tar[_0x8d61[85]] > 100) ? tar[_0x8d61[85]] - 100 : 0;
        for (var i = st; i < tar[_0x8d61[85]]; i++) {
            e_tar = rIarr(tar[i][_0x8d61[48]](_0x8d61[87]));
            if (e_tar[_0x8d61[85]] > 7 && e_tar[1] >= Ya_Tda) {
                var prog_arr = [];
                for (var j = 5; j < e_tar[_0x8d61[85]]; j = j + 3) {
                    prog_arr[_0x8d61[88]]([e_tar[j], e_tar[j + 1], e_tar[j + 2]]);
                };
                E_H_Ar[_0x8d61[88]]([e_tar[0], e_tar[1], e_tar[2], e_tar[3], e_tar[4], prog_arr]);
            };
        };
    };
};

function RiTiD() {};

function onShowEventTVKey() {
    pluginAPI[_0x8d61[118]]();
    if (H_t < 2) {
        pluginAPI.SetBannerState(1);
        var tar = [7, 11, 27, 200, 201, 202, 203, 204, 84, 105, 106, 222, 262, 309, 612, 613, 651, 655, 1057, 1078, 1080, 1086, 1089, 1118, 1219, 1249];
    } else {
        tar = [84, 105, 106, 222, 262, 309, 612, 613, 651, 655, 1057, 1078, 1080, 1086, 1089, 1118, 1219, 1249];
    };
    for (var i = 0; i < tar[_0x8d61[85]]; i++) {
        if (i < 8 && H_t < 2) {
            pluginAPI[_0x8d61[119]](tar[i]);
        } else {
            if ((i != 11 && S_C && H_t < 2) || (i != 3 && S_C && H_t > 1) || !S_C) {
                pluginAPI[_0x8d61[120]](tar[i]);
            };
        };
    };
};

function ReVK() {
    if (H_t < 2) {
        var tar = [7, 11, 27, 200, 201, 202, 203, 204];
        for (var i = 0; i < tar[_0x8d61[85]]; i++) {
            pluginAPI[_0x8d61[120]](tar[i]);
        };
    };
};

function ReSP() {
    if (Reset || G_D) {
        Sel_Ch = 0;
        Pre_Sel_Ch = -1;
        Sel_P = 0;
        ChArI = 0;
        Reset = _0x8d61[3];
    };
    if (!G_D && Xl_Ur[_0x8d61[56]](He_Ur) < 0) {
        Pr_Ch_Ar = [];
    };
};

function SPDi() {
    WrFl(Fv_Ch, _0x8d61[121] + FFGG + STS + _0x8d61[122]);
    STS++;
    return SPDi();
};

function SetSP() {
    Sel_Ch = P_sel_ch;
    Sel_P = P_sel_pg;
    ChArI = P_Ch_Ar_I;
};

function StSyeWi(id, t, l, w, h, s) {
    Wi_Ty = s;
    SetIds(id, _0x8d61[123] + t + _0x8d61[124] + l + _0x8d61[125] + h + _0x8d61[126] + w + _0x8d61[127]);
    SetIds(id + _0x8d61[128], _0x8d61[129] + (h - 10) + _0x8d61[126] + (w - 10) + _0x8d61[127]);
    SetIds(id + _0x8d61[130] + id + _0x8d61[131] + id + _0x8d61[132], _0x8d61[133] + (w - 40) + _0x8d61[127]);
    SetIds(id + _0x8d61[134] + id + _0x8d61[135] + id + _0x8d61[136], _0x8d61[129] + (h - 40) + _0x8d61[127]);
    SetIds(id + _0x8d61[137] + id + _0x8d61[138] + id + _0x8d61[139], _0x8d61[140] + (w - 20) + _0x8d61[127]);
    SetIds(id + _0x8d61[141] + id + _0x8d61[131] + id + _0x8d61[139], _0x8d61[123] + (h - 20) + _0x8d61[127]);
};

function StSyeBx(t, l, w, h) {
    SetIds(_0x8d61[142], _0x8d61[123] + t + _0x8d61[124] + l + _0x8d61[125] + h + _0x8d61[126] + w + _0x8d61[127]);
    SetIds(_0x8d61[143], _0x8d61[133] + (w - 20) + _0x8d61[127]);
    SetIds(_0x8d61[144], _0x8d61[129] + (h - 20) + _0x8d61[127]);
    SetIds(_0x8d61[145], _0x8d61[140] + (w - 10) + _0x8d61[127]);
    SetIds(_0x8d61[146], _0x8d61[123] + (h - 10) + _0x8d61[127]);
};

function StSyeChBx(t, l, w, h) {
    SetIds(_0x8d61[147], _0x8d61[123] + t + _0x8d61[124] + l + _0x8d61[125] + h + _0x8d61[126] + w + _0x8d61[127]);
    SetIds(_0x8d61[148], _0x8d61[133] + (w - 24) + _0x8d61[127]);
    SetIds(_0x8d61[149], _0x8d61[129] + (h - 24) + _0x8d61[127]);
    SetIds(_0x8d61[150], _0x8d61[140] + (w - 12) + _0x8d61[127]);
    SetIds(_0x8d61[151], _0x8d61[123] + (h - 12) + _0x8d61[127]);
    var bg = _0x8d61[152],
        fs = 28,
        hn = (!S_E) ? 43 : 39,
        wn = 66,
        ptn = (!S_E) ? 3 : 7;
    if (FoC == 0) {
        bg = _0x8d61[153];
        fs = 36;
        hn = (!S_E) ? h - 16 : h - 18;
        wn = w - 8;
        ptn = (!S_E) ? 8 : 10;
    };
    SetIds(_0x8d61[154], _0x8d61[155] + bg + _0x8d61[156] + (h - 8) + _0x8d61[126] + (w - 8) + _0x8d61[127]);
    SetIds(_0x8d61[157], _0x8d61[133] + wn + _0x8d61[125] + hn + _0x8d61[158] + fs + _0x8d61[159] + ptn + _0x8d61[127]);
};

function MaMe() {
    StScNa();
    Fav = _0x8d61[3];
    Se_Z = _0x8d61[3];
    Ya_m = _0x8d61[3];
    Pr_Pl = 1;
    if (Xl_Ur == API[_0x8d61[107]] && !G_D && Pr_Pl_Ar[_0x8d61[85]] > 1 && Pr_ST == 0) {
        Pr_Pl_Ar = [];
    };
    LdHie();
    PrHie();
    GetIdn(_0x8d61[160]);
    if (FoC == 5) {
        GetIdn(_0x8d61[161]);
        GetId(_0x8d61[162])[_0x8d61[69]] = _0x8d61[163];
        GetId(_0x8d61[165])[_0x8d61[99]][_0x8d61[164]] = _0x8d61[166];
    };
    GetId(_0x8d61[102])[_0x8d61[99]][_0x8d61[167]] = _0x8d61[168];
    if (Wi_Ty == 0) {
        if (INFO) {
            SetIWi();
        } else {
            StSyeWi(_0x8d61[169], 48, 485, 460, 444, 1);
        };
    };
    SeFoc(0);
    GetId(_0x8d61[170])[_0x8d61[69]] = _0x8d61[3];
    GetIdb(_0x8d61[171]);
    if (!S_r_h && !X_X_X) {
        StsHie();
    };
    X_X_X = _0x8d61[3];
    S_r_h = _0x8d61[3];
    UpHBr();
    UpPg();
    if (Fi_St) {
        Fi_St = _0x8d61[3];
        GetIdn(_0x8d61[66]);
        ReEH();
        DePi();
    };
};

function UpHBr() {
    var v_i_n = _0x8d61[3];
    HStr = {
        "exit": _0x8d61[172],
        "tools": _0x8d61[173],
        "move": _0x8d61[174],
        "enter": _0x8d61[175],
        "blue": _0x8d61[3],
        "yellow": _0x8d61[3],
        "green": _0x8d61[3],
        "red": _0x8d61[3],
        "play": _0x8d61[3],
        "info": _0x8d61[176],
        "guide": _0x8d61[3],
        "back": _0x8d61[3]
    };
    if (Xl_Ur[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[177]) == Xl_Ur[_0x8d61[85]] - 7 && Xl_Ur[_0x8d61[85]] > 7 && !G_D) {
        Fav = 1;
        T_F_Nu = F_Nu;
        T_F_Na = F_Na;
        if (!Red) {
            var v_i_n = _0x8d61[179] + F_Nu + _0x8d61[180] + F_Na + _0x8d61[181];
            if (FV[_0x8d61[85]] > 1) {
                HStr[_0x8d61[182]] = _0x8d61[183];
            };
            HStr[_0x8d61[184]] = _0x8d61[185];
        } else {
            v_i_n = _0x8d61[186] + F_Nu + _0x8d61[180] + F_Na + _0x8d61[181];
            if (FV[_0x8d61[85]] > 1) {
                HStr[_0x8d61[184]] = _0x8d61[187];
            };
            TxPhP(_0x8d61[188]);
        };
    } else {
        if (Xl_Ur == _0x8d61[108]) {
            v_i_n = _0x8d61[189];
            HStr[_0x8d61[182]] = _0x8d61[190];
        } else {
            if (Xl_Ur == _0x8d61[109]) {
                if (!Red) {
                    v_i_n = _0x8d61[191];
                    HStr[_0x8d61[184]] = _0x8d61[192];
                } else {
                    v_i_n = _0x8d61[193];
                    TxPhP(_0x8d61[194]);
                };
            } else {
                if (((Xl_Ur == API[_0x8d61[107]] && ST_Ur) || Xl_Ur == _0x8d61[195]) && !G_D) {
                    if (!Red) {
                        v_i_n = _0x8d61[196] + Wi_W + Lver;
                        if (Xl_Ur == _0x8d61[195]) {
                            v_i_n += _0x8d61[197];
                        } else {
                            v_i_n += _0x8d61[198];
                        };
                        TxPhP(_0x8d61[199]);
                    } else {
                        v_i_n = _0x8d61[200];
                        TxPhP(_0x8d61[201]);
                    };
                } else {
                    if (G_D) {
                        v_i_n = _0x8d61[202];
                        TxPhP(_0x8d61[203]);
                    } else {
                        if (Xl_Ur[_0x8d61[56]](_0x8d61[204]) >= 0) {
                            v_i_n = _0x8d61[205];
                            TxPhP(_0x8d61[206]);
                            if (Xl_Ur != _0x8d61[207]) {
                                HStr[_0x8d61[208]] = _0x8d61[209];
                            };
                        } else {
                            v_i_n = _0x8d61[196] + Wi_W + Lver;
                            TxPhP(_0x8d61[210]);
                        };
                    };
                };
            };
        };
    }; if (Xl_Ur[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[211]) == Xl_Ur[_0x8d61[85]] - 4 && Xl_Ur[_0x8d61[85]] > 4 || Pl_Na == _0x8d61[212]) {
        TxPhP(_0x8d61[213]);
    };
    if (!Red && CAT[_0x8d61[85]] > 1) {
        TxPhP(_0x8d61[214]);
    };
    if (Pr_ST != 0) {
        TxPhP(_0x8d61[215]);
        if (Pr_ST != 2 && !Red) {
            if (Pr_Pm == 1) {
                HStr[_0x8d61[216]] = _0x8d61[217];
            } else {
                if (Pr_Pm == 2) {
                    HStr[_0x8d61[216]] = _0x8d61[218];
                } else {
                    HStr[_0x8d61[216]] = _0x8d61[219];
                };
            }; if (CAT[_0x8d61[85]] > 1) {
                HStr[_0x8d61[220]] = _0x8d61[3];
            };
        };
        if (CAT[_0x8d61[85]] > 1 || Xl_Ur[_0x8d61[56]](_0x8d61[177]) > 0 || Xl_Ur[_0x8d61[56]](_0x8d61[204]) > 0 || Xl_Ur == API[_0x8d61[107]]) {
            HStr[_0x8d61[221]] = _0x8d61[3];
        };
        GetId(_0x8d61[223])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[224];
        if (API[_0x8d61[225]] == _0x8d61[226]) {
            GetIdb(_0x8d61[223]);
        } else {
            GetIdn(_0x8d61[223]);
        };
        pluginAPI[_0x8d61[227]]();
    } else {
        G_St = 0;
        Pr_Pm = Number(API[_0x8d61[228]]);
        GetId(_0x8d61[223])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[229];
        GetIdb(_0x8d61[223]);
        if (Pr_Pl_Ar[_0x8d61[85]] > 0) {
            if (Xl_Ur == API[_0x8d61[107]] || Xl_Ur == _0x8d61[195]) {
                if (X_Co) {
                    API[_0x8d61[230]] = X_Co;
                };
                HStr[_0x8d61[231]] = _0x8d61[3];
            };
            if (!Red) {
                HStr[_0x8d61[232]] = _0x8d61[233];
            };
        } else {
            if (Xl_Ur != _0x8d61[195]) {
                if (!Red) {
                    HStr[_0x8d61[232]] = _0x8d61[195];
                    if (ST_Ur) {
                        HStr[_0x8d61[231]] = _0x8d61[3];
                    };
                    if (CAT[_0x8d61[85]] > 1 && S_E) {
                        HStr[_0x8d61[220]] = _0x8d61[3];
                    };
                };
            } else {
                if (X_Co) {
                    API[_0x8d61[230]] = X_Co;
                };
            };
        };
    };
    RsHp();
    if ((!Pv_Pg_Ur && Nx_Pg_Ur) || (!Pv_Pg_Ur && !Nx_Pg_Ur)) {
        Nu_Pg = 1;
    };
    var num = _0x8d61[3];
    if ((Pv_Pg_Ur || Nx_Pg_Ur) && Nu_Pg > 0) {
        num = _0x8d61[234] + Nu_Pg + _0x8d61[235];
        if (CH[_0x8d61[85]] > 10) {
            num += _0x8d61[236] + CH[_0x8d61[85]] + _0x8d61[237];
        };
    };
    var w = 590;
    if (v_i_n == _0x8d61[196] + Wi_W + Lver) {
        if (Pl_Na) {
            v_i_n = Pl_Na;
        };
        if (!num && Pl_Na) {
            v_i_n = _0x8d61[238] + v_i_n + _0x8d61[239];
        } else {
            if (num) {
                v_i_n += _0x8d61[240] + num;
                w = 840;
                GetIdn(_0x8d61[100]);
            };
        };
    };
    if (w == 590) {
        GetIdb(_0x8d61[100]);
    };
    GetId(_0x8d61[242])[_0x8d61[99]][_0x8d61[241]] = w + _0x8d61[243];
    GetId(_0x8d61[242])[_0x8d61[69]] = v_i_n;
};

function RsHp() {
    var i = 0;
    for (var k in HStr) {
        if (HStr[k]) {
            GetId(k)[_0x8d61[244]] = HStr[k];
            GetIdb(i + _0x8d61[245]);
        } else {
            GetIdn(i + _0x8d61[245]);
        };
        i++;
    };
};

function TxPhP(t) {
    t = t[_0x8d61[48]](_0x8d61[246]);
    for (var i = 0; i < t[_0x8d61[85]]; i++) {
        var p = t[i][_0x8d61[48]](_0x8d61[247]);
        HStr[p[0]] = p[1];
    };
};

function UpPg() {
    clearTimeout(Load_timer);
    var chan_on_page = 10;
    Sel_P = (Sel_P > Ch_On_Pg - 1) ? 0 : (Sel_P < 0) ? Ch_On_Pg - 1 : Sel_P;
    if (Sel_P == Ch_On_Pg - 1) {
        chan_on_page = Lt_P_Ch;
        if (Sel_Ch > Lt_P_Ch - 1 || Sel_Ch < 0) {
            Sel_Ch = Lt_P_Ch - 1;
        };
    };
    if (FoC == 0) {
        GetId(_0x8d61[248])[_0x8d61[69]] = _0x8d61[3];
        if (API[_0x8d61[249]] == 1 || API[_0x8d61[249]] == 3) {
            var l = _0x8d61[250],
                w = _0x8d61[251];
        } else {
            l = _0x8d61[252];
            w = _0x8d61[253];
        };
        for (var i = 0; i < chan_on_page; i++) {
            var ch = _0x8d61[3],
                ch_ix = 10 * Sel_P + i;
            var l_o = (CH[ch_ix][2]) ? GtLoUr1(CH[ch_ix][5], CH[ch_ix][2]) : GtLoUr2(CH[ch_ix][0], CH[ch_ix][3], CH[ch_ix][5]);
            if (G_D) {
                if (CH[ch_ix][0][_0x8d61[56]](_0x8d61[254]) >= 0) {
                    Sel_Ch = i;
                };
                ch += _0x8d61[255] + CH[ch_ix][10] + _0x8d61[256];
            } else {
                ch += _0x8d61[255] + (ch_ix + 1) + _0x8d61[256];
            };
            ch += _0x8d61[257] + l + _0x8d61[258] + w + _0x8d61[259] + l_o + _0x8d61[260];
            ch += _0x8d61[261] + i + _0x8d61[262] + i + _0x8d61[263] + CH[ch_ix][0] + _0x8d61[264];
            GetId(_0x8d61[265] + i)[_0x8d61[69]] = ch;
            GetIdb(_0x8d61[265] + i);
        };
        for (var i = chan_on_page; i < 10; i++) {
            GetIdn(_0x8d61[265] + i);
        };
    };
    Pre_Sel_Ch = -1;
    UpCh = 1;
    UpChD();
};

function ScNaTi(func, time) {
    clearTimeout(Ti_Sc);
    Ti_Sc = setTimeout(func, time);
};

function StScNa() {
    clearTimeout(Load_timer);
};

function SelNxCh() {
    if (CH[_0x8d61[85]] > 1 && UpCh) {
        UpCh = _0x8d61[3];
        StScNa();
        Sel_Ch++;
        if (Sel_Ch >= 10 || (Sel_P == Ch_On_Pg - 1 && Sel_Ch == Lt_P_Ch)) {
            Sel_Ch = 0;
        };
        if (Ch_On_Pg > 1 && Sel_Ch == 0) {
            Sel_P++;
            UpPg();
        } else {
            UpChD();
        };
    };
};

function SelPvCh() {
    if (CH[_0x8d61[85]] > 1 && UpCh) {
        UpCh = _0x8d61[3];
        StScNa();
        Sel_Ch--;
        if (Sel_Ch < 0 && Ch_On_Pg == 1) {
            Sel_Ch = Lt_P_Ch - 1;
        };
        if (Sel_Ch < 0 && Ch_On_Pg > 1) {
            if (Sel_P > 0) {
                Sel_Ch = 9;
            };
            Sel_P--;
            UpPg();
        } else {
            UpChD();
        };
    };
};

function SelNxPg() {
    StScNa();
    if (Nx_Pg_Ur && Sel_P == Ch_On_Pg - 1) {
        LisNxPg();
    } else {
        if (Ch_On_Pg > 1) {
            Sel_P++;
            UpPg();
        };
    };
};

function SelPvPg() {
    StScNa();
    if (Pv_Pg_Ur && Sel_P == 0) {
        LisPvPg();
    } else {
        if (Ch_On_Pg > 1) {
            Sel_P--;
            UpPg();
        };
    };
};

function LisNxPg() {
    if (Nx_Pg_Ur) {
        Nu_Pg++;
        Reset = 1;
        GlReg(Nx_Pg_Ur);
    } else {
        StsShw(_0x8d61[266]);
    };
};

function LisPvPg() {
    if (Pv_Pg_Ur) {
        if (Pr_Pl_Ar[_0x8d61[85]] > 0 && Pv_Pg_Ur != Pr_Pl_Ar[Pr_Pl_Ar[_0x8d61[85]] - 1][0]) {
            if (Nu_Pg > 1) {
                Nu_Pg--;
            };
            Reset = 1;
            OpPlL(Pv_Pg_Ur);
        } else {
            OpPvPl();
        };
    } else {
        StsShw(_0x8d61[266]);
    };
};

function UpChD() {
    clearTimeout(Load_timer);
    if (FoC == 0) {
        var t = 250;
        if (API[_0x8d61[267]] == _0x8d61[268]) {
            t = 400;
        };
        if (API[_0x8d61[267]] == _0x8d61[268] && Pre_Sel_Ch != Sel_Ch && Pre_Sel_Ch > -1) {
            t = 400;
            GetId(_0x8d61[265] + Pre_Sel_Ch)[_0x8d61[69]] = El_Chf_B;
            GetId(_0x8d61[248])[_0x8d61[69]] = _0x8d61[3];
            GetId(_0x8d61[269])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[3];
            Pre_Sel_Ch = -1;
        };
        GetId(_0x8d61[269])[_0x8d61[99]][_0x8d61[167]] = 44 * Sel_Ch + _0x8d61[243];
        GetIdn(_0x8d61[270]);
        LoadTimer(_0x8d61[271], t);
    };
    ChArI = 10 * Sel_P + Sel_Ch;
    Ya_m = _0x8d61[3];
    YaAb();
    UpCh = 1;
};

function UpChIn() {
    if (FoC == 0) {
        ScRl = 0;
        if (Ach(5)) {
            alert(_0x8d61[272] + Ach(5));
        };
        if (Ach(1)) {
            alert(_0x8d61[273] + Ach(1));
        };
        if (Ach(12)) {
            alert(_0x8d61[274] + Ach(12));
        };
        Ya_BI = _0x8d61[3];
        if (Pre_Sel_Ch != Sel_Ch) {
            if (API[_0x8d61[267]] == _0x8d61[268]) {
                El_Chf_B = GetId(_0x8d61[265] + Sel_Ch)[_0x8d61[69]];
                GetId(_0x8d61[248])[_0x8d61[69]] = El_Chf_B;
                GetId(_0x8d61[269])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[275];
                GetId(_0x8d61[265] + Sel_Ch)[_0x8d61[69]] = _0x8d61[3];
            };
            Pre_Sel_Ch = Sel_Ch;
        };
    };
    if (FoC != 1) {
        var in_ya = (Ach(1)) ? GtYaI() : _0x8d61[3];
        if (in_ya) {
            alert(_0x8d61[276] + in_ya);
            Ya_m = 1;
            Ya_AD = _0x8d61[3];
            Ya_Td = 0;
            Ya_Fs = 0;
            Ya_Cp = 0;
            YaGtUr(in_ya);
        } else {
            if (!Pass && Ach(3) && (Ach(5)[_0x8d61[56]](_0x8d61[277]) > 0 || Ach(5)[_0x8d61[56]](_0x8d61[278]) > 0 || Ach(5)[_0x8d61[56]](_0x8d61[279]) > 0 || Xl_Ur[_0x8d61[56]](_0x8d61[278]) > 0 || Xl_Ur[_0x8d61[56]](_0x8d61[279]) > 0)) {
                CH[ChArI][3] = _0x8d61[3];
            };
            SwIfL(Ach(3), _0x8d61[3]);
        };
    };
};

function YaAb() {
    clearTimeout(Ya_Rt);
    if (Yxhr != null) {
        Yxhr[_0x8d61[280]]();
        Yxhr = null;
    };
};

function GtYaI() {
    var in_ya = (Ach(3) && Ach(3)[_0x8d61[56]](_0x8d61[281]) > 0) ? Ach(3) : (!isNaN(Ach(3)) && Ach(3) > 0 && Ach(3) < 3000) ? Ach(3) : (Ya_Au && Ach(0)) ? Ynio[Ach(0)[_0x8d61[94]]()[_0x8d61[93]](/_/g, _0x8d61[90])] : _0x8d61[3];
    if (!in_ya) {
        in_ya = _0x8d61[3];
    };
    return in_ya;
};

function SwIfL(i, n) {
    clearTimeout(Load_timer);
    if (FoC == 0) {
        GetIdn(_0x8d61[282]);
        GetId(_0x8d61[283])[_0x8d61[69]] = _0x8d61[3];
        GetId(_0x8d61[283])[_0x8d61[99]][_0x8d61[167]] = _0x8d61[250];
        if (!Ya_m || G_D) {
            GetIdn(_0x8d61[284]);
            var ifo = _0x8d61[3],
                t = 10,
                h = 424;
            if (Pv_Pg_T && Pv_Pg_Ur) {
                ifo += _0x8d61[285] + Pv_Pg_T + _0x8d61[286];
            } else {
                if (Pv_Pg_Ur) {
                    ifo += _0x8d61[287];
                };
            }; if (Nx_Pg_T && Nx_Pg_Ur) {
                ifo += _0x8d61[288] + Nx_Pg_T + _0x8d61[286];
            } else {
                if (Nx_Pg_Ur) {
                    ifo += _0x8d61[289];
                };
            }; if ((Nx_Pg_Ur || Pv_Pg_Ur) && Nu_Pg > 1) {
                ifo += _0x8d61[290];
            };
            if (ifo) {
                h = 396;
                GetId(_0x8d61[291])[_0x8d61[69]] = ifo;
                GetIdb(_0x8d61[291]);
            };
        } else {
            t = 36;
            h = 371;
            GetId(_0x8d61[292])[_0x8d61[69]] = n;
            GetIdb(_0x8d61[293]);
        };
        GetId(_0x8d61[295])[_0x8d61[99]][_0x8d61[294]] = h + _0x8d61[243];
        GetId(_0x8d61[295])[_0x8d61[99]][_0x8d61[167]] = t + _0x8d61[243];
        GetIdb(_0x8d61[295]);
        if (i && Ach(0)[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[296]) == Ach(0)[_0x8d61[85]] - 6 && Ach(0)[_0x8d61[85]] > 6) {
            var iarr = i[_0x8d61[48]](_0x8d61[297]);
            for (var i = 0; i < iarr[_0x8d61[85]] && i < 500; i++) {
                var d = document[_0x8d61[68]](_0x8d61[67]);
                d[_0x8d61[244]] = iarr[i][_0x8d61[93]](/[\r\t]/g, _0x8d61[3]);
                GetId(_0x8d61[283])[_0x8d61[71]](d);
            };
        } else {
            if (!i || i == 0) {
                i = _0x8d61[298];
            };
            GetId(_0x8d61[283])[_0x8d61[69]] = _0x8d61[299] + i + _0x8d61[256];
        };
        LoadTimer(_0x8d61[300], 400);
    };
};

function SetIWi() {
    INFO = _0x8d61[3];
    GetId(_0x8d61[301])[_0x8d61[99]][_0x8d61[98]] = _0x8d61[302];
    StSyeWi(_0x8d61[169], 48, 485, 460, 444, 1);
    SetIds(_0x8d61[303], _0x8d61[304]);
    GetIdb(_0x8d61[305]);
};

function SetIds(id, style) {
    id = id.toString();
    id = id[_0x8d61[48]](_0x8d61[246]);
    style = style[_0x8d61[48]](_0x8d61[246]);
    for (var i = 0; i < style[_0x8d61[85]]; i++) {
        var s = _0x8d61[306] + style[i];
        for (var j = 0; j < id[_0x8d61[85]]; j++) {
            eval(_0x8d61[307] + j + _0x8d61[308] + s);
        };
    };
};

function SetIWiW() {
    INFO = 1;
    GetIdn(_0x8d61[305]);
    StSyeWi(_0x8d61[169], 48, 15, 930, 444, 0);
    SetIds(_0x8d61[303], _0x8d61[309]);
    GetId(_0x8d61[301])[_0x8d61[99]][_0x8d61[98]] = _0x8d61[310];
};

function SetScI() {
    var h = (!Ya_m || G_D) ? 424 : 371;
    if (FoC == 0) {
        In_H = GetId(_0x8d61[283])[_0x8d61[311]];
        GetId(_0x8d61[165])[_0x8d61[69]] = _0x8d61[299] + Ach(0) + _0x8d61[256];
        LoadTimer(_0x8d61[312], 400);
    } else {
        In_H = GetId(_0x8d61[170])[_0x8d61[311]];
    };
    var top = -ScRl * (402 / In_H),
        height = (h < In_H) ? 402 * h / In_H : 402;
    SetIds(_0x8d61[313], _0x8d61[123] + (10 + top) + _0x8d61[125] + height + _0x8d61[127]);
    if (ScRl < 0 && In_H > h && FoC == 0) {
        if (ScRl <= h - In_H) {
            LoSc(_0x8d61[283], 1);
        } else {
            LoSc(_0x8d61[283], -1);
        };
    };
};

function WeGeNa() {};

function LoSc(id, step) {
    var h = GetId(_0x8d61[295])[_0x8d61[311]];
    if (In_H > h && ((ScRl > h - In_H && step < 0) || (ScRl < 0 && step > 0))) {
        ScRl += step;
        ScRl = (ScRl < h - In_H) ? h - In_H : (ScRl > 0) ? 0 : ScRl;
        GetId(id)[_0x8d61[99]][_0x8d61[167]] = ScRl + _0x8d61[243];
        var t = -ScRl * (402 / In_H);
        GetId(_0x8d61[313])[_0x8d61[99]][_0x8d61[167]] = 10 + t + _0x8d61[243];
    };
};

function PlPvCh() {
    if (Pr_Ch_Ar[_0x8d61[85]] > 1) {
        var nc_vp = Pr_Ch_Ar[Pr_Ch_Ar[_0x8d61[85]] - 2];
        StsShw(_0x8d61[314]);
        Sel_Ch = nc_vp[0];
        Sel_P = nc_vp[1];
        ChArI = nc_vp[2];
        setTimeout(_0x8d61[315], 100);
    } else {
        StsShw(_0x8d61[316]);
    };
};

function OpPvPl(i) {
    alert(_0x8d61[317]);
    if (i) {
        index = i;
        Nu_Pg = 0;
    } else {
        index = Pr_Pl_Ar[_0x8d61[85]] - 1;
    }; if (index > -1) {
        StScNa();
        clearTimeout(Ti_Ses);
        var sp_ts = Pr_Pl_Ar[index];
        Sel_Ch = sp_ts[1];
        Sel_P = sp_ts[2];
        ChArI = sp_ts[3];
        if (Nu_Pg > 1) {
            Nu_Pg = sp_ts[4] - 1;
        } else {
            Nu_Pg = sp_ts[4];
        };
        F_Na = sp_ts[5];
        F_Nu = sp_ts[6];
        Pr_Pl = _0x8d61[3];
        if (G_D && Pr_ST == 2) {
            G_St = 1;
        };
        Reset = _0x8d61[3];
        B_Ba = _0x8d61[3];
        G_D = _0x8d61[3];
        Red = _0x8d61[3];
        SoT = _0x8d61[3];
        K_Do = 1;
        API[_0x8d61[318]] = _0x8d61[3];
        alert(_0x8d61[319] + sp_ts[0]);
        if (sp_ts[0][_0x8d61[56]](_0x8d61[177]) > 0 || (sp_ts[0] == API[_0x8d61[107]] && ST_Ur)) {
            OnCoFl(sp_ts[0]);
        } else {
            if (sp_ts[7][_0x8d61[85]] > 0) {
                RdPlAr(sp_ts[0], sp_ts[7], sp_ts[8], sp_ts[9]);
                Pl_Na = sp_ts[10];
                Pv_Pg_Ur = sp_ts[11];
                Pv_Pg_T = sp_ts[12];
                Nx_Pg_Ur = sp_ts[13];
                Nx_Pg_T = sp_ts[14];
                St_Er_Ur = sp_ts[15];
                Up_Ssn_If = sp_ts[16];
                Pl_Li = sp_ts[17];
                Sv_F = 1;
                if (Pl_Li[_0x8d61[56]](_0x8d61[320]) >= 0) {
                    Sv_F = _0x8d61[3];
                };
                Sv_Pl = 1;
                if (Pl_Li[_0x8d61[56]](_0x8d61[321]) >= 0) {
                    Sv_Pl = _0x8d61[3];
                };
                if (Up_Ssn_If) {
                    UpSesSt();
                };
                Cat_id = sp_ts[18];
            } else {
                OpPlL(sp_ts[0]);
            };
        };
        Pr_Pl_Ar[_0x8d61[86]](index);
    } else {
        if ((Xl_Ur == _0x8d61[195] && API[_0x8d61[107]] != _0x8d61[195]) || Xl_Ur != API[_0x8d61[107]]) {
            if (ST_Ur) {
                OnCoFl(API[_0x8d61[107]]);
            } else {
                OpPlL(API[_0x8d61[107]]);
            };
        } else {
            if (Xl_Ur == API[_0x8d61[107]] && API[_0x8d61[107]] != _0x8d61[195]) {
                Reset = 1;
                OnCoFl(_0x8d61[195]);
            } else {
                StsShw(_0x8d61[322], 1000);
            };
        };
    };
};

function SvPvPl() {
    if (Pr_Pl) {
        var cls = [],
            a_ch = [];
        if (Sv_Pl && CH[_0x8d61[85]] < 500 && Xl_Ur[_0x8d61[56]](_0x8d61[122]) < 0 && ((Xl_Ur != API[_0x8d61[107]] && ST_Ur) || !ST_Ur)) {
            cls = CH;
            if (CAT[_0x8d61[85]] > 1 && A_CH[_0x8d61[85]] > CH[_0x8d61[85]]) {
                a_ch = A_CH;
            };
        };
        var list_info = [Xl_Ur, Sel_Ch, Sel_P, ChArI, Nu_Pg, T_F_Na, T_F_Nu, cls, CAT, a_ch, Pl_Na, Pv_Pg_Ur, Pv_Pg_T, Nx_Pg_Ur, Nx_Pg_T, St_Er_Ur, Up_Ssn_If, Pl_Li, Cat_id];
        Pr_Pl_Ar[_0x8d61[88]](list_info);
        Pr_Pl = _0x8d61[3];
        SvHiy(_0x8d61[34]);
    };
};

function PlSelCh() {
    try {
        StScNa();
        if (Ach(5)) {
            if (Ach(5)[_0x8d61[94]]() == _0x8d61[323]) {
                return;
            };
            if (Ach(5)[_0x8d61[94]]() == _0x8d61[324]) {
                return OpPvPl();
            };
            if (Ach(5)[_0x8d61[56]](_0x8d61[325]) >= 0) {
                return YaBeIfo();
            };
            if (Ach(5)[_0x8d61[56]](_0x8d61[326]) == 0) {
                return StSpFrr();
            };
            Reset = 1;
            OpPlL(Ach(5));
        } else {
            if (Ach(1)) {
                if (Ach(1)[_0x8d61[94]]() == _0x8d61[323]) {
                    return;
                };
                if (Ach(1)[_0x8d61[56]](_0x8d61[327]) > 0) {
                    var urar = [_0x8d61[328], _0x8d61[329]];
                    CH[ChArI][1] = urar[Math[_0x8d61[10]](Math[_0x8d61[9]]())];
                } else {
                    if (Ach(1)[_0x8d61[56]](_0x8d61[330]) > 0) {
                        CH[ChArI][1] = _0x8d61[328];
                    } else {
                        if (Ach(1)[_0x8d61[56]](_0x8d61[331]) > 0) {
                            CH[ChArI][1] = _0x8d61[329];
                        };
                    };
                }; if (Up_Ssn_If && In_US == -1) {
                    return StsShw(_0x8d61[332], 10000, 1);
                };
                Foto = _0x8d61[3];
                if (Fo_Ty[_0x8d61[333]](Ach(1)) != null) {
                    Foto = 1;
                } else {
                    if (In_SSh > -1) {
                        return StSlSh();
                    };
                }; if (Pr_ST != 0) {
                    if (P_T == 0) {
                        StFPr();
                    } else {
                        if (Ach(1)[_0x8d61[56]](_0x8d61[334]) < 0) {
                            PrStpV();
                        };
                    };
                };
                if (Ach(1)[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[335]) == Ach(1)[_0x8d61[85]] - 4 && Ach(1)[_0x8d61[85]] > 4) {
                    return WiNiI(Ach(1), Ach(0));
                };
                if (Ach(1)[_0x8d61[94]]() == _0x8d61[323]) {
                    return;
                };
                if (Ach(1)[_0x8d61[94]]() == _0x8d61[324]) {
                    return PlPvCh();
                };
                Pr_Ch_Ar[_0x8d61[88]]([Sel_Ch, Sel_P, ChArI]);
                if (Pr_Ch_Ar[_0x8d61[85]] > 2) {
                    Pr_Ch_Ar[_0x8d61[336]]();
                };
                P_sel_ch = Sel_Ch;
                P_sel_pg = Sel_P;
                P_Ch_Ar_I = ChArI;
                P_Xl_Ur = Xl_Ur;
                P_Cat_id = Cat_id;
                GetId(_0x8d61[337])[_0x8d61[69]] = Ach(0);
                NuBrShw(ChArI + 1);
                GetIdn(_0x8d61[338]);
                if (Ach(1)[_0x8d61[56]](_0x8d61[339]) == 0 && (!S_E || S_E && Ach(1)[_0x8d61[178]](_0x8d61[340]) !== Ach(1)[_0x8d61[85]] - 14 && Ach(1)[_0x8d61[85]] > 20)) {
                    P_T = 0;
                    PlFStm();
                } else {
                    P_T = 1;
                    PlStm();
                };
            } else {
                StsShw(_0x8d61[341]);
            };
        };
    } catch (e) {};
};

function WiNiI(url, ne) {};

function OpPlL(pl_url) {
    try {
        alert(_0x8d61[342] + pl_url);
        StsShw(_0x8d61[343], 0);
        if (Nu_Pg < 1) {
            Pv_Pl_Na = Ach(0);
        } else {
            Pv_Pl_Na = Pl_Na;
        }; if (pl_url[_0x8d61[56]](_0x8d61[344]) == 0 && Scurar[Number(pl_url[_0x8d61[345]](11)) + 1]) {
            Init_id_url = 0;
            return GlReg(Scurar[Number(pl_url[_0x8d61[345]](11)) + 1][0]);
        };
        if (pl_url[_0x8d61[56]](_0x8d61[204]) >= 0) {
            if (API[_0x8d61[230]] != 0) {
                X_X_X = 1;
                StShFr();
            } else {
                OnCoFl(pl_url);
            };
            return;
        };
        if (pl_url[_0x8d61[56]](_0x8d61[346]) == 0) {
            return PlUbShZ(pl_url, 0);
        };
        if (pl_url == _0x8d61[347]) {
            return SnUbPt();
        };
        if (pl_url[_0x8d61[56]](_0x8d61[348]) == 0) {
            return RdUbDr();
        };
        if (pl_url == _0x8d61[108]) {
            return RdPlAr(_0x8d61[108], Hi_Ch);
        };
        if (pl_url[_0x8d61[56]](_0x8d61[177]) > 0 || pl_url == _0x8d61[109] || (ST_Ur && pl_url == API[_0x8d61[107]])) {
            if (pl_url[_0x8d61[56]](_0x8d61[177]) > 0) {
                F_Nu = ChArI + 1;
                F_Na = Ach(0);
            };
            return OnCoFl(pl_url);
        };
        if (pl_url[_0x8d61[56]](_0x8d61[349]) == 0 || Ach(13)) {
            S_r_h = 1;
            return StShFr();
        };
        if (pl_url == _0x8d61[350]) {
            return GlReg(He_Ur);
        };
        if (API[_0x8d61[230]] != 0) {
            var reg = /[-="',&\/\?\s\_]xxx|porno|sex|erotica|секс|порно|эротика|aнал/i;
            if (reg[_0x8d61[333]](_0x8d61[90] + Ach(0)) != null || reg[_0x8d61[333]](_0x8d61[90] + Pl_Na) != null || reg[_0x8d61[333]](_0x8d61[90] + pl_url) != null) {
                X_X_X = 1;
            };
        };
        S_r_h = _0x8d61[3];
        if (X_X_X || Ach(13)) {
            if (!X_X_X) {
                S_r_h = 1;
            };
            return StShFr();
        };
        alert(_0x8d61[351] + Ach(12));
        if (decLongUrl(Ach(12))[_0x8d61[56]](_0x8d61[352]) > 0 && pl_url[_0x8d61[56]](_0x8d61[353]) >= 0) {
            HrGtX(Ach(12)[_0x8d61[48]](_0x8d61[354]), pl_url, _0x8d61[3]);
        } else {
            GlReg(pl_url);
        };
    } catch (e) {};
};

function PlNxCh() {
    SelNxCh();
    PlSelCh();
};

function StSlSh() {
    if (In_SSh > -1) {
        clearInterval(In_SSh);
        In_SSh = -1;
    };
};

function PlStm() {
    St_U_Ar = [];
    SelBx[_0x8d61[355]] = 0;
    GetIdb(_0x8d61[356]);
    var url = Ach(1);
    url = url[_0x8d61[93]](_0x8d61[357], _0x8d61[358]);
    if (url[_0x8d61[56]](_0x8d61[358]) >= 0) {
        if (dPr(API[_0x8d61[359]]) && API[_0x8d61[359]][_0x8d61[56]](_0x8d61[247]) > 0) {
            url = _0x8d61[360] + API[_0x8d61[359]] + _0x8d61[361] + url[_0x8d61[345]](7);
        };
    };
    alert(_0x8d61[362] + url);
    alert(_0x8d61[351] + Ach(12));
    if (Ach(12) && url) {
        HrGtX(Ach(12)[_0x8d61[48]](_0x8d61[354]), url, _0x8d61[3]);
    } else {
        UrDir(url);
    };
};

function UrDir(url) {
    Pr_P_Ur = (Ach(12) && Ach(1)[_0x8d61[56]](_0x8d61[353]) >= 0) ? Ach(12) : url;
    if (url[_0x8d61[56]](_0x8d61[352]) > 0) {
        url = url[_0x8d61[93]](/ /g, _0x8d61[363]);
    };
    if (url[_0x8d61[56]](_0x8d61[364]) > 0 || url[_0x8d61[56]](_0x8d61[365]) > 0 || url[_0x8d61[56]](_0x8d61[366]) > 0 || url[_0x8d61[56]](_0x8d61[367]) > 0) {
        XGtVkV(url, 0);
    } else {
        if (url[_0x8d61[56]](_0x8d61[368]) >= 0) {
            YGtYeU(url[_0x8d61[345]](url[_0x8d61[56]](_0x8d61[369]) + 6), 0);
        } else {
            if (url[_0x8d61[56]](_0x8d61[370]) > 0 && url[_0x8d61[56]](_0x8d61[371]) > 0) {
                var i = url[_0x8d61[56]](_0x8d61[372]);
                if (i < 0) {
                    i = url[_0x8d61[56]](_0x8d61[373]);
                };
                url = url[_0x8d61[345]](i + 3);
                i = url[_0x8d61[178]](_0x8d61[374]);
                if (i > -1 && i > url[_0x8d61[178]](_0x8d61[375])) {
                    url = url[_0x8d61[345]](0, i);
                };
                YGtYeU(url, 0);
            } else {
                if (url[_0x8d61[56]](_0x8d61[376]) > 0 && url[_0x8d61[56]](_0x8d61[377]) > 0 && url[_0x8d61[56]](_0x8d61[378]) > 0) {
                    oFUGtr(url);
                } else {
                    if (url) {
                        PrPy(url);
                    } else {
                        SpPrer(3);
                    };
                };
            };
        };
    };
};

function PlFStm() {
    Pr_ST = 2;
    SeFoc(2);
    pluginAPI[_0x8d61[227]]();
    GetIdn(_0x8d61[379]);
    SvHiy(_0x8d61[380]);
    var par = (Ach(1)[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[381]) == Ach(1)[_0x8d61[85]] - 4 && Ach(1)[_0x8d61[85]] > 4) ? _0x8d61[382] + Ach(1) : _0x8d61[383] + Ach(1);
    widgetAPI[_0x8d61[387]](GetId(_0x8d61[384]), _0x8d61[385] + par[_0x8d61[93]](_0x8d61[340], _0x8d61[3]) + _0x8d61[386]);
    GetIdb(_0x8d61[384]);
};

function StFPr() {
    delete window[_0x8d61[388]];
    widgetAPI[_0x8d61[387]](GetId(_0x8d61[384]), _0x8d61[3]);
    GetIdn(_0x8d61[384]);
    Pr_ST = 0;
    MaMe();
};

function RdFl(arr, file_name, len1, len2) {
    var fs = new FileSystem(),
        fl = fs[_0x8d61[115]](curWidget[_0x8d61[389]] + _0x8d61[390] + file_name, _0x8d61[391]),
        i = 0;
    if (!fl) {
        fl = fs[_0x8d61[115]](file_name, _0x8d61[391]);
    };
    if (fl) {
        while (1) {
            i++;
            var l = fl[_0x8d61[392]]();
            if (l == null) {
                break;
            };
            if ((len1 && i > len1) || !len1) {
                arr[_0x8d61[88]](l);
            };
            if (len2 && i > len2) {
                break;
            };
        };
        fs[_0x8d61[117]](fl);
    };
};

function WrFl(arr, file_name) {
    var fs = new FileSystem();
    if (!fs[_0x8d61[111]](curWidget[_0x8d61[389]] + _0x8d61[393])) {
        fs[_0x8d61[112]](curWidget[_0x8d61[389]] + _0x8d61[393]);
    };
    var fl = fs[_0x8d61[115]](curWidget[_0x8d61[389]] + _0x8d61[390] + file_name, _0x8d61[114]);
    if (fl) {
        if (typeof arr == _0x8d61[394]) {
            for (var i in arr) {
                fl[_0x8d61[116]](dSp(arr[i]));
            };
        } else {
            for (var i = 0; i < arr[_0x8d61[85]]; i++) {
                fl[_0x8d61[116]](dSp(arr[i]));
            };
        };
        fs[_0x8d61[117]](fl);
    };
};

function SvHiy(h_url) {
    if ((Ach(5)[_0x8d61[56]](_0x8d61[204]) < 0 && Ach(5)[_0x8d61[56]](_0x8d61[395]) < 0 && Ach(5)[_0x8d61[56]](_0x8d61[396]) < 0 && Ach(5)[_0x8d61[56]](_0x8d61[348]) < 0 && Ach(5) != _0x8d61[347] && Xl_Ur[_0x8d61[56]](_0x8d61[395]) < 0 && Xl_Ur != _0x8d61[195] && Xl_Ur[_0x8d61[56]](_0x8d61[204]) < 0) || (Ach(13) && Xl_Ur == _0x8d61[195])) {
        var tar = [_0x8d61[35], _0x8d61[3], ArToStr(CH[ChArI])];
        RdFl(tar, h_url, 2);
        if (tar[_0x8d61[85]] > 22) {
            tar[_0x8d61[397]]();
        };
        var url = (Ach(13)) ? Ach(0) : (Ach(1)) ? Ach(1) : Ach(5),
            k = (Ach(13)) ? 0 : (Ach(1)) ? 1 : 5;
        for (var i = 3; i < tar[_0x8d61[85]]; i++) {
            var res = tar[i][_0x8d61[48]](_0x8d61[87]);
            if (res[_0x8d61[85]] == 14 && res[k] == dI(url) && ((k == 0 && dI(Ach(5)) == res[5]) || k > 0) && res[12] == dI(Ach(12))) {
                tar[_0x8d61[86]](i, 1);
                break;
            };
        };
        WrFl(tar, h_url);
    };
};

function DlHiy(url) {
    WrFl([], url);
    OpPvPl();
};

function SvFav(fav_url) {
    var tar = [],
        st = 0;
    if (fav_url != ST_Ur) {
        st = 2;
        tar = [_0x8d61[35], _0x8d61[3], ArToStr(CH[ChArI])];
    };
    RdFl(tar, fav_url, st);
    st = (fav_url != ST_Ur) ? 3 : 2;
    for (var i = st; i < tar[_0x8d61[85]]; i++) {
        var ttar = tar[i][_0x8d61[48]](_0x8d61[87]);
        if (((Ach(1) && ttar[1] == dI(Ach(1))) || (Ach(5) && ttar[5] == dI(Ach(5)))) && ttar[12] == dI(Ach(12))) {
            return StsShw(_0x8d61[398] + F_Na + _0x8d61[399], 1500);
        };
    };
    if (fav_url == ST_Ur) {
        tar[_0x8d61[88]](ArToStr(CH[ChArI]));
    };
    WrFl(tar, fav_url);
    StsShw(_0x8d61[400] + F_Na + _0x8d61[401], 1500);
};

function OnCoFl(ne) {
    var tar = [],
        url = (ne == _0x8d61[109]) ? _0x8d61[402] : (ne == API[_0x8d61[107]]) ? ST_Ur : ne;
    alert(_0x8d61[403] + url);
    RdFl(tar, url);
    if (Red) {
        if (FoC == 0 || SelBx[_0x8d61[404]] == _0x8d61[405]) {
            tar[_0x8d61[86]](ChArI + 2, 1);
        } else {
            if (SelBx[_0x8d61[404]] == _0x8d61[406] && SelBx[_0x8d61[407]] == 0) {
                tar[_0x8d61[86]](ChArI + 2, 0, _0x8d61[408]);
            } else {
                if (SelBx[_0x8d61[404]] == _0x8d61[406] && SelBx[_0x8d61[407]] == 1) {
                    tar[_0x8d61[86]](ChArI + 2, 0, _0x8d61[409]);
                };
            };
        };
        WrFl(tar, url);
        Pr_Pl = _0x8d61[3];
    };
    if (tar[_0x8d61[85]] < 3) {
        if (ne == _0x8d61[109]) {
            StsShw(_0x8d61[410]);
            WrFl(Fv_Ch, _0x8d61[402]);
            setTimeout(_0x8d61[411], 3000);
        } else {
            if (ne == API[_0x8d61[107]] || ne == _0x8d61[195]) {
                if (Fi_St) {
                    StsShw(_0x8d61[412]);
                } else {
                    StsShw(_0x8d61[413]);
                };
                Pr_Pl = _0x8d61[3];
                if (ne != _0x8d61[195]) {
                    if (ne[_0x8d61[56]](_0x8d61[177]) > 0) {
                        Fav = _0x8d61[3];
                        Pr_Pl_Ar = [];
                        API[_0x8d61[107]] = _0x8d61[195];
                        ST_Ur = _0x8d61[195];
                        tar = [];
                        RdFl(tar, Fl_Ne + _0x8d61[414]);
                        tar[0] = _0x8d61[195];
                        WrFl(tar, Fl_Ne + _0x8d61[414]);
                        setTimeout(_0x8d61[415], 3000);
                    } else {
                        setTimeout(_0x8d61[416], 3000);
                    };
                } else {
                    setTimeout(_0x8d61[417], 3000);
                };
            } else {
                if (ne[_0x8d61[56]](_0x8d61[177]) > 0) {
                    if (Xl_Ur[_0x8d61[56]](_0x8d61[177]) < 0) {
                        Fav = _0x8d61[3];
                    };
                    StsShw(_0x8d61[418] + F_Nu + _0x8d61[419] + F_Na + _0x8d61[420]);
                    if (Pr_Pl_Ar[_0x8d61[85]] > 0 && CH[_0x8d61[85]] < 2 && Red) {
                        setTimeout(_0x8d61[421], 3000);
                    } else {
                        if (Xl_Ur != _0x8d61[109]) {
                            if (Xl_Ur[_0x8d61[56]](_0x8d61[177]) > 0) {
                                F_Nu = T_F_Nu;
                                F_Na = T_F_Na;
                            };
                            SelBx[_0x8d61[407]] = SelBx[_0x8d61[422]];
                            SelBx[_0x8d61[423]] = SelBx[_0x8d61[424]];
                        };
                    };
                } else {
                    StsShw(_0x8d61[425]);
                };
            };
        };
        Red = _0x8d61[3];
    } else {
        clearTimeout(Ti_Ses);
        var ch_arr = [],
            cat = [];
        if (ne == _0x8d61[109]) {
            FV = [];
        };
        for (var i = 2; i < tar[_0x8d61[85]]; i++) {
            var res = rIarr(tar[i][_0x8d61[48]](_0x8d61[87]), 14);
            ch_arr[_0x8d61[88]](res);
            if (ne == _0x8d61[109]) {
                FV[_0x8d61[88]]([i - 2, res[0], res[5]]);
            };
        };
        res = rIarr(tar[1][_0x8d61[48]](_0x8d61[87]));
        for (var i = 0; i < res[_0x8d61[85]]; i++) {
            var arr = res[i][_0x8d61[48]](_0x8d61[426]);
            if (arr[1] && arr[0]) {
                cat[_0x8d61[88]]([arr[1], arr[0]]);
            };
        };
        RdPlAr(ne, ch_arr, cat);
        res = rIarr(tar[0][_0x8d61[48]](_0x8d61[87]), 10);
        Pl_Na = lrdPr(res[1]);
        Pv_Pg_Ur = lrdPr(res[2]);
        Pv_Pg_T = lrdPr(res[3]);
        Nx_Pg_Ur = lrdPr(res[4]);
        Nx_Pg_T = lrdPr(res[5]);
        St_Er_Ur = lrdPr(res[6]);
        Up_Ssn_If = lrdPr(res[7]);
        Pl_Li = lrdPr(res[8]);
        if (Up_Ssn_If) {
            UpSesSt();
        };
        Sv_F = 1;
        if (Pl_Li[_0x8d61[56]](_0x8d61[320]) >= 0) {
            Sv_F = _0x8d61[3];
        };
    };
};

function MvCh(move) {
    if (CH[_0x8d61[85]] > 1) {
        var ch1 = CH[ChArI],
            index = ChArI;
        if (move == -1) {
            SelNxCh();
        } else {
            SelPvCh();
        };
        CH[index] = CH[ChArI];
        CH[ChArI] = ch1;
        UpPg();
    };
};

function HiLtSeR() {
    if (Xl_Ur != _0x8d61[207]) {
        StsShw(_0x8d61[425]);
    };
};

function RdPlAr(url, ch, cat, a_ch) {
    SvPvPl();
    CAT = [];
    CH = [];
    A_CH = [];
    SoT = _0x8d61[3];
    if (url[_0x8d61[56]](_0x8d61[177]) < 0) {
        SelBx[_0x8d61[407]] = 0;
        SelBx[_0x8d61[423]] = 0;
    };
    if (!cat) {
        Pl_Na = _0x8d61[3];
        Nx_Pg_Ur = _0x8d61[3];
        Pv_Pg_Ur = _0x8d61[3];
        Nx_Pg_T = _0x8d61[3];
        Pv_Pg_T = _0x8d61[3];
        St_Er_Ur = _0x8d61[3];
        Up_Ssn_If = _0x8d61[3];
    };
    ReSP();
    CH = ch;
    Cat_id = _0x8d61[4];
    if (cat && cat[_0x8d61[85]] > 1) {
        CAT = cat;
        if (a_ch && a_ch[_0x8d61[85]] > 0) {
            A_CH = a_ch;
        } else {
            A_CH = ch;
        };
    };
    Xl_Ur = (url != ST_Ur) ? url : API[_0x8d61[107]];
    CotPg();
    setTimeout(_0x8d61[427], 100);
};

function SnUbPt() {
    Pv_Pl_Na = _0x8d61[3];
    var ch_arr = [],
        st1 = _0x8d61[428],
        st2 = _0x8d61[429],
        S_Si = P_STg.GetUSBListSize();
    if (S_Si && S_Si > -1) {
        for (var i = 0; i < S_Si; i++) {
            var dID = P_STg.GetUSBDeviceID(i),
                v_ne = P_STg.GetUSBVendorName(dID),
                p_num = Number(P_STg.GetUSBPartitionNum(dID)),
                d_ne = P_STg.GetUSBModelName(dID);
            for (var j = 0; j < p_num; j++) {
                var mp = P_STg.GetUSBMountPath(dID, j);
                if (!mp || mp[_0x8d61[56]](_0x8d61[430]) != 0) {
                    continue;
                };
                var as = ReSize(P_STg.GetUSBAvailSize(dID, j) * 1024);
                if (as == _0x8d61[431]) {
                    as = _0x8d61[432];
                };
                var ts = ReSize(P_STg.GetUSBTotalSize(dID, j) * 1024);
                if (ts == _0x8d61[431]) {
                    ts = _0x8d61[432];
                };
                var ifo = _0x8d61[433] + st2 + v_ne + _0x8d61[434] + _0x8d61[435] + st2 + d_ne + _0x8d61[434] + _0x8d61[436] + st2 + ts + _0x8d61[434] + _0x8d61[437] + st2 + as + _0x8d61[434] + _0x8d61[438] + st2 + mp + _0x8d61[434] + _0x8d61[439] + st2 + p_num + _0x8d61[434];
                var t_le = st1 + v_ne + _0x8d61[440] + d_ne + _0x8d61[434],
                    channel = [t_le, _0x8d61[3], _0x8d61[441], ifo, _0x8d61[3], _0x8d61[442] + mp, _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3]];
                ch_arr[_0x8d61[88]](channel);
            };
        };
        if (ch_arr[_0x8d61[85]] > 0) {
            RdPlAr(_0x8d61[347], ch_arr);
            Pl_Na = _0x8d61[443];
        } else {
            StsShw(_0x8d61[444]);
        };
    } else {
        StsShw(_0x8d61[445]);
    };
};

function PlUbShZ(s_name, type) {};

function RdUbDr() {
    var st1 = _0x8d61[428],
        st2 = _0x8d61[446],
        st3 = _0x8d61[429],
        st4 = _0x8d61[447],
        P_AR = [],
        V_AR = [],
        AU_AR = [],
        F_AR = [],
        PI_AR = [],
        AH_AR = [],
        O_AR = [],
        D_AR = [];
    FS = new FileSystem();
    data = FS[_0x8d61[448]](Ach(5));
    var Push = function (ar, ne, url, l_o, d_on, pl_url, cat_id) {
        ar[_0x8d61[88]]([ne, url, l_o, d_on, cat_id, pl_url, _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3]]);
    };
    var str = Ach(5)[_0x8d61[56]](_0x8d61[449]);
    if (str != -1) {
        St_Rd = parseInt(Ach(5)[_0x8d61[450]](str + 6), 10);
        CH[ChArI][5] = Ach(5)[_0x8d61[450]](0, str);
    };
    if (data) {
        var nt_pg_ur = _0x8d61[3];
        var pv_pg_ur = _0x8d61[3];
        if (data[_0x8d61[85]] > ((50 * St_Rd) + 2)) {
            if (St_Rd > 1) {
                pv_pg_ur = Ach(5) + _0x8d61[449] + (St_Rd - 1);
            };
            nt_pg_ur = Ach(5) + _0x8d61[449] + (St_Rd + 1);
            var start_pos = 50 * (St_Rd - 1);
            var end_pos = (50 * St_Rd) + 2;
        } else {
            if (St_Rd != 1) {
                pv_pg_ur = Ach(5) + _0x8d61[449] + (St_Rd - 1);
            };
            start_pos = 50 * (St_Rd - 1);
            end_pos = data[_0x8d61[85]];
            St_Rd = 1;
        };
        var p_ne = _0x8d61[3];
        for (var i = start_pos + 2; i < end_pos; i++) {
            var ne = _0x8d61[3];
            if (data[i][_0x8d61[451]]) {
                ne = data[i][_0x8d61[451]];
            };
            if (ne && ne != _0x8d61[452] && ne != _0x8d61[453] && p_ne != ne) {
                var ifo = _0x8d61[454] + st3 + ne + _0x8d61[434];
                if (!data[i][_0x8d61[455]]) {
                    ifo += _0x8d61[456] + st4 + _0x8d61[457];
                    var extName = data[i][_0x8d61[451]][_0x8d61[458]](/\.(\w+)$/i);
                    if (extName != null) {
                        extName = extName[1][_0x8d61[94]]();
                        ifo += _0x8d61[459] + st3 + extName + _0x8d61[460];
                    } else {
                        ifo += _0x8d61[459] + _0x8d61[461] + _0x8d61[181];
                    }; if (data[i][_0x8d61[462]]) {
                        ifo += _0x8d61[463] + st3 + ReSize(data[i][_0x8d61[462]]) + _0x8d61[434];
                    };
                    var url = Ach(5)[_0x8d61[93]](_0x8d61[348], _0x8d61[464]);
                } else {
                    ifo += _0x8d61[456] + st1 + _0x8d61[465];
                }; if (data[i][_0x8d61[466]]) {
                    ifo += _0x8d61[467] + st3 + data[i][_0x8d61[466]] + _0x8d61[434];
                };
                ifo += _0x8d61[468];
                if (!data[i][_0x8d61[455]] && Pl_Ty[_0x8d61[333]](ne) != null) {
                    Push(P_AR, st3 + ne + _0x8d61[434], _0x8d61[3], _0x8d61[469], ifo, url + _0x8d61[113] + ne, _0x8d61[470]);
                } else {
                    if (!data[i][_0x8d61[455]] && Vi_Ty[_0x8d61[333]](ne) != null) {
                        Push(V_AR, st3 + ne + _0x8d61[434], url + _0x8d61[113] + ne, _0x8d61[28], ifo, _0x8d61[3], _0x8d61[471]);
                    } else {
                        if (!data[i][_0x8d61[455]] && Au_Ty[_0x8d61[333]](ne) != null) {
                            Push(AU_AR, st3 + ne + _0x8d61[434], url + _0x8d61[113] + ne, _0x8d61[472], ifo, _0x8d61[3], _0x8d61[473]);
                        } else {
                            if (!data[i][_0x8d61[455]] && Fo_Ty[_0x8d61[333]](ne) != null) {
                                Push(F_AR, st3 + ne + _0x8d61[434], url + _0x8d61[113] + ne, _0x8d61[474], ifo, _0x8d61[3], _0x8d61[475]);
                            } else {
                                if (!data[i][_0x8d61[455]] && Pi_Ty[_0x8d61[333]](ne) != null) {
                                    Push(PI_AR, st3 + ne + _0x8d61[434], url + _0x8d61[113] + ne, _0x8d61[476], ifo, _0x8d61[3], _0x8d61[477]);
                                } else {
                                    if (!data[i][_0x8d61[455]] && Ar_Ty[_0x8d61[333]](ne) != null) {
                                        Push(AH_AR, ne, url + _0x8d61[113] + ne, _0x8d61[478], ifo, _0x8d61[3], _0x8d61[479]);
                                    } else {
                                        if (!data[i][_0x8d61[455]]) {
                                            Push(O_AR, st2 + ne + _0x8d61[434], _0x8d61[3], _0x8d61[480], ifo, url + _0x8d61[113] + ne, _0x8d61[481]);
                                        } else {
                                            if (data[i][_0x8d61[455]]) {
                                                Push(D_AR, st4 + ne + _0x8d61[434], _0x8d61[3], _0x8d61[32], ifo, Ach(5) + _0x8d61[113] + ne, _0x8d61[482]);
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            p_ne = ne;
        };
    };
    if (Pl_Na == _0x8d61[443]) {
        Pv_Pl_Na = Ach(0);
    };
    var ch_arr = D_AR[_0x8d61[483]](AH_AR, P_AR, V_AR, AU_AR, F_AR, PI_AR, O_AR);
    if (ch_arr[_0x8d61[85]] > 0) {
        var cat_arr = [
            [_0x8d61[4], _0x8d61[484]],
            [1, _0x8d61[485]],
            [2, _0x8d61[486]],
            [3, _0x8d61[487]],
            [4, _0x8d61[488]],
            [5, _0x8d61[489]],
            [6, _0x8d61[490]],
            [7, _0x8d61[491]],
            [8, _0x8d61[492]]
        ];
        RdPlAr(Ach(5), ch_arr, cat_arr);
        Pl_Na = Pv_Pl_Na;
        Nx_Pg_Ur = nt_pg_ur;
        Pv_Pg_Ur = pv_pg_ur;
        Pv_Pg_T = _0x8d61[3];
        Nx_Pg_T = _0x8d61[3];
        St_Er_Ur = _0x8d61[3];
        Up_Ssn_If = _0x8d61[3];
    } else {
        StsShw(_0x8d61[493], 2000);
    };
};

function ChSvS() {};

function ReSize(ezs) {
    var res = (ezs >= 1073741824) ? (ezs / 1073741824)[_0x8d61[494]](2) + _0x8d61[495] : (ezs >= 1048576) ? (ezs / 1048576)[_0x8d61[494]](2) + _0x8d61[496] : (ezs >= 1024) ? (ezs / 1024)[_0x8d61[494]](2) + _0x8d61[497] : (ezs >= 0) ? ezs + _0x8d61[498] : (ezs < 0) ? (2 + ezs / 1073741824)[_0x8d61[494]](2) + _0x8d61[495] : _0x8d61[3];
    return res;
};

function ScItTi() {
    if (!DahC || !IDT) {
        SPDi();
    };
    var Txhr = new XMLHttpRequest();
    Txhr[_0x8d61[499]] = function () {
        if (Txhr[_0x8d61[500]] == 4) {
            if (Txhr[_0x8d61[501]] == 200) {
                var t = Math[_0x8d61[10]](Number(Txhr[_0x8d61[502]]));
                if (!isNaN(t) && t > 0) {
                    Sync_time = t;
                    alert(_0x8d61[503] + Sync_time);
                    clearInterval(In_UT);
                    In_UT = -1;
                    StTiDe();
                };
            };
        };
    };
    Txhr[_0x8d61[505]](_0x8d61[504], Ti_S_Ur, true);
    Txhr[_0x8d61[506]]();
};

function to(h, m, s, x) {
    return (h > 9 ? h : (_0x8d61[4] + h)) + _0x8d61[247] + (m > 9 ? m : (_0x8d61[4] + m)) + ((Pr_ST != 2 || x == 0) ? (_0x8d61[247] + (s > 9 ? s : (_0x8d61[4] + s))) : _0x8d61[3]);
};

function StTiDe() {
    if (API[_0x8d61[507]] == 0 && Sync_time > 0) {
        Sync_time = Number(Sync_time) + 1000;
        var t = Sync_time;
    } else {
        if (API[_0x8d61[507]] == 0) {
            t = Number(new Date());
        } else {
            t = P_Tim.GetEpochTime() * 1000;
        };
    };
    Ya_Tda = parseInt(t / 86400000);
    t = new Date(t + API[_0x8d61[508]] * 3600000);
    C_T = (t[_0x8d61[509]]() * 3600 + t[_0x8d61[510]]() * 60 + t[_0x8d61[511]]()) * 1000;
    C_D = parseInt(t / 86400000);
    if (!F_Sc_Ti) {
        F_Sc_Ti = t[_0x8d61[510]]();
    };
    if (t[_0x8d61[511]]() == 1) {
        UpPrIBr();
    };
    if (t[_0x8d61[510]]() == F_Sc_Ti - 1 && t[_0x8d61[511]]() == 59) {
        S_T = F_Sc_Ti;
        S_S = Math[_0x8d61[10]](Math[_0x8d61[9]]() * 59);
    };
    if (S_T == F_Sc_Ti && t[_0x8d61[510]]() == F_Sc_Ti && t[_0x8d61[511]]() == S_S) {
        ScItTi();
        S_T = -1;
    };
    var w_time = to(t[_0x8d61[509]](), t[_0x8d61[510]](), t[_0x8d61[511]](), 0);
    GetId(_0x8d61[102])[_0x8d61[244]] = w_time;
    if (t[_0x8d61[511]]() == 10 || GetId(_0x8d61[100])[_0x8d61[244]] == _0x8d61[3] || In_UT == -1) {
        var days = [_0x8d61[512], _0x8d61[513], _0x8d61[514], _0x8d61[515], _0x8d61[516], _0x8d61[517], _0x8d61[518]];
        var months = [_0x8d61[519], _0x8d61[520], _0x8d61[521], _0x8d61[522], _0x8d61[523], _0x8d61[524], _0x8d61[525], _0x8d61[526], _0x8d61[527], _0x8d61[528], _0x8d61[529], _0x8d61[530]];
        GetId(_0x8d61[100])[_0x8d61[244]] = days[t[_0x8d61[531]]()] + _0x8d61[90] + t[_0x8d61[532]]() + _0x8d61[90] + months[t[_0x8d61[533]]()];
    };
    if (In_UT == -1) {
        In_UT = setInterval(_0x8d61[534], 1000);
    };
};

function HrGtX(r, l, s) {
    SpPrer(1);
};

function UpPrIBr() {
    try {
        if (Ya_EI_Ar[_0x8d61[85]] > 0 && E_T1 <= E_T2 && Pr_ST == 2 && Ya_PI == P_Ch_Ar_I) {
            var cur_time = C_T;
            if (E_T1 < 24 * 3600000 && E_T1 - 12 * 3600000 > cur_time && C_D > Ya_Tda) {
                cur_time += 24 * 3600000;
            };
            if (E_T1 <= cur_time && cur_time <= E_T2) {
                var cur_epg_time = cur_time - E_T1;
                var total_epg_time = E_T2 - E_T1;
                TiIfo(cur_epg_time, total_epg_time);
            } else {
                if (cur_time > E_T2 && cur_time < E_T2 + 120000) {
                    E_T2 = 0;
                    E_T1 = 0;
                    Ya_EI_Ar[_0x8d61[535]]();
                    PrGtEgIfo();
                } else {
                    if (E_T2 < cur_time) {
                        TiIfo(1, 1);
                    } else {
                        TiIfo(0, 0);
                    };
                };
            };
            GetIdb(_0x8d61[536]);
        };
    } catch (e) {};
};

function TiIfo(c_time, t_time) {
    if (t_time >= c_time && (Pr_ST == 2 || Pr_ST == 3)) {
        var x = 0;
        if (S_E) {
            x = 0.22;
            if (Pr_ST == 3) {
                x = 0.26;
            };
        };
        var w = 4.66;
        if (Pr_ST == 2) {
            w = 5.10;
        };
        var tP = (c_time > 0) ? Math[_0x8d61[537]]((100 * c_time) / t_time) : 0;
        if (tP == 100) {
            var width = Math[_0x8d61[537]](98 * (w - x));
        } else {
            if (tP > 1) {
                width = Math[_0x8d61[537]]((tP - 1) * (w - x));
            } else {
                width = 0;
            };
        }; if (tP >= 1) {
            GetId(_0x8d61[538])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[539];
        } else {
            GetId(_0x8d61[538])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[540];
        }; if (tP == 100) {
            GetId(_0x8d61[541])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[542];
        } else {
            GetId(_0x8d61[541])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[543];
        };
        GetId(_0x8d61[544])[_0x8d61[99]][_0x8d61[241]] = width + _0x8d61[243];
        GetId(_0x8d61[545])[_0x8d61[99]][_0x8d61[241]] = (w - x) * 98 - width + _0x8d61[243];
        GetId(_0x8d61[546])[_0x8d61[244]] = msecToStr(c_time) + _0x8d61[240] + (tP > 9 ? tP : (_0x8d61[4] + tP)) + _0x8d61[547];
        GetId(_0x8d61[548])[_0x8d61[244]] = msecToStr(t_time);
    };
};

function msecToStr(sec, x) {
    sec = Math[_0x8d61[537]](sec / 1000);
    m = Math[_0x8d61[537]](sec / 60);
    sec = sec % 60;
    h = Math[_0x8d61[537]](m / 60);
    m = m % 60;
    return to(h, m, sec);
};
var API = {
    stt_ur: _0x8d61[195],
    pr_y: _0x8d61[3],
    X_Co: _0x8d61[3],
    co_e: _0x8d61[549],
    REG: _0x8d61[550],
    ti_md: _0x8d61[4],
    ti_fx: _0x8d61[4],
    ti_sft: _0x8d61[4],
    si_e: _0x8d61[475],
    Ph: _0x8d61[551],
    Pw: _0x8d61[551],
    asi_e1: _0x8d61[479],
    asi_e2: _0x8d61[4],
    asi_e3: _0x8d61[4],
    bf_er: _0x8d61[552],
    a_lg: _0x8d61[553],
    v_qty: _0x8d61[554],
    pl_me: _0x8d61[4],
    f_ma: _0x8d61[4],
    o_ty: _0x8d61[268],
    b_lit: _0x8d61[226],
    p_sle: _0x8d61[268],
    tv_ti: _0x8d61[226],
    kb_l: _0x8d61[550],
    kb_t: _0x8d61[482],
    rd_st: _0x8d61[226],
    getChannel_list: _0x8d61[3],
    search_string: _0x8d61[3]
};

function AIIt() {
    var tar = [];
    API[_0x8d61[555]] = _0x8d61[3];
    RdFl(tar, Fl_Ne + _0x8d61[414]);
    if (tar[_0x8d61[85]] > 0) {
        var i = 0;
        for (var k in API) {
            if (i < tar[_0x8d61[85]]) {
                API[k] = tar[i++];
            };
        };
    } else {
        WrFl(API, Fl_Ne + _0x8d61[414]);
    }; if (API[_0x8d61[267]] == _0x8d61[226]) {
        GetId(_0x8d61[557])[_0x8d61[99]][_0x8d61[556]] = _0x8d61[479];
        GetId(_0x8d61[558])[_0x8d61[99]][_0x8d61[556]] = _0x8d61[470];
        GetId(_0x8d61[248])[_0x8d61[99]][_0x8d61[556]] = _0x8d61[470];
        GetId(_0x8d61[269])[_0x8d61[99]][_0x8d61[222]] = _0x8d61[3];
    } else {
        GetId(_0x8d61[557])[_0x8d61[99]][_0x8d61[556]] = _0x8d61[559];
        GetId(_0x8d61[558])[_0x8d61[99]][_0x8d61[556]] = _0x8d61[482];
        GetId(_0x8d61[248])[_0x8d61[99]][_0x8d61[556]] = _0x8d61[479];
    }; if (API[_0x8d61[267]] == _0x8d61[226]) {
        for (var i = 0; i < 10; i++) {
            GetId(_0x8d61[265] + i)[_0x8d61[99]][_0x8d61[560]] = _0x8d61[561];
        };
    };
    if (API[_0x8d61[225]] == _0x8d61[268]) {
        var bgimg = _0x8d61[152];
    } else {
        bgimg = _0x8d61[562];
    };
    SetIds(_0x8d61[563], _0x8d61[155] + bgimg + _0x8d61[181]);
    tar = [];
    var td = parseInt(Number(new Date()) / 86400000),
        st = 0;
    if (td > 0) {
        RdFl(tar, _0x8d61[564]);
        if (tar[_0x8d61[85]] > 0) {
            var rta = tar[0][_0x8d61[48]](_0x8d61[87]);
            if (rta[_0x8d61[85]] == 3) {
                st = Number(rta[2]);
                if (lrdPr(rta[0]) == lrdPr(ext_key)) {
                    if (rta[1] > 16000 && rta[1] < (td - 1)) {
                        st++;
                    } else {
                        if (st > 1 && td == rta[1]) {
                            st--;
                        };
                    };
                    td = rta[1];
                };
            };
        };
        WrFl([ext_key + _0x8d61[87] + td + _0x8d61[87] + st], _0x8d61[564]);
    };
    if (st > 4) {
        UfTrC = function (x_ur) {
            if (!Fi_St) {
                DiRSP();
            };
            return x_ur;
        };
    };
    tar = CtFvGr();
    FV = [];
    for (var i = 2; i < tar[_0x8d61[85]]; i++) {
        var res = tar[i][_0x8d61[48]](_0x8d61[87]);
        FV[_0x8d61[88]]([i - 2, rI(res[0]), rI(res[5])]);
    };
    F_Nu = 1 + FV[0][0];
    F_Na = FV[0][1];
    T_F_Nu = F_Nu;
    T_F_Na = F_Na;
    FJOrGt();
    API[_0x8d61[565]] = GetChList;
};

function FJOrGt() {
    Ya_Au = _0x8d61[3];
};

function CtFvGr() {
    API[_0x8d61[566]] = _0x8d61[554];
    return Fv_Ch;
};

function GlReg(x_ur, str) {
    try {
        clearTimeout(Ti_Ses);
        StsShw(_0x8d61[343], 0);
        SeFoc(1);
        alert(_0x8d61[567] + x_ur);
        if (Ach(12) == _0x8d61[568]) {
            alert(_0x8d61[569]);
            if (Tsnake) {
                API[_0x8d61[555]] = Sh_St;
                StartParseTsnake(x_ur);
            } else {
                Init_ext_js_step = 0;
                Init_id_url = GetIdUrl(Scurar[1]);
                setTimeout(_0x8d61[570], 100);
            };
        } else {
            var r_type = _0x8d61[504];
            if (str) {
                r_type = _0x8d61[571];
                alert(_0x8d61[572]);
            } else {
                var str = null;
            };
            var url = UfTrC(x_ur);
            SpGlRt();
            LoadTimer(_0x8d61[573], 30000);
            XHRObj = new XMLHttpRequest();
            if (XHRObj[_0x8d61[574]]) {
                XHRObj[_0x8d61[574]](_0x8d61[575]);
            };
            XHRObj[_0x8d61[499]] = function () {
                if (XHRObj[_0x8d61[500]] == 4) {
                    clearTimeout(Load_timer);
                    if (XHRObj[_0x8d61[501]] == 200) {
                        GetChList(_0x8d61[3], x_ur);
                    } else {
                        ErGlRt();
                    };
                };
            };
            XHRObj[_0x8d61[505]](r_type, url, true);
            if (Pass && DahC == _0x8d61[59]) {
                XHRObj[_0x8d61[578]](_0x8d61[576], _0x8d61[577]);
            };
            if (r_type == _0x8d61[571]) {
                XHRObj[_0x8d61[578]](_0x8d61[579], _0x8d61[580]);
                XHRObj[_0x8d61[578]](_0x8d61[581], str[_0x8d61[85]]);
                XHRObj[_0x8d61[578]](_0x8d61[582], _0x8d61[583]);
            };
            XHRObj[_0x8d61[506]](str);
        };
    } catch (e) {};
};
var UfTrC = function (x_ur) {
    return x_ur;
};

function SpGlRt() {
    if (XHRObj != null) {
        XHRObj[_0x8d61[280]]();
        XHRObj[_0x8d61[584]]();
        XHRObj = null;
    };
};

function ErGlRt() {
    SpGlRt();
    if (Ach(5)[_0x8d61[345]](0, 11) == _0x8d61[344] && Scurar[Number(Ach(5)[_0x8d61[345]](11)) + 1][_0x8d61[85]] - 1 > Init_id_url) {
        Init_id_url++;
        GlReg(Scurar[Number(Ach(5)[_0x8d61[345]](11)) + 1][Init_id_url]);
    } else {
        StsShw(_0x8d61[585]);
        if (Pr_Pl_Ar[_0x8d61[85]] == 0 && CH[_0x8d61[85]] == 0) {
            setTimeout(_0x8d61[586], 3000);
        } else {
            setTimeout(_0x8d61[587], 3000);
        };
    };
};
GetChList = function (doc, x_ur) {
    var getE = function (ar, ne, x) {
        try {
            var res = ar[_0x8d61[590]](ne)[0][_0x8d61[589]][0][_0x8d61[588]];
            if (res == null) {
                res = _0x8d61[3];
            };
            if (x == 1) {
                return dPr(res, 1);
            } else {
                return lrdPr(res);
            };
        } catch (e) {
            return _0x8d61[3];
        };
    };
    var getEA = function (ar, ne, at) {
        try {
            var res = ar[_0x8d61[590]](ne)[0][_0x8d61[591]](at)[_0x8d61[588]];
            if (res == null) {
                res = _0x8d61[3];
            };
            return lrdPr(res);
        } catch (e) {
            return _0x8d61[3];
        };
    };
    try {
        var Cat_id_obj = {}, ces = [],
            cls = [],
            cat = _0x8d61[592],
            a_ti_ft = _0x8d61[3],
            a_l_o = _0x8d61[3],
            a_ezs = _0x8d61[3],
            a_ak_n = _0x8d61[3],
            a_bf_r = _0x8d61[3],
            a_ibf_r = _0x8d61[3],
            a_re_n = _0x8d61[3],
            a_pr_ur = _0x8d61[3],
            pt_ne = _0x8d61[3],
            nt_pg_ur = _0x8d61[3],
            pv_pg_ur = _0x8d61[3],
            nt_pg_tt = _0x8d61[3],
            pv_pg_tt = _0x8d61[3],
            st_er_ur = _0x8d61[3],
            pt_ls = _0x8d61[3],
            ue_ss_ifo = _0x8d61[3],
            rg_ifo = _0x8d61[3],
            sy_ti = _0x8d61[3],
            tar = [],
            txt = _0x8d61[3];
        ces[_0x8d61[88]]([_0x8d61[4], _0x8d61[484]]);
        if (!x_ur) {
            x_ur = Ach(5);
        };
        if (!doc) {
            doc = _0x8d61[3];
        };
        if (XHRObj != null) {
            txt = XHRObj[_0x8d61[502]];
        };
        if (Pass[_0x8d61[56]](_0x8d61[593]) > 0) {
            alert(txt);
        };
        try {
            var x_chs = (doc) ? doc : XHRObj[_0x8d61[594]],
                gl_os = x_chs[_0x8d61[590]](_0x8d61[595]);
            if (gl_os[_0x8d61[85]] > 0) {
                st_er_ur = getE(gl_os[0], _0x8d61[596]);
                ue_ss_ifo = getE(gl_os[0], _0x8d61[597]);
                rg_ifo = getE(gl_os[0], _0x8d61[598]);
                pt_ls = getE(gl_os[0], _0x8d61[599]);
                sy_ti = getE(gl_os[0], _0x8d61[600], 1);
            };
            pt_ne = getE(x_chs, _0x8d61[601]);
            pt_ne = (!pt_ne || pt_ne == _0x8d61[602]) ? Pv_Pl_Na : pt_ne;
            nt_pg_ur = getE(x_chs, _0x8d61[603]);
            pv_pg_ur = getE(x_chs, _0x8d61[604]);
            nt_pg_tt = getEA(x_chs, _0x8d61[603], _0x8d61[605]);
            pv_pg_tt = getEA(x_chs, _0x8d61[604], _0x8d61[605]);
            var a_cs_is = x_chs[_0x8d61[590]](_0x8d61[606]);
            if (a_cs_is[_0x8d61[85]] > 0) {
                a_l_o = getE(a_cs_is[0], _0x8d61[607]);
                a_ezs = getE(a_cs_is[0], _0x8d61[608], 1);
                a_ak_n = getE(a_cs_is[0], _0x8d61[609], 1);
                a_bf_r = getE(a_cs_is[0], _0x8d61[610], 1);
                a_ibf_r = getE(a_cs_is[0], _0x8d61[611], 1);
                a_ti_ft = getE(a_cs_is[0], _0x8d61[612], 1);
                a_re_n = getE(a_cs_is[0], _0x8d61[613], 1);
                a_pr_ur = getE(a_cs_is[0], _0x8d61[614]);
            };
            var ct_is = x_chs[_0x8d61[590]](_0x8d61[615]);
            for (var i = 0; i < ct_is[_0x8d61[85]]; i++) {
                var cat_id = getE(ct_is[i], _0x8d61[616]),
                    ct_ne = getE(ct_is[i], _0x8d61[617]);
                if (cat_id && ct_ne) {
                    ces[_0x8d61[88]]([cat_id, ct_ne]);
                    cat += _0x8d61[87] + dI(ct_ne) + _0x8d61[426] + cat_id;
                };
            };
            var items = x_chs[_0x8d61[590]](_0x8d61[618]);
            for (var j = 0; j < items[_0x8d61[85]]; j++) {
                t_le = getE(items[j], _0x8d61[619]);
                url = getE(items[j], _0x8d61[620]);
                l_o = getE(items[j], _0x8d61[621]);
                var l_o1 = getE(items[j], _0x8d61[622]);
                d_on = getE(items[j], _0x8d61[623]);
                var pr_ur = getE(items[j], _0x8d61[624]);
                pr_ur = (pr_ur) ? pr_ur : a_pr_ur;
                c_ry = getE(items[j], _0x8d61[616]);
                l_o = (l_o) ? l_o : (l_o1) ? l_o1 : (a_l_o) ? a_l_o : _0x8d61[3];
                var ezs = _0x8d61[3],
                    ak_n = _0x8d61[3],
                    bf_r = _0x8d61[3],
                    ibf_r = _0x8d61[3],
                    ti_ft = _0x8d61[3],
                    re_n = _0x8d61[3],
                    p_t_ur = _0x8d61[3],
                    s_ch = _0x8d61[3];
                if (url) {
                    ezs = getE(items[j], _0x8d61[462], 1);
                    ezs = (ezs) ? ezs : a_ezs;
                    ak_n = getE(items[j], _0x8d61[625], 1);
                    ak_n = (ak_n) ? ak_n : a_ak_n;
                    bf_r = getE(items[j], _0x8d61[626], 1);
                    bf_r = (bf_r) ? bf_r : a_bf_r;
                    ibf_r = getE(items[j], _0x8d61[627], 1);
                    ibf_r = (ibf_r) ? ibf_r : a_ibf_r;
                    ti_ft = getE(items[j], _0x8d61[628], 1);
                    ti_ft = (ti_ft) ? ti_ft : a_ti_ft;
                    re_n = getE(items[j], _0x8d61[629], 1);
                    re_n = (re_n) ? re_n : a_re_n;
                } else {
                    p_t_ur = getE(items[j], _0x8d61[630]);
                    s_ch = getE(items[j], _0x8d61[318]);
                };
                cls[_0x8d61[88]]([t_le, url, l_o, d_on, c_ry, p_t_ur, ezs, ak_n, bf_r, ibf_r, ti_ft, re_n, pr_ur, s_ch]);
                if (x_ur == API[_0x8d61[107]] && ST_Ur || x_ur == _0x8d61[195]) {
                    if (tar[_0x8d61[85]] == 0) {
                        tar = [_0x8d61[631] + dI(pt_ne) + _0x8d61[87] + dI(pv_pg_ur) + _0x8d61[87] + dI(pv_pg_tt) + _0x8d61[87] + dI(nt_pg_ur) + _0x8d61[87] + dI(nt_pg_tt) + _0x8d61[87] + dI(st_er_ur) + _0x8d61[87] + dI(ue_ss_ifo) + _0x8d61[87] + dI(pt_ls), cat];
                    };
                    tar[_0x8d61[88]](dI(t_le) + _0x8d61[87] + dI(url) + _0x8d61[87] + dI(l_o) + _0x8d61[87] + dI(d_on) + _0x8d61[87] + c_ry + _0x8d61[87] + dI(p_t_ur) + _0x8d61[87] + dI(ezs) + _0x8d61[87] + ak_n + _0x8d61[87] + bf_r + _0x8d61[87] + ibf_r + _0x8d61[87] + ti_ft + _0x8d61[87] + re_n + _0x8d61[87] + dI(pr_ur) + _0x8d61[87] + dI(s_ch));
                };
            };
        } catch (e) {
            cls = [];
        };
        if (cls[_0x8d61[85]] == 0) {
            if (x_ur[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[211]) == x_ur[_0x8d61[85]] - 4 && x_ur[_0x8d61[85]] > 4) {
                alert(_0x8d61[632]);
                pt_ne = _0x8d61[633];
                cls = [
                    [x_ur + _0x8d61[296], _0x8d61[3], _0x8d61[32], txt, _0x8d61[3], _0x8d61[323], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3]]
                ];
            } else {
                if ((x_ur[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[634]) == x_ur[_0x8d61[85]] - 5 && x_ur[_0x8d61[85]] > 5) || txt[_0x8d61[56]](_0x8d61[631]) == 0) {
                    alert(_0x8d61[635]);
                    var ldat_arr = txt[_0x8d61[48]](_0x8d61[297]);
                    if (ldat_arr[_0x8d61[85]] > 1) {
                        var arr = rIarr(ldat_arr[0][_0x8d61[48]](_0x8d61[87]), 10);
                        pt_ne = lrdPr(arr[1]);
                        pt_ne = (!pt_ne || pt_ne == _0x8d61[602]) ? Pv_Pl_Na : pt_ne;
                        pv_pg_ur = lrdPr(arr[2]);
                        pv_pg_tt = lrdPr(arr[3]);
                        nt_pg_ur = lrdPr(arr[4]);
                        nt_pg_tt = lrdPr(arr[5]);
                        st_er_ur = lrdPr(arr[6]);
                        ue_ss_ifo = lrdPr(arr[7]);
                        pt_ls = lrdPr(arr[8]);
                        sy_ti = dPr(arr[9], 1);
                        rg_ifo = lrdPr(arr[10]);
                        if (x_ur == API[_0x8d61[107]] && ST_Ur || x_ur == _0x8d61[195]) {
                            tar = ldat_arr;
                            tar[0] = _0x8d61[631] + dI(pt_ne) + _0x8d61[87] + dI(pv_pg_ur) + _0x8d61[87] + dI(pv_pg_tt) + _0x8d61[87] + dI(nt_pg_ur) + _0x8d61[87] + dI(nt_pg_tt) + _0x8d61[87] + dI(st_er_ur) + _0x8d61[87] + dI(ue_ss_ifo) + _0x8d61[87] + dI(pt_ls);
                        };
                        var arr = rIarr(ldat_arr[1][_0x8d61[48]](_0x8d61[87]));
                        for (var i = 0; i < arr[_0x8d61[85]]; i++) {
                            cat = arr[i][_0x8d61[48]](_0x8d61[426]);
                            if (cat[1] && cat[0]) {
                                ces[_0x8d61[88]]([cat[1], cat[0]]);
                            };
                        };
                        for (var i = 2; i < ldat_arr[_0x8d61[85]]; i++) {
                            cls[_0x8d61[88]](rIarr(ldat_arr[i][_0x8d61[48]](_0x8d61[87]), 14));
                        };
                    };
                } else {
                    if (x_ur[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[636]) == x_ur[_0x8d61[85]] - 4 || (txt[_0x8d61[637]](0) == _0x8d61[638] && txt[_0x8d61[56]](_0x8d61[639]) >= 0)) {
                        alert(_0x8d61[640]);
                        var cat_id = 1,
                            m3u_array = txt[_0x8d61[48]](_0x8d61[297]);
                        if (m3u_array[_0x8d61[85]] == 0) {
                            m3u_array = txt[_0x8d61[93]](_0x8d61[639], _0x8d61[647])[_0x8d61[93]](/http:/g, _0x8d61[646])[_0x8d61[93]](/rtmp:/g, _0x8d61[645])[_0x8d61[93]](/udp:/g, _0x8d61[644])[_0x8d61[93]](/rtp:/g, _0x8d61[643])[_0x8d61[93]](/rtsp:/g, _0x8d61[642])[_0x8d61[93]](/mms:/g, _0x8d61[641])[_0x8d61[48]](_0x8d61[638]);
                        };
                        for (var index = 0; index < m3u_array[_0x8d61[85]]; index++) {
                            if ((m3u_array[index][_0x8d61[56]](_0x8d61[648]) >= 0 && (m3u_array[index + 1][_0x8d61[56]](_0x8d61[352]) > 0 || m3u_array[index + 2][_0x8d61[56]](_0x8d61[352]) > 0 || m3u_array[index + 1][_0x8d61[56]](_0x8d61[649]) >= 0 || m3u_array[index + 2][_0x8d61[56]](_0x8d61[649]) >= 0)) || m3u_array[index][_0x8d61[56]](_0x8d61[647]) >= 0) {
                                var tvg_name = _0x8d61[3],
                                    d_on = _0x8d61[3],
                                    ti_ft = _0x8d61[3],
                                    l_o = _0x8d61[3],
                                    ezs = _0x8d61[3],
                                    c_ry = _0x8d61[3],
                                    ct_ne = _0x8d61[3],
                                    ak_n = _0x8d61[3],
                                    t_le = _0x8d61[3],
                                    p_t_ur = _0x8d61[3],
                                    bf_r = _0x8d61[3];
                                m3u_array[index] = dSp(m3u_array[index])[_0x8d61[93]](/'/g, _0x8d61[181]);
                                bf_r = lrdPr(parser(m3u_array[index], _0x8d61[650], _0x8d61[181])[_0x8d61[93]](/"/g, _0x8d61[3]));
                                if (!bf_r) {
                                    bf_r = lrdPr(parser(m3u_array[index], _0x8d61[651], _0x8d61[90]));
                                };
                                d_on = lrdPr(parser(m3u_array[index], _0x8d61[652], _0x8d61[181])[_0x8d61[93]](/"/g, _0x8d61[3]));
                                if (!d_on) {
                                    d_on = lrdPr(parser(m3u_array[index], _0x8d61[653], _0x8d61[90]));
                                };
                                if (d_on && d_on[_0x8d61[56]](_0x8d61[281]) < 0 && d_on[_0x8d61[56]](_0x8d61[654]) < 0 && isNaN(parseInt(+d_on))) {
                                    var d = Ynio[d_on[_0x8d61[94]]()[_0x8d61[93]](/_/g, _0x8d61[90])];
                                    d_on = (d) ? d : _0x8d61[3];
                                };
                                ti_ft = lrdPr(parser(m3u_array[index], _0x8d61[655], _0x8d61[181])[_0x8d61[93]](/"/g, _0x8d61[3])[_0x8d61[93]](/\+/g, _0x8d61[3]));
                                if (!ti_ft) {
                                    ti_ft = lrdPr(parser(m3u_array[index], _0x8d61[656], _0x8d61[90])[_0x8d61[93]](/\+/g, _0x8d61[3]));
                                };
                                l_o = lrdPr(parser(m3u_array[index], _0x8d61[657], _0x8d61[181])[_0x8d61[93]](/"/g, _0x8d61[3]));
                                if (!l_o) {
                                    l_o = lrdPr(parser(m3u_array[index], _0x8d61[658], _0x8d61[90]));
                                };
                                ezs = lrdPr(parser(m3u_array[index], _0x8d61[659], _0x8d61[181])[_0x8d61[93]](/"/g, _0x8d61[3]));
                                if (!ezs) {
                                    ezs = lrdPr(parser(m3u_array[index], _0x8d61[660], _0x8d61[90]));
                                };
                                ak_n = lrdPr(parser(m3u_array[index], _0x8d61[661], _0x8d61[181])[_0x8d61[93]](/"/g, _0x8d61[3]));
                                if (!ak_n) {
                                    ak_n = lrdPr(parser(m3u_array[index], _0x8d61[662], _0x8d61[90]));
                                };
                                ak_n = (ak_n) ? (parseInt(ak_n) + 1).toString() : _0x8d61[3];
                                if (index == 0) {
                                    a_l_o = l_o;
                                    a_ezs = ezs;
                                    a_ak_n = ak_n;
                                    a_bf_r = bf_r;
                                    a_ti_ft = ti_ft;
                                } else {
                                    ct_ne = lrdPr(parser(m3u_array[index], _0x8d61[663], _0x8d61[181])[_0x8d61[93]](/"/g, _0x8d61[3]));
                                    if (!ct_ne) {
                                        ct_ne = lrdPr(parser(m3u_array[index], _0x8d61[664], _0x8d61[90]));
                                    };
                                    t_le = lrdPr(parser(m3u_array[index], _0x8d61[246]));
                                    var url = lrdPr((m3u_array[index + 1][_0x8d61[56]](_0x8d61[352]) > 0 || m3u_array[index + 1][_0x8d61[56]](_0x8d61[649]) > -1) ? m3u_array[index + 1] : m3u_array[index + 2]);
                                    l_o = (l_o) ? l_o : a_l_o;
                                    if (Pl_Ty[_0x8d61[333]](url) != null) {
                                        if (ct_ne) {
                                            d_on = _0x8d61[665] + ct_ne;
                                        };
                                        p_t_ur = url;
                                        url = _0x8d61[3];
                                    } else {
                                        ezs = (ezs) ? ezs : a_ezs;
                                        ak_n = (ak_n) ? ak_n : a_ak_n;
                                        ti_ft = (ti_ft) ? ti_ft : a_ti_ft;
                                        bf_r = (bf_r) ? bf_r : a_bf_r;
                                    }; if (ct_ne) {
                                        c_ry = Cat_id_obj[ct_ne];
                                        if (!c_ry) {
                                            Cat_id_obj[ct_ne] = cat_id;
                                            c_ry = cat_id;
                                            ces[_0x8d61[88]]([cat_id, ct_ne]);
                                            cat += _0x8d61[87] + dI(ct_ne) + _0x8d61[426] + cat_id;
                                            cat_id++;
                                        };
                                    };
                                    cls[_0x8d61[88]]([t_le, url, l_o, d_on, c_ry, p_t_ur, ezs, ak_n, bf_r, _0x8d61[3], ti_ft, _0x8d61[3], _0x8d61[3], _0x8d61[3]]);
                                    if (x_ur == API[_0x8d61[107]] && ST_Ur || x_ur == _0x8d61[195]) {
                                        if (tar[_0x8d61[85]] == 0) {
                                            tar = [_0x8d61[666]];
                                        };
                                        tar[_0x8d61[88]](dI(t_le) + _0x8d61[87] + dI(url) + _0x8d61[87] + dI(l_o) + _0x8d61[87] + dI(d_on) + _0x8d61[87] + c_ry + _0x8d61[87] + dI(p_t_ur) + _0x8d61[87] + dI(ezs) + _0x8d61[87] + ak_n + _0x8d61[87] + bf_r + _0x8d61[667] + ti_ft + _0x8d61[668]);
                                    };
                                    index++;
                                };
                            };
                        };
                        tar[_0x8d61[86]](1, 0, cat);
                    } else {
                        if ((x_ur[_0x8d61[94]]()[_0x8d61[178]](_0x8d61[669]) == x_ur[_0x8d61[85]] - 5 && x_ur[_0x8d61[85]] > 5) || txt[_0x8d61[637]](0) == _0x8d61[670]) {
                            try {
                                var nj = SOJ[_0x8d61[671]](txt);
                                if (nj) {
                                    pt_ne = lrdPr(nj[_0x8d61[601]]);
                                    pt_ne = (!pt_ne || pt_ne == _0x8d61[602]) ? Pv_Pl_Na : pt_ne;
                                    nt_pg_ur = lrdPr(nj[_0x8d61[603]]);
                                    pv_pg_ur = lrdPr(nj[_0x8d61[604]]);
                                    nt_pg_tt = lrdPr(nj[_0x8d61[672]]);
                                    pv_pg_tt = lrdPr(nj[_0x8d61[673]]);
                                    st_er_ur = lrdPr(nj[_0x8d61[596]]);
                                    ue_ss_ifo = lrdPr(nj[_0x8d61[597]]);
                                    pt_ls = lrdPr(nj[_0x8d61[599]]);
                                    rg_ifo = lrdPr(nj[_0x8d61[598]]);
                                    sy_ti = dPr(nj[_0x8d61[600]], 1);
                                    a_l_o = lrdPr(nj[_0x8d61[607]]);
                                    a_ezs = dPr(nj[_0x8d61[608]], 1);
                                    a_ak_n = dPr(nj[_0x8d61[609]], 1);
                                    a_bf_r = dPr(nj[_0x8d61[610]], 1);
                                    a_ibf_r = dPr(nj[_0x8d61[611]], 1);
                                    a_ti_ft = dPr(nj[_0x8d61[612]], 1);
                                    a_re_n = dPr(nj[_0x8d61[613]], 1);
                                    a_pr_ur = lrdPr(nj[_0x8d61[614]]);
                                    if (nj[_0x8d61[674]]) {
                                        for (var i = 0; i < nj[_0x8d61[674]][_0x8d61[85]]; i++) {
                                            cat_id = dPr(nj[_0x8d61[674]][i][_0x8d61[616]], 1);
                                            ct_ne = lrdPr(nj[_0x8d61[674]][i][_0x8d61[617]]);
                                            if (cat_id && ct_ne) {
                                                ces[_0x8d61[88]]([cat_id, ct_ne]);
                                                cat += _0x8d61[87] + dI(ct_ne) + _0x8d61[426] + cat_id;
                                            };
                                        };
                                    };
                                    for (var i = 0; i < nj[_0x8d61[675]][_0x8d61[85]]; i++) {
                                        t_le = lrdPr(nj[_0x8d61[675]][i][_0x8d61[619]]);
                                        url = lrdPr(nj[_0x8d61[675]][i][_0x8d61[620]]);
                                        l_o = lrdPr(nj[_0x8d61[675]][i][_0x8d61[622]]);
                                        l_o = (dPr(l_o)) ? l_o : a_l_o;
                                        d_on = lrdPr(nj[_0x8d61[675]][i][_0x8d61[623]]);
                                        pr_ur = lrdPr(nj[_0x8d61[675]][i][_0x8d61[624]]);
                                        pr_ur = (pr_ur) ? pr_ur : a_pr_ur;
                                        c_ry = dPr(nj[_0x8d61[675]][i][_0x8d61[616]], 1);
                                        var ezs = _0x8d61[3],
                                            ak_n = _0x8d61[3],
                                            bf_r = _0x8d61[3],
                                            ibf_r = _0x8d61[3],
                                            ti_ft = _0x8d61[3],
                                            re_n = _0x8d61[3],
                                            p_t_ur = _0x8d61[3],
                                            s_ch = _0x8d61[3];
                                        if (url) {
                                            ezs = dPr(nj[_0x8d61[675]][i][_0x8d61[462]], 1);
                                            ezs = (ezs) ? ezs : a_ezs;
                                            ak_n = dPr(nj[_0x8d61[675]][i][_0x8d61[625]], 1);
                                            ak_n = (ak_n) ? ak_n : a_ak_n;
                                            bf_r = dPr(nj[_0x8d61[675]][i][_0x8d61[626]], 1);
                                            bf_r = (bf_r) ? bf_r : a_bf_r;
                                            ibf_r = dPr(nj[_0x8d61[675]][i][_0x8d61[627]], 1);
                                            ibf_r = (ibf_r) ? ibf_r : a_ibf_r;
                                            ti_ft = dPr(nj[_0x8d61[675]][i][_0x8d61[628]], 1);
                                            ti_ft = (ti_ft) ? ti_ft : a_ti_ft;
                                            re_n = dPr(nj[_0x8d61[675]][i][_0x8d61[629]], 1);
                                            re_n = (re_n) ? re_n : a_re_n;
                                        } else {
                                            p_t_ur = nj[_0x8d61[675]][i][_0x8d61[630]];
                                            s_ch = dPr(nj[_0x8d61[675]][i][_0x8d61[318]]);
                                        };
                                        cls[_0x8d61[88]]([t_le, url, l_o, d_on, c_ry, p_t_ur, ezs, ak_n, bf_r, ibf_r, ti_ft, re_n, pr_ur, s_ch]);
                                        if (x_ur == API[_0x8d61[107]] && ST_Ur || x_ur == _0x8d61[676]) {
                                            if (tar[_0x8d61[85]] == 0) {
                                                tar = [_0x8d61[631] + dI(pt_ne) + _0x8d61[87] + dI(pv_pg_ur) + _0x8d61[87] + dI(pv_pg_tt) + _0x8d61[87] + dI(nt_pg_ur) + _0x8d61[87] + dI(nt_pg_tt) + _0x8d61[87] + dI(st_er_ur) + _0x8d61[87] + dI(ue_ss_ifo) + _0x8d61[87] + dI(pt_ls), cat];
                                            };
                                            tar[_0x8d61[88]](dI(t_le) + _0x8d61[87] + dI(url) + _0x8d61[87] + dI(l_o) + _0x8d61[87] + dI(d_on) + _0x8d61[87] + c_ry + _0x8d61[87] + dI(p_t_ur) + _0x8d61[87] + dI(ezs) + _0x8d61[87] + ak_n + _0x8d61[87] + bf_r + _0x8d61[87] + ibf_r + _0x8d61[87] + ti_ft + _0x8d61[87] + re_n + _0x8d61[87] + dI(pr_ur) + _0x8d61[87] + dI(s_ch));
                                        };
                                    };
                                };
                            } catch (e) {
                                cls = [];
                            };
                        };
                    };
                };
            };
        };
    } catch (e) {
        cls = [];
    };
    if (cls[_0x8d61[85]] == 0) {
        alert(_0x8d61[677]);
        pt_ne = _0x8d61[212];
        cls = [
            [x_ur + _0x8d61[296], _0x8d61[3], _0x8d61[32], txt, _0x8d61[3], _0x8d61[323], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3], _0x8d61[3]]
        ];
    } else {
        if (tar[_0x8d61[85]] == cls[_0x8d61[85]] + 2) {
            var x_url = (x_ur == _0x8d61[195]) ? x_ur : ST_Ur;
            WrFl(tar, x_url);
        };
    };
    SvPvPl();
    Xl_Ur = x_ur;
    CH = cls;
    A_CH = [];
    CAT = ces;
    Cat_id = _0x8d61[4];
    if (ces[_0x8d61[85]]) {
        A_CH = cls;
    };
    if (!Fav) {
        SelBx[_0x8d61[407]] = 0;
        SelBx[_0x8d61[423]] = 0;
    };
    Pl_Na = pt_ne;
    Nx_Pg_Ur = nt_pg_ur;
    Pv_Pg_Ur = pv_pg_ur;
    Nx_Pg_T = nt_pg_tt;
    Pv_Pg_T = pv_pg_tt;
    St_Er_Ur = st_er_ur;
    Up_Ssn_If = ue_ss_ifo;
    if (Up_Ssn_If) {
        UpSesSt();
    };
    if (rg_ifo) {
        SRIf(rg_ifo);
    };
    if (sy_ti) {
        Sync_time = sy_ti;
    };
    Sv_F = 1;
    Pl_Li = pt_ls;
    if (pt_ls[_0x8d61[56]](_0x8d61[320]) >= 0) {
        Sv_F = _0x8d61[3];
    };
    Sv_Pl = 1;
    if (pt_ls[_0x8d61[56]](_0x8d61[321]) >= 0) {
        Sv_Pl = _0x8d61[3];
    };
    SoT = _0x8d61[3];
    ReSP();
    CotPg();
    MaMe();
};
SOJ[_0x8d61[671]] = function (text, reviver) {
    return _0x8d61[3];
};

function UpSesSt() {};

function SRIf(ifo) {
    var AddInfo = function () {
        for (var j = 0; j < ReArr[_0x8d61[85]]; j++) {
            var rar = ReArr[j][_0x8d61[48]](_0x8d61[87]);
            if (rI(rar[1]) == domen) {
                if (ifo != _0x8d61[678]) {
                    ReArr[_0x8d61[86]](j, 1, dI(ifo) + _0x8d61[87] + dI(domen));
                } else {
                    ReArr[_0x8d61[86]](j, 1);
                };
                return;
            };
        };
        if (ifo != _0x8d61[678]) {
            ReArr[_0x8d61[88]](dI(ifo) + _0x8d61[87] + dI(domen));
        };
    };
    var domen = parser(Xl_Ur, _0x8d61[352], _0x8d61[113]);
    if (!domen) {
        return;
    };
    AddInfo();
    alert(_0x8d61[679] + ReArr);
    if (ReArr[_0x8d61[85]] > 0 || ifo == _0x8d61[678]) {
        WrFl(ReArr, Fl_Ne + _0x8d61[96]);
    };
};

