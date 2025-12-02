import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻<i>PRATIK KUMAR JHA</i>
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              Graduate B.Tech — CSE | ASET, Amity University
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Madhya Pradesh , Gwalior
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ pratikkumarjha9@gmail.com | 📞 +91 9608343949
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              A Computer Science graduate with strong skills in full-stack web
              development. Proficient in C, C++, Java, Python and JavaScript,
              with a solid grasp of data structures and algorithms. I am a
              motivated and passionate problem-solver ready to contribute to
              challenging projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            <li>
              <strong>B.Tech in Computer Science & Engineering</strong> — ASET
              (Amity University), 2021–2025 <br />
              <span style={{ color: "#aaa" }}>GPA: 8.08</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board — S.R DAV Public School</strong> (CBSE Board,
              2020) <br />
              <span style={{ color: "#aaa" }}>Percentage: 71.8%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — Saraswati Vidya Mandir</strong> (CBSE Board,
              2018)
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 76.2%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Projects
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            <li>1️⃣ REAL-TIME-CRYPTOCURRENCY-TRACKER</li>
            <li>2️⃣ NEWSAPP</li>
            <li>3️⃣ ONLINE SHOP</li>
            <li>4️⃣ INSTANT CHAT</li>
            <li>5️⃣ QUICKSELL-KANBAN-BOARD</li>
            <li>6️⃣ PERSONAL PORTFOLIO</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            ⚙️ Skills
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "C++",
              "JavaScript",
              "HTML, CSS",
              "Java (Basic)",
              "Python",
              "Visual Studio Code",
              "Git & GitHub",
              "DBMS",
              "Postman (API Testing)",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Software Testing",
              "Problem-solving",
              "SQL",
              "Data Structure and Algorithms",
              "Selenium WebDriver",
              "JIRA",
              "OOPs",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(0,180,255,0.3)",
                }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            {
              name: "🏆 LeetCode",
              link: "https://leetcode.com/u/the_manpratik/",
            },
            { name: "💻 GitHub", link: "https://github.com/PratikKumarJha" },
            {
              name: "💼 LinkedIn",
              link: "http://linkedin.com/in/pratik-kumar-2339b2224",
            },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/Resume-Pratik Kumar Jha.pdf"
            title="Pratik Kumar Jha Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/Resume-Pratik Kumar Jha.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
