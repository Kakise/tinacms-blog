import {
  IconType,
  SiGithub,
  SiGmail,
  SiMedium,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:sami.taaissat@artefact.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/samitaaissat',
    },
    {
      icon: SiMedium,
      href: 'https://www.linkedin.com/in/sami-taaissat/',
    },
  ]

  return (
    <div className="mt-20 mr-auto flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
