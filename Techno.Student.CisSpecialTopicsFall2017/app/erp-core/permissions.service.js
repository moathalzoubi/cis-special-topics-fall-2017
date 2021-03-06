"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const BehaviorSubject_1 = require("rxjs/BehaviorSubject");
//import { WebApiProxyService } from './../core/web-api-proxy.service'
let PermissionsService = class PermissionsService {
    constructor() {
        this.inited = false;
        this.subject = new BehaviorSubject_1.BehaviorSubject([]);
        this.subjectActiveTransaction = new BehaviorSubject_1.BehaviorSubject(null);
    }
    subscribe(fn) {
        this.subject.subscribe(fn);
    }
    reset() {
        this.subject.next([]);
    }
    refresh() {
        //this.webapi.get('erp/api/permissions/permissions').subscribe((systems: any[]) => { this.subject.next(systems); this.subjectActiveTransaction.next(this.subjectActiveTransaction.getValue()); });
    }
    setActiveTransaction(systemId, transactionId) {
        this.subjectActiveTransaction.next({ systemId: systemId, transactionId: transactionId });
    }
    activeTransaction(fn) {
        return this.subjectActiveTransaction.subscribe(fn);
    }
    getTransactionName(systemId, transactionId) {
        return 'إسم الشاشة غير معروف';
    }
};
PermissionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PermissionsService);
exports.PermissionsService = PermissionsService;
//# sourceMappingURL=permissions.service.js.map