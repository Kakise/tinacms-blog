import * as React from 'react'

import { cn } from '@/lib/utils'

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(
        'border-border w-full caption-bottom border-2 text-sm',
        className,
      )}
      {...props}
    />
  </div>
))
Table.displayName = 'Table'

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
))
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
))
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t-border bg-main font-base border-t [&>tr]:last:border-b-0',
      className,
    )}
    {...props}
  />
))
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-border bg-main font-base text-mtext data-[state=selected]:bg-bw data-[state=selected]:text-mtext border-b transition-colors',
      className,
    )}
    {...props}
  />
))
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'font-heading text-mtext h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
))
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'font-base p-4 align-middle [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
))
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('font-base text-mtext mt-4 text-sm', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'

const TinaTable = ({ children }: { children: React.ReactNode }) => {
  const childLen = React.isValidElement(children)
    ? children.props.children.length
    : 0
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {React.isValidElement(children) &&
            React.isValidElement(children.props.children[0]) &&
            (
              children.props.children[0] as React.ReactElement
            ).props.children.map((child: any, index: number) => (
              <TableHead key={`header-${index}`}>
                {child.props.content[0].children[0].text}
              </TableHead>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {React.isValidElement(children) &&
          React.isValidElement(children.props.children[0]) &&
          children.props.children
            .slice(1, childLen)
            .map((row: any, rowIndex: number) => (
              <TableRow key={`row-${rowIndex}`}>
                {row.props.children.map((cell: any, cellIndex: number) => (
                  <TableCell key={`cell-${rowIndex}-${cellIndex}`}>
                    {cell.props.content[0].children[0].text}
                  </TableCell>
                ))}
              </TableRow>
            ))}
      </TableBody>
    </Table>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TinaTable,
}
