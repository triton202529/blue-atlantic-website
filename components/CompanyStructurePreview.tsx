import Button from "@/components/Button";
import Card from "@/components/Card";
import { companyStructurePreviewColumns } from "@/lib/company-structure";

interface CompanyStructurePreviewProps {
  className?: string;
}

export default function CompanyStructurePreview({
  className = "",
}: CompanyStructurePreviewProps) {
  return (
    <div className={className}>
      <div className="grid gap-4 sm:grid-cols-3">
        {companyStructurePreviewColumns.map((column) => (
          <Card key={column.title} className="flex flex-col bg-white">
            <h3 className="text-sm font-semibold text-brand-navy">
              {column.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              {column.description}
            </p>
            <ul className="mt-4 space-y-1.5 border-t border-brand-border/60 pt-4">
              {column.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-brand-navy/85 before:mr-2 before:text-brand-atlantic before:content-['•']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <Button href="/companies" variant="primary">
          View company structure
        </Button>
      </div>
    </div>
  );
}
