import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface QuoteRequest {
    additionalNotes: string;
    name: string;
    referenceSheetUrl?: string;
    whatYouWantMade: string;
    email: string;
    budgetRange: string;
    fursonaName: string;
}
export interface QuoteRecord {
    id: bigint;
    additionalNotes: string;
    name: string;
    referenceSheetUrl?: string;
    whatYouWantMade: string;
    submittedAt: bigint;
    email: string;
    budgetRange: string;
    fursonaName: string;
}
export interface backendInterface {
    getQuotes(): Promise<Array<QuoteRecord>>;
    submitQuote(req: QuoteRequest): Promise<{
        __kind__: "ok";
        ok: string;
    } | {
        __kind__: "err";
        err: string;
    }>;
}
