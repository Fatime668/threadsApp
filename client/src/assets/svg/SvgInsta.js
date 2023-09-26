import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M36.003 0C26.226 0 25 .043 21.16.218 17.327.393 14.711 1 12.422 1.89c-2.368.92-4.377 2.15-6.378 4.151-2.002 2.001-3.232 4.01-4.155 6.377-.892 2.29-1.5 4.906-1.672 8.738C.045 24.995 0 26.223 0 36c0 9.778.044 11 .218 14.84.176 3.833.783 6.45 1.672 8.738.92 2.368 2.15 4.377 4.152 6.378 2 2.002 4.009 3.235 6.375 4.155 2.29.89 4.907 1.497 8.74 1.672 3.84.175 5.066.218 14.842.218 9.778 0 11.001-.043 14.841-.218 3.833-.175 6.452-.782 8.742-1.672 2.367-.92 4.373-2.153 6.373-4.155 2.002-2.001 3.233-4.01 4.155-6.377.885-2.29 1.493-4.906 1.672-8.737.173-3.84.218-5.064.218-14.842 0-9.777-.045-11.004-.218-14.844-.18-3.832-.787-6.448-1.672-8.737-.922-2.368-2.153-4.377-4.155-6.378C63.952 4.04 61.95 2.81 59.58 1.89 57.285 1 54.667.393 50.835.218 46.995.043 45.772 0 35.992 0h.011Zm-3.23 6.488c.96-.002 2.029 0 3.23 0 9.612 0 10.752.034 14.547.207 3.51.16 5.416.747 6.685 1.24 1.68.652 2.877 1.432 4.137 2.692 1.26 1.26 2.04 2.46 2.694 4.14.492 1.267 1.08 3.172 1.24 6.683.172 3.794.21 4.934.21 14.542s-.038 10.748-.21 14.543c-.161 3.51-.748 5.415-1.24 6.682-.653 1.68-1.434 2.877-2.694 4.136-1.26 1.26-2.457 2.04-4.137 2.692-1.268.495-3.174 1.08-6.684 1.24-3.796.174-4.936.211-14.548.211-9.613 0-10.752-.037-14.547-.21-3.51-.162-5.415-.749-6.685-1.241-1.68-.653-2.88-1.433-4.14-2.693-1.26-1.26-2.04-2.457-2.694-4.138-.492-1.267-1.08-3.172-1.24-6.682-.172-3.795-.206-4.935-.206-14.549 0-9.613.034-10.747.207-14.542.16-3.51.747-5.416 1.24-6.685.652-1.68 1.433-2.88 2.693-4.14 1.26-1.26 2.46-2.04 4.14-2.694 1.27-.495 3.175-1.08 6.685-1.24 3.321-.15 4.608-.196 11.318-.203v.009Zm22.447 5.977a4.32 4.32 0 1 0 4.32 4.319 4.321 4.321 0 0 0-4.32-4.32v.001Zm-19.217 5.048c-10.21 0-18.487 8.277-18.487 18.487 0 10.21 8.278 18.484 18.487 18.484 10.21 0 18.485-8.274 18.485-18.484 0-10.21-8.275-18.487-18.485-18.487Zm0 6.487c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12Z"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-93.154 46.258 29.723) scale(81.7953 127.433)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.182} stopColor="#FD5" />
        <stop offset={0.443} stopColor="#FF543E" />
        <stop offset={0.672} stopColor="#D9408A" />
        <stop offset={1} stopColor="#6F15FC" />
      </radialGradient>
    </defs>
  </svg>
)
export default SvgComponent
