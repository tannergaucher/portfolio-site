import React from "react"
import styled from "styled-components"
import { Domain, Github } from "grommet-icons"

import { Button } from "../styles"

const StyledProjectCard = styled.div`
  margin-bottom: var(--space-xl);

  .project-title {
    color: var(--href-color);
  }

  .project-iframe {
    margin: var(--space-md) 0;
  }

  .href-btns {
    margin-top: var(--space-md);
  }

  .repo-btn {
    margin-right: var(--space-md);
  }
`

export default function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <h4 className="project-title">{project.frontmatter.title}</h4>
      <div
        className="project-iframe"
        style={{
          position: `relative`,
          paddingTop: `56.25%`,
        }}
      >
        <iframe
          title="project-screen-recording"
          src={`${project.frontmatter.vimeoUrl}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <small className="project-description">
        {project.frontmatter.description}
      </small>
      <div className="href-btns">
        <Button className="repo-btn">
          <a href={`${project.frontmatter.githubRepo}`}>
            <Github color="var(--href-color)" size="var(--text-md)" />
          </a>
        </Button>
        <Button className="deployed-btn">
          <a href={`${project.frontmatter.deployedUrl}`}>
            <Domain color="var(--href-color)" size="var(--text-md)" />
          </a>
        </Button>
      </div>
    </StyledProjectCard>
  )
}
