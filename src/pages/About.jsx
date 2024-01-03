import "./About.css";
import React from "react";

function About() {
  return (
    <div className="about container">
      <h2>About</h2>
      <p>
        Resume-Generator is a simple, straightforward web app that makes it easy to
        make your very own resume in few minutes. There are no bells and
        whistles, just a simple interface that lets you add your details and
        generators your resume in fraction of seconds.
        <br /> You can also use our advanced filter to set the color of the web
        app to suit your mood. Resume-Generator is available for free on the web.
        Resume-Generator doesn't have any paid version that will gives you access to
        additional features, nor does it have any in-app purchases.
      </p>
      <div className="features">
        <h3>
          <div className="svg"></div>
          Features Overview:
        </h3>
        <li>Modern, intuitive user interface.</li>
        <li>Easy Access.</li>
        <li>Secure and Free.</li>
        <li>No In-App purchases.</li>
        <li>Available on the web.</li>
        <li>Advance Filter options.</li>
        <li>Dark Theme / Night mode.</li>
        <li>Beautiful Resume.</li>
        <li>Fast Generation.</li>
        <li>Printable and also Downloadable Resume.</li>
      </div>
      <div className="open-source">
        <h3>
          <div className="svg"></div>Open Source:
        </h3>
        <p>
          Resume-Generator is an open source project. You can find the source code
          on{" "}
          <a
            href="https://github.com/sudipmahato432/Resume-Generator"
            target={"_blank"}
            rel="noreferrer"
          >
            GitHub.
          </a>
          <br />
          I'm currently using <strong>react.js</strong> to build Resume-Generator.
        </p>
      </div>
      <div className="credits">
        <h3>
          <div className="svg"></div>Credits:
        </h3>
        <p>
          Resume-Generator is built by{" "}
          <a
            href="https://github.com/sudipmahato432"
            target={"_blank"}
            rel="noreferrer"
          >
            Sudip
          </a>
          .<br />
          The icons used in Resume-Generator are from{" "}
          <a
            href="https://ionic.io/ionicons"
            target={"_blank"}
            rel="noreferrer"
          >
            Ionicons
          </a>
          .<br />
          The font used in Resume-Generator is from{" "}
          <a
            href="https://fonts.google.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Google Fonts
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
