import Image from "next/image";
import {
  companyStructureIntro,
  companyStructureRows,
  type CompanyStructureRow,
} from "@/lib/company-structure";

function StructureTableLogo({ row }: { row: CompanyStructureRow }) {
  const maxHeight = row.isSeal ? 32 : 28;

  return (
    <div className="structure-table-logo-cell flex w-10 shrink-0 items-center justify-center">
      <Image
        src={row.logoSrc}
        alt={row.logoAlt}
        width={40}
        height={maxHeight}
        className="structure-table-logo object-contain object-center"
        style={{ maxHeight }}
      />
    </div>
  );
}

interface CompanyStructureTableProps {
  className?: string;
}

export default function CompanyStructureTable({
  className = "",
}: CompanyStructureTableProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-brand-border bg-white shadow-brand ${className}`}
    >
      <div className="border-b border-brand-border bg-brand-soft/50 px-5 py-5 md:px-8">
        <h2 className="type-card text-brand-navy md:text-xl">
          Portfolio structure
        </h2>
        <p className="mt-2 max-w-3xl type-body-sm leading-relaxed text-brand-muted md:text-base">
          {companyStructureIntro}
        </p>
      </div>

      {/* Mobile: stacked rows to avoid forcing a wide table */}
      <div className="space-y-0 md:hidden">
        {companyStructureRows.map((row, index) => (
          <div
            key={row.id}
            className={`px-5 py-4 ${
              index < companyStructureRows.length - 1
                ? "border-b border-brand-border/80"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <StructureTableLogo row={row} />
              <div>
                <p className="text-sm font-semibold text-brand-navy">
                  {row.name}
                </p>
                <p className="mt-0.5 text-xs text-brand-muted">{row.area}</p>
              </div>
            </div>
            <p className="mt-3 type-body-sm leading-relaxed text-brand-muted">
              {row.role}
            </p>
            <p className="mt-2 text-xs font-medium text-brand-navy/80">
              {row.position}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: structured table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-brand-border bg-brand-soft/30">
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-muted md:px-8">
                Platform / initiative
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-brand-muted">
                Focus
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-brand-muted">
                What it does
              </th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-muted md:px-8">
                Current position
              </th>
            </tr>
          </thead>
          <tbody>
            {companyStructureRows.map((row, index) => (
              <tr
                key={row.id}
                className={
                  index < companyStructureRows.length - 1
                    ? "border-b border-brand-border/80"
                    : ""
                }
              >
                <td className="px-6 py-4 md:px-8">
                  <div className="flex items-center gap-3">
                    <StructureTableLogo row={row} />
                    <span className="text-sm font-semibold text-brand-navy">
                      {row.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-brand-navy/85">
                  {row.area}
                </td>
                <td className="px-4 py-4 text-sm leading-relaxed text-brand-muted">
                  {row.role}
                </td>
                <td className="px-6 py-4 text-sm text-brand-navy/85 md:px-8">
                  {row.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
