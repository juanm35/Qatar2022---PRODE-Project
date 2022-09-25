// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@##B$Q$$90Q#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@#BWcui}Y~(~vT!^rvbOB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@#du}v=,---,U]TY}cq}*|cVO#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@BXkjUY>^x=\|x}hyjwTIVyLz}Ly#@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
###@@@@#h}jmv]}:(T^>;=>\]|\v)rx)r:)}TH3OQ#@@@@@@@@@@@@@@@@@@@@@@@08B0QQQ8##@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##@##
######QxuHK)<-^"~:,'`'`:rixVwczuVTcVyuy*=>i8@@@@@@@@@@@@@@@@@@@##BdWMdD$Eg0Q8B##@@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@#####
######*vGKL!Yu!!:.'_^\~:*~xxIP}TuVLT^Y}yVc|~TQ@@@@@@@@@@@@@@#B88g88888QBB#BBB8QBBB##@@@@@@@@@@@@@@@@@@@@@@@##@##########
#####$xVw:==IXi`..'_=!:.._<vjTky3sLy)*uVwu^xTiT#@@@@@@@@@@##QgQdKwV}TwGEQQB#######BBB##@@@@@@@@@@@@@@@@@#@##############
#####3}aixrxVT|<~*!*~||**:>*vCvy$$g88$099GY^!xxu#@@@@@@@@@#@gKL**^^^r|vLyHR8QB######BB8Q#@@@@@###@####################BB
#####$y<)uv*|~Lhmyx!"_!)uo-~<r}=cG600RR0$gggEb3yK@@@@@@@@@d}*^<^^<<<^^*)x}oZQ##########QQQ##########################BBQQ
BBB#BQ__xrrr)(K5HV}^.~ -!*|_r_!:.VM5MMOREEDg$0Q0UD@@@@@@QGrYuL|*^**r|xvvvxVbQB#####B###BBgQ#######################BQQ0d5
QQQQQw:x`_:!Xk}vVho\xr:`_!;,!^!,-:hIIIsZWOEbOO9$Qe8@#@@#M}}C3dMUuxvL}T}uIM6DgQBBB##BB####B8Q####################BBQ$Mi<!
9d6D$^w}` !PZ)- .)xxyX*:.:!^!~|!-,=)}vv}V3GWmIK3hHP##RuviVkXZyuXIIV}}}}V5OD0$8QBB####B##BBgQB###BQMP0QBBB#BBQ8QQ$6Zqz`  
(~^LL*ju*_kx~_`  LVuyVu=~'~>(^<Y|_~~v*^]TVvyyMOGxTu5v|xucLvLcyu}iTyVuuuVIdD0g8QBB##########0D0Q$R}  *Z6EgBQ8$Dg$D9d5eTxx
     >VT}KL. `,=<}}icya3^~.*xv*~)!=-:~.x(|=,=rzPYaVVmHIyjur*^;;~~rxLiL}chZ6RD$QBBBBB#######dOO0d5Kv|IbDD00RRRddG3mXzwwCw
