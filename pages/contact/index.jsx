import { useEffect } from 'react';
import styled from 'styled-components';
import Font from '@/component/common/font';

const Contact = () => {
  const executeScript = () => {
    const scriptTag = document.createElement('script');
    const inlineScript = document.createTextNode(` new daum.roughmap.Lander({
        "timestamp" : "1705843388967",
        "key" : "2hrob",
        "mapWidth" : "100%",
        "mapHeight" : "360"
    }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  const InstallScript = () => {
    (function () {
      var c = location.protocol == 'https:' ? 'https:' : 'http:';
      var a = '16137cec';

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + '//t1.daumcdn.net/roughmap/',
        url_protocal: c,
      };
      var b =
        c +
        '//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/' +
        a +
        '/roughmapLander.js';

      const scriptTag = document.createElement('script');
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, []);

  return (
    <Frame>
      <Font fontSize="2rem" fontWeight={700} margin="0 0 2rem 0">
        {`오시는 길 (경기 안산시 단원구 광덕서로 66 B101~B107호)`}
      </Font>

      <KakaoMap
        id="daumRoughmapContainer1705843388967"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></KakaoMap>
    </Frame>
  );
};

export default Contact;

const Frame = styled.div`
  width: 100%;
  max-width: 100rem;
  height: 100vh;
  margin: 0 auto;
  padding: 5rem 3rem 10rem 3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const KakaoMap = styled.div`
  width: 100% !important;
`;
