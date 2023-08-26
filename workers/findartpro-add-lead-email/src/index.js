/* eslint-disable */

import { connect } from '@planetscale/database';
import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage } from 'mimetext';

const jwtSecret = 'hello@world?!123';

function generateToken(payload) {
  const header = { algorithm: 'HS256', typ: 'JWT' };
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));

  const signature = btoa(encodedHeader + '.' + encodedPayload + jwtSecret);

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

export default {
  async fetch(request, env, ctx) {
    const config = {
      host: env.DATABASE_HOST,
      username: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSSWORD,
      fetch: (url, init) => {
        delete init['cache'];
        return fetch(url, init);
      },
    };

    const connection = connect(config);

    // parse url request - e-mail
    const { searchParams } = new URL(request.url);
    let user_email = searchParams.get('email');

    console.log('searchParams', searchParams);
    console.log('\n___________________________\n');
    console.log('user_email', user_email);

    // check e-mail format
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(user_email)) return new Response('bad request');

    // insert e-mail to database
    //! try {
    //!   const data = await connection.execute(
    //!     `INSERT INTO lead_emails (email) VALUES ('${user_email}')`
    //!   );
    //! } catch (error) {
    //!   return new Response(`Can't insert e-mail to DB`);
    //! }

    const user = { id: 123, username: user_email };
    const token = generateToken(user);

    const css = `html,
                        html, body {
                          background: #333;
                          height: 100%;
                          color: #fff;
                          font-size: 6.3vh;
                          font-family: fantasy;
                          text-align: center;
                          background-repeat: no-repeat;
                          padding: 0px 30px;
                          height: 100%;
                          margin: 0;
                        }
                        
                        .container {
                          transform: translateY(-50%);
                          margin-top: 8vh;
                          position: relative;
                          text-align: center;
                        }

                        .btn {
                          cursor: pointer;
                          color: #cbff00;
                          text-transform: uppercase;
                          letter-spacing: 0.1em;
                          display: inline-block;
                          font-size: 4.8vh;
                          text-decoration: none;
                          text-shadow: 1px 1px 2px #111;
                          position: relative;
                          box-shadow: 3px 5px 0px #cbff00;
                        }

                        .btn:hover {
                          box-shadow: 3px 5px 0px #58cbfc;
                        }

                        #glitch {
                        }

                        #glitch span {
                          display: block;
                          padding: .3em .9em .1em .9em;
                          position: relative;
                          left: -3px;
                          top: -3px;
                        }
                        #glitch span:nth-child(1),
                        #glitch span:nth-child(2) {
                          position: absolute;
                          left: 0;
                          top: 0;
                        }
                        #glitch:before {
                          border: 1px solid #0ff;
                          z-index: -1;
                        }
                        #glitch:after {
                          border: 1px solid #f0f;
                          z-index: -2;
                        }
                        #glitch span:nth-child(1) {
                          color: #0ff;
                          z-index: -1;
                        }
                        #glitch span:nth-child(2) {
                          color: #f0f;
                          z-index: -2;
                        }
                        #glitch:before, #glitch:after {
                          content: "";
                          position: absolute;
                          top: 0;
                          left: 0;
                          right: 0;
                          bottom: 0;
                          visibility: hidden;
                        }
                        #glitch:hover:before, #glitch:hover span:nth-child(1) {
                          visibility: visible;
                          animation: glitchy 0.3s ease infinite reverse;
                        }
                        #glitch:hover:after, #glitch:hover span:nth-child(2) {
                          visibility: visible;
                          animation: glitchy 0.3s ease 0.3s infinite;
                        }

                        @keyframes glitchy {
                          0% {
                            transform: translate(-2px, 2px);
                          }
                          25% {
                            transform: translate(-2px, -2px);
                          }
                          50% {
                            transform: translate(2px, 2px);
                          }
                          75% {
                            transform: translate(2px, -2px);
                          }
                          to {
                            transform: translate(-2px, 2px);
                          }
                        }

                        @keyframes greyscale-animation {
                          0% {
                            filter: grayscale(0%);
                          }
                          25% {
                            filter: grayscale(100%);
                          }
                          50% {
                            filter: grayscale(0%);
                          }
                          75% {
                            filter: grayscale(0%);
                          }
                          to {
                            filter: grayscale(100%);
                          }
                        }
                        
                        
                        /* 2 */

                        * {
                          box-sizing: border-box;
                        }

                        .img-box {
                          animation: greyscale-animation  0.3s ease 0.3s infinite;
                          position: relative;
                          margin: 4vh auto 1vh auto;
                          width: 33vh;
                          height: 33vh;
                          text-align: center;
                          bottom: 0;
                          font-size: 43px;
                          color: #111;
                          background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANDSURBVHhe7dZBDYAwFAXBzw2jeEEEkkBTsbFppg6aaV73eNes2eDc3xbXmOc6N9CYOTyslqOH1fIYi9UCsVgtD19hzMNixUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxEY8VANFYLxGK1PDRWzENjxUAsVgxkl8b6Ae9Um55yCc+JAAAAAElFTkSuQmCC') no-repeat center/100% auto;
                          filter: brightness(1.2);
                        }
                        
                        .title { font-size: 3vh; }

                        .title a {
                            text-decoration: none;
                            margin-top: 33px;
                            color: #fff;
                            font-size: 3vh;
                            text-underline-offset: 1vh;
                        }

                        .title a:hover {
                          text-decoration: underline;
                        }

                        .img-box:before, .img-box:after {
                          content: "";
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: 100%;
                          height: 100%;
                          background: inherit;
                        }
                        .img-box:before {
                          -webkit-animation: bgHueRotate 1s both infinite;
                                  animation: bgHueRotate 1s both infinite;
                        }
                        .img-box:after {
                          -webkit-animation: bgGlitch 1s both infinite;
                                  animation: bgGlitch 1s both infinite;
                        }

                        @-webkit-keyframes bgGlitch {
                          0%, 100% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          11% {
                            left: 3.5px;
                            -webkit-clip-path: inset(11% 0 28% 0);
                                    clip-path: inset(11% 0 28% 0);
                          }
                          16%, 6% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          34% {
                            left: -2.5px;
                            -webkit-clip-path: inset(20% 0 41% 0);
                                    clip-path: inset(20% 0 41% 0);
                          }
                          39%, 29% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          54% {
                            left: 2.5px;
                            -webkit-clip-path: inset(1% 0 32% 0);
                                    clip-path: inset(1% 0 32% 0);
                          }
                          59%, 49% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          74% {
                            left: -4.5px;
                            -webkit-clip-path: inset(27% 0 17% 0);
                                    clip-path: inset(27% 0 17% 0);
                          }
                          79%, 69% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          91% {
                            left: 1.5px;
                            -webkit-clip-path: inset(30% 0 1% 0);
                                    clip-path: inset(30% 0 1% 0);
                          }
                          96%, 86% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                        }

                        @keyframes bgGlitch {
                          0%, 100% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          11% {
                            left: 3.5px;
                            -webkit-clip-path: inset(11% 0 28% 0);
                                    clip-path: inset(11% 0 28% 0);
                          }
                          16%, 6% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          34% {
                            left: -2.5px;
                            -webkit-clip-path: inset(20% 0 41% 0);
                                    clip-path: inset(20% 0 41% 0);
                          }
                          39%, 29% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          54% {
                            left: 2.5px;
                            -webkit-clip-path: inset(1% 0 32% 0);
                                    clip-path: inset(1% 0 32% 0);
                          }
                          59%, 49% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          74% {
                            left: -4.5px;
                            -webkit-clip-path: inset(27% 0 17% 0);
                                    clip-path: inset(27% 0 17% 0);
                          }
                          79%, 69% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                          91% {
                            left: 1.5px;
                            -webkit-clip-path: inset(30% 0 1% 0);
                                    clip-path: inset(30% 0 1% 0);
                          }
                          96%, 86% {
                            left: 0;
                            -webkit-clip-path: none;
                                    clip-path: none;
                          }
                        }
                        @-webkit-keyframes bgHueRotate {
                          0%, 100% {
                            filter: none;
                          }
                          12% {
                            filter: hue-rotate(251deg);
                          }
                          17%, 7% {
                            filter: none;
                          }
                          32% {
                            filter: hue-rotate(230deg);
                          }
                          37%, 27% {
                            filter: none;
                          }
                          52% {
                            filter: hue-rotate(50deg);
                          }
                          57%, 47% {
                            filter: none;
                          }
                          73% {
                            filter: hue-rotate(125deg);
                          }
                          78%, 68% {
                            filter: none;
                          }
                          93% {
                            filter: hue-rotate(317deg);
                          }
                          98%, 88% {
                            filter: none;
                          }
                        }
                        @keyframes bgHueRotate {
                          0%, 100% {
                            filter: none;
                          }
                          12% {
                            filter: hue-rotate(251deg);
                          }
                          17%, 7% {
                            filter: none;
                          }
                          32% {
                            filter: hue-rotate(230deg);
                          }
                          37%, 27% {
                            filter: none;
                          }
                          52% {
                            filter: hue-rotate(50deg);
                          }
                          57%, 47% {
                            filter: none;
                          }
                          73% {
                            filter: hue-rotate(125deg);
                          }
                          78%, 68% {
                            filter: none;
                          }
                          93% {
                            filter: hue-rotate(317deg);
                          }
                          98%, 88% {
                            filter: none;
                          }
                        }

                        a {
                          display: inline-block;
                        }
                        
                        .wrapper {
                          min-height: 100%;
                          margin-bottom: -50px;
                        }

                        .verify_text {
                          margin: 5vh auto 0vh auto;
                        }
                        
                        .anim-border .card {
                          border-top: 3px solid rgba(255, 49, 49, 0.5);
                          border-right: 3px solid rgba(0, 255, 255, 0.5);
                          border-bottom: 3px solid rgba(57, 255, 20, 0.5);
                          border-left: 3px solid rgba(255, 255, 113, 0.5);
                        }

                        .anim-border border {
                          position: absolute;
                          border-radius: 100vmax;
                        }

                        .anim-border .top {
                          top: 0;
                          left: 0;
                          width: 0;
                          height: 5px;
                          background: linear-gradient(
                            90deg,
                            transparent 50%,
                            rgba(255, 49, 49, 0.5),
                            rgb(255, 49, 49)
                          );
                        }

                        .anim-border .bottom {
                          right: 0;
                          bottom: 0;
                          height: 5px;
                          background: linear-gradient(
                            90deg,
                            rgb(57, 255, 20),
                            rgba(57, 255, 20, 0.5),
                            transparent 50%
                          );
                        }

                        .anim-border .right {
                          top: 0;
                          right: 0;
                          width: 5px;
                          height: 0;
                          background: linear-gradient(
                            180deg,
                            transparent 30%,
                            rgba(0, 255, 255, 0.5),
                            rgb(0, 255, 255)
                          );
                        }

                        .anim-border .left {
                          left: 0;
                          bottom: 0;
                          width: 5px;
                          height: 0;
                          background: linear-gradient(
                            180deg,
                            rgb(255, 255, 113),
                            rgba(255, 255, 113, 0.5),
                            transparent 70%
                          );
                        }

                        .anim-border .top {
                          animation: animateTop 3s ease-in-out infinite;
                        }

                        .anim-border .bottom {
                          animation: animateBottom 3s ease-in-out infinite;
                        }

                        .anim-border .right {
                          animation: animateRight 3s ease-in-out infinite;
                        }

                        .anim-border .left {
                          animation: animateLeft 3s ease-in-out infinite;
                        }

                        @keyframes animateTop {
                          25% {
                            width: 100%;
                            opacity: 1;
                          }

                          30%,
                          100% {
                            opacity: 0;
                          }
                        }

                        @keyframes animateBottom {
                          0%,
                          50% {
                            opacity: 0;
                            width: 0;
                          }

                          75% {
                            opacity: 1;
                            width: 100%;
                          }

                          76%,
                          100% {
                            opacity: 0;
                          }
                        }

                        @keyframes animateRight {
                          0%,
                          25% {
                            opacity: 0;
                            height: 0;
                          }

                          50% {
                            opacity: 1;
                            height: 100%;
                          }

                          55%,
                          100% {
                            height: 100%;
                            opacity: 0;
                          }
                        }

                        @keyframes animateLeft {
                          0%,
                          75% {
                            opacity: 0;
                            bottom: 0;
                            height: 0;
                          }

                          100% {
                            opacity: 1;
                            height: 100%;
                          }
                        }


                        `;

    return new Response(
      `<html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          <div class="wrapper">
            <div class="img-box"></div>
            <div class="verify_text">
              Please verify the <strong><i>email</i></strong>
            </div>
            <div class="container">
              <a class="btn" id="glitch" href='https://findartpro-verify-lead-email.giviko-kuchukhidze.workers.dev/?token=${token}'>
                
                <div class="anim-border">  
                    <article class="card">
                      <div>
                        <span>VERIFY</span>
                        <span>VERIFY</span>
                        <span>VERIFY</span>
                      </div>
                      <border class="top"></border>
                      <border class="right"></border>
                      <border class="bottom"></border>
                      <border class="left"></border>
                    </article>
                </div>
              </a>
            </div>
            <div class="title">© <a target="_blank" href="https://findart.pro">FindArt.Pro</a></div>
          </div>
        </body>
      </html>`,
      {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      }
    );

    // send confirmation e-mail
    const msg = createMimeMessage();
    msg.setSender({ name: 'FindArt.pro', addr: 'contact@findart.pro' });
    msg.setRecipient(user_email);
    msg.setSubject('FindArt.pro Email - Confirmation');
    msg.addMessage({
      contentType: 'text/plain',
      data: `Please verify email by clicking this button: ${button}`,
    });

    var message = new EmailMessage('contact@findart.pro', user_email, msg.asRaw());
    try {
      await env.SEB.send(message);
    } catch (e) {
      return new Response(e.message);
    }
  },
};