x>==\uh]KK}, !TV3IkPGeKZ3!r`!=*<;x<)C}<v~x)=_|rvrkVwIBQdeL)rr(()\xLLixiuhWOORD$00QBB##@###B$RdObZZMGGH3esKKKKsUkuuVyyzoX
GPG5dPZP3y*_=uyVyGdDZZOOdI~*!L}u]^xYuiccY)*_!!]r~}xY55VLLTucyyyywjXXoCVuyXKhCVUhaUWB####BB8$MMZZMG3KsIjkVVyjeKa3mXzzjIhh
6O9RROHeWCy"rVc}3KmZb3ZMW5dakyyT}}Cyyuxrvx*::(_i|}}YjMUCVVjIUhhs35ZddbMPXyy3a6mVUOCD#BB##B6ddddddbGejwVuTuVyXKWORRdGmIUs
$DDDOdMGOK|xvTiTjhKwCjsGPPmP3ZKIVyVvLuyT}<rTiux!<vYVa86KjXIjIIohaPWbOR6ZyLV9MMj]uys###QB#gZE$8Q80RdZKV}xxTcwe5O$gg$$gEZ3
8$$$RZqGZZvVv]cv|CP}yomPKeCKMWPjHur)xkTxiVcjc}uz=LTwPRM5H3hIooXhmKKGdEOWyYYTT}VVXd#@@#BQgOD8QQQQQQ$DdHu|rLyeME$gg$$E$$g$
8g88$O5GMR}v|^r]iv}CVzKmXPKaOOqeTv=*ickXyVjhyX}Vv)kzd009M3KsePGWZddbORbGUwwVVzh5Q##@@#RZR$88888$gQ88g0ZyYVPO000000RdRD$$
g$$gg$ObZROVr^rTwkj0MesVMdGGZKoV}vr=!~vL|r)xr}}XwYVX888gEdbZO9EEDDE009bMMd9OGyyH$QBQ0PM0$000$$$E$8Qg$$EM3dqK5dO66OM3WddO
6Z33MZd6MZDDhr)iVCuouij9M8QQQQEOjr-''*v**_:r_.-|CyTGQQQQg$$000$00$$g$dMG3PddeTYyWdqKIZ5kyTTyKd9O0888gGvC:!xvhMMMGHz]*<r*
$6Pyr]c=xTV08Kv}Vuu5uG5E$9BBBRV)r*\v. -r\iisw}r*\kVW6$g$$$$$$ROddddZGPehUmsjVYxLVUjXsao]isH3MRRd0g$0$OM6WqMdZykx=~*'    
88gDR0g0$gg8Q8DTLcVVo5W8Q$08zvVkCu}x|*:xV*LvcCX3sdd$$g88$g00ZqGaUmsIoojykyVVc}x]VOgDZ5ZE8$8$$8DMD8D0gE$9ddkK) `,  ,```-_
ZqITYVd$0QQgQ8QQPT}ccHPbQ0y|iowuLT}xux^^vkMQB#####QDdZPZ8B##B$ZohsheIjyVcVVcu}xvDB###BQOdGMg08DGR800$O0dK5Y}v>Ty}uV=vcz3
v\rr))(yR888QgQQDObITI3mZXycLvxcL]r~xKE$GcLVsGZQ#Oj|Tyz}XqM0#$GPdZmXzyuTVVyVu}xLd#@#@##PXQaQ8gg398888g88DE6qxjERZdO}hE0$
vvvvv||)hB####BBg$BBB$0qyisxyji*X5X*,]V~::<(}vVD##BQ$$06ZGgQ##ZLxI5UyuuyCyuuVcokeP]bQB##QdzHZ08GRBBBQQQQQQQQ8888EEgmPg8Q
vxiYTu}x}QB#####g$#####QVVvcK*i3QDoT:`:v=`=)o8##################BRZITcykkwcTjZPaXM`_=~<)YePyTz8MOBBBBBBBQBQQQQQQQQQMGQQQ
dKK$BBRj)u8#####gg#####0|(}c]3dZ6Zzuu^:wd$BBBBBB####BBgdEPZ5E#####BBQZzzyVcjPKZaos!=...:~~^r*r}zWBBBBBBBBBBBBBBBQBB9MQBB
gI\IdGux(yB#####g8#####mrv]vGavcCKPRVu-]d0gQ$bb0QB#Zx)VmhKwU]I9#ZVTTyIZDayzju\VXc=,:.,!``-.'._:::~vTKZgBBBBBBBBBBBB0dQBB
kT)r]Yxv}d######8Q#####Bkr.rLTLxuOBBZy)!Ljv::::"!dBObsX6MbOMZdB##B$dj}Lj9dCx|xXx` ',_)]v*~~_``.---__,__!ijQBBB#BBBB8DBBB
3PXuuKkc9#######QB######Z! '~xVX$0g8dX}!`~L^^^,=mQBB##################gRMOM(jy,    -:^}L)vv*` ```   -,,,--iBBBBBBBBBBBBB
6QQEPPsdQB##BBBBB######Qbu, _id$Dd$g$MC\*`!v)uqE$QQBB####BQD80gQ######BBB##gL_```` ,~!r}vrv"`````````.--_-'(8###########
QQ88ZPb6Q0O08$gg$$8#@@@gMyV< =KZMa3Z90ZmTr>XMDg$06R088dI\LKIoayyjoB#dcvVocKGQEx-```~^!:*r|).`.``____-'.__--'_M#####QBBQQ
ED06mq5r,xsd8g$RD808##BdmVMI`*cwv<}k0QgMjr-x3WjuT}cPd5v=<!*3TUacUq#@#gGuzVcyLzQQx.-;r=:::!~.``'!!:=~::__::::.,x##8VmQQBB
BQQQ$ZuT-;:!!==^rvXOQbVhUmQ< -rxu*Ld8g8RKu='r|:,-._uO0$EE$DQBB###@@@@@@@@#Q05GOBev<~r*;:,!<-..!r~^>!::!_-::!_:,}Q6uqBBBB
Q80d3VoI:~!,~*",:=~TZdwwzQ3]-__)xWdZO8QQEzv~'r)=_*j6E08QBB##############B########8or!<)*^*x,_:|r<^!:~^,._:=!:,-_Vob#####
$9ZMHOUy=*~,!r~"_.-_.:MhOgOPx).vW5ZZ6$8$Puvx~-cTmMd6RE$gQQBBQQB#####BMu\!~IPZdEB###BWYvxxvy<:~v*;!~r~_'__',<!:,~!RQQQQQQ
0065d8MT~|r\vT}*_'`  _*V0EZhsY=_LUGy}eR$6dZPV^_}WdRROdMkLYLTcyzyzW##$kV>v:rX3Ze|M#d^vI3kv(ui=^x>~*r:'_:_:*v\<^!~^vgQQQQQ
Lxx}OKI\^vvvxyox~_'``,<*HKPK8K-:u}ur-`Z8BB8Zj*.~kK3PPu~=:*ixycVjCM####B0ddVd90$RQ##3r^xiv~kV^*Lr|)_,vv*vir:r|);=^*jd5K3Z
iiTuB#RrrxLv^xVv=:_'.```Gjhb8}:>*}Lc:rM0QBBdau~"(umeh-:^~:~*uaMg#####################0WTL^~v^(Vyi!*i))TL~~|x|**^~:=v((|v
YuVoBBI|vxTxr~v\~!:_:-'`UVCQMKy=-^}vHOHO8BQOov~```vKmhT}TuhO8QB###BBBBBB####BB##########BRj>*]IKux\vV}r~r)=^|r)r~!!vvv\(
r|}6Q8x\xYTiuxi}*=:!*==_xzRgDDU\"'VZm9Hd$MsKITL_ ,ywoeKaZbZZdOR$$$QB#####@@@@@@@@@@@@#@####B8Odz\)Y}*!^(=_-=VzTx|=~TyVuT
*)uQQZ)v}yVx}wuY*=!~Y];^<3RO$$GyT\}jGZIywuicoj]r(|rxwsmKCV}xVZ$B#@@@@@@@@@@@@@@@@@@@@@@@@@@@##QV!*!_!r~__!*]wywu}^:TyjoX
r(WQ0Vv|yUjLLVc}r~=^}VVr!}O5h3QDy~TKXZqYVTucZ0$GV)~\yIU3M$B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Qyr*r)xVGOEQ###B#QWHMZbd
}xPUK}|]}YTYY}Lxr~~raG};^YdKs3Q0x~rcyhZI}Ts0QQgMKoXGgB#@@@@@@@@@@@####################@@@@@@@@@@@@#OB##BBBBBBBB6OMg0$ggg
LTM6Vix}V}vvvvvv*~<)vrrr]VdPUD0Da~:}uV6Gyuzd$$$$Q##@@@@@@@@@##############################@@@@@@@@@@########BBBBKxTRROMa
dgGeMR5X}vxx}}Yvr****r)LiVd3GQ80yv:*iEM3ayzM9Q#@@@@@@@@@###BB###########BB#################@@@@@@@@@@######BBQBB3^~xvxYc
Q$EQdVvLx}yyVxr*^**r)\xYueMa0DgUju(-ZewaexY$#@@@@@@@@#######################################@#@@@@@@@@######BBBB0Vi}xr\}
QQQQg0EOHasu|*^**r(vx]h}UGPbD09uuyoZius5OQ#@@@@@@@##BBBBBB#####BB###########################@@#@@@@@@@@######BBBBGTiu\\(
QQQQQ8cYix)**rr|vL}Ti3yVDHOR00EmXERYTP0#@@@@@@@##BBBBBBBB################################@@@@@@@@@@@@@@########BBQOWZT}i
QQQQ$OHKWMGPsoTVzXIVuHuHdOQ8O3R8$bIsqB@@@@@@@#B#BBBBBB##B##############BQQ###############@@@@@@@@@@@@@##@#B$ZKkuYiTjCVTi
BQ$9IYvviTVywImGZbHcCymOZ0QEM3OQ65dg@@@@@@@#BBB###BBB#BBBB###########BQg$gB###########@@@@@@@@@###@@@#B}U3Vcuivvvv|xv:=r
XwuTcTuIW5KhokyTTyx(huM$0QBdWHg$R0#@@@@@@#BQBBBBBBBBB#BB#############Q8QQBB##########@##@@@@@@#$PzVjs3yx)r))^~~<^)xx}Xjj
rvixx}}x)*rLxvxvUj}xTzOQQB#ByMQ$Q#@@@@@@#QQQQBBBBBB#B#B##############B##############@@#####@@@##BQDdsuYYi]x*~~<<<*|vxaaZ
)v|)vxr^<^|T}TTTGIuxcPgBBBB#MP08@@@@@@@#BQQQQBQBBBB#B##########B##B##B#B##############@@@@@###@@###BQ$DDZbMj*<^*^^*rrXGM
Gc*rv(r*^r(L}yyjPjYvsM88#BB#Bd$#@@@@@@#QBQQBBBBBB#############################B######@@####@@@##BBBBQ$OddWmV\rr*^^*r|YPH
jrrvr****)vv]VVjw}LLVMDQ#B##B0B@@@@@@@QgQBBBBBB#BB####BQOPZgBB#####################@@@@@@@#########BB8DdUTvhyLL]x]iL}yhb
yjYrrrrr*r\ickiVuTTx|c38BBBB$d@@@@@@@#06Q#BBB#####BB805MZPkm608QB##########BB####@@@@@@@#@@@@###########BQdOM3UIoXjCkVVG
dqV\||)r^*vcmV|}TcT|~^vwEg$Dm5@@@@@@@@BGR#######BgHyh5dDMOZdaMgddgBBB#########@@@@@@@@@@@@###@@#######BEWQQQQg$$0DdHjyVk
Iabavv|r~rVP5}<xx**r>~=~ujVY*s@@@@@@@@@gOB#BQRZeZjVcuusZdM0D0#BjVymOQB#####@@@@@@@@@@@@@@@@@#8########BQQQ88g$09bGejwVuy
Gew}x|*>^uGWXL<ix^*)^~~!vY}c^r@@@@@@@@@@#QdDoyuVjyuuVywd#BEPaEBBdyuuhg#@@@@@@@@@@@@@@@@@@@#8ILcM$8QQ0gQQBBBBQQQ8Db5PyTY}
U33U}*~~x3GeVL~)x}Tvr**rVzc}<_s@@@@@@@@@@@@#gMejwyucyyVVm0##0eG8#@B#@@@@@@@@@@@@@@@@@@@@BPTCIjucyVm3XyxYjqE$QQQQQ6VIycTL
MZ3T*^riyIIyu|:}T}Vxrrr;rL}}x::Z@@@@@@@@@@@@@@@@@#BBQQQQQB#@@@@@@@@@@@@@@@@@@@@@@@@@@BEVyIycTjXVVysGy}r<*vIV}Iqh}>^xzVT}
3C)*rxuVIIjvx|rcv<)x**<!~)xTV],_e#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BBgdWjyyIGh}CjVyUaT}LrxVaGu^*^>>rVGkyV
xx*)LVwCIUTvixiUVL)("`'_!v})rv!:~G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#$PyzM8Q$ZKU3qGyuCzyoCy})^)Yu9$Ks}v)LZdGhz
xvxTwkwjICvvT^;()|}Vx~:_,=vxLx*-_x#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####@@#8RGPP3Ujjmd$QQ$6Rd5Xcyzwjz}i)~*iG$9kycx)uOZ3hw
uckCwyVIyxvvi*=xuTTxr;^^~"_=*^^"-~d8BQaK$###@@@@@##################BQgO3y}TyIKPG55PPbd$B#QOdWjYYuTLYv^,-_!xHRmywc(iOMKIu
KXzycuyPVvvx}!=Lyy}v*".`  `:|xyhG3Z0RZu=i|}3PZR$g8QB###BBBQQ8$E9qXVuVVV}VjK333PMdZZ5g8QQB#gohw\~rv*vxx:__=*T8ZVyu*LPd3Vu
kV}YuyCmTY}}L:,^v*~=!:``_>}agB####8M6gj"\=^v](vx*^^*|YiLY}cyVVyVyVVcVyIIIIhmqddZZbddQd6$0QBRcL|;,~<~^^__"~^xR8CTrr}sKVcy
^)TkXUKCCu}Yu_-_!xxVUd$B###########DOQ0;r^^~==**~;*rxc}}uckjwCjUssIXK5M3mUe3MbdMGMO68MVVCG0QO}rr!_~!!<~:^<~~I#$Yr|}yyVyy
cXmsy3RdbjuVy$###@@@@@@#########Q##BgBgr="=*^~<r^***|}}TuuXM5UU33PGMMdd3PGMGmIyVVykh0Q9y}co9gOV**~,:!=!:>^<:rQ5|)vxLyycv
esesKGdddHIjCQ@@@@@@@@@@#######B$Q##8E]!:_=xYYxx^rr))xTuuuoM5W5qqGWqqdRMP3PKjTxxLiYYcPdMyxviyqP}^*!,,;<*rr*!~u|rrrrr)Ty}
3amsaPamIhIXX#@@@@@@@@@@########@@##BC_!*"*YTVV}^*|xvv}VVcIdOD00bGMb6DRMPKjyVVuYix]YuyXPPVirrLoK\~r~,!<\vx|><x)))r*rrvr*
jc}xvxYuyjIhW@@@@@@###@@@@@@@@@@@@###)_:^r}xxT}x*r(vxxxYccURD9asIIKM6EdmyVVyyyV}xvv]uIImKUkTx)vT}r~*!:^v]Yxr*xvvv)*r|v*;
KPhuuu}}TwsKM@@@@@@###@@@@@@@@@@@@@##~-rvVoui*|v<^rr(vvvYVjPMPes3HGWGOdjVyjIozjkVTx|xVyjIMZPUuiv**<~^!;viYx))x}ii|*rr<~!
hyiLcT}uIemKZ@@@@@######@@@@@@@@@@@@B__]uyjjVv(r=>^*rvx]}yhGGq5MdZ5qMD6KjoXXjjooXXwuLT}}cwKesCVTx!!=>^=r]x))|vTT}vr*^<!:
Y]iLLuUPzkmad#@@@####BBB#@@@@@@@@@@@G::L}}}ccu}v;^)\xLL}CzUR806dMKIXIHq3XIwyyyVVVVVyyXyVVw3mmehjVr===<~*\(|}dP}u}x)~~;~<
}ivvyWmyyjsmd@@@@#BBBQQB##@@@@@@@@@@L!=u}TTuTL}L*^*)x}LYchW$$OGWGPsIIPG3IIjCyVcVVVVTTIIIXeZZMGa3hL!!!=^*)vxdeCmyuxr=*r*)
x)xoGjTucVom6@@@@BQQQBBB##@@@@@@@@@B~!=}}uTTTYLx|v(|xxxxLVs0gGwcVsIUKGGKheheICyVyywyujCCCohWHPUICV~===^v)v]y$$bVTx*~*]Lx
*/

