import React, { useEffect } from "react";
import { useStateValue } from "../state/state";
import countDownClock from "../utils/countDownClock";

const Scoreboard = () => {
  const [{ data }, dispatch] = useStateValue();
  
  useEffect(() => {
    countDownClock(dispatch);
  }, []);
  
  if (data.scoreTimeCount === "00:00") {
    // countDownClock(dispatch, 'killcode');
    // countDownClock(dispatch);
  }
  return (
    <div id="scoreboard">
      <div id="score-bomb-count" className="panel">
        {data.scorePointCount}
      </div>
      <button
        id="score-restart-button"
        onClick={e => {
          dispatch({ type: "RESET_GAME" });
        }}
      />
      
      <div id="score-time-count" className="panel">
        {data.scoreTimeCount}
      </div>
      <style jsx>{`
        h1 {
          font-family: "Doppio One", sans-serif;
          color: #ff1c7e;
          text-align: center;
        }
        #scoreboard {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          width: auto;

          position: relative;

          background-color: #bfbfbf;

          text-align: center;

          border-top: 3px solid #707070;
          border-left: 3px solid #707070;

          border-right: 3px solid white;
          border-bottom: 3px solid white;
        }

        #scoreboard .panel {
          display: inline-block;
          padding: 2px 5px 0;

          background-color: black;
          color: #df0d14;
          font-weight: bold;
          font-size: 18px;
          font-family: DS-Digital, monospace;

          border-top: 1px solid #707070;
          border-left: 1px solid #707070;

          border-right: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;

          text-align: center;
          cursor: default;
        }

        #score-bomb-count {
        }

        #score-time-count {
        }

        /* Smiley images borrowed from http://jsdo.it/No_1026/urFs */

        #score-restart-button {
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEA\
          AAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTW\
          lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f\
          92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnE\
          hVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec\
          5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5s\
          vCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCR\
          AOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAO\
          z0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIA\
          oKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAE\
          MeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg\
          4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+\
          bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DH\
          AbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHA\
          oLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1x\
          YW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTc\
          d5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gEC\
          iw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAAL\
          zoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwk\
          wDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXI\
          HrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSS\
          gKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8ir\
          xHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn\
          0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx\
          1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6\
          CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1\
          +TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7k\
          CLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBK\
          WfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8uk\
          LaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8\
          dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYq\
          fBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46\
          kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkij\
          VGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TF\
          NDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqt\
          Zq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6Ub\
          qFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQI\
          NpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2\
          fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG0\
          03TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2p\
          Z8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvL\
          tqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m\
          32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd\
          8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W\
          3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152\
          Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep\
          +Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHl\
          Ab2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8h\
          v5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2\
          CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jv\
          GPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAnt\
          ieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZ\
          B8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hK\
          PJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM\
          /ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r3\
          5CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/u\
          r5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp\
          8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturv\
          RauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5\
          bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt\
          50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+\
          2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7\
          q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw\
          5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39Q\
          jrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWP\
          V56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj\
          8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv\
          62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt\
          0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g\
          +GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98m\
          TOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy\
          76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+m\
          PHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA\
          +f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACCSURBVHjatF\
          RJEsAgDCoZ//9leujUxia4dMkxKCJZQHLLAkAASCI7W9TljPvC\
          WjJ4JQCUsBtZS2SrBKdK/11bJciITMkFxrmq5ImKu5qiwJlcMP\
          ZN/EOizOvhRhIeOMzqNVlsuqJdnze31ne11L71zU/oyA81O+H5\
          /hTnKwFf7JN9AGCgWhvq3GihAAAAAElFTkSuQmCC")
            center center no-repeat;
          width: 29px;
          height: 29px;
          border-top: 2px solid white;
          border-left: 2px solid white;
          border-right: 2px solid #707070;
          border-bottom: 2px solid #707070;
        }
        #score-restart-button.dead {
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEA\
          AAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTW\
          lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f\
          92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnE\
          hVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec\
          5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5s\
          vCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCR\
          AOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAO\
          z0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIA\
          oKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAE\
          MeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg\
          4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+\
          bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DH\
          AbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHA\
          oLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1x\
          YW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTc\
          d5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gEC\
          iw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAAL\
          zoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwk\
          wDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXI\
          HrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSS\
          gKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8ir\
          xHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn\
          0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx\
          1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6\
          CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1\
          +TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7k\
          CLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBK\
          WfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8uk\
          LaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8\
          dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYq\
          fBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46\
          kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkij\
          VGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TF\
          NDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqt\
          Zq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6Ub\
          qFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQI\
          NpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2\
          fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG0\
          03TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2p\
          Z8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvL\
          tqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m\
          32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd\
          8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W\
          3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152\
          Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep\
          +Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHl\
          Ab2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8h\
          v5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2\
          CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jv\
          GPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAnt\
          ieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZ\
          B8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hK\
          PJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM\
          /ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r3\
          5CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/u\
          r5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp\
          8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturv\
          RauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5\
          bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt\
          50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+\
          2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7\
          q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw\
          5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39Q\
          jrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWP\
          V56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj\
          8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv\
          62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt\
          0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g\
          +GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98m\
          TOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy\
          76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+m\
          PHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA\
          +f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACgSURBVHjarJ\
          RLCsMwDEQ1IacK9PaFHOt1EURjfdy6VKsg5OfxDIoAO58nFup4\
          HLFlgKyovTsMeVgSFWyLAKgBDoY3LEEc8E1FkACThAMkHxoVVf\
          3rG231LflJXd/MTJdP8xs/9RNktaSQzq/1F8g+k1mZXs7GiO8m\
          VuA8V0TcAe4xl0p8L1ZSchWDsYCkdcCgJG9qb3bc4vYNcVNn/5\
          PXAAfaeRDcACcvAAAAAElFTkSuQmCC")
            center center no-repeat;
        }
        #score-restart-button.success {
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEA\
          AAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTW\
          lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f\
          92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnE\
          hVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec\
          5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5s\
          vCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCR\
          AOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAO\
          z0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIA\
          oKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAE\
          MeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg\
          4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+\
          bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DH\
          AbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHA\
          oLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1x\
          YW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTc\
          d5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gEC\
          iw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAAL\
          zoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwk\
          wDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXI\
          HrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSS\
          gKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8ir\
          xHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn\
          0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx\
          1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6\
          CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1\
          +TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7k\
          CLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBK\
          WfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8uk\
          LaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8\
          dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYq\
          fBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46\
          kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkij\
          VGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TF\
          NDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqt\
          Zq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6Ub\
          qFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQI\
          NpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2\
          fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG0\
          03TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2p\
          Z8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvL\
          tqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m\
          32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd\
          8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W\
          3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152\
          Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep\
          +Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHl\
          Ab2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8h\
          v5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2\
          CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jv\
          GPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAnt\
          ieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZ\
          B8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hK\
          PJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM\
          /ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r3\
          5CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/u\
          r5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp\
          8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturv\
          RauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5\
          bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt\
          50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+\
          2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7\
          q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw\
          5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39Q\
          jrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWP\
          V56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj\
          8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv\
          62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt\
          0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g\
          +GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98m\
          TOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy\
          76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+m\
          PHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA\
          +f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACRSURBVHjarJ\
          RLDsAgCEQ7xIN78+nCGEGHRtuyM8DjL0heSgAsCpJQtiVzVuyh\
          izD4TABkiU2wCLJTQM/Sl2unAAUqKtUdQPBpfcoBLWIOAkJP9E\
          TyUsbbZkCtdYnm4V3vQaGcNxLK+SJGEnPjsgkpO5IoO43LRrus\
          /enC+dU3f6E7i6ZuZwn/fMX6S8Af/8k9APlWZw9djjtCAAAAAE\
          lFTkSuQmCC")
            center center no-repeat;
        }
        #score-restart-button:active {
          border-top: 2px solid #707070;
          border-left: 2px solid #707070;
          border-right: 2px solid #f2f2f2;
          border-bottom: 2px solid #f2f2f2;
          background-position: 5px 5px;
        }
        #score-restart-button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Scoreboard;