// Token saver?
// Lending protocol interface? AAVE?

import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Prode is AccessControlEnumerable {
    using SafeERC20 for IERC20;

    error NotMessiRole();
    error TimestampOutOfRange();
    error PhaseNotDefinedError();
    error AlreadyWhitelistedError();
    error OutOfBoundsError();
    error LengthMismatchError();
    error SetTimeEndedError();
    error ZeroAmountError();
    error WithoutRewardsError();
    error AlreadyDepositedError();
    error UserNotWhitelistedError();
    error WrongPhaseError();

    event Whitelisted(address indexed user);
    event PhaseChanged(Phase indexed phase);
    event RemovedFromWhitelist(address indexed user);
    event DepositConfirmed(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);
    event ResultSet(uint256 game);
    event ResultsSet(uint256[] games);
    event UserResultsSet(address user, uint256[] games);
    event RewardWinners(address first, address second, address third);

    enum Phase { Registration, Playing, Finished }
    
    Phase public phase;

    struct Game {
        uint256 homeTeamScore;
        uint256 awayTeamScore;
        uint64 date; // timestamp
        bool loaded;
    }

    address public immutable token;
    uint256 public immutable depositAmount;
    uint256 public immutable firstPercentage;
    uint256 public immutable secondPercentage;
    uint256 public immutable thirdPercentage;

    // MESSI IS THE GOAT 🐐
    // ADDRESSES WITH THIS ROLE CAN DO ADMIN SHIT
    bytes32 public constant MESSI_ROLE = keccak256("MESSI");
    
    uint256 public constant closingTime = 30*60; // Thirty minutes

    // user => whitelisted
    mapping(address => bool) whitelist;
    
    // user => array of Game structs
    mapping(address => Game[64]) userResults;
    
    // user => points
    mapping(address => uint256) scores;

    // array of Game structs
    Game[64] results; // first 48 matches are from the group phase, the rest from playoffs

    // array of users to iterate on
    address[] users;

    // user => deposit
    mapping(address => uint) deposits;

    uint256 public totalDeposits;

    // user => reward amount
    mapping(address => uint) rewards;

    modifier onlyWhitelisted() {
        if (!whitelist[_msgSender()]) {
            revert UserNotWhitelistedError();
        }
        _;
    }

    modifier onlyMessiRole() {
        if (!hasRole(MESSI_ROLE, _msgSender())) {
            revert NotMessiRole();
        }
        _;
    }

    constructor(
        address _token,
        uint256[] _percentages,
        uint256 _depostitAmount,
        uint64[] _dates
    ) {
        // set token (DAI, USDT, USDC)
        token = _token;

        // set percentages for rewards
        firstPercentage = _percentages[0];
        secondPercentage = _percentages[1];
        thirdPercentage = _percentages[2];

        // set deposit amount
        depositAmount = _depostitAmount;

        // set governance roles (can be multiples, accept a dynamic array)
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MESSI_ROLE, msg.sender);

        // set all matches start time on deployment
        setDates(_dates);
    }

    function setDates(uint64[] _dates) internal onlyMessiRole {
        if(_dates.length != 64) {
            revert LengthMismatchError();
        }

        for(i = 0; i <= _dates.length; i++) {
            if (_dates[i] < uint64(1668960000) || _dates[i] > uint64(1671375600)) {
                revert TimestampOutOfRange();
            }
            results[i].date = _dates[i];
        }
    }

    function setPhase(uint256 _phase) external onlyMessiRole {
        if (_phase == 0) {
            phase = Phase.Registration;
        } else if (_phase == 1) {
            phase = Phase.Playing;
        } else if (_phase == 2) {
            phase = Phase.Finished;
        } else {
            revert PhaseNotDefinedError();
        }
        emit PhaseChanged(phase);
    }

    function whitelist(address _user) external onlyMessiRole {
        if (phase != Phase.Registration) {
            revert WrongPhaseError();
        }

        if (whitelist[_user]) {
            revert AlreadyWhitelistedError();
        }

        whitelist[_user] = true;
        users.push(_user);
        emit Whitelisted(_user);
    }

    function removeFromWhitelist(uint256 _index) external onlyMessiRole {
        if (_index > users.length - 1) {
            revert OutOfBoundsError();
        }
        whitelist[users[_index]] = false;
        users[_index] = users[users.length - 1];
        users.pop();
        emit RemovedFromWhitelist(users[_index]);
    }

    // this function is used for depositing the token
    // could be used to directly deposit the stablecoin and then to the lending protocol
    // OR could deposit directly the lending token
    function deposit(uint _amount) external onlyWhitelisted {
        if (phase != Phase.Registration) {
            revert WrongPhaseError();
        }

        if (_amount == 0) {
            revert ZeroAmountError();
        }

        // Only deposit once 
        if (deposits[_msgSender()] != 0) {
            revert AlreadyDepositedError();
        }

        IERC20(token).safeTransferFrom(_msgSender(), address(this), _amount);

        totalDeposits += _amount;
        deposits[_msgSender()] += _amount;
        emit DepositConfirmed(_msgSender(), _amount);
    }

    function claimReward() external onlyWhitelisted {
        if (phase != Phase.Finished) {
            revert WrongPhaseError();
        }

        if (rewards[_msgSender()] == 0) {
            revert WithoutRewardsError();
        }

        uint256 claimAmount = rewards[_msgSender()];
        rewards[_msgSender()] == 0;
        IERC20(token).safeTransferFrom(address(this), _msgSender(), claimAmount);
        emit RewardClaimed(_msgSender(), claimAmount);
    }

    // Load only one result at a time
    function setResult(uint256 _games, Game _result) external onlyMessiRole {
        if (phase != Phase.Playing) {
            revert WrongPhaseError();
        }

        results[_games].homeTeamScore = _result.homeTeamScore;
        results[_games].awayTeamScore = _result.awayTeamScore;
        results[_games].loaded = _result.loaded;
        results[_games].date = _result.date;
        emit ResultSet(_games);
    }

    // load multiple results without changing the timestamp
    function setResults(uint256[] _games, Game[] _results) external onlyMessiRole {
        if (phase != Phase.Playing) {
            revert WrongPhaseError();
        }

        if(_games.length != _results.length) {
            revert LengthMismatchError();
        }

        for(i = 0; i <= _games.length; i++) {
            results[_games[i]].homeTeamScore = _results[_games[i]].homeTeamScore;
            results[_games[i]].awayTeamScore = _results[_games[i]].awayTeamScore;
            results[_games[i]].loaded = true;
        }
        emit ResultsSet(_games);
    }

    function userSetResults(uint256[] _games, Game[] _results) external onlyWhitelisted {
        if (phase != Phase.Playing) {
            revert WrongPhaseError();
        }

        if(_games.length != _results.length) {
            revert LengthMismatchError();
        }

        for(i = 0; i <= _games.length; i++) {
            // only load result if it is not loaded already
            if (userResults[msg.sender].loaded || block.timestamp + closingTime > uint256(results[_games].date)) {
                revert SetTimeEndedError();
            }

            userResults[msg.sender].homeTeamScore = _results[_games[i]].homeTeamScore;
            userResults[msg.sender].awayTeamScore = _results[_games[i]].awayTeamScore;
            userResults[msg.sender].loaded = true;
        }
        
        emit UserResultsSet(msg.sender, _games);
    }

    // TODO check for efficiently comparing and storing score (cumulative counter to)
    // TODO any additional rules regarding goals points or other stuff
    // CAN CALL THIS FUNCTION FROM THE FRONT AND ONLY FROM THE CONTRACT WHEN THE WORLD CUP IS FINISHED
    function score(address _user) public view returns(uint256) {
        uint256 score;
        
        for(uint256 i = 0; i <= results.length; i++) {
            if (
                // Guessing exact result
                userResults[_user].Game[i].homeTeamScore == results.Game[i].homeTeamScore &&
                userResults[_user].Game[i].awayTeamScore == results.Game[i].awayTeamScore
            ) {
                score += 3;
            } else if (
                // Guessing the winner or draw (not exact result)
                (userResults[_user].Game[i].homeTeamScore == userResults[_user].Game[i].awayTeamScore &&
                results.Game[i].homeTeamScore == results.Game[i].awayTeamScore) ||
                (userResults[_user].Game[i].homeTeamScore > userResults[_user].Game[i].awayTeamScore &&
                results.Game[i].homeTeamScore > results.Game[i].awayTeamScore) ||
                (userResults[_user].Game[i].homeTeamScore < userResults[_user].Game[i].awayTeamScore &&
                results.Game[i].homeTeamScore < results.Game[i].awayTeamScore)
            ) {
                score += 1;
            }
        }
        
        return score;
    }

    function scores() public view returns(address[], uint256[]) {
        uint256[] memory _scores;
        for (uint256 i = 0; i <= users.length; i++) {
            _scores.push(computeScore(users[i]));
        }
        return (users, _scores);
    }

    // This function maybe is not useful at all (when calculating rewards can do it on the fly)
    function computeScores() external onlyMessiRole {
        if (phase != Phase.Finished) {
            revert WrongPhaseError();
        }

        for (uint256 i = 0; i <= users.length; i++) {
            //scores.push(computeScore(users[i]));
            scores[users[i]] = computeScore(users[i]);
        }
    }

    // function that calculate rewards and enables users to claim them
    // be careful of a tie in the first, second and/or third positions
    function calculateRewards() external onlyMessiRole {
        if (phase != Phase.Finished) {
            revert WrongPhaseError();
        }

        uint256[2] first;
        uint256[2] second;
        uint256[2] third;
        for (uint256 i = 0; i <= users.length; i++) {
            // here maybe is better to compute the score on the fly than to store it 
            // scores[users[i]] (get them from storage)
            uint256 _score = computeScore(users[i])
            scores[users[i]] = _score;

            if (_score > first[1]) {
                first[1] = _score;
                first[0] = users[i];
                second[1] = first[1];
                second[0] = first[0];
                third[1] = second[1];
                third[0] = second[0];
            } else if (_score > second[1]) {
                second[1] = _score;
                second[0] = users[i];
                third[1] = second[1];
                third[0] = second[0];
            } else if (_score > third[1]) {
                third[1] = _score;
                third[0] = users[i];
            } else {
                // Check for more ties with the third place
                // TODO Here I could also keep on checking if they are equal to the third place and store them in an array
                continue;
            }
        }

        // Check for ties in the top 3
        if (first[1] == second[1] && first[1] == third[1]) {
            // Equal distribution
            uint256 newReward = (firstPercentage + secondPercentage + thirdPercentage) / 3;
            rewards[first[0]] = totalDeposits * newReward / 1e18;
            rewards[second[0]] = totalDeposits * newReward / 1e18;
            rewards[third[0]] = totalDeposits * newReward / 1e18;
        } (first[1] == second[1]) {
            // First and second split first + second rewards in half
            uint256 newReward = (firstPercentage + secondPercentage) / 2;
            rewards[first[0]] = totalDeposits * newReward / 1e18;
            rewards[second[0]] = totalDeposits * newReward / 1e18;
            rewards[third[0]] = totalDeposits * thirdPercentage / 1e18;
        } (second[1] == third[1]) {
            // Second and third split second + third rewards in half
            uint256 newReward = (secondPercentage + thirdPercentage) / 2;
            rewards[first[0]] = totalDeposits * firstPercentage / 1e18;
            rewards[second[0]] = totalDeposits * newReward / 1e18;
            rewards[third[0]] = totalDeposits * newReward / 1e18;
        } else {
            rewards[first[0]] = totalDeposits * firstPercentage / 1e18;
            rewards[second[0]] = totalDeposits * secondPercentage / 1e18;
            rewards[third[0]] = totalDeposits * thirdPercentage / 1e18;
        }
        emit RewardWinners(first[0], second[0], third[0]);
    }

}